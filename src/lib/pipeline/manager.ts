import { prisma } from '@/lib/prisma'
import { queueManager } from './queue'
import { PipelineConfig } from '@/types/pipeline'
import yaml from 'js-yaml'

export class PipelineManager {
  async createPipeline(config: PipelineConfig): Promise<string> {
    try {
      // Validate pipeline configuration
      await this.validatePipelineConfig(config)

      const pipeline = await prisma.pipeline.create({
        data: {
          name: config.name,
          config: config,
          active: true,
        },
      })

      return pipeline.id
    } catch (error) {
      console.error('Error creating pipeline:', error)
      throw new Error('Failed to create pipeline')
    }
  }

  async updatePipeline(id: string, config: Partial<PipelineConfig>): Promise<void> {
    try {
      if (config.name || config.steps) {
        await this.validatePipelineConfig(config as PipelineConfig)
      }

      await prisma.pipeline.update({
        where: { id },
        data: {
          ...(config.name && { name: config.name }),
          config: config,
        },
      })
    } catch (error) {
      console.error('Error updating pipeline:', error)
      throw new Error('Failed to update pipeline')
    }
  }

  async deletePipeline(id: string): Promise<void> {
    try {
      // Check if pipeline has active runs
      const activeRuns = await prisma.run.count({
        where: {
          pipelineName: {
            in: await prisma.pipeline
              .findUnique({ where: { id } })
              .then(p => p ? [p.name] : []),
          },
          status: { in: ['PENDING', 'RUNNING'] },
        },
      })

      if (activeRuns > 0) {
        throw new Error('Cannot delete pipeline with active runs')
      }

      await prisma.pipeline.delete({ where: { id } })
    } catch (error) {
      console.error('Error deleting pipeline:', error)
      throw new Error('Failed to delete pipeline')
    }
  }

  async getPipeline(id: string): Promise<any> {
    try {
      const pipeline = await prisma.pipeline.findUnique({
        where: { id },
      })

      if (!pipeline) {
        throw new Error('Pipeline not found')
      }

      return {
        id: pipeline.id,
        name: pipeline.name,
        config: pipeline.config,
        active: pipeline.active,
        createdAt: pipeline.createdAt,
        updatedAt: pipeline.updatedAt,
      }
    } catch (error) {
      console.error('Error getting pipeline:', error)
      throw new Error('Failed to get pipeline')
    }
  }

  async listPipelines(filters?: {
    active?: boolean
    search?: string
  }): Promise<Array<{
    id: string
    name: string
    active: boolean
    stepsCount: number
    lastRun?: Date
  }>> {
    try {
      const where: any = {}

      if (filters?.active !== undefined) {
        where.active = filters.active
      }

      if (filters?.search) {
        where.name = {
          contains: filters.search,
          mode: 'insensitive',
        }
      }

      const pipelines = await prisma.pipeline.findMany({
        where,
        select: {
          id: true,
          name: true,
          active: true,
          config: true,
          createdAt: true,
          updatedAt: true,
        },
        orderBy: { createdAt: 'desc' },
      })

      return pipelines.map(pipeline => ({
        id: pipeline.id,
        name: pipeline.name,
        active: pipeline.active,
        stepsCount: Array.isArray((pipeline.config as any)?.steps)
          ? (pipeline.config as any).steps.length
          : 0,
        lastRun: pipeline.updatedAt,
      }))
    } catch (error) {
      console.error('Error listing pipelines:', error)
      throw new Error('Failed to list pipelines')
    }
  }

  async runPipeline(
    pipelineId: string,
    tenderId: string,
    parameters?: Record<string, any>
  ): Promise<string> {
    try {
      const pipeline = await prisma.pipeline.findUnique({
        where: { id: pipelineId },
      })

      if (!pipeline) {
        throw new Error('Pipeline not found')
      }

      if (!pipeline.active) {
        throw new Error('Pipeline is not active')
      }

      // Create run record
      const run = await prisma.run.create({
        data: {
          tenderId,
          pipelineName: pipeline.name,
          status: 'PENDING',
          logs: [],
        },
      })

      // Add job to queue
      await queueManager.addPipelineJob(
        run.id,
        tenderId,
        pipeline.name,
        pipeline.config,
        parameters
      )

      return run.id
    } catch (error) {
      console.error('Error running pipeline:', error)
      throw new Error('Failed to run pipeline')
    }
  }

  async getRun(runId: string): Promise<any> {
    try {
      const run = await prisma.run.findUnique({
        where: { id: runId },
        include: {
          tender: {
            select: { id: true, title: true },
          },
        },
      })

      if (!run) {
        throw new Error('Run not found')
      }

      return run
    } catch (error) {
      console.error('Error getting run:', error)
      throw new Error('Failed to get run')
    }
  }

  async listRuns(filters?: {
    tenderId?: string
    pipelineName?: string
    status?: string
    page?: number
    limit?: number
  }): Promise<{
    runs: Array<any>
    total: number
    page: number
    totalPages: number
  }> {
    try {
      const where: any = {}

      if (filters?.tenderId) {
        where.tenderId = filters.tenderId
      }

      if (filters?.pipelineName) {
        where.pipelineName = filters.pipelineName
      }

      if (filters?.status) {
        where.status = filters.status
      }

      const page = filters?.page || 1
      const limit = filters?.limit || 20
      const skip = (page - 1) * limit

      const [runs, total] = await Promise.all([
        prisma.run.findMany({
          where,
          include: {
            tender: {
              select: { id: true, title: true },
            },
          },
          orderBy: { startedAt: 'desc' },
          skip,
          take: limit,
        }),
        prisma.run.count({ where }),
      ])

      return {
        runs,
        total,
        page,
        totalPages: Math.ceil(total / limit),
      }
    } catch (error) {
      console.error('Error listing runs:', error)
      throw new Error('Failed to list runs')
    }
  }

  async cancelRun(runId: string): Promise<void> {
    try {
      const run = await prisma.run.findUnique({
        where: { id: runId },
      })

      if (!run) {
        throw new Error('Run not found')
      }

      if (run.status === 'COMPLETED' || run.status === 'FAILED') {
        throw new Error('Cannot cancel completed or failed run')
      }

      // Update run status
      await prisma.run.update({
        where: { id: runId },
        data: {
          status: 'CANCELLED',
          finishedAt: new Date(),
        },
      })

      // Cancel job in queue (this would need job ID tracking)
      // For now, we'll just update the database
    } catch (error) {
      console.error('Error canceling run:', error)
      throw new Error('Failed to cancel run')
    }
  }

  private async validatePipelineConfig(config: PipelineConfig): Promise<void> {
    // Validate step dependencies and references
    const stepIds = new Set(config.steps.map(step => step.id))

    for (const step of config.steps) {
      // Validate step type is registered
      const validStepTypes = [
        'pipeline/prepare',
        'pipeline/extract',
        'pipeline/checklist',
        'pipeline/summary',
        'pipeline/human-approval',
        'pipeline/notify',
      ]

      if (!validStepTypes.includes(step.uses)) {
        throw new Error(`Invalid step type: ${step.uses}`)
      }

      // Validate step parameters based on type
      if (step.uses === 'pipeline/extract' && !step.with?.fields) {
        throw new Error('Extract step requires fields parameter')
      }

      if (step.uses === 'pipeline/checklist' && !step.with?.templateId) {
        throw new Error('Checklist step requires templateId parameter')
      }

      if (step.uses === 'pipeline/summary' && !step.with?.templateId) {
        throw new Error('Summary step requires templateId parameter')
      }
    }
  }

  async exportPipeline(id: string, format: 'json' | 'yaml' = 'yaml'): Promise<string> {
    try {
      const pipeline = await this.getPipeline(id)

      if (format === 'yaml') {
        return yaml.dump(pipeline.config)
      } else {
        return JSON.stringify(pipeline.config, null, 2)
      }
    } catch (error) {
      console.error('Error exporting pipeline:', error)
      throw new Error('Failed to export pipeline')
    }
  }

  async importPipeline(
    configString: string,
    format: 'json' | 'yaml' = 'yaml'
  ): Promise<string> {
    try {
      let config: PipelineConfig

      if (format === 'yaml') {
        config = yaml.load(configString) as PipelineConfig
      } else {
        config = JSON.parse(configString)
      }

      return await this.createPipeline(config)
    } catch (error) {
      console.error('Error importing pipeline:', error)
      throw new Error('Failed to import pipeline')
    }
  }
}

export const pipelineManager = new PipelineManager()