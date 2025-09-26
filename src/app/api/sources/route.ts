// Sources Management API
// CRUD operations for tender sources

import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { CreateSourceSchema, UpdateSourceSchema } from '@/lib/validators/schemas'
import { z } from 'zod'

export async function GET(request: NextRequest) {
  try {
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
      where.OR = [
        { name: { contains: query.search, mode: 'insensitive' } },
        { description: { contains: query.search, mode: 'insensitive' } }
      ]
    }

    const [sources, total] = await Promise.all([
      prisma.source.findMany({
        where,
        include: {
          _count: {
            select: { tenders: true }
          }
        },
        orderBy: { createdAt: 'desc' },
        skip: (query.page - 1) * query.limit,
        take: query.limit
      }),
      prisma.source.count({ where })
    ])

    return NextResponse.json({
      success: true,
      data: {
        sources,
        pagination: {
          page: query.page,
          limit: query.limit,
          total,
          pages: Math.ceil(total / query.limit)
        }
      }
    })
  } catch (error) {
    console.error('Error fetching sources:', error)
    return NextResponse.json(
      { error: 'Failed to fetch sources' },
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

    // Only admins can create sources
    if (session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const body = await request.json()
    const data = CreateSourceSchema.parse(body)

    // Check for duplicate name
    const existing = await prisma.source.findFirst({
      where: { name: data.name }
    })

    if (existing) {
      return NextResponse.json(
        { error: 'Source with this name already exists' },
        { status: 409 }
      )
    }

    const source = await prisma.source.create({ data })

    // Audit log
    await prisma.auditLog.create({
      data: {
        actorId: session.user.id,
        action: 'CREATE_SOURCE',
        entity: 'Source',
        entityId: source.id,
        diff: { new: data }
      }
    })

    return NextResponse.json({
      success: true,
      data: source
    }, { status: 201 })

  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      )
    }

    console.error('Create source error:', error)
    return NextResponse.json(
      { error: 'Failed to create source' },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user || session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const body = await request.json()
    const { id, ...updateData } = body

    if (!id) {
      return NextResponse.json({ error: 'Source ID is required' }, { status: 400 })
    }

    const data = UpdateSourceSchema.parse(updateData)

    // Get existing source for audit
    const existing = await prisma.source.findUnique({ where: { id } })
    if (!existing) {
      return NextResponse.json({ error: 'Source not found' }, { status: 404 })
    }

    const source = await prisma.source.update({
      where: { id },
      data
    })

    // Audit log
    await prisma.auditLog.create({
      data: {
        actorId: session.user.id,
        action: 'UPDATE_SOURCE',
        entity: 'Source',
        entityId: id,
        diff: { old: existing, new: data }
      }
    })

    return NextResponse.json({
      success: true,
      data: source
    })

  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      )
    }

    console.error('Update source error:', error)
    return NextResponse.json(
      { error: 'Failed to update source' },
      { status: 500 }
    )
  }
}