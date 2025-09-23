// YAML-Driven Pipeline System for Tender Processing
// Orchestrates document processing with configurable steps

import { prisma } from '@/lib/prisma'
import { FIELD_EXTRACTORS } from '@/lib/extractors'
import { templateEngine } from '@/lib/templates'
import yaml from 'yaml'

export interface PipelineStep {
  id: string
  name: string
  type: 'prepare' | 'extract' | 'template' | 'validate' | 'gate'
  config?: Record<string, any>
  dependencies?: string[]
  timeout?: number
  retries?: number
}

export interface PipelineConfig {
  name: string
  description?: string
  version: string
  steps: PipelineStep[]
  variables?: Record<string, any>
}

export interface PipelineContext {
  tenderId: string
  userId: string
  runId: string
  variables: Record<string, any>
  results: Record<string, any>
  logs: Array<{
    timestamp: Date
    level: 'info' | 'warn' | 'error'
    step?: string
    message: string
    data?: any
  }>
}

export interface StepResult {
  success: boolean
  data?: any
  error?: string
  logs?: Array<{
    level: 'info' | 'warn' | 'error'
    message: string
    data?: any
  }>
}

export abstract class PipelineStepExecutor {
  abstract execute(step: PipelineStep, context: PipelineContext): Promise<StepResult>
}

// Step Executors
export class PrepareStepExecutor extends PipelineStepExecutor {
  async execute(step: PipelineStep, context: PipelineContext): Promise<StepResult> {
    try {
      const logs = []
      logs.push({ level: 'info' as const, message: 'Starting document preparation' })

      // Get tender documents
      const tender = await prisma.tender.findUnique({
        where: { id: context.tenderId },
        include: {
          documents: true
        }
      })

      if (!tender) {
        return {
          success: false,
          error: 'Tender not found'
        }
      }

      if (tender.documents.length === 0) {
        return {
          success: false,
          error: 'No documents found for tender'
        }
      }

      logs.push({ level: 'info' as const, message: `Found ${tender.documents.length} documents` })

      // Parse documents and extract content
      const parsedDocuments = []
      for (const doc of tender.documents) {
        logs.push({ level: 'info' as const, message: `Parsing document: ${doc.filename}` })

        // For now, use stored content or placeholder
        // In production, this would parse PDF/DOCX content
        const content = doc.content || 'Document content would be extracted here'

        // Split into pages (simplified - in reality would parse actual pages)
        const pages = this.splitIntoPages(content)

        parsedDocuments.push({
          id: doc.id,
          filename: doc.filename,
          content,
          pages
        })

        logs.push({ level: 'info' as const, message: `Parsed ${pages.length} pages from ${doc.filename}` })
      }

      return {
        success: true,
        data: {
          tender,
          documents: parsedDocuments
        },
        logs
      }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        logs: [{ level: 'error' as const, message: 'Failed to prepare documents', data: error }]
      }
    }
  }

  private splitIntoPages(content: string): Array<{ number: number; content: string }> {
    // Simplified page splitting - in reality would use proper PDF parsing
    const wordsPerPage = 500
    const words = content.split(/\s+/)
    const pages = []

    for (let i = 0; i < words.length; i += wordsPerPage) {
      const pageWords = words.slice(i, i + wordsPerPage)
      pages.push({
        number: Math.floor(i / wordsPerPage) + 1,
        content: pageWords.join(' ')
      })
    }

    return pages.length > 0 ? pages : [{ number: 1, content }]
  }
}

export class ExtractStepExecutor extends PipelineStepExecutor {
  async execute(step: PipelineStep, context: PipelineContext): Promise<StepResult> {
    try {
      const logs = []
      logs.push({ level: 'info' as const, message: 'Starting field extraction' })

      const { documents } = context.results.prepare || {}
      if (!documents || documents.length === 0) {
        return {
          success: false,
          error: 'No prepared documents found'
        }
      }

      // Get extraction configuration
      const extractors = step.config?.extractors || FIELD_EXTRACTORS.map(e => e.key)
      logs.push({ level: 'info' as const, message: `Extracting fields: ${extractors.join(', ')}` })

      const extractions = {}

      // Process each extractor
      for (const extractorKey of extractors) {
        const extractor = FIELD_EXTRACTORS.find(e => e.key === extractorKey)
        if (!extractor) {
          logs.push({ level: 'warn' as const, message: `Extractor not found: ${extractorKey}` })
          continue
        }

        logs.push({ level: 'info' as const, message: `Running extractor: ${extractor.name}` })

        try {
          // Run extraction on primary document
          const primaryDoc = documents[0]
          const result = await extractor.extract({
            document: primaryDoc,
            allDocuments: documents,
          })

          // Store extraction result in database
          await prisma.fieldExtraction.upsert({
            where: {
              tenderId_key: {
                tenderId: context.tenderId,
                key: extractorKey
              }
            },
            create: {
              tenderId: context.tenderId,
              key: extractorKey,
              value: result.value,
              confidence: result.confidence,
              traceLinks: {
                create: result.traceLinks.map(link => ({
                  documentId: link.documentId,
                  page: link.page,
                  snippet: link.snippet,
                  sectionPath: link.sectionPath,
                  bbox: link.bbox,
                }))
              }
            },
            update: {
              value: result.value,
              confidence: result.confidence,
              traceLinks: {
                deleteMany: {},
                create: result.traceLinks.map(link => ({
                  documentId: link.documentId,
                  page: link.page,
                  snippet: link.snippet,
                  sectionPath: link.sectionPath,
                  bbox: link.bbox,
                }))
              }
            }
          })

          extractions[extractorKey] = result
          logs.push({
            level: 'info' as const,
            message: `Extracted ${extractorKey} with confidence ${result.confidence.toFixed(2)}`,
            data: { traceLinks: result.traceLinks.length }
          })

        } catch (extractorError) {
          logs.push({
            level: 'error' as const,
            message: `Failed to extract ${extractorKey}`,
            data: extractorError
          })
          extractions[extractorKey] = {
            value: null,
            confidence: 0,
            traceLinks: [],
            error: extractorError instanceof Error ? extractorError.message : 'Unknown error'
          }
        }
      }

      return {
        success: true,
        data: { extractions },
        logs
      }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        logs: [{ level: 'error' as const, message: 'Field extraction failed', data: error }]
      }
    }
  }
}

export class TemplateStepExecutor extends PipelineStepExecutor {
  async execute(step: PipelineStep, context: PipelineContext): Promise<StepResult> {
    try {
      const logs = []
      logs.push({ level: 'info' as const, message: 'Starting template generation' })

      const { extractions } = context.results.extract || {}
      if (!extractions) {
        return {
          success: false,
          error: 'No extractions found'
        }
      }

      const templateType = step.config?.template || 'summary-v1'
      logs.push({ level: 'info' as const, message: `Using template: ${templateType}` })

      // Generate summary blocks using template
      const summaryResult = await templateEngine.generateSummary(
        context.tenderId,
        templateType,
        extractions
      )

      // Generate checklist using template
      const checklistResult = await templateEngine.generateChecklist(
        context.tenderId,
        'checklist-internal-v1',
        extractions
      )

      logs.push({ level: 'info' as const, message: 'Generated summary and checklist' })

      return {
        success: true,
        data: {
          summary: summaryResult,
          checklist: checklistResult
        },
        logs
      }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        logs: [{ level: 'error' as const, message: 'Template generation failed', data: error }]
      }
    }
  }
}

export class ValidateStepExecutor extends PipelineStepExecutor {
  async execute(step: PipelineStep, context: PipelineContext): Promise<StepResult> {
    try {
      const logs = []
      logs.push({ level: 'info' as const, message: 'Starting validation' })

      const { extractions } = context.results.extract || {}
      if (!extractions) {
        return {
          success: false,
          error: 'No extractions to validate'
        }
      }

      const validationRules = step.config?.rules || []
      const errors = []
      const warnings = []

      // Validate required fields
      const requiredFields = ['scope', 'eligibility', 'deadlineSubmission']
      for (const field of requiredFields) {
        if (!extractions[field] || extractions[field].confidence < 0.3) {
          errors.push(`Required field '${field}' missing or low confidence`)
        }
      }

      // Validate deadline is in the future
      if (extractions.deadlineSubmission?.value?.primaryDeadline?.date) {
        const deadline = new Date(extractions.deadlineSubmission.value.primaryDeadline.date)
        if (deadline < new Date()) {
          warnings.push('Submission deadline appears to be in the past')
        }
      }

      // Check minimum confidence thresholds
      for (const [key, extraction] of Object.entries(extractions)) {
        if (extraction.confidence < 0.5) {
          warnings.push(`Low confidence (${extraction.confidence.toFixed(2)}) for field '${key}'`)
        }
      }

      const hasErrors = errors.length > 0
      logs.push({
        level: hasErrors ? 'error' as const : 'info' as const,
        message: `Validation completed: ${errors.length} errors, ${warnings.length} warnings`
      })

      return {
        success: !hasErrors,
        data: {
          errors,
          warnings,
          validated: true
        },
        error: hasErrors ? errors.join('; ') : undefined,
        logs
      }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        logs: [{ level: 'error' as const, message: 'Validation failed', data: error }]
      }
    }
  }
}

export class GateStepExecutor extends PipelineStepExecutor {
  async execute(step: PipelineStep, context: PipelineContext): Promise<StepResult> {
    try {
      const logs = []
      logs.push({ level: 'info' as const, message: 'Starting gate check' })

      // Update tender status to REVIEW
      await prisma.tender.update({
        where: { id: context.tenderId },
        data: { status: 'REVIEW' }
      })

      logs.push({ level: 'info' as const, message: 'Tender status updated to REVIEW' })

      // Log completion audit
      await prisma.auditLog.create({
        data: {
          actorId: context.userId,
          action: 'PIPELINE_COMPLETED',
          entity: 'Tender',
          entityId: context.tenderId,
          diff: {
            runId: context.runId,
            status: 'REVIEW',
            completedAt: new Date().toISOString()
          }
        }
      })

      return {
        success: true,
        data: { status: 'REVIEW', readyForApproval: true },
        logs
      }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        logs: [{ level: 'error' as const, message: 'Gate check failed', data: error }]
      }
    }
  }
}

// Pipeline Engine
export class PipelineEngine {
  private stepExecutors: Map<string, PipelineStepExecutor> = new Map([
    ['prepare', new PrepareStepExecutor()],
    ['extract', new ExtractStepExecutor()],
    ['template', new TemplateStepExecutor()],
    ['validate', new ValidateStepExecutor()],
    ['gate', new GateStepExecutor()],
  ])

  async loadPipelineConfig(name: string): Promise<PipelineConfig> {
    const pipeline = await prisma.pipeline.findUnique({
      where: { name }
    })

    if (!pipeline) {
      throw new Error(`Pipeline not found: ${name}`)
    }

    return pipeline.config as PipelineConfig
  }

  async executePipeline(
    tenderId: string,
    pipelineName: string,
    userId: string
  ): Promise<{ runId: string; success: boolean }> {
    // Create run record
    const run = await prisma.run.create({
      data: {
        tenderId,
        pipelineName,
        status: 'RUNNING',
        logs: []
      }
    })

    try {
      // Load pipeline configuration
      const config = await this.loadPipelineConfig(pipelineName)

      // Initialize context
      const context: PipelineContext = {
        tenderId,
        userId,
        runId: run.id,
        variables: config.variables || {},
        results: {},
        logs: []
      }

      context.logs.push({
        timestamp: new Date(),
        level: 'info',
        message: `Starting pipeline: ${config.name} v${config.version}`
      })

      // Execute steps in order
      for (const step of config.steps) {
        context.logs.push({
          timestamp: new Date(),
          level: 'info',
          step: step.id,
          message: `Executing step: ${step.name}`
        })

        const executor = this.stepExecutors.get(step.type)
        if (!executor) {
          throw new Error(`Unknown step type: ${step.type}`)
        }

        const result = await executor.execute(step, context)

        // Add step logs to context
        if (result.logs) {
          for (const log of result.logs) {
            context.logs.push({
              timestamp: new Date(),
              level: log.level,
              step: step.id,
              message: log.message,
              data: log.data
            })
          }
        }

        if (!result.success) {
          context.logs.push({
            timestamp: new Date(),
            level: 'error',
            step: step.id,
            message: `Step failed: ${result.error}`
          })

          // Update run with failure
          await prisma.run.update({
            where: { id: run.id },
            data: {
              status: 'FAILED',
              finishedAt: new Date(),
              error: result.error,
              logs: context.logs
            }
          })

          return { runId: run.id, success: false }
        }

        // Store step result
        context.results[step.id] = result.data

        context.logs.push({
          timestamp: new Date(),
          level: 'info',
          step: step.id,
          message: 'Step completed successfully'
        })
      }

      // Update run with success
      await prisma.run.update({
        where: { id: run.id },
        data: {
          status: 'COMPLETED',
          finishedAt: new Date(),
          logs: context.logs
        }
      })

      context.logs.push({
        timestamp: new Date(),
        level: 'info',
        message: 'Pipeline completed successfully'
      })

      return { runId: run.id, success: true }

    } catch (error) {
      // Update run with error
      await prisma.run.update({
        where: { id: run.id },
        data: {
          status: 'FAILED',
          finishedAt: new Date(),
          error: error instanceof Error ? error.message : 'Unknown error'
        }
      })

      throw error
    }
  }

  static parseYamlConfig(yamlContent: string): PipelineConfig {
    try {
      return yaml.parse(yamlContent) as PipelineConfig
    } catch (error) {
      throw new Error(`Invalid YAML configuration: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  static validateConfig(config: PipelineConfig): string[] {
    const errors: string[] = []

    if (!config.name) errors.push('Pipeline name is required')
    if (!config.version) errors.push('Pipeline version is required')
    if (!config.steps || config.steps.length === 0) errors.push('At least one step is required')

    for (const step of config.steps || []) {
      if (!step.id) errors.push(`Step missing id`)
      if (!step.name) errors.push(`Step ${step.id} missing name`)
      if (!step.type) errors.push(`Step ${step.id} missing type`)
    }

    return errors
  }
}

export const pipelineEngine = new PipelineEngine()