import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { CreateRunSchema, RunQuerySchema } from '@/lib/validators/schemas'
import { z } from 'zod'

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const query = {
      tenderId: searchParams.get('tenderId') || undefined,
      pipelineName: searchParams.get('pipelineName') || undefined,
      status: searchParams.get('status') as any || undefined,
      page: parseInt(searchParams.get('page') || '1'),
      limit: parseInt(searchParams.get('limit') || '10')
    }

    const where: any = {}
    if (query.tenderId) where.tenderId = query.tenderId
    if (query.pipelineName) where.pipelineName = query.pipelineName
    if (query.status) where.status = query.status

    const [runs, total] = await Promise.all([
      prisma.run.findMany({
        where,
        include: {
          tender: {
            select: { id: true, title: true }
          }
        },
        orderBy: { startedAt: 'desc' },
        skip: (query.page - 1) * query.limit,
        take: query.limit
      }),
      prisma.run.count({ where })
    ])

    return NextResponse.json({
      success: true,
      data: {
        runs,
        pagination: {
          page: query.page,
          limit: query.limit,
          total,
          pages: Math.ceil(total / query.limit)
        }
      }
    })
  } catch (error) {
    console.error('Error listing runs:', error)
    return NextResponse.json(
      { error: 'Failed to list runs' },
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

    // Check if user has permission to trigger runs
    if (!['ANALYST', 'REVIEWER', 'ADMIN'].includes(session.user.role)) {
      return NextResponse.json({ error: 'Insufficient permissions' }, { status: 403 })
    }

    const body = await request.json()
    const data = CreateRunSchema.parse(body)

    // Verify tender exists
    const tender = await prisma.tender.findUnique({
      where: { id: data.tenderId },
      include: { documents: true }
    })

    if (!tender) {
      return NextResponse.json({ error: 'Tender not found' }, { status: 404 })
    }

    // Create run record
    const run = await prisma.run.create({
      data: {
        tenderId: data.tenderId,
        pipelineName: data.pipelineName,
        status: 'PENDING',
        logs: []
      }
    })

    // TODO: Trigger actual pipeline execution here
    // This would integrate with the pipeline engine

    return NextResponse.json({
      success: true,
      data: { runId: run.id }
    }, { status: 201 })
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      )
    }

    console.error('Error creating run:', error)
    return NextResponse.json(
      { error: 'Failed to create run' },
      { status: 500 }
    )
  }
}