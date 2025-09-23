import { z } from 'zod'

// Template schemas
export const TemplateVariableSchema = z.object({
  name: z.string().min(1),
  type: z.enum(['string', 'number', 'date', 'boolean', 'array', 'object']),
  required: z.boolean().default(false),
  description: z.string().optional(),
  defaultValue: z.any().optional(),
  validation: z.object({
    min: z.number().optional(),
    max: z.number().optional(),
    pattern: z.string().optional(),
    enum: z.array(z.string()).optional(),
  }).optional(),
})

export const SummaryTemplateSchema = z.object({
  name: z.string().min(1, 'Template name is required'),
  description: z.string().optional(),
  version: z.string().default('1.0'),
  sections: z.array(z.object({
    key: z.string().min(1),
    title: z.string().min(1),
    template: z.string().min(1), // Handlebars template
    order: z.number().min(0),
    required: z.boolean().default(true),
    variables: z.array(z.string()).default([]),
  })),
  variables: z.array(TemplateVariableSchema).default([]),
  metadata: z.object({
    tags: z.array(z.string()).default([]),
    category: z.string().optional(),
    applicableFor: z.array(z.string()).default([]),
  }).optional(),
})

export const ChecklistTemplateCreateSchema = z.object({
  name: z.string().min(1, 'Template name is required'),
  description: z.string().optional(),
  version: z.string().default('1.0'),
  categories: z.array(z.object({
    key: z.string().min(1),
    name: z.string().min(1),
    description: z.string().optional(),
    order: z.number().min(0),
    items: z.array(z.object({
      key: z.string().min(1),
      label: z.string().min(1),
      description: z.string().optional(),
      required: z.boolean().default(false),
      autoCheck: z.object({
        enabled: z.boolean().default(false),
        field: z.string().optional(),
        condition: z.string().optional(),
      }).optional(),
      order: z.number().min(0),
    })),
  })),
  metadata: z.object({
    tags: z.array(z.string()).default([]),
    applicableFor: z.array(z.string()).default([]),
    defaultStatus: z.enum(['PENDING', 'OK', 'MISSING', 'N_A']).default('PENDING'),
  }).optional(),
})

// Template rendering schemas
export const RenderContextSchema = z.object({
  tender: z.object({
    id: z.string(),
    title: z.string(),
    agency: z.string().optional(),
    dueAt: z.date().optional(),
  }),
  fields: z.record(z.any()), // Extracted field values
  documents: z.array(z.object({
    id: z.string(),
    filename: z.string(),
    pages: z.number().optional(),
  })),
  metadata: z.record(z.any()).optional(),
})

export const TemplateRenderSchema = z.object({
  templateId: z.string().uuid(),
  context: RenderContextSchema,
  options: z.object({
    includeMetadata: z.boolean().default(true),
    maxLength: z.number().positive().optional(),
    format: z.enum(['markdown', 'html', 'text']).default('markdown'),
  }).optional(),
})

// Template validation schemas
export const TemplateValidationSchema = z.object({
  template: z.string().min(1),
  variables: z.array(TemplateVariableSchema),
  context: z.record(z.any()),
  strict: z.boolean().default(false),
})

export const TemplateTestSchema = z.object({
  templateId: z.string().uuid(),
  testCases: z.array(z.object({
    name: z.string().min(1),
    context: RenderContextSchema,
    expected: z.object({
      shouldSucceed: z.boolean(),
      contains: z.array(z.string()).optional(),
      excludes: z.array(z.string()).optional(),
    }),
  })),
})

// Import/Export schemas
export const TemplateExportSchema = z.object({
  templateIds: z.array(z.string().uuid()).min(1),
  format: z.enum(['json', 'yaml']).default('json'),
  includeMetadata: z.boolean().default(true),
})

export const TemplateImportSchema = z.object({
  templates: z.array(z.union([SummaryTemplateSchema, ChecklistTemplateCreateSchema])),
  overwrite: z.boolean().default(false),
  validateBeforeImport: z.boolean().default(true),
})

// Type exports
export type TemplateVariable = z.infer<typeof TemplateVariableSchema>
export type SummaryTemplate = z.infer<typeof SummaryTemplateSchema>
export type ChecklistTemplateCreate = z.infer<typeof ChecklistTemplateCreateSchema>
export type RenderContext = z.infer<typeof RenderContextSchema>
export type TemplateRender = z.infer<typeof TemplateRenderSchema>
export type TemplateValidation = z.infer<typeof TemplateValidationSchema>
export type TemplateTest = z.infer<typeof TemplateTestSchema>
export type TemplateExport = z.infer<typeof TemplateExportSchema>
export type TemplateImport = z.infer<typeof TemplateImportSchema>