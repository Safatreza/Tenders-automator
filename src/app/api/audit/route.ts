// Audit Log Viewing API
// Provides access to system audit trails

import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { AuditLogQuerySchema } from '@/lib/validators/schemas'

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Only reviewers and admins can view audit logs
    if (!['REVIEWER', 'ADMIN'].includes(session.user.role)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const { searchParams } = new URL(request.url)
    const query = {
      entity: searchParams.get('entity') || undefined,
      entityId: searchParams.get('entityId') || undefined,
      actorId: searchParams.get('actorId') || undefined,
      action: searchParams.get('action') || undefined,
      page: parseInt(searchParams.get('page') || '1'),
      limit: Math.min(parseInt(searchParams.get('limit') || '50'), 100) // Cap at 100
    }

    const where: {
      entity?: string
      entityId?: string
      actorId?: string
      action?: { contains: string; mode: 'insensitive' }
    } = {}
    if (query.entity) where.entity = query.entity
    if (query.entityId) where.entityId = query.entityId
    if (query.actorId) where.actorId = query.actorId
    if (query.action) where.action = { contains: query.action, mode: 'insensitive' }

    const [logs, total] = await Promise.all([
      prisma.auditLog.findMany({
        where,
        include: {
          actor: {
            select: {
              id: true,
              email: true,
              name: true,
              role: true
            }
          }
        },
        orderBy: { at: 'desc' },
        skip: (query.page - 1) * query.limit,
        take: query.limit
      }),
      prisma.auditLog.count({ where })
    ])

    // Transform logs for better readability
    const transformedLogs = logs.map(log => ({
      id: log.id,
      action: log.action,
      entity: log.entity,
      entityId: log.entityId,
      timestamp: log.at,
      actor: {
        id: log.actor.id,
        name: log.actor.name || log.actor.email,
        email: log.actor.email,
        role: log.actor.role
      },
      changes: log.diff || {},
      summary: generateLogSummary(log)
    }))

    return NextResponse.json({
      success: true,
      data: {
        logs: transformedLogs,
        pagination: {
          page: query.page,
          limit: query.limit,
          total,
          pages: Math.ceil(total / query.limit)
        },
        filters: {
          entity: query.entity,
          entityId: query.entityId,
          actorId: query.actorId,
          action: query.action
        }
      }
    })

  } catch (error) {
    console.error('Error fetching audit logs:', error)
    return NextResponse.json(
      { error: 'Failed to fetch audit logs' },
      { status: 500 }
    )
  }
}

// Helper function to generate human-readable log summaries
function generateLogSummary(log: {
  action: string
  entity: string
  actor: { name: string | null; email: string }
}): string {
  const actorName = log.actor.name || log.actor.email
  const entity = log.entity.toLowerCase()

  switch (log.action) {
    case 'CREATE_TENDER':
      return `${actorName} created a new tender`
    case 'UPDATE_TENDER':
      return `${actorName} updated tender details`
    case 'START_PIPELINE':
      return `${actorName} started pipeline execution`
    case 'APPROVE_TENDER':
      return `${actorName} approved the tender`
    case 'REJECT_TENDER':
      return `${actorName} rejected the tender`
    case 'UPLOAD_DOCUMENT':
      return `${actorName} uploaded a document`
    case 'CREATE_USER':
      return `${actorName} created a new user account`
    case 'UPDATE_USER':
      return `${actorName} updated user permissions`
    case 'CREATE_SOURCE':
      return `${actorName} added a new tender source`
    case 'CREATE_TEMPLATE':
      return `${actorName} created a new template`
    case 'PIPELINE_COMPLETED':
      return `Pipeline execution completed for tender`
    default:
      return `${actorName} performed ${log.action.toLowerCase().replace('_', ' ')} on ${entity}`
  }
}