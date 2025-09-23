import { z } from 'zod'
import {
  TenderStatus,
  ChecklistStatus,
  RunStatus,
  TemplateKind,
  ApprovalStatus,
  UserRole
} from '@prisma/client'

// ==========================================
// Core Domain Schemas
// ==========================================

export const TenderCreateSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  agency: z.string().optional(),
  publishedAt: z.date().optional(),
  dueAt: z.date().optional(),
  sourceId: z.string().optional(),
})

export const DocumentUploadSchema = z.object({
  file: z.instanceof(File).optional(),
  url: z.string().url().optional(),
  filename: z.string().min(1, 'Filename is required'),
}).refine(data => data.file || data.url, {
  message: 'Either file or URL must be provided',
})

export const FieldExtractionSchema = z.object({
  key: z.enum(['scope', 'eligibility', 'evaluationCriteria', 'submissionMechanics', 'deadlineSubmission']),
  value: z.any(), // JSON value
  confidence: z.number().min(0).max(1),
  traceLinkIds: z.array(z.string()).min(1, 'At least one citation is required'),
})

export const TraceLinkCreateSchema = z.object({
  documentId: z.string(),
  page: z.number().min(1),
  sectionPath: z.string().optional(),
  snippet: z.string().min(1, 'Snippet is required'),
  bbox: z.object({
    x: z.number(),
    y: z.number(),
    width: z.number(),
    height: z.number(),
  }).optional(),
})

export const ChecklistItemUpdateSchema = z.object({
  status: z.nativeEnum(ChecklistStatus),
  notes: z.string().optional(),
})

export const ApprovalSchema = z.object({
  status: z.nativeEnum(ApprovalStatus),
  comment: z.string().optional(),
})

// ==========================================
// Template & Pipeline Schemas
// ==========================================

export const TemplateSchema = z.object({
  id: z.string().optional(),
  kind: z.nativeEnum(TemplateKind),
  name: z.string().min(1, 'Name is required'),
  schema: z.record(z.any()), // JSON schema
  template: z.string().min(1, 'Template content is required'),
  active: z.boolean().default(true),
})

export const PipelineStepSchema = z.object({
  id: z.string(),
  uses: z.string(),
  with: z.record(z.any()).optional(),
})

export const PipelineConfigSchema = z.object({
  name: z.string().min(1, 'Pipeline name is required'),
  steps: z.array(PipelineStepSchema).min(1, 'At least one step is required'),
})

// ==========================================
// Settings & Configuration Schemas
// ==========================================

export const SourceSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, 'Name is required'),
  description: z.string().optional(),
  baseUrl: z.string().url().optional(),
  keywords: z.array(z.string()).default([]),
  active: z.boolean().default(true),
})

export const UserUpdateSchema = z.object({
  name: z.string().optional(),
  role: z.nativeEnum(UserRole),
})

// ==========================================
// Search & Filter Schemas
// ==========================================

export const TenderFilterSchema = z.object({
  status: z.nativeEnum(TenderStatus).optional(),
  dueDateFrom: z.date().optional(),
  dueDateTo: z.date().optional(),
  agency: z.string().optional(),
  search: z.string().optional(),
  page: z.number().min(1).default(1),
  limit: z.number().min(1).max(100).default(20),
})

// ==========================================
// API Response Schemas
// ==========================================

export const ApiErrorSchema = z.object({
  error: z.string(),
  message: z.string(),
  details: z.record(z.any()).optional(),
})

export const PaginatedResponseSchema = <T extends z.ZodTypeAny>(itemSchema: T) =>
  z.object({
    data: z.array(itemSchema),
    pagination: z.object({
      page: z.number(),
      limit: z.number(),
      total: z.number(),
      totalPages: z.number(),
    }),
  })

// ==========================================
// Field Extraction Value Schemas
// ==========================================

export const ScopeValueSchema = z.object({
  objectives: z.array(z.string()),
  projectDescription: z.string(),
  deliverables: z.array(z.string()),
})

export const EligibilityValueSchema = z.object({
  requirements: z.array(z.string()),
  restrictions: z.array(z.string()),
  qualifications: z.array(z.string()),
})

export const EvaluationCriteriaValueSchema = z.object({
  criteria: z.array(z.object({
    name: z.string(),
    weight: z.number().optional(),
    description: z.string(),
  })),
  scoringMethod: z.string().optional(),
})

export const SubmissionMechanicsValueSchema = z.object({
  format: z.string(),
  method: z.string(), // email, portal, physical, etc.
  requirements: z.array(z.string()),
  contactInfo: z.object({
    email: z.string().optional(),
    phone: z.string().optional(),
    address: z.string().optional(),
  }).optional(),
})

export const DeadlineSubmissionValueSchema = z.object({
  date: z.date(),
  time: z.string().optional(),
  timezone: z.string().optional(),
  isExtendable: z.boolean().default(false),
})

// ==========================================
// Type Exports
// ==========================================

export type TenderCreate = z.infer<typeof TenderCreateSchema>
export type DocumentUpload = z.infer<typeof DocumentUploadSchema>
export type FieldExtraction = z.infer<typeof FieldExtractionSchema>
export type TraceLinkCreate = z.infer<typeof TraceLinkCreateSchema>
export type ChecklistItemUpdate = z.infer<typeof ChecklistItemUpdateSchema>
export type Approval = z.infer<typeof ApprovalSchema>
export type Template = z.infer<typeof TemplateSchema>
export type PipelineConfig = z.infer<typeof PipelineConfigSchema>
export type Source = z.infer<typeof SourceSchema>
export type UserUpdate = z.infer<typeof UserUpdateSchema>
export type TenderFilter = z.infer<typeof TenderFilterSchema>
export type ApiError = z.infer<typeof ApiErrorSchema>

// Field value types
export type ScopeValue = z.infer<typeof ScopeValueSchema>
export type EligibilityValue = z.infer<typeof EligibilityValueSchema>
export type EvaluationCriteriaValue = z.infer<typeof EvaluationCriteriaValueSchema>
export type SubmissionMechanicsValue = z.infer<typeof SubmissionMechanicsValueSchema>
export type DeadlineSubmissionValue = z.infer<typeof DeadlineSubmissionValueSchema>

// Union type for all field values
export type FieldValue =
  | ScopeValue
  | EligibilityValue
  | EvaluationCriteriaValue
  | SubmissionMechanicsValue
  | DeadlineSubmissionValue

// ==========================================
// Extended Types with Relations
// ==========================================

export interface TenderWithRelations {
  id: string
  title: string
  agency: string | null
  status: TenderStatus
  publishedAt: Date | null
  dueAt: Date | null
  createdAt: Date
  updatedAt: Date
  source: {
    id: string
    name: string
  } | null
  documents: Array<{
    id: string
    filename: string
    mime: string
    pages: number | null
    version: number
    url: string | null
  }>
  fieldExtractions: Array<{
    id: string
    key: string
    value: any
    confidence: number
    traceLinks: Array<{
      id: string
      page: number
      snippet: string
    }>
  }>
  checklistItems: Array<{
    id: string
    key: string
    label: string
    status: ChecklistStatus
    notes: string | null
  }>
  summaryBlocks: Array<{
    id: string
    blockKey: string
    contentMarkdown: string
  }>
  _count: {
    documents: number
    fieldExtractions: number
    checklistItems: number
    runs: number
  }
}

export interface RunWithLogs {
  id: string
  tenderId: string
  pipelineName: string
  status: RunStatus
  startedAt: Date
  finishedAt: Date | null
  logs: Array<{
    timestamp: Date
    level: 'info' | 'warn' | 'error'
    step: string
    message: string
    data?: any
  }>
}

export interface TraceChipProps {
  traceLinks: Array<{
    id: string
    documentId: string
    page: number
    snippet: string
    document: {
      filename: string
    }
  }>
  children: React.ReactNode
}