import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { CreatePipelineSchema, PipelineQuerySchema } from '@/lib/validators/schemas'
import { z } from 'zod'

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const query = {
      active: searchParams.get('active') === 'true' ? true : searchParams.get('active') === 'false' ? false : undefined,
      search: searchParams.get('search') || undefined,
      page: parseInt(searchParams.get('page') || '1'),
      limit: parseInt(searchParams.get('limit') || '10')
    }

    const where: any = {}
    if (query.active !== undefined) where.active = query.active
    if (query.search) {
      where.name = { contains: query.search, mode: 'insensitive' }
    }

    const [pipelines, total] = await Promise.all([
      prisma.pipeline.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip: (query.page - 1) * query.limit,
        take: query.limit
      }),
      prisma.pipeline.count({ where })
    ])

    return NextResponse.json({
      success: true,
      data: {
        pipelines,
        pagination: {
          page: query.page,
          limit: query.limit,
          total,
          pages: Math.ceil(total / query.limit)
        }
      }
    })
  } catch (error) {
    console.error('Error listing pipelines:', error)
    return NextResponse.json(
      { error: 'Failed to list pipelines' },
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

    // Check if user has permission to create pipelines
    if (!['ADMIN', 'REVIEWER'].includes(session.user.role)) {
      return NextResponse.json({ error: 'Insufficient permissions' }, { status: 403 })
    }

    const body = await request.json()
    const data = CreatePipelineSchema.parse(body)

    const pipeline = await prisma.pipeline.create({ data })

    // Audit log
    await prisma.auditLog.create({
      data: {
        actorId: session.user.id,
        action: 'CREATE_PIPELINE',
        entity: 'Pipeline',
        entityId: pipeline.id,
        diff: { new: data }
      }
    })

    return NextResponse.json({
      success: true,
      data: pipeline
    }, { status: 201 })
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      )
    }

    console.error('Error creating pipeline:', error)
    return NextResponse.json(
      { error: 'Failed to create pipeline' },
      { status: 500 }
    )
  }
}