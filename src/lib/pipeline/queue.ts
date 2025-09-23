import { Queue, Worker, Job } from 'bullmq'
import Redis from 'ioredis'

// Redis connection
const redis = new Redis(process.env.REDIS_URL || 'redis://localhost:6379', {
  maxRetriesPerRequest: 3,
  retryDelayOnFailover: 100,
})

// Job data interface
export interface PipelineJobData {
  runId: string
  tenderId: string
  pipelineName: string
  config: any
  parameters?: Record<string, any>
}

// Create the pipeline queue
export const pipelineQueue = new Queue<PipelineJobData>('pipeline-processing', {
  connection: redis,
  defaultJobOptions: {
    removeOnComplete: 100, // Keep last 100 completed jobs
    removeOnFail: 50, // Keep last 50 failed jobs
    attempts: 3,
    backoff: {
      type: 'exponential',
      delay: 2000,
    },
  },
})

// Create the pipeline worker
export const createPipelineWorker = () => {
  return new Worker<PipelineJobData>(
    'pipeline-processing',
    async (job: Job<PipelineJobData>) => {
      const { runId, tenderId, pipelineName, config, parameters } = job.data

      try {
        console.log(`Starting pipeline ${pipelineName} for tender ${tenderId}`)

        // Update run status to RUNNING
        await updateRunStatus(runId, 'RUNNING')

        // Execute pipeline steps
        const result = await executePipelineSteps(runId, tenderId, config, parameters)

        // Update run status to COMPLETED
        await updateRunStatus(runId, 'COMPLETED', result)

        console.log(`Pipeline ${pipelineName} completed for tender ${tenderId}`)

        return result
      } catch (error) {
        console.error(`Pipeline ${pipelineName} failed for tender ${tenderId}:`, error)

        // Update run status to FAILED
        await updateRunStatus(runId, 'FAILED', { error: error.message })

        throw error
      }
    },
    {
      connection: redis,
      concurrency: 5, // Process up to 5 jobs concurrently
    }
  )
}

// Execute pipeline steps
async function executePipelineSteps(
  runId: string,
  tenderId: string,
  config: any,
  parameters?: Record<string, any>
): Promise<any> {
  const { pipelineExecutor } = await import('./executor')
  return await pipelineExecutor.execute(runId, tenderId, config, parameters)
}

// Update run status
async function updateRunStatus(
  runId: string,
  status: 'RUNNING' | 'COMPLETED' | 'FAILED',
  result?: any
): Promise<void> {
  const { prisma } = await import('@/lib/prisma')

  const updateData: any = {
    status,
    ...(status === 'COMPLETED' && { finishedAt: new Date() }),
    ...(status === 'FAILED' && { finishedAt: new Date() }),
  }

  if (result) {
    if (status === 'FAILED') {
      updateData.logs = {
        push: {
          timestamp: new Date(),
          level: 'error',
          message: 'Pipeline execution failed',
          data: result,
        },
      }
    } else {
      updateData.logs = {
        push: {
          timestamp: new Date(),
          level: 'info',
          message: 'Pipeline execution completed',
          data: result,
        },
      }
    }
  }

  await prisma.run.update({
    where: { id: runId },
    data: updateData,
  })
}

// Queue management functions
export const queueManager = {
  async addPipelineJob(
    runId: string,
    tenderId: string,
    pipelineName: string,
    config: any,
    parameters?: Record<string, any>,
    options?: {
      priority?: number
      delay?: number
    }
  ): Promise<Job<PipelineJobData>> {
    return await pipelineQueue.add(
      `pipeline-${pipelineName}`,
      {
        runId,
        tenderId,
        pipelineName,
        config,
        parameters,
      },
      {
        priority: options?.priority || 0,
        delay: options?.delay || 0,
      }
    )
  },

  async getJobStatus(jobId: string): Promise<any> {
    const job = await Job.fromId(pipelineQueue, jobId)
    if (!job) return null

    return {
      id: job.id,
      name: job.name,
      data: job.data,
      progress: job.progress,
      returnValue: job.returnvalue,
      failedReason: job.failedReason,
      processedOn: job.processedOn,
      finishedOn: job.finishedOn,
      timestamp: job.timestamp,
    }
  },

  async cancelJob(jobId: string): Promise<void> {
    const job = await Job.fromId(pipelineQueue, jobId)
    if (job) {
      await job.remove()
    }
  },

  async getQueueStats(): Promise<{
    waiting: number
    active: number
    completed: number
    failed: number
    delayed: number
  }> {
    const waiting = await pipelineQueue.getWaiting()
    const active = await pipelineQueue.getActive()
    const completed = await pipelineQueue.getCompleted()
    const failed = await pipelineQueue.getFailed()
    const delayed = await pipelineQueue.getDelayed()

    return {
      waiting: waiting.length,
      active: active.length,
      completed: completed.length,
      failed: failed.length,
      delayed: delayed.length,
    }
  },

  async retryFailedJobs(): Promise<void> {
    const failedJobs = await pipelineQueue.getFailed()
    for (const job of failedJobs) {
      await job.retry()
    }
  },

  async cleanQueue(): Promise<void> {
    await pipelineQueue.clean(24 * 60 * 60 * 1000, 100, 'completed') // Clean completed jobs older than 24h
    await pipelineQueue.clean(7 * 24 * 60 * 60 * 1000, 50, 'failed') // Clean failed jobs older than 7 days
  },
}

// Initialize worker on module load
if (process.env.NODE_ENV !== 'test') {
  const worker = createPipelineWorker()

  // Graceful shutdown
  process.on('SIGINT', async () => {
    console.log('Shutting down pipeline worker...')
    await worker.close()
    await redis.disconnect()
    process.exit(0)
  })
}