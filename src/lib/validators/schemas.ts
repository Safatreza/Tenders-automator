// Comprehensive Zod Schemas for Tender Automator API Validation
// Fixes all validation errors and provides type safety

import { z } from 'zod'

// ==========================================
// Base Enum Schemas
// ==========================================

export const UserRoleSchema = z.enum(['ANALYST', 'REVIEWER', 'ADMIN'])
export const TenderStatusSchema = z.enum(['DRAFT', 'PROCESSING', 'REVIEW', 'APPROVED', 'REJECTED'])
export const ChecklistStatusSchema = z.enum(['PENDING', 'OK', 'MISSING', 'N_A'])
export const RunStatusSchema = z.enum(['PENDING', 'RUNNING', 'COMPLETED', 'FAILED'])
export const ApprovalStatusSchema = z.enum(['APPROVED', 'REJECTED'])
export const TemplateKindSchema = z.enum(['SUMMARY', 'CHECKLIST'])

// ==========================================
// Common Utility Schemas
// ==========================================

export const PaginationSchema = z.object({
  page: z.string().regex(/^\d+$/).default('1').transform(Number),
  limit: z.string().regex(/^\d+$/).default('10').transform(Number)
})

export const SortingSchema = z.object({
  sortBy: z.string().default('createdAt'),
  sortOrder: z.enum(['asc', 'desc']).default('desc')
})

// ==========================================
// Tender Schemas
// ==========================================

export const CreateTenderSchema = z.object({
  title: z.string().min(1, 'Title is required').max(255, 'Title too long'),
  agency: z.string().optional(),
  sourceId: z.string().cuid().optional(),
  publishedAt: z.string().datetime().optional(),
  dueAt: z.string().datetime().optional()
})

export const UpdateTenderSchema = z.object({
  title: z.string().min(1).max(255).optional(),
  agency: z.string().optional(),
  status: TenderStatusSchema.optional(),
  publishedAt: z.string().datetime().optional(),
  dueAt: z.string().datetime().optional()
})

export const TenderQuerySchema = z.object({
  page: z.string().regex(/^\d+$/).default('1').transform(Number),
  limit: z.string().regex(/^\d+$/).default('10').transform(Number),
  status: TenderStatusSchema.optional(),
  search: z.string().optional(),
  sortBy: z.enum(['createdAt', 'updatedAt', 'title', 'dueAt']).default('createdAt'),
  sortOrder: z.enum(['asc', 'desc']).default('desc')
})

// ==========================================
// Document Schemas
// ==========================================

export const UploadDocumentSchema = z.object({
  tenderId: z.string().cuid(),
  filename: z.string().min(1, 'Filename is required'),
  mime: z.string().min(1, 'MIME type is required'),
  content: z.string().optional(),
  url: z.string().url().optional()
})

export const DocumentQuerySchema = z.object({
  tenderId: z.string().cuid().optional(),
  page: z.string().regex(/^\d+$/).default('1').transform(Number),
  limit: z.string().regex(/^\d+$/).default('10').transform(Number)
})

// ==========================================
// Pipeline & Run Schemas
// ==========================================

export const CreateRunSchema = z.object({
  tenderId: z.string().cuid('Invalid tender ID'),
  pipelineName: z.string().min(1, 'Pipeline name is required'),
  parameters: z.record(z.any()).optional()
})

export const RunQuerySchema = z.object({
  tenderId: z.string().cuid().optional(),
  pipelineName: z.string().optional(),
  status: RunStatusSchema.optional(),
  page: z.string().regex(/^\d+$/).default('1').transform(Number),
  limit: z.string().regex(/^\d+$/).default('10').transform(Number)
})

export const CreatePipelineSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  config: z.object({
    name: z.string(),
    description: z.string().optional(),
    version: z.string(),
    steps: z.array(z.object({
      id: z.string(),
      name: z.string(),
      type: z.enum(['prepare', 'extract', 'template', 'validate', 'gate']),
      config: z.record(z.any()).optional(),
      dependencies: z.array(z.string()).optional(),
      timeout: z.number().optional(),
      retries: z.number().optional()
    })),
    variables: z.record(z.any()).optional()
  }),
  active: z.boolean().default(true)
})

export const PipelineQuerySchema = z.object({
  active: z.boolean().optional(),
  search: z.string().optional(),
  page: z.string().regex(/^\d+$/).default('1').transform(Number),
  limit: z.string().regex(/^\d+$/).default('10').transform(Number)
})

// ==========================================
// User Management Schemas
// ==========================================

export const CreateUserSchema = z.object({
  email: z.string().email('Invalid email address'),
  name: z.string().min(1, 'Name is required'),
  role: UserRoleSchema.default('ANALYST')
})

export const UpdateUserSchema = z.object({
  name: z.string().min(1).optional(),
  role: UserRoleSchema.optional()
})

export const UserQuerySchema = z.object({
  role: UserRoleSchema.optional(),
  search: z.string().optional(),
  page: z.string().regex(/^\d+$/).default('1').transform(Number),
  limit: z.string().regex(/^\d+$/).default('10').transform(Number)
})

// ==========================================
// Approval Schemas
// ==========================================

export const ApprovalSchema = z.object({
  status: ApprovalStatusSchema,
  comment: z.string().optional()
})

// ==========================================
// Source Management Schemas
// ==========================================

export const CreateSourceSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().optional(),
  baseUrl: z.string().url().optional(),
  keywords: z.array(z.string()).default([]),
  active: z.boolean().default(true)
})

export const UpdateSourceSchema = z.object({
  name: z.string().min(1).optional(),
  description: z.string().optional(),
  baseUrl: z.string().url().optional(),
  keywords: z.array(z.string()).optional(),
  active: z.boolean().optional()
})

// ==========================================
// Template Schemas
// ==========================================

export const CreateTemplateSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  kind: TemplateKindSchema,
  schema: z.record(z.any()),
  template: z.string().min(1, 'Template content is required'),
  active: z.boolean().default(true)
})

export const UpdateTemplateSchema = z.object({
  name: z.string().min(1).optional(),
  schema: z.record(z.any()).optional(),
  template: z.string().min(1).optional(),
  active: z.boolean().optional()
})

export const TemplateQuerySchema = z.object({
  kind: TemplateKindSchema.optional(),
  active: z.boolean().optional(),
  page: z.string().regex(/^\d+$/).default('1').transform(Number),
  limit: z.string().regex(/^\d+$/).default('10').transform(Number)
})

// ==========================================
// File Upload Schemas
// ==========================================

export const FileUploadSchema = z.object({
  file: z.object({
    name: z.string(),
    type: z.string(),
    size: z.number().max(50 * 1024 * 1024, 'File too large (max 50MB)')
  }),
  tenderId: z.string().cuid().optional()
})

export const IngestSchema = z.object({
  source: z.enum(['file', 'url']),
  title: z.string().min(1, 'Title is required'),
  agency: z.string().optional(),
  sourceId: z.string().cuid().optional(),
  url: z.string().url().optional(),
  files: z.array(z.object({
    name: z.string(),
    type: z.string(),
    size: z.number()
  })).optional()
})

// ==========================================
// Field Extraction Schemas
// ==========================================

export const FieldExtractionQuerySchema = z.object({
  tenderId: z.string().cuid(),
  key: z.enum(['scope', 'eligibility', 'evaluationCriteria', 'submissionMechanics', 'deadlineSubmission']).optional()
})

export const UpdateFieldExtractionSchema = z.object({
  value: z.any(),
  confidence: z.number().min(0).max(1)
})

// ==========================================
// Checklist Schemas
// ==========================================

export const UpdateChecklistItemSchema = z.object({
  status: ChecklistStatusSchema,
  notes: z.string().optional()
})

export const ChecklistQuerySchema = z.object({
  tenderId: z.string().cuid(),
  status: ChecklistStatusSchema.optional()
})

// ==========================================
// Audit Log Schemas
// ==========================================

export const AuditLogQuerySchema = z.object({
  entity: z.string().optional(),
  entityId: z.string().optional(),
  actorId: z.string().cuid().optional(),
  action: z.string().optional(),
  page: z.string().regex(/^\d+$/).default('1').transform(Number),
  limit: z.string().regex(/^\d+$/).default('50').transform(Number)
})

// ==========================================
// Type Exports
// ==========================================

export type CreateTenderInput = z.infer<typeof CreateTenderSchema>
export type UpdateTenderInput = z.infer<typeof UpdateTenderSchema>
export type TenderQueryInput = z.infer<typeof TenderQuerySchema>

export type UploadDocumentInput = z.infer<typeof UploadDocumentSchema>
export type DocumentQueryInput = z.infer<typeof DocumentQuerySchema>

export type CreateRunInput = z.infer<typeof CreateRunSchema>
export type RunQueryInput = z.infer<typeof RunQuerySchema>
export type CreatePipelineInput = z.infer<typeof CreatePipelineSchema>
export type PipelineQueryInput = z.infer<typeof PipelineQuerySchema>

export type CreateUserInput = z.infer<typeof CreateUserSchema>
export type UpdateUserInput = z.infer<typeof UpdateUserSchema>
export type UserQueryInput = z.infer<typeof UserQuerySchema>

export type ApprovalInput = z.infer<typeof ApprovalSchema>

export type CreateSourceInput = z.infer<typeof CreateSourceSchema>
export type UpdateSourceInput = z.infer<typeof UpdateSourceSchema>

export type CreateTemplateInput = z.infer<typeof CreateTemplateSchema>
export type UpdateTemplateInput = z.infer<typeof UpdateTemplateSchema>
export type TemplateQueryInput = z.infer<typeof TemplateQuerySchema>

export type FileUploadInput = z.infer<typeof FileUploadSchema>
export type IngestInput = z.infer<typeof IngestSchema>

export type FieldExtractionQueryInput = z.infer<typeof FieldExtractionQuerySchema>
export type UpdateFieldExtractionInput = z.infer<typeof UpdateFieldExtractionSchema>

export type UpdateChecklistItemInput = z.infer<typeof UpdateChecklistItemSchema>
export type ChecklistQueryInput = z.infer<typeof ChecklistQuerySchema>

export type AuditLogQueryInput = z.infer<typeof AuditLogQuerySchema>