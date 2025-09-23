// API Types and Response Interfaces

import { z } from 'zod'
import {
  UserRole,
  TenderStatus,
  ChecklistStatus,
  RunStatus,
  TemplateKind,
  ApprovalStatus
} from '@prisma/client'

// ==========================================
// Request/Response Base Types
// ==========================================

export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

// ==========================================
// User Management
// ==========================================

export const CreateUserSchema = z.object({
  email: z.string().email(),
  name: z.string().optional(),
  role: z.nativeEnum(UserRole).default(UserRole.ANALYST),
})

export const UpdateUserSchema = z.object({
  name: z.string().optional(),
  role: z.nativeEnum(UserRole).optional(),
})

// ==========================================
// Tender Management
// ==========================================

export const CreateTenderSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  agency: z.string().optional(),
  publishedAt: z.date().optional(),
  dueAt: z.date().optional(),
  sourceId: z.string().optional(),
})

export const UpdateTenderSchema = z.object({
  title: z.string().min(1).optional(),
  agency: z.string().optional(),
  status: z.nativeEnum(TenderStatus).optional(),
  publishedAt: z.date().optional(),
  dueAt: z.date().optional(),
})

export const TenderFilterSchema = z.object({
  status: z.nativeEnum(TenderStatus).optional(),
  agency: z.string().optional(),
  dueBefore: z.date().optional(),
  dueAfter: z.date().optional(),
  sourceId: z.string().optional(),
  search: z.string().optional(),
  page: z.number().min(1).default(1),
  limit: z.number().min(1).max(100).default(20),
})

// ==========================================
// Document Upload
// ==========================================

export const DocumentUploadSchema = z.object({
  tenderId: z.string(),
  file: z.instanceof(File).optional(),
  url: z.string().url().optional(),
}).refine(data => data.file || data.url, {
  message: 'Either file or URL must be provided',
})

// ==========================================
// Field Extraction
// ==========================================

export const FieldExtractionSchema = z.object({
  key: z.enum(['scope', 'eligibility', 'evaluationCriteria', 'submissionMechanics', 'deadlineSubmission']),
  value: z.any(),
  confidence: z.number().min(0).max(1),
  traceLinkIds: z.array(z.string()).min(1, 'At least one citation is required'),
})

// ==========================================
// Checklist Management
// ==========================================

export const UpdateChecklistItemSchema = z.object({
  status: z.nativeEnum(ChecklistStatus),
  notes: z.string().optional(),
})

// ==========================================
// Approval System
// ==========================================

export const ApprovalSchema = z.object({
  status: z.nativeEnum(ApprovalStatus),
  comment: z.string().optional(),
})

// ==========================================
// Template Management
// ==========================================

export const TemplateSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  kind: z.nativeEnum(TemplateKind),
  schema: z.record(z.any()),
  template: z.string().min(1, 'Template content is required'),
  active: z.boolean().default(true),
})

// ==========================================
// Pipeline Management
// ==========================================

export const PipelineStepSchema = z.object({
  id: z.string(),
  uses: z.string(),
  with: z.record(z.any()).optional(),
})

export const PipelineConfigSchema = z.object({
  name: z.string().min(1, 'Pipeline name is required'),
  steps: z.array(PipelineStepSchema).min(1, 'At least one step is required'),
})

export const CreatePipelineSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  config: PipelineConfigSchema,
  active: z.boolean().default(true),
})

// ==========================================
// Pipeline Execution
// ==========================================

export const StartRunSchema = z.object({
  tenderId: z.string(),
  pipelineName: z.string(),
  parameters: z.record(z.any()).optional(),
})

// ==========================================
// Source Management
// ==========================================

export const SourceSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().optional(),
  baseUrl: z.string().url().optional(),
  keywords: z.array(z.string()).default([]),
  active: z.boolean().default(true),
})

// ==========================================
// Type Exports
// ==========================================

export type CreateUser = z.infer<typeof CreateUserSchema>
export type UpdateUser = z.infer<typeof UpdateUserSchema>
export type CreateTender = z.infer<typeof CreateTenderSchema>
export type UpdateTender = z.infer<typeof UpdateTenderSchema>
export type TenderFilter = z.infer<typeof TenderFilterSchema>
export type DocumentUpload = z.infer<typeof DocumentUploadSchema>
export type FieldExtraction = z.infer<typeof FieldExtractionSchema>
export type UpdateChecklistItem = z.infer<typeof UpdateChecklistItemSchema>
export type Approval = z.infer<typeof ApprovalSchema>
export type Template = z.infer<typeof TemplateSchema>
export type PipelineConfig = z.infer<typeof PipelineConfigSchema>
export type CreatePipeline = z.infer<typeof CreatePipelineSchema>
export type StartRun = z.infer<typeof StartRunSchema>
export type Source = z.infer<typeof SourceSchema>

// ==========================================
// Extended Response Types
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
    timestamp: string
    level: 'info' | 'warn' | 'error'
    step: string
    message: string
    data?: any
  }>
  error: string | null
}