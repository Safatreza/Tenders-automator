import { z } from 'zod'

// Pipeline configuration schemas
export const PipelineStepSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  uses: z.string().min(1), // e.g., 'pipeline/extract', 'pipeline/checklist'
  with: z.record(z.any()).optional(), // Step-specific parameters
  timeout: z.number().positive().optional(),
  retries: z.number().min(0).max(3).default(0),
  continueOnError: z.boolean().default(false),
})

export const PipelineConfigSchema = z.object({
  name: z.string().min(1, 'Pipeline name is required'),
  description: z.string().optional(),
  version: z.string().default('1.0'),
  triggers: z.array(z.enum(['manual', 'upload', 'schedule'])).default(['manual']),
  steps: z.array(PipelineStepSchema).min(1, 'At least one step is required'),
  settings: z.object({
    timeout: z.number().positive().default(3600), // 1 hour default
    maxRetries: z.number().min(0).max(5).default(2),
    notifications: z.object({
      onSuccess: z.boolean().default(false),
      onFailure: z.boolean().default(true),
      recipients: z.array(z.string().email()).default([]),
    }).optional(),
  }).optional(),
})

// Pipeline execution schemas
export const RunLogEntrySchema = z.object({
  timestamp: z.date(),
  level: z.enum(['info', 'warn', 'error', 'debug']),
  step: z.string().optional(),
  message: z.string(),
  data: z.any().optional(),
})

export const CreateRunSchema = z.object({
  tenderId: z.string().uuid(),
  pipelineName: z.string().min(1),
  parameters: z.record(z.any()).optional(),
  priority: z.enum(['low', 'normal', 'high']).default('normal'),
})

export const UpdateRunSchema = z.object({
  status: z.enum(['PENDING', 'RUNNING', 'COMPLETED', 'FAILED', 'CANCELLED']).optional(),
  logs: z.array(RunLogEntrySchema).optional(),
  finishedAt: z.date().optional(),
  error: z.string().optional(),
})

// Pipeline validation schemas
export const PipelineValidationSchema = z.object({
  config: PipelineConfigSchema,
  validateSteps: z.boolean().default(true),
  checkDependencies: z.boolean().default(true),
})

// Step-specific parameter schemas
export const ExtractStepParamsSchema = z.object({
  fields: z.array(z.object({
    key: z.enum(['scope', 'eligibility', 'evaluationCriteria', 'submissionMechanics', 'deadlineSubmission']),
    requireCitations: z.boolean().default(true),
    minConfidence: z.number().min(0).max(1).default(0.5),
    validators: z.array(z.string()).default([]),
  })),
  extractionMethod: z.enum(['regex', 'nlp', 'hybrid']).default('hybrid'),
  citationMinLength: z.number().min(10).default(50),
})

export const ChecklistStepParamsSchema = z.object({
  templateId: z.string().uuid(),
  autoCheck: z.boolean().default(true),
  requiredItemsOnly: z.boolean().default(false),
})

export const SummaryStepParamsSchema = z.object({
  templateId: z.string().uuid(),
  requireCitations: z.boolean().default(true),
  maxSectionLength: z.number().positive().default(1000),
  includeMetadata: z.boolean().default(true),
})

export const ApprovalStepParamsSchema = z.object({
  rolesAllowed: z.array(z.enum(['ANALYST', 'REVIEWER', 'ADMIN'])).min(1),
  requireComment: z.boolean().default(false),
  autoApprove: z.object({
    enabled: z.boolean().default(false),
    conditions: z.array(z.object({
      field: z.string(),
      operator: z.string(),
      value: z.any(),
    })).default([]),
  }).optional(),
})

// Type exports
export type PipelineStep = z.infer<typeof PipelineStepSchema>
export type PipelineConfig = z.infer<typeof PipelineConfigSchema>
export type RunLogEntry = z.infer<typeof RunLogEntrySchema>
export type CreateRun = z.infer<typeof CreateRunSchema>
export type UpdateRun = z.infer<typeof UpdateRunSchema>
export type PipelineValidation = z.infer<typeof PipelineValidationSchema>
export type ExtractStepParams = z.infer<typeof ExtractStepParamsSchema>
export type ChecklistStepParams = z.infer<typeof ChecklistStepParamsSchema>
export type SummaryStepParams = z.infer<typeof SummaryStepParamsSchema>
export type ApprovalStepParams = z.infer<typeof ApprovalStepParamsSchema>