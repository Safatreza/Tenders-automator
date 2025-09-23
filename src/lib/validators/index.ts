import { z } from 'zod'
import { NextRequest } from 'next/server'

// Generic validation helper
export function validateSchema<T>(schema: z.ZodSchema<T>, data: unknown): T {
  try {
    return schema.parse(data)
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errorMessage = error.errors
        .map(err => `${err.path.join('.')}: ${err.message}`)
        .join(', ')
      throw new Error(`Validation error: ${errorMessage}`)
    }
    throw error
  }
}

// API request validation
export async function validateRequestBody<T>(
  request: NextRequest,
  schema: z.ZodSchema<T>
): Promise<T> {
  try {
    const body = await request.json()
    return validateSchema(schema, body)
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new Error('Invalid JSON in request body')
    }
    throw error
  }
}

// URL params validation
export function validateParams<T>(
  params: Record<string, string | string[]>,
  schema: z.ZodSchema<T>
): T {
  return validateSchema(schema, params)
}

// Query params validation
export function validateSearchParams<T>(
  searchParams: URLSearchParams,
  schema: z.ZodSchema<T>
): T {
  const params: Record<string, string | string[]> = {}

  for (const [key, value] of searchParams.entries()) {
    if (params[key]) {
      // Convert to array if multiple values
      if (Array.isArray(params[key])) {
        (params[key] as string[]).push(value)
      } else {
        params[key] = [params[key] as string, value]
      }
    } else {
      params[key] = value
    }
  }

  return validateSchema(schema, params)
}

// Form data validation
export async function validateFormData<T>(
  request: NextRequest,
  schema: z.ZodSchema<T>
): Promise<T> {
  try {
    const formData = await request.formData()
    const data: Record<string, any> = {}

    for (const [key, value] of formData.entries()) {
      if (value instanceof File) {
        data[key] = value
      } else {
        // Try to parse JSON strings
        try {
          data[key] = JSON.parse(value)
        } catch {
          data[key] = value
        }
      }
    }

    return validateSchema(schema, data)
  } catch (error) {
    throw new Error('Failed to parse form data')
  }
}

// Date validation helpers
export const futureDateSchema = z.date().refine(
  date => date > new Date(),
  { message: 'Date must be in the future' }
)

export const pastDateSchema = z.date().refine(
  date => date < new Date(),
  { message: 'Date must be in the past' }
)

export const dateRangeSchema = z.object({
  from: z.date(),
  to: z.date(),
}).refine(
  data => data.from <= data.to,
  { message: 'From date must be before or equal to to date' }
)

// File validation helpers
export const fileTypeSchema = (allowedTypes: string[]) =>
  z.instanceof(File).refine(
    file => allowedTypes.includes(file.type),
    { message: `File type must be one of: ${allowedTypes.join(', ')}` }
  )

export const fileSizeSchema = (maxSize: number) =>
  z.instanceof(File).refine(
    file => file.size <= maxSize,
    { message: `File size must be less than ${maxSize} bytes` }
  )

// Email validation
export const emailSchema = z.string().email('Invalid email address')

// UUID validation
export const uuidSchema = z.string().uuid('Invalid UUID format')

// Pagination validation
export const paginationSchema = z.object({
  page: z.coerce.number().min(1, 'Page must be at least 1').default(1),
  limit: z.coerce.number().min(1).max(100, 'Limit must be between 1 and 100').default(20),
})

// Citation validation (for field extractions)
export const citationSchema = z.object({
  documentId: uuidSchema,
  page: z.number().min(1),
  snippet: z.string().min(10, 'Citation snippet must be at least 10 characters'),
  startPosition: z.number().min(0).optional(),
  endPosition: z.number().min(0).optional(),
})

// Trace link validation
export const traceLinkSchema = z.object({
  documentId: uuidSchema,
  page: z.number().min(1),
  snippet: z.string().min(1),
  sectionPath: z.string().optional(),
  bbox: z.object({
    x: z.number().min(0),
    y: z.number().min(0),
    width: z.number().positive(),
    height: z.number().positive(),
  }).optional(),
})

// Confidence validation
export const confidenceSchema = z.number().min(0).max(1)

// Status validation helpers
export const tenderStatusSchema = z.enum([
  'DRAFT',
  'PROCESSING',
  'READY_FOR_REVIEW',
  'APPROVED',
  'REJECTED',
  'ARCHIVED'
])

export const checklistStatusSchema = z.enum([
  'PENDING',
  'OK',
  'MISSING',
  'N_A'
])

export const runStatusSchema = z.enum([
  'PENDING',
  'RUNNING',
  'COMPLETED',
  'FAILED',
  'CANCELLED'
])

export const userRoleSchema = z.enum([
  'ANALYST',
  'REVIEWER',
  'ADMIN'
])

// Validation error formatter
export function formatValidationError(error: z.ZodError): string {
  return error.errors
    .map(err => {
      const path = err.path.length > 0 ? `${err.path.join('.')}: ` : ''
      return `${path}${err.message}`
    })
    .join('; ')
}

// Safe parsing wrapper
export function safeParse<T>(
  schema: z.ZodSchema<T>,
  data: unknown
): { success: true; data: T } | { success: false; error: string } {
  try {
    const result = schema.safeParse(data)
    if (result.success) {
      return { success: true, data: result.data }
    } else {
      return { success: false, error: formatValidationError(result.error) }
    }
  } catch (error) {
    return { success: false, error: 'Validation failed' }
  }
}