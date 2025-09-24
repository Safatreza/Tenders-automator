// Individual Tender API Route - Get, Update, Delete
// Includes full tender details with summary, checklist, documents, and runs

import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

const UpdateTenderSchema = z.object({
  title: z.string().min(1).max(255).optional(),
  agency: z.string().optional(),
  publishedAt: z.string().optional(),
  dueAt: z.string().optional(),
  status: z.enum(['DRAFT', 'PROCESSING', 'REVIEW', 'APPROVED', 'REJECTED']).optional(),
})

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const tenderId = (await params).id

    // Get tender with all related data
    const tender = await prisma.tender.findUnique({
      where: { id: tenderId },
      include: {
        source: {
          select: { id: true, name: true }
        },
        documents: {
          select: {
            id: true,
            filename: true,
            mime: true,
            pages: true,
            version: true,
            url: true,
            createdAt: true,
            updatedAt: true
          },
          orderBy: { createdAt: 'desc' }
        },
        fieldExtractions: {
          include: {
            traceLinks: {
              select: {
                id: true,
                page: true,
                snippet: true,
                documentId: true
              }
            }
          }
        },
        checklistItems: {
          include: {
            traceLinks: {
              select: {
                id: true,
                page: true,
                snippet: true,
                documentId: true
              }
            }
          },
          orderBy: { createdAt: 'asc' }
        },
        summaryBlocks: {
          include: {
            traceLinks: {
              select: {
                id: true,
                page: true,
                snippet: true,
                documentId: true
              }
            }
          },
          orderBy: { createdAt: 'asc' }
        },
        runs: {
          select: {
            id: true,
            pipelineName: true,
            status: true,
            startedAt: true,
            finishedAt: true,
            logs: true,
            error: true
          },
          orderBy: { startedAt: 'desc' }
        },
        approvals: {
          include: {
            user: {
              select: { id: true, name: true, email: true, role: true }
            }
          },
          orderBy: { at: 'desc' }
        }
      }
    })

    if (!tender) {
      return NextResponse.json({ error: 'Tender not found' }, { status: 404 })
    }

    // Transform data for frontend consumption
    const transformedTender = {
      id: tender.id,
      title: tender.title,
      agency: tender.agency,
      status: tender.status,
      publishedAt: tender.publishedAt,
      dueAt: tender.dueAt,
      createdAt: tender.createdAt,
      updatedAt: tender.updatedAt,
      source: tender.source,

      // Field extractions organized by key
      fieldExtractions: tender.fieldExtractions.reduce((acc, extraction) => {
        acc[extraction.key] = {
          value: extraction.value,
          confidence: extraction.confidence,
          traceLinks: extraction.traceLinks,
          createdAt: extraction.createdAt,
          updatedAt: extraction.updatedAt
        }
        return acc
      }, {} as Record<string, any>),

      // Summary blocks
      summary: tender.summaryBlocks.map(block => ({
        blockKey: block.blockKey,
        contentMarkdown: block.contentMarkdown,
        traceLinks: block.traceLinks,
        createdAt: block.createdAt,
        updatedAt: block.updatedAt
      })),

      // Checklist items
      checklist: tender.checklistItems.map(item => ({
        key: item.key,
        label: item.label,
        status: item.status,
        notes: item.notes,
        traceLinks: item.traceLinks,
        createdAt: item.createdAt,
        updatedAt: item.updatedAt
      })),

      // Documents
      documents: tender.documents,

      // Pipeline runs
      runs: tender.runs,

      // Approvals
      approvals: tender.approvals,

      // Computed fields
      checklistProgress: tender.checklistItems.length > 0
        ? Math.round((tender.checklistItems.filter(item => item.status === 'OK').length / tender.checklistItems.length) * 100)
        : 0,

      documentsCount: tender.documents.length,
      runsCount: tender.runs.length,
      lastRun: tender.runs[0] || null,
    }

    return NextResponse.json({
      success: true,
      data: transformedTender
    })

  } catch (error) {
    console.error('Error fetching tender:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const tenderId = (await params).id

    // Check if tender exists
    const existingTender = await prisma.tender.findUnique({
      where: { id: tenderId }
    })

    if (!existingTender) {
      return NextResponse.json({ error: 'Tender not found' }, { status: 404 })
    }

    // Check permissions
    const canEdit = ['ADMIN'].includes(session.user.role) ||
      (existingTender.status === 'DRAFT' && ['ANALYST', 'REVIEWER'].includes(session.user.role))

    if (!canEdit) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const body = await request.json()
    const validatedData = UpdateTenderSchema.parse(body)

    // Convert date strings to Date objects
    const updateData: any = { ...validatedData }
    if (updateData.publishedAt) {
      updateData.publishedAt = new Date(updateData.publishedAt)
    }
    if (updateData.dueAt) {
      updateData.dueAt = new Date(updateData.dueAt)
    }

    // Update tender
    const updatedTender = await prisma.tender.update({
      where: { id: tenderId },
      data: updateData,
      include: {
        documents: true,
        runs: true,
        checklistItems: true,
        summaryBlocks: true,
      }
    })

    // Log update in audit trail
    await prisma.auditLog.create({
      data: {
        actorId: session.user.id,
        action: 'UPDATE_TENDER',
        entity: 'Tender',
        entityId: tenderId,
        diff: {
          before: {
            title: existingTender.title,
            agency: existingTender.agency,
            status: existingTender.status,
            publishedAt: existingTender.publishedAt,
            dueAt: existingTender.dueAt,
          },
          after: {
            title: updatedTender.title,
            agency: updatedTender.agency,
            status: updatedTender.status,
            publishedAt: updatedTender.publishedAt,
            dueAt: updatedTender.dueAt,
          }
        }
      }
    })

    return NextResponse.json({
      success: true,
      data: updatedTender
    })

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation error', details: error.errors },
        { status: 400 }
      )
    }

    console.error('Error updating tender:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Only admins can delete tenders
    if (session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const tenderId = (await params).id

    // Check if tender exists
    const existingTender = await prisma.tender.findUnique({
      where: { id: tenderId },
      include: {
        documents: true
      }
    })

    if (!existingTender) {
      return NextResponse.json({ error: 'Tender not found' }, { status: 404 })
    }

    // Delete related data (cascade should handle most of this, but we'll be explicit)
    await prisma.$transaction(async (tx) => {
      // Delete all related records first
      await tx.traceLink.deleteMany({
        where: {
          document: {
            tenderId: tenderId
          }
        }
      })

      await tx.fieldExtraction.deleteMany({
        where: { tenderId }
      })

      await tx.checklistItem.deleteMany({
        where: { tenderId }
      })

      await tx.summaryBlock.deleteMany({
        where: { tenderId }
      })

      await tx.run.deleteMany({
        where: { tenderId }
      })

      await tx.approval.deleteMany({
        where: { tenderId }
      })

      await tx.document.deleteMany({
        where: { tenderId }
      })

      // Finally delete the tender
      await tx.tender.delete({
        where: { id: tenderId }
      })
    })

    // Log deletion in audit trail
    await prisma.auditLog.create({
      data: {
        actorId: session.user.id,
        action: 'DELETE_TENDER',
        entity: 'Tender',
        entityId: tenderId,
        diff: {
          before: {
            title: existingTender.title,
            agency: existingTender.agency,
            status: existingTender.status,
          },
          after: null
        }
      }
    })

    return NextResponse.json({
      success: true,
      message: 'Tender deleted successfully'
    })

  } catch (error) {
    console.error('Error deleting tender:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}