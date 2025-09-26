// Error Reporting API Endpoint
// Collects and processes client-side errors for monitoring

import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

const ErrorReportSchema = z.object({
  type: z.enum(['api_error', 'component_error', 'unhandled_error']),
  error: z.object({
    name: z.string(),
    message: z.string(),
    stack: z.string().optional()
  }),
  context: z.object({
    endpoint: z.string().optional(),
    component: z.string().optional(),
    attempt: z.number().optional(),
    config: z.any().optional(),
    errorId: z.string().optional(),
    componentStack: z.string().optional()
  }).optional(),
  timestamp: z.string(),
  url: z.string().optional(),
  userAgent: z.string().optional()
})

export async function POST(request: NextRequest) {
  try {
    // Get user session if available (non-blocking)
    const session = await getServerSession(authOptions).catch(() => null)

    const body = await request.json()

    // Validate request body
    const errorReport = ErrorReportSchema.parse(body)

    // Extract client info
    const userAgent = request.headers.get('user-agent') || errorReport.userAgent
    const referer = request.headers.get('referer') || errorReport.url

    // Create error log entry
    const errorLog = await prisma.errorLog.create({
      data: {
        type: errorReport.type,
        name: errorReport.error.name,
        message: errorReport.error.message,
        stack: errorReport.error.stack,
        context: errorReport.context ? JSON.stringify(errorReport.context) : null,
        url: referer,
        userAgent,
        userId: session?.user?.id || null,
        timestamp: new Date(errorReport.timestamp)
      }
    })

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.group(`🚨 Client Error Report (${errorLog.id})`)
      console.error('Type:', errorReport.type)
      console.error('Error:', errorReport.error)
      console.error('Context:', errorReport.context)
      console.error('User:', session?.user?.email || 'Anonymous')
      console.groupEnd()
    }

    // In production, you might want to:
    // 1. Send to external error monitoring service (Sentry, etc.)
    // 2. Send alerts for critical errors
    // 3. Aggregate and analyze error patterns

    if (process.env.NODE_ENV === 'production') {
      // Example: Send to Sentry
      /*
      Sentry.captureException(new Error(errorReport.error.message), {
        tags: {
          type: errorReport.type,
          component: errorReport.context?.component
        },
        extra: {
          context: errorReport.context,
          errorId: errorLog.id
        },
        user: session?.user ? {
          id: session.user.id,
          email: session.user.email
        } : undefined
      })
      */

      // Example: Send Slack notification for critical errors
      if (shouldNotifyForError(errorReport)) {
        await sendErrorNotification(errorReport, errorLog.id)
      }
    }

    return NextResponse.json({
      success: true,
      data: {
        errorId: errorLog.id,
        logged: true
      }
    })

  } catch (error) {
    console.error('Error processing error report:', error)

    // Don't let error reporting fail the request
    return NextResponse.json({
      success: false,
      error: 'Failed to log error'
    }, { status: 500 })
  }
}

// Helper function to determine if error should trigger notification
function shouldNotifyForError(errorReport: z.infer<typeof ErrorReportSchema>): boolean {
  const criticalErrors = [
    'ChunkLoadError', // Code splitting failures
    'TypeError', // Potential breaking changes
    'ReferenceError', // Missing dependencies
    'SecurityError' // Security-related issues
  ]

  const criticalComponents = [
    'ErrorBoundary',
    'AuthProvider',
    'APIClient'
  ]

  return (
    criticalErrors.includes(errorReport.error.name) ||
    (errorReport.context?.component && criticalComponents.includes(errorReport.context.component)) ||
    errorReport.type === 'api_error' && errorReport.context?.endpoint === '/api/auth'
  )
}

// Helper function to send error notifications
async function sendErrorNotification(
  errorReport: z.infer<typeof ErrorReportSchema>,
  errorId: string
): Promise<void> {
  try {
    // Example Slack webhook notification
    const slackWebhookUrl = process.env.SLACK_ERROR_WEBHOOK_URL

    if (slackWebhookUrl) {
      await fetch(slackWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: `🚨 Critical Error Detected`,
          blocks: [
            {
              type: 'header',
              text: {
                type: 'plain_text',
                text: '🚨 Critical Error Report'
              }
            },
            {
              type: 'section',
              fields: [
                {
                  type: 'mrkdwn',
                  text: `*Error ID:* ${errorId}`
                },
                {
                  type: 'mrkdwn',
                  text: `*Type:* ${errorReport.type}`
                },
                {
                  type: 'mrkdwn',
                  text: `*Name:* ${errorReport.error.name}`
                },
                {
                  type: 'mrkdwn',
                  text: `*URL:* ${errorReport.url || 'Unknown'}`
                }
              ]
            },
            {
              type: 'section',
              text: {
                type: 'mrkdwn',
                text: `*Message:*\n\`\`\`${errorReport.error.message}\`\`\``
              }
            }
          ]
        })
      })
    }

    // Example email notification
    const adminEmail = process.env.ADMIN_EMAIL

    if (adminEmail) {
      // Would integrate with email service (SendGrid, etc.)
      console.log(`Would send email to ${adminEmail} for error ${errorId}`)
    }

  } catch (notificationError) {
    console.error('Failed to send error notification:', notificationError)
    // Don't throw - notification failure shouldn't break error logging
  }
}

// GET endpoint for error log viewing (admin only)
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user || session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = Math.min(parseInt(searchParams.get('limit') || '50'), 100)
    const type = searchParams.get('type')

    const where = type ? { type } : {}

    const [errors, total] = await Promise.all([
      prisma.errorLog.findMany({
        where,
        include: {
          user: {
            select: {
              id: true,
              email: true,
              name: true
            }
          }
        },
        orderBy: { timestamp: 'desc' },
        skip: (page - 1) * limit,
        take: limit
      }),
      prisma.errorLog.count({ where })
    ])

    return NextResponse.json({
      success: true,
      data: {
        errors,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit)
        }
      }
    })

  } catch (error) {
    console.error('Error fetching error logs:', error)
    return NextResponse.json(
      { error: 'Failed to fetch error logs' },
      { status: 500 }
    )
  }
}