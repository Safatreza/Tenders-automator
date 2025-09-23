// Complete Pipeline Execution Engine
// Orchestrates tender processing from ingestion to summary generation

import { prisma } from './db'
import { StorageService } from './storage'
import { DocumentParser } from './parsing'
import { FieldExtractionService } from './extractors'
import { SummaryGenerator, ChecklistGenerator } from './templates'
import { z } from 'zod'
import yaml from 'js-yaml'

// ==========================================
// Types and Schemas
// ==========================================

export interface PipelineStep {
  id: string
  name: string
  type: 'upload' | 'parse' | 'extract' | 'generate' | 'approve'
  config: Record<string, any>
  retryConfig?: {
    maxRetries: number
    backoffMs: number
  }
}

export interface PipelineConfig {
  id: string
  name: string
  version: string
  steps: PipelineStep[]
  triggers: {
    manual: boolean
    automatic: boolean
    conditions?: string[]
  }
  timeout?: number
}

export interface PipelineRun {
  id: string
  pipelineId: string
  tenderId: string
  status: 'PENDING' | 'RUNNING' | 'COMPLETED' | 'FAILED' | 'CANCELLED'
  currentStep?: string
  startedAt: Date
  completedAt?: Date
  error?: string
  logs: PipelineLog[]
}

export interface PipelineLog {
  timestamp: Date
  level: 'info' | 'warn' | 'error' | 'debug'
  step: string
  message: string
  data?: any
}

const PipelineConfigSchema = z.object({
  id: z.string(),
  name: z.string(),
  version: z.string(),
  steps: z.array(z.object({
    id: z.string(),
    name: z.string(),
    type: z.enum(['upload', 'parse', 'extract', 'generate', 'approve']),
    config: z.record(z.any()),
    retryConfig: z.object({
      maxRetries: z.number(),
      backoffMs: z.number(),
    }).optional(),
  })),
  triggers: z.object({
    manual: z.boolean(),
    automatic: z.boolean(),
    conditions: z.array(z.string()).optional(),
  }),
  timeout: z.number().optional(),
})

// ==========================================
// Pipeline Execution Engine
// ==========================================

export class PipelineExecutor {
  private runId: string
  private tenderId: string
  private config: PipelineConfig
  private logs: PipelineLog[] = []

  constructor(runId: string, tenderId: string, config: PipelineConfig) {
    this.runId = runId
    this.tenderId = tenderId
    this.config = config
  }

  async execute(): Promise<void> {
    await this.updateRunStatus('RUNNING')
    this.log('info', 'pipeline', `Starting pipeline execution: ${this.config.name}`)

    try {
      for (const step of this.config.steps) {
        await this.executeStep(step)
      }

      await this.updateRunStatus('COMPLETED')
      this.log('info', 'pipeline', 'Pipeline completed successfully')
    } catch (error) {
      await this.updateRunStatus('FAILED', error instanceof Error ? error.message : 'Unknown error')
      this.log('error', 'pipeline', `Pipeline failed: ${error instanceof Error ? error.message : 'Unknown error'}`)
      throw error
    }
  }

  private async executeStep(step: PipelineStep): Promise<void> {
    await this.updateCurrentStep(step.id)
    this.log('info', step.id, `Starting step: ${step.name}`)

    const maxRetries = step.retryConfig?.maxRetries || 0
    const backoffMs = step.retryConfig?.backoffMs || 1000

    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        switch (step.type) {
          case 'upload':
            await this.executeUploadStep(step)
            break
          case 'parse':
            await this.executeParseStep(step)
            break
          case 'extract':
            await this.executeExtractStep(step)
            break
          case 'generate':
            await this.executeGenerateStep(step)
            break
          case 'approve':
            await this.executeApproveStep(step)
            break
          default:
            throw new Error(`Unknown step type: ${step.type}`)
        }

        this.log('info', step.id, `Step completed: ${step.name}`)
        return
      } catch (error) {
        const isLastAttempt = attempt === maxRetries
        const errorMessage = error instanceof Error ? error.message : 'Unknown error'

        if (isLastAttempt) {
          this.log('error', step.id, `Step failed after ${attempt + 1} attempts: ${errorMessage}`)
          throw error
        } else {
          this.log('warn', step.id, `Step failed (attempt ${attempt + 1}/${maxRetries + 1}): ${errorMessage}. Retrying in ${backoffMs}ms...`)
          await this.sleep(backoffMs * Math.pow(2, attempt)) // Exponential backoff
        }
      }
    }
  }

  private async executeUploadStep(step: PipelineStep): Promise<void> {
    const { sources } = step.config

    if (!sources || !Array.isArray(sources)) {
      throw new Error('Upload step requires sources configuration')
    }

    for (const source of sources) {
      if (source.type === 'url') {
        this.log('info', step.id, `Uploading from URL: ${source.url}`)

        const uploadResult = await StorageService.uploadFromUrl(
          source.url,
          source.filename || `document-${Date.now()}.pdf`,
          { prefix: 'tender-docs' }
        )

        // Create document record
        await prisma.document.create({
          data: {
            tenderId: this.tenderId,
            filename: uploadResult.filename,
            mime: uploadResult.mime,
            sha256: uploadResult.sha256,
            url: uploadResult.url,
            version: uploadResult.version,
          }
        })

        this.log('info', step.id, `Document uploaded: ${uploadResult.filename}`)
      } else if (source.type === 'file') {
        // File upload would be handled differently in the API layer
        this.log('info', step.id, `File upload placeholder for: ${source.filename}`)
      }
    }
  }

  private async executeParseStep(step: PipelineStep): Promise<void> {
    const { options = {} } = step.config

    // Get all documents for this tender that haven't been parsed yet
    const documents = await prisma.document.findMany({
      where: {
        tenderId: this.tenderId,
        pages: null, // Not yet parsed
      }
    })

    if (documents.length === 0) {
      this.log('info', step.id, 'No documents to parse')
      return
    }

    for (const document of documents) {
      this.log('info', step.id, `Parsing document: ${document.filename}`)

      try {
        // Download document
        const buffer = await StorageService.downloadFile(document.url.split('/').pop() || '')

        // Parse document
        const parsedDoc = await DocumentParser.parseBuffer(buffer, document.mime)

        // Save parsed pages
        const pages = parsedDoc.pages.map((page, index) => ({
          number: page.pageNumber,
          content: page.text,
          wordCount: page.text.split(/\s+/).length,
        }))

        await prisma.document.update({
          where: { id: document.id },
          data: { pages }
        })

        this.log('info', step.id, `Parsed ${pages.length} pages from ${document.filename}`)
      } catch (error) {
        this.log('error', step.id, `Failed to parse ${document.filename}: ${error instanceof Error ? error.message : 'Unknown error'}`)
        // Continue with other documents
      }
    }
  }

  private async executeExtractStep(step: PipelineStep): Promise<void> {
    const { confidence_threshold = 0.6, fields = [] } = step.config

    // Get all documents for this tender
    const documents = await prisma.document.findMany({
      where: {
        tenderId: this.tenderId,
        pages: { not: null }, // Only parsed documents
      }
    })

    if (documents.length === 0) {
      throw new Error('No parsed documents found for extraction')
    }

    this.log('info', step.id, `Extracting fields from ${documents.length} documents`)

    for (const document of documents) {
      try {
        // Parse the document again for extraction
        const buffer = await StorageService.downloadFile(document.url.split('/').pop() || '')
        const parsedDoc = await DocumentParser.parseBuffer(buffer, document.mime)

        // Extract fields
        const extractionService = new FieldExtractionService(parsedDoc, {
          confidence_threshold,
          include_low_confidence: false,
        })

        const results = await extractionService.extractAllFields()
        await extractionService.saveExtractions(this.tenderId, document.id, results)

        this.log('info', step.id, `Extracted ${results.length} fields from ${document.filename}`)
      } catch (error) {
        this.log('error', step.id, `Failed to extract from ${document.filename}: ${error instanceof Error ? error.message : 'Unknown error'}`)
        // Continue with other documents
      }
    }
  }

  private async executeGenerateStep(step: PipelineStep): Promise<void> {
    const { summaryTemplate = 'default-summary', checklistTemplate = 'default-checklist' } = step.config

    this.log('info', step.id, 'Generating summary and checklist')

    try {
      // Generate summary
      const summaryResult = await SummaryGenerator.generateSummary(
        this.tenderId,
        summaryTemplate
      )

      if (summaryResult.errors.length > 0) {
        this.log('warn', step.id, `Summary generation warnings: ${summaryResult.errors.join(', ')}`)
      }

      // Generate checklist
      const checklistResult = await ChecklistGenerator.generateChecklist(
        this.tenderId,
        checklistTemplate
      )

      if (checklistResult.errors.length > 0) {
        this.log('warn', step.id, `Checklist generation warnings: ${checklistResult.errors.join(', ')}`)
      }

      this.log('info', step.id, `Generated summary with ${summaryResult.citations.length} citations and checklist with ${checklistResult.items.length} items`)
    } catch (error) {
      throw new Error(`Generation failed: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  private async executeApproveStep(step: PipelineStep): Promise<void> {
    const { autoApprove = false, requiredRole = 'REVIEWER' } = step.config

    if (autoApprove) {
      // Auto-approve for testing/development
      await prisma.approval.create({
        data: {
          tenderId: this.tenderId,
          status: 'APPROVED',
          comments: 'Auto-approved by pipeline',
          approvedBy: 'system',
          approvedAt: new Date(),
        }
      })

      this.log('info', step.id, 'Tender auto-approved')
    } else {
      // Create pending approval
      await prisma.approval.create({
        data: {
          tenderId: this.tenderId,
          status: 'PENDING',
          comments: 'Awaiting manual review',
        }
      })

      this.log('info', step.id, 'Tender queued for manual approval')
    }
  }

  private async updateRunStatus(status: PipelineRun['status'], error?: string): Promise<void> {
    const updateData: any = {
      status,
      logs: this.logs,
    }

    if (status === 'COMPLETED' || status === 'FAILED') {
      updateData.completedAt = new Date()
    }

    if (error) {
      updateData.error = error
    }

    await prisma.run.update({
      where: { id: this.runId },
      data: updateData,
    })
  }

  private async updateCurrentStep(stepId: string): Promise<void> {
    await prisma.run.update({
      where: { id: this.runId },
      data: { currentStep: stepId },
    })
  }

  private log(level: PipelineLog['level'], step: string, message: string, data?: any): void {
    const logEntry: PipelineLog = {
      timestamp: new Date(),
      level,
      step,
      message,
      data,
    }

    this.logs.push(logEntry)
    console.log(`[${level.toUpperCase()}] [${step}] ${message}`)
  }

  private sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
}

// ==========================================
// Pipeline Manager
// ==========================================

export class PipelineManager {
  static async createRun(tenderId: string, pipelineId: string): Promise<string> {
    // Load pipeline configuration
    const pipeline = await prisma.pipeline.findUnique({
      where: { id: pipelineId }
    })

    if (!pipeline) {
      throw new Error(`Pipeline not found: ${pipelineId}`)
    }

    // Validate configuration
    const config = PipelineConfigSchema.parse(pipeline.config)

    // Create run record
    const run = await prisma.run.create({
      data: {
        tenderId,
        pipelineId,
        status: 'PENDING',
        startedAt: new Date(),
        logs: [],
      }
    })

    return run.id
  }

  static async executeRun(runId: string): Promise<void> {
    // Get run details
    const run = await prisma.run.findUnique({
      where: { id: runId },
      include: {
        pipeline: true,
        tender: true,
      }
    })

    if (!run) {
      throw new Error(`Run not found: ${runId}`)
    }

    if (run.status !== 'PENDING') {
      throw new Error(`Run is not in pending status: ${run.status}`)
    }

    // Parse pipeline configuration
    const config = PipelineConfigSchema.parse(run.pipeline.config)

    // Create executor and run
    const executor = new PipelineExecutor(runId, run.tenderId, config)
    await executor.execute()
  }

  static async cancelRun(runId: string): Promise<void> {
    await prisma.run.update({
      where: { id: runId },
      data: {
        status: 'CANCELLED',
        completedAt: new Date(),
      }
    })
  }

  static async getRunStatus(runId: string): Promise<PipelineRun | null> {
    const run = await prisma.run.findUnique({
      where: { id: runId },
      include: {
        pipeline: {
          select: { name: true }
        },
        tender: {
          select: { title: true }
        }
      }
    })

    if (!run) {
      return null
    }

    return {
      id: run.id,
      pipelineId: run.pipelineId,
      tenderId: run.tenderId,
      status: run.status as PipelineRun['status'],
      currentStep: run.currentStep || undefined,
      startedAt: run.startedAt,
      completedAt: run.completedAt || undefined,
      error: run.error || undefined,
      logs: run.logs as PipelineLog[],
    }
  }

  static async loadPipelineFromYaml(yamlContent: string): Promise<PipelineConfig> {
    try {
      const rawConfig = yaml.load(yamlContent)
      return PipelineConfigSchema.parse(rawConfig)
    } catch (error) {
      throw new Error(`Invalid pipeline YAML: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  static async savePipeline(config: PipelineConfig): Promise<void> {
    await prisma.pipeline.upsert({
      where: { id: config.id },
      update: {
        name: config.name,
        version: config.version,
        config,
        isActive: true,
      },
      create: {
        id: config.id,
        name: config.name,
        version: config.version,
        config,
        isActive: true,
      }
    })
  }
}

// ==========================================
// Default Pipeline Configurations
// ==========================================

export const DEFAULT_FULL_PIPELINE: PipelineConfig = {
  id: 'default-full-pipeline',
  name: 'Complete Tender Processing Pipeline',
  version: '1.0.0',
  steps: [
    {
      id: 'parse-documents',
      name: 'Parse Documents',
      type: 'parse',
      config: {
        options: {
          preserveFormatting: true,
          extractImages: false,
          includeMetadata: true,
        }
      },
      retryConfig: {
        maxRetries: 2,
        backoffMs: 1000,
      }
    },
    {
      id: 'extract-fields',
      name: 'Extract Fields',
      type: 'extract',
      config: {
        confidence_threshold: 0.6,
        fields: ['scope', 'eligibility', 'evaluationCriteria', 'submissionMechanics', 'deadlineSubmission']
      },
      retryConfig: {
        maxRetries: 1,
        backoffMs: 2000,
      }
    },
    {
      id: 'generate-outputs',
      name: 'Generate Summary and Checklist',
      type: 'generate',
      config: {
        summaryTemplate: 'default-summary',
        checklistTemplate: 'default-checklist'
      }
    },
    {
      id: 'queue-approval',
      name: 'Queue for Approval',
      type: 'approve',
      config: {
        autoApprove: false,
        requiredRole: 'REVIEWER'
      }
    }
  ],
  triggers: {
    manual: true,
    automatic: true,
    conditions: ['documents_uploaded']
  },
  timeout: 300000, // 5 minutes
}

export const QUICK_PIPELINE: PipelineConfig = {
  id: 'quick-pipeline',
  name: 'Quick Processing (Auto-Approve)',
  version: '1.0.0',
  steps: [
    {
      id: 'parse-documents',
      name: 'Parse Documents',
      type: 'parse',
      config: {}
    },
    {
      id: 'extract-fields',
      name: 'Extract Fields',
      type: 'extract',
      config: {
        confidence_threshold: 0.5, // Lower threshold for speed
      }
    },
    {
      id: 'generate-outputs',
      name: 'Generate Summary and Checklist',
      type: 'generate',
      config: {}
    },
    {
      id: 'auto-approve',
      name: 'Auto-Approve',
      type: 'approve',
      config: {
        autoApprove: true
      }
    }
  ],
  triggers: {
    manual: true,
    automatic: false,
  },
  timeout: 120000, // 2 minutes
}

export default PipelineManager