import { z } from 'zod'

// Checklist schemas
export const ChecklistItemSchema = z.object({
  key: z.string().min(1, 'Key is required'),
  label: z.string().min(1, 'Label is required'),
  status: z.enum(['PENDING', 'OK', 'MISSING', 'N_A']),
  notes: z.string().optional(),
  traceLinkIds: z.array(z.string()).default([]),
})

export const ChecklistItemUpdateSchema = z.object({
  status: z.enum(['PENDING', 'OK', 'MISSING', 'N_A']),
  notes: z.string().optional(),
})

export const ChecklistValidationSchema = z.object({
  items: z.array(ChecklistItemSchema),
  requiredItems: z.array(z.string()).default([
    'tax-certificate',
    'iso-9001',
    'financial-statements',
    'technical-specifications',
    'legal-compliance',
  ]),
})

// Checklist template schema
export const ChecklistTemplateSchema = z.object({
  name: z.string().min(1, 'Template name is required'),
  items: z.array(z.object({
    key: z.string().min(1),
    label: z.string().min(1),
    required: z.boolean().default(false),
    category: z.string().optional(),
    description: z.string().optional(),
    validationRules: z.array(z.string()).default([]),
  })),
  metadata: z.object({
    version: z.string().default('1.0'),
    description: z.string().optional(),
    applicableFor: z.array(z.string()).default([]), // Tender types this applies to
  }),
})

// Checklist rule schema for automated checking
export const ChecklistRuleSchema = z.object({
  key: z.string().min(1),
  name: z.string().min(1),
  description: z.string(),
  condition: z.object({
    field: z.string(), // Field to check in extracted data
    operator: z.enum(['contains', 'equals', 'matches', 'exists', 'date_before', 'date_after']),
    value: z.any(), // Value to compare against
    caseSensitive: z.boolean().default(false),
  }),
  action: z.object({
    setStatus: z.enum(['OK', 'MISSING', 'PENDING']),
    addNote: z.string().optional(),
    requireManualReview: z.boolean().default(false),
  }),
})

export const BulkChecklistUpdateSchema = z.object({
  tenderId: z.string().uuid(),
  updates: z.array(z.object({
    key: z.string(),
    status: z.enum(['PENDING', 'OK', 'MISSING', 'N_A']),
    notes: z.string().optional(),
  })),
})

// Type exports
export type ChecklistItem = z.infer<typeof ChecklistItemSchema>
export type ChecklistItemUpdate = z.infer<typeof ChecklistItemUpdateSchema>
export type ChecklistValidation = z.infer<typeof ChecklistValidationSchema>
export type ChecklistTemplate = z.infer<typeof ChecklistTemplateSchema>
export type ChecklistRule = z.infer<typeof ChecklistRuleSchema>
export type BulkChecklistUpdate = z.infer<typeof BulkChecklistUpdateSchema>