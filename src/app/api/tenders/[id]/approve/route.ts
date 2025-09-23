// Tender Approval API Route
// Handles tender approval/rejection with reviewer workflow

import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

const ApprovalSchema = z.object({
  status: z.enum(['APPROVED', 'REJECTED']),
  comment: z.string().optional(),
})

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Check permissions - only reviewers and admins can approve
    if (!['REVIEWER', 'ADMIN'].includes(session.user.role)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const tenderId = params.id

    // Check if tender exists and is ready for review
    const existingTender = await prisma.tender.findUnique({
      where: { id: tenderId },
      include: {
        checklistItems: true,
        summaryBlocks: true,
        documents: true,
      }
    })

    if (!existingTender) {
      return NextResponse.json({ error: 'Tender not found' }, { status: 404 })
    }

    if (existingTender.status !== 'REVIEW') {
      return NextResponse.json(
        { error: 'Tender is not ready for approval' },
        { status: 400 }
      )
    }

    const body = await request.json()
    const { status, comment } = ApprovalSchema.parse(body)

    // Validate that no checklist items are PENDING or MISSING for approval
    if (status === 'APPROVED') {
      const blockingItems = existingTender.checklistItems.filter(
        item => item.status === 'PENDING' || item.status === 'MISSING'
      )

      if (blockingItems.length > 0) {
        return NextResponse.json({
          error: 'Cannot approve tender with pending or missing checklist items',
          blockingItems: blockingItems.map(item => ({
            key: item.key,
            label: item.label,
            status: item.status
          }))
        }, { status: 400 })
      }
    }

    // Determine the new tender status
    const newTenderStatus = status === 'APPROVED' ? 'APPROVED' : 'REJECTED'

    // Create approval record and update tender in transaction
    const result = await prisma.$transaction(async (tx) => {
      // Create approval record
      const approval = await tx.approval.create({
        data: {
          tenderId,
          status,
          by: session.user.id,
          comment,
        },
        include: {
          user: {
            select: { id: true, name: true, email: true, role: true }
          }
        }
      })

      // Update tender status
      const updatedTender = await tx.tender.update({
        where: { id: tenderId },
        data: { status: newTenderStatus },
        include: {
          documents: true,
          checklistItems: true,
          summaryBlocks: true,
          runs: true,
        }
      })

      // Log approval action in audit trail
      await tx.auditLog.create({
        data: {
          actorId: session.user.id,
          action: status === 'APPROVED' ? 'APPROVE_TENDER' : 'REJECT_TENDER',
          entity: 'Tender',
          entityId: tenderId,
          diff: {
            before: {
              status: existingTender.status,
            },
            after: {
              status: newTenderStatus,
              approvalComment: comment,
              approvedBy: session.user.id,
              approvedAt: new Date().toISOString(),
            }
          }
        }
      })

      return { approval, updatedTender }
    })

    return NextResponse.json({
      success: true,
      data: {
        approval: result.approval,
        tender: result.updatedTender,
        message: `Tender ${status.toLowerCase()} successfully`
      }
    })

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation error', details: error.errors },
        { status: 400 }
      )
    }

    console.error('Error processing approval:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const tenderId = params.id

    // Get all approvals for this tender
    const approvals = await prisma.approval.findMany({
      where: { tenderId },
      include: {
        user: {
          select: { id: true, name: true, email: true, role: true }
        }
      },
      orderBy: { at: 'desc' }
    })

    return NextResponse.json({
      success: true,
      data: approvals
    })

  } catch (error) {
    console.error('Error fetching approvals:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}