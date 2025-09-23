import { z } from 'zod'

// Tender schemas
export const CreateTenderSchema = z.object({
  title: z.string().min(1, 'Title is required').max(500, 'Title too long'),
  agency: z.string().optional(),
  publishedAt: z.date().optional(),
  dueAt: z.date().optional(),
  sourceId: z.string().optional(),
})

export const UpdateTenderSchema = CreateTenderSchema.partial()

export const TenderFilterSchema = z.object({
  status: z.enum(['DRAFT', 'PROCESSING', 'READY_FOR_REVIEW', 'APPROVED', 'REJECTED', 'ARCHIVED']).optional(),
  agency: z.string().optional(),
  sourceId: z.string().optional(),
  dueDateFrom: z.date().optional(),
  dueDateTo: z.date().optional(),
  search: z.string().optional(),
  page: z.number().min(1).default(1),
  limit: z.number().min(1).max(100).default(20),
})

// Field extraction schemas (5 MVP fields)
export const FieldExtractionSchema = z.object({
  scope: z.object({
    value: z.string().min(1, 'Scope is required'),
    confidence: z.number().min(0).max(1),
    citations: z.array(z.string()).min(1, 'At least one citation is required'),
  }),
  eligibility: z.object({
    value: z.string().min(1, 'Eligibility criteria is required'),
    confidence: z.number().min(0).max(1),
    citations: z.array(z.string()).min(1, 'At least one citation is required'),
  }),
  evaluationCriteria: z.object({
    value: z.string().min(1, 'Evaluation criteria is required'),
    confidence: z.number().min(0).max(1),
    citations: z.array(z.string()).min(1, 'At least one citation is required'),
  }),
  submissionMechanics: z.object({
    value: z.string().min(1, 'Submission mechanics is required'),
    confidence: z.number().min(0).max(1),
    citations: z.array(z.string()).min(1, 'At least one citation is required'),
  }),
  deadlineSubmission: z.object({
    value: z.date().refine(date => date > new Date(), {
      message: 'Deadline must be in the future',
    }),
    confidence: z.number().min(0).max(1),
    citations: z.array(z.string()).min(1, 'At least one citation is required'),
  }),
})

export const ExtractedFieldSchema = z.object({
  key: z.enum(['scope', 'eligibility', 'evaluationCriteria', 'submissionMechanics', 'deadlineSubmission']),
  value: z.any(), // JSON value
  confidence: z.number().min(0).max(1),
  traceLinkIds: z.array(z.string()),
})

// Document schemas
export const DocumentUploadSchema = z.object({
  file: z.instanceof(File),
  tenderId: z.string().uuid(),
})

export const DocumentMetadataSchema = z.object({
  filename: z.string().min(1),
  mime: z.enum(['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']),
  size: z.number().max(50 * 1024 * 1024, 'File must be less than 50MB'),
})

// Type exports
export type CreateTender = z.infer<typeof CreateTenderSchema>
export type UpdateTender = z.infer<typeof UpdateTenderSchema>
export type TenderFilter = z.infer<typeof TenderFilterSchema>
export type FieldExtraction = z.infer<typeof FieldExtractionSchema>
export type ExtractedField = z.infer<typeof ExtractedFieldSchema>
export type DocumentUpload = z.infer<typeof DocumentUploadSchema>
export type DocumentMetadata = z.infer<typeof DocumentMetadataSchema>