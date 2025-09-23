// Tenders API Route - List and Create Tenders
// Supports filtering, sorting, and pagination

import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

const CreateTenderSchema = z.object({
  title: z.string().min(1).max(255),
  agency: z.string().optional(),
  publishedAt: z.string().optional(),
  dueAt: z.string().optional(),
  sourceId: z.string().optional(),
})

const QuerySchema = z.object({
  page: z.string().optional().default('1'),
  limit: z.string().optional().default('10'),
  status: z.enum(['DRAFT', 'PROCESSING', 'REVIEW', 'APPROVED', 'REJECTED']).optional(),
  search: z.string().optional(),
  sortBy: z.enum(['createdAt', 'updatedAt', 'title', 'dueAt']).optional().default('createdAt'),
  sortOrder: z.enum(['asc', 'desc']).optional().default('desc'),
})

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const query = QuerySchema.parse({
      page: searchParams.get('page') || '1',
      limit: searchParams.get('limit') || '10',
      status: searchParams.get('status') || undefined,
      search: searchParams.get('search') || undefined,
      sortBy: searchParams.get('sortBy') || 'createdAt',
      sortOrder: searchParams.get('sortOrder') || 'desc',
    })

    const page = parseInt(query.page)
    const limit = parseInt(query.limit)
    const offset = (page - 1) * limit

    // Build where clause
    const where: any = {}

    if (query.status) {
      where.status = query.status
    }

    if (query.search) {
      where.OR = [
        { title: { contains: query.search, mode: 'insensitive' } },
        { agency: { contains: query.search, mode: 'insensitive' } },
      ]
    }

    // Get tenders with related data
    const tenders = await prisma.tender.findMany({
      where,
      orderBy: { [query.sortBy]: query.sortOrder },
      skip: offset,
      take: limit,
      include: {
        documents: {
          select: { id: true, filename: true, createdAt: true }
        },
        runs: {
          select: { id: true, status: true, startedAt: true, finishedAt: true },
          orderBy: { startedAt: 'desc' },
          take: 1
        },
        checklistItems: {
          select: { status: true }
        },
        summaryBlocks: {
          select: { id: true }
        },
        _count: {
          select: {
            documents: true,
            runs: true,
            checklistItems: true,
            summaryBlocks: true
          }
        }
      }
    })

    // Get total count for pagination
    const totalCount = await prisma.tender.count({ where })

    // Transform data
    const transformedTenders = tenders.map(tender => ({
      id: tender.id,
      title: tender.title,
      agency: tender.agency,
      status: tender.status,
      publishedAt: tender.publishedAt,
      dueAt: tender.dueAt,
      createdAt: tender.createdAt,
      updatedAt: tender.updatedAt,
      documentsCount: tender._count.documents,
      runsCount: tender._count.runs,
      checklistProgress: tender.checklistItems.length > 0
        ? Math.round((tender.checklistItems.filter(item => item.status === 'OK').length / tender.checklistItems.length) * 100)
        : 0,
      summaryBlocksCount: tender._count.summaryBlocks,
      lastRun: tender.runs[0] || null,
    }))

    return NextResponse.json({
      success: true,
      data: {
        tenders: transformedTenders,
        pagination: {
          page,
          limit,
          totalCount,
          totalPages: Math.ceil(totalCount / limit),
          hasNext: page * limit < totalCount,
          hasPrev: page > 1
        }
      }
    })

  } catch (error) {
    console.error('Error fetching tenders:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Check permissions - analysts and above can create tenders
    if (!['ANALYST', 'REVIEWER', 'ADMIN'].includes(session.user.role)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const body = await request.json()
    const validatedData = CreateTenderSchema.parse(body)

    // Create tender
    const tender = await prisma.tender.create({
      data: {
        title: validatedData.title,
        agency: validatedData.agency,
        publishedAt: validatedData.publishedAt ? new Date(validatedData.publishedAt) : null,
        dueAt: validatedData.dueAt ? new Date(validatedData.dueAt) : null,
        sourceId: validatedData.sourceId,
        status: 'DRAFT',
      },
      include: {
        documents: true,
        runs: true,
        checklistItems: true,
        summaryBlocks: true,
      }
    })

    // Log tender creation in audit trail
    await prisma.auditLog.create({
      data: {
        actorId: session.user.id,
        action: 'CREATE_TENDER',
        entity: 'Tender',
        entityId: tender.id,
        diff: {
          before: null,
          after: {
            title: tender.title,
            agency: tender.agency,
            status: tender.status,
          }
        }
      }
    })

    return NextResponse.json({
      success: true,
      data: tender
    }, { status: 201 })

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation error', details: error.errors },
        { status: 400 }
      )
    }

    console.error('Error creating tender:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}