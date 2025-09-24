import { z } from 'zod'

// ==========================================
// Custom Validators
// ==========================================

export const isFutureDate = z.date().refine(
  (date) => date > new Date(),
  {
    message: 'Date must be in the future',
  }
)

export const isValidSHA256 = z.string().regex(
  /^[a-f0-9]{64}$/i,
  'Must be a valid SHA-256 hash'
)

export const isValidMimeType = z.string().refine(
  (mime) => [
    'application/pdf',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/msword',
    'text/plain',
  ].includes(mime),
  {
    message: 'Only PDF, DOCX, DOC, and TXT files are supported',
  }
)

export const isValidFileSize = (maxSizeMB: number) =>
  z.number().max(
    maxSizeMB * 1024 * 1024,
    `File size must be less than ${maxSizeMB}MB`
  )

export const isValidEmail = z.string().email('Must be a valid email address')

export const isValidUrl = z.string().url('Must be a valid URL')

export const isValidUUID = z.string().uuid('Must be a valid UUID')

// ==========================================
// Business Logic Validators
// ==========================================

export const validateFieldExtractionCitations = z.object({
  key: z.string(),
  value: z.any(),
  traceLinkIds: z.array(z.string()).min(1, 'At least one citation is required'),
}).refine(
  (data) => {
    // All field extractions must have citations
    return data.traceLinkIds.length > 0
  },
  {
    message: 'Field extractions must have at least one citation',
    path: ['traceLinkIds'],
  }
)

export const validateDeadlineSubmission = z.object({
  date: z.date(),
  isExtendable: z.boolean().optional(),
}).refine(
  (data) => data.date > new Date(),
  {
    message: 'Submission deadline must be in the future',
    path: ['date'],
  }
)

export const validateApprovalRequirements = z.object({
  checklistItems: z.array(z.object({
    key: z.string(),
    status: z.enum(['PENDING', 'OK', 'MISSING', 'N_A']),
  })),
}).refine(
  (data) => {
    // Cannot approve if required items are PENDING or MISSING
    const requiredItems = data.checklistItems.filter(
      item => !item.key.startsWith('optional_')
    )

    const hasBlockingItems = requiredItems.some(
      item => item.status === 'PENDING' || item.status === 'MISSING'
    )

    return !hasBlockingItems
  },
  {
    message: 'Cannot approve while required checklist items are PENDING or MISSING',
    path: ['checklistItems'],
  }
)

// ==========================================
// Template Validation
// ==========================================

export const validateHandlebarsTemplate = z.string().refine(
  (template) => {
    try {
      // Basic Handlebars syntax validation
      const openBraces = (template.match(/\{\{/g) || []).length
      const closeBraces = (template.match(/\}\}/g) || []).length
      return openBraces === closeBraces
    } catch {
      return false
    }
  },
  {
    message: 'Invalid Handlebars template syntax',
  }
)

export const validateJSONSchema = z.any().refine(
  (schema) => {
    try {
      // Basic JSON schema validation
      if (typeof schema !== 'object' || schema === null) return false
      if (schema.type && typeof schema.type !== 'string') return false
      return true
    } catch {
      return false
    }
  },
  {
    message: 'Invalid JSON schema format',
  }
)

// ==========================================
// Pipeline Validation
// ==========================================

export const validatePipelineYAML = z.string().refine(
  async (yamlString) => {
    try {
      const yaml = await import('yaml')
      const parsed = yaml.parse(yamlString)

      // Must have name and steps
      return (
        typeof parsed === 'object' &&
        parsed !== null &&
        typeof parsed.name === 'string' &&
        Array.isArray(parsed.steps) &&
        parsed.steps.length > 0
      )
    } catch {
      return false
    }
  },
  {
    message: 'Invalid pipeline YAML format',
  }
)

export const validatePipelineStep = z.object({
  id: z.string().min(1, 'Step ID is required'),
  uses: z.enum([
    'pipeline/prepare',
    'pipeline/extract',
    'pipeline/checklist',
    'pipeline/summary',
    'pipeline/human-approval',
  ]),
  with: z.record(z.any()).optional(),
}).refine(
  (step) => {
    // Validate step-specific requirements
    if (step.uses === 'pipeline/extract') {
      return step.with?.fields && Array.isArray(step.with.fields)
    }
    if (step.uses === 'pipeline/checklist' || step.uses === 'pipeline/summary') {
      return step.with?.templateId && typeof step.with.templateId === 'string'
    }
    if (step.uses === 'pipeline/human-approval') {
      return step.with?.rolesAllowed && Array.isArray(step.with.rolesAllowed)
    }
    return true
  },
  {
    message: 'Invalid step configuration for the specified step type',
  }
)

// ==========================================
// Security Validators
// ==========================================

export const sanitizeFilename = z.string().transform(
  (filename) => {
    // Remove dangerous characters and normalize
    return filename
      .replace(/[^a-zA-Z0-9._-]/g, '_')
      .replace(/_{2,}/g, '_')
      .replace(/^_+|_+$/g, '')
      .substring(0, 255)
  }
)

export const validateSecureUpload = z.object({
  filename: sanitizeFilename,
  mime: isValidMimeType,
  size: isValidFileSize(50), // 50MB max
}).refine(
  (data) => {
    // Ensure filename extension matches MIME type
    const ext = data.filename.split('.').pop()?.toLowerCase()
    const mimeExtMap: Record<string, string[]> = {
      'application/pdf': ['pdf'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['docx'],
      'application/msword': ['doc'],
      'text/plain': ['txt'],
    }

    const allowedExts = mimeExtMap[data.mime] || []
    return ext ? allowedExts.includes(ext) : false
  },
  {
    message: 'File extension does not match MIME type',
  }
)

// ==========================================
// Database Constraint Validators
// ==========================================

export const validateUniqueConstraints = {
  tenderFieldKey: z.object({
    tenderId: z.string(),
    key: z.string(),
  }),

  checklistItemKey: z.object({
    tenderId: z.string(),
    key: z.string(),
  }),

  summaryBlockKey: z.object({
    tenderId: z.string(),
    blockKey: z.string(),
  }),

  templateKindName: z.object({
    kind: z.enum(['SUMMARY', 'CHECKLIST']),
    name: z.string(),
  }),
}

// ==========================================
// API Request/Response Validators
// ==========================================

export const validateRequestBody = <T>(schema: z.ZodSchema<T>) => {
  return (body: unknown): T => {
    return schema.parse(body)
  }
}

export const validateSearchParams = <T>(schema: z.ZodSchema<T>) => {
  return (params: URLSearchParams): T => {
    const obj: Record<string, string | string[]> = {}

    for (const [key, value] of params.entries()) {
      if (obj[key]) {
        // Handle multiple values for same key
        if (Array.isArray(obj[key])) {
          (obj[key] as string[]).push(value)
        } else {
          obj[key] = [obj[key] as string, value]
        }
      } else {
        obj[key] = value
      }
    }

    return schema.parse(obj)
  }
}

// ==========================================
// Export All Validators
// ==========================================

export const validators = {
  isFutureDate,
  isValidSHA256,
  isValidMimeType,
  isValidFileSize,
  isValidEmail,
  isValidUrl,
  isValidUUID,
  validateFieldExtractionCitations,
  validateDeadlineSubmission,
  validateApprovalRequirements,
  validateHandlebarsTemplate,
  validateJSONSchema,
  validatePipelineYAML,
  validatePipelineStep,
  sanitizeFilename,
  validateSecureUpload,
  validateUniqueConstraints,
}