// Pipeline Execution Trigger API
// Starts pipeline execution for a tender

import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import pipelineEngine from '@/lib/pipeline'
import { CreateRunSchema } from '@/lib/validators/schemas'
import { z } from 'zod'

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Check permissions - analysts and above can start pipeline runs
    if (!['ANALYST', 'REVIEWER', 'ADMIN'].includes(session.user.role)) {
      return NextResponse.json({ error: 'Insufficient permissions' }, { status: 403 })
    }

    const body = await request.json()
    const { tenderId, pipelineName } = CreateRunSchema.parse(body)

    // Verify tender exists and has documents
    const tender = await prisma.tender.findUnique({
      where: { id: tenderId },
      include: {
        documents: true,
        runs: {
          where: { status: { in: ['PENDING', 'RUNNING'] } },
          take: 1
        }
      }
    })

    if (!tender) {
      return NextResponse.json({ error: 'Tender not found' }, { status: 404 })
    }

    if (tender.documents.length === 0) {
      return NextResponse.json({
        error: 'Tender has no documents to process'
      }, { status: 400 })
    }

    // Check if there's already a running pipeline
    if (tender.runs.length > 0) {
      return NextResponse.json({
        error: 'Pipeline already running for this tender',
        data: { runId: tender.runs[0].id }
      }, { status: 409 })
    }

    // Verify pipeline exists
    const pipeline = await prisma.pipeline.findFirst({
      where: { name: pipelineName, active: true }
    })

    if (!pipeline) {
      return NextResponse.json({
        error: `Pipeline '${pipelineName}' not found or inactive`
      }, { status: 404 })
    }

    // Start pipeline execution
    const result = await pipelineEngine.executePipeline(
      tenderId,
      pipelineName,
      session.user.id
    )

    // Update tender status
    await prisma.tender.update({
      where: { id: tenderId },
      data: { status: 'PROCESSING' }
    })

    // Create audit log
    await prisma.auditLog.create({
      data: {
        actorId: session.user.id,
        action: 'START_PIPELINE',
        entity: 'Run',
        entityId: result.runId,
        diff: {
          tenderId,
          pipelineName,
          startedAt: new Date().toISOString()
        }
      }
    })

    return NextResponse.json({
      success: true,
      data: {
        runId: result.runId,
        pipelineName,
        tenderId,
        status: 'RUNNING'
      }
    }, { status: 201 })

  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      )
    }

    console.error('Pipeline start error:', error)
    return NextResponse.json(
      {
        error: 'Failed to start pipeline',
        details: error.message
      },
      { status: 500 }
    )
  }
}