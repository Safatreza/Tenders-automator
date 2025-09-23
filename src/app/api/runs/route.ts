import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { pipelineManager } from '@/lib/pipeline/manager'
import { validateRequestBody, validateSearchParams } from '@/lib/validators'
import { CreateRunSchema } from '@/types/pipeline'
import { z } from 'zod'

const ListRunsSchema = z.object({
  tenderId: z.string().uuid().optional(),
  pipelineName: z.string().optional(),
  status: z.enum(['PENDING', 'RUNNING', 'COMPLETED', 'FAILED', 'CANCELLED']).optional(),
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(20),
})

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const filters = validateSearchParams(searchParams, ListRunsSchema)

    const result = await pipelineManager.listRuns(filters)

    return NextResponse.json({
      success: true,
      data: result.runs,
      pagination: {
        page: result.page,
        limit: filters.limit,
        total: result.total,
        totalPages: result.totalPages,
        hasNext: result.page < result.totalPages,
        hasPrev: result.page > 1,
      },
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

    const data = await validateRequestBody(request, CreateRunSchema)

    const runId = await pipelineManager.runPipeline(
      data.pipelineName, // This should be pipeline ID in a real implementation
      data.tenderId,
      data.parameters
    )

    return NextResponse.json({
      success: true,
      data: { runId },
    })
  } catch (error) {
    console.error('Error creating run:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to create run' },
      { status: 400 }
    )
  }
}