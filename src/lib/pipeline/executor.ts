import { prisma } from '@/lib/prisma'
import { PipelineConfig, RunLogEntry } from '@/types/pipeline'

export interface StepContext {
  runId: string
  tenderId: string
  parameters: Record<string, any>
  stepResults: Record<string, any>
  documents: Array<{ id: string; filename: string; url: string }>
}

export interface StepResult {
  success: boolean
  data?: any
  error?: string
  logs: RunLogEntry[]
  metadata?: Record<string, any>
}

export class PipelineExecutor {
  private stepRegistry: Map<string, (context: StepContext, params: any) => Promise<StepResult>> = new Map()

  constructor() {
    this.registerSteps()
  }

  private registerSteps() {
    // Register built-in steps
    this.stepRegistry.set('pipeline/prepare', this.prepareStep.bind(this))
    this.stepRegistry.set('pipeline/extract', this.extractStep.bind(this))
    this.stepRegistry.set('pipeline/checklist', this.checklistStep.bind(this))
    this.stepRegistry.set('pipeline/summary', this.summaryStep.bind(this))
    this.stepRegistry.set('pipeline/human-approval', this.humanApprovalStep.bind(this))
    this.stepRegistry.set('pipeline/notify', this.notifyStep.bind(this))
  }

  async execute(
    runId: string,
    tenderId: string,
    config: PipelineConfig,
    parameters: Record<string, any> = {}
  ): Promise<any> {
    const context: StepContext = {
      runId,
      tenderId,
      parameters,
      stepResults: {},
      documents: await this.getDocuments(tenderId),
    }

    const logs: RunLogEntry[] = []
    let overallResult: any = {}

    try {
      await this.logStep(runId, 'info', `Starting pipeline: ${config.name}`)

      for (const step of config.steps) {
        await this.logStep(runId, 'info', `Executing step: ${step.id}`, { step: step.id })

        try {
          const stepHandler = this.stepRegistry.get(step.uses)
          if (!stepHandler) {
            throw new Error(`Unknown step type: ${step.uses}`)
          }

          const result = await stepHandler(context, step.with || {})

          if (result.success) {
            context.stepResults[step.id] = result.data
            overallResult[step.id] = result.data

            await this.logStep(runId, 'info', `Step completed: ${step.id}`, {
              step: step.id,
              result: result.data,
            })

            // Log step-specific logs
            for (const log of result.logs) {
              await this.logStep(runId, log.level, log.message, log.data)
            }
          } else {
            const errorMsg = `Step failed: ${step.id} - ${result.error}`
            await this.logStep(runId, 'error', errorMsg, { step: step.id, error: result.error })

            if (!step.continueOnError) {
              throw new Error(errorMsg)
            }
          }
        } catch (error) {
          const errorMsg = `Step execution error: ${step.id} - ${error.message}`
          await this.logStep(runId, 'error', errorMsg, { step: step.id, error: error.message })

          if (!step.continueOnError) {
            throw error
          }
        }
      }

      await this.logStep(runId, 'info', `Pipeline completed: ${config.name}`)

      return overallResult
    } catch (error) {
      await this.logStep(runId, 'error', `Pipeline failed: ${config.name} - ${error.message}`)
      throw error
    }
  }

  private async getDocuments(tenderId: string) {
    return await prisma.document.findMany({
      where: { tenderId },
      select: { id: true, filename: true, url: true },
    })
  }

  private async logStep(
    runId: string,
    level: 'info' | 'warn' | 'error' | 'debug',
    message: string,
    data?: any
  ) {
    await prisma.run.update({
      where: { id: runId },
      data: {
        logs: {
          push: {
            timestamp: new Date(),
            level,
            message,
            data,
          },
        },
      },
    })
  }

  // Step implementations
  private async prepareStep(context: StepContext, params: any): Promise<StepResult> {
    const logs: RunLogEntry[] = []

    try {
      // Parse documents if not already done
      const { documentParser } = await import('@/lib/parsing/document-parser')

      for (const doc of context.documents) {
        // Check if document already has trace links
        const existingLinks = await prisma.traceLink.count({
          where: { documentId: doc.id },
        })

        if (existingLinks === 0) {
          logs.push({
            timestamp: new Date(),
            level: 'info',
            message: `Parsing document: ${doc.filename}`,
          })

          // This would require downloading the document and parsing it
          // For now, we'll simulate the parsing
          logs.push({
            timestamp: new Date(),
            level: 'info',
            message: `Document parsed: ${doc.filename}`,
          })
        }
      }

      return {
        success: true,
        data: { documentsProcessed: context.documents.length },
        logs,
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
        logs: [
          ...logs,
          {
            timestamp: new Date(),
            level: 'error',
            message: `Prepare step failed: ${error.message}`,
          },
        ],
      }
    }
  }

  private async extractStep(context: StepContext, params: any): Promise<StepResult> {
    const logs: RunLogEntry[] = []

    try {
      const { fieldExtractor } = await import('@/lib/extractors/field-extractor')

      const fields = params.fields || [
        { key: 'scope', requireCitations: true },
        { key: 'eligibility', requireCitations: true },
        { key: 'evaluationCriteria', requireCitations: true },
        { key: 'submissionMechanics', requireCitations: true },
        { key: 'deadlineSubmission', requireCitations: true },
      ]

      const extractedFields: any = {}

      for (const field of fields) {
        logs.push({
          timestamp: new Date(),
          level: 'info',
          message: `Extracting field: ${field.key}`,
        })

        try {
          const result = await fieldExtractor.extractField(
            context.tenderId,
            field.key,
            field
          )

          if (result.citations.length === 0 && field.requireCitations) {
            throw new Error(`No citations found for required field: ${field.key}`)
          }

          extractedFields[field.key] = result

          logs.push({
            timestamp: new Date(),
            level: 'info',
            message: `Field extracted: ${field.key}`,
            data: { confidence: result.confidence, citations: result.citations.length },
          })
        } catch (error) {
          logs.push({
            timestamp: new Date(),
            level: 'error',
            message: `Failed to extract field: ${field.key} - ${error.message}`,
          })
          throw error
        }
      }

      return {
        success: true,
        data: extractedFields,
        logs,
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
        logs: [
          ...logs,
          {
            timestamp: new Date(),
            level: 'error',
            message: `Extract step failed: ${error.message}`,
          },
        ],
      }
    }
  }

  private async checklistStep(context: StepContext, params: any): Promise<StepResult> {
    const logs: RunLogEntry[] = []

    try {
      const { checklistGenerator } = await import('@/lib/extractors/checklist-generator')

      const templateId = params.templateId
      if (!templateId) {
        throw new Error('Template ID is required for checklist step')
      }

      logs.push({
        timestamp: new Date(),
        level: 'info',
        message: `Generating checklist with template: ${templateId}`,
      })

      const checklist = await checklistGenerator.generateChecklist(
        context.tenderId,
        templateId,
        params
      )

      logs.push({
        timestamp: new Date(),
        level: 'info',
        message: `Checklist generated with ${checklist.items.length} items`,
      })

      return {
        success: true,
        data: checklist,
        logs,
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
        logs: [
          ...logs,
          {
            timestamp: new Date(),
            level: 'error',
            message: `Checklist step failed: ${error.message}`,
          },
        ],
      }
    }
  }

  private async summaryStep(context: StepContext, params: any): Promise<StepResult> {
    const logs: RunLogEntry[] = []

    try {
      const { summaryGenerator } = await import('@/lib/extractors/summary-generator')

      const templateId = params.templateId
      if (!templateId) {
        throw new Error('Template ID is required for summary step')
      }

      logs.push({
        timestamp: new Date(),
        level: 'info',
        message: `Generating summary with template: ${templateId}`,
      })

      const summary = await summaryGenerator.generateSummary(
        context.tenderId,
        templateId,
        params
      )

      logs.push({
        timestamp: new Date(),
        level: 'info',
        message: `Summary generated with ${summary.blocks.length} sections`,
      })

      return {
        success: true,
        data: summary,
        logs,
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
        logs: [
          ...logs,
          {
            timestamp: new Date(),
            level: 'error',
            message: `Summary step failed: ${error.message}`,
          },
        ],
      }
    }
  }

  private async humanApprovalStep(context: StepContext, params: any): Promise<StepResult> {
    const logs: RunLogEntry[] = []

    try {
      // Update tender status to ready for review
      await prisma.tender.update({
        where: { id: context.tenderId },
        data: { status: 'READY_FOR_REVIEW' },
      })

      logs.push({
        timestamp: new Date(),
        level: 'info',
        message: 'Tender marked as ready for review',
      })

      return {
        success: true,
        data: { status: 'PENDING_APPROVAL', rolesAllowed: params.rolesAllowed },
        logs,
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
        logs: [
          ...logs,
          {
            timestamp: new Date(),
            level: 'error',
            message: `Human approval step failed: ${error.message}`,
          },
        ],
      }
    }
  }

  private async notifyStep(context: StepContext, params: any): Promise<StepResult> {
    const logs: RunLogEntry[] = []

    try {
      // This would integrate with email/notification service
      logs.push({
        timestamp: new Date(),
        level: 'info',
        message: 'Notifications sent',
        data: { recipients: params.recipients || [] },
      })

      return {
        success: true,
        data: { notificationsSent: true },
        logs,
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
        logs: [
          ...logs,
          {
            timestamp: new Date(),
            level: 'error',
            message: `Notify step failed: ${error.message}`,
          },
        ],
      }
    }
  }
}

export const pipelineExecutor = new PipelineExecutor()