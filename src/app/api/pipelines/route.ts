import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { pipelineManager } from '@/lib/pipeline/manager'
import { validateRequestBody, validateSearchParams } from '@/lib/validators'
import { PipelineConfigSchema } from '@/types/pipeline'
import { z } from 'zod'

const ListPipelinesSchema = z.object({
  active: z.coerce.boolean().optional(),
  search: z.string().optional(),
})

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const filters = validateSearchParams(searchParams, ListPipelinesSchema)

    const pipelines = await pipelineManager.listPipelines(filters)

    return NextResponse.json({
      success: true,
      data: pipelines,
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
    if (session.user.role !== 'ADMIN' && session.user.role !== 'REVIEWER') {
      return NextResponse.json({ error: 'Insufficient permissions' }, { status: 403 })
    }

    const config = await validateRequestBody(request, PipelineConfigSchema)

    const pipelineId = await pipelineManager.createPipeline(config)

    return NextResponse.json({
      success: true,
      data: { id: pipelineId },
    })
  } catch (error) {
    console.error('Error creating pipeline:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to create pipeline' },
      { status: 400 }
    )
  }
}