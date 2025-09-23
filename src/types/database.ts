// Database Types - Generated from Prisma
export * from '@prisma/client'

// Extended types for complex JSON fields
export interface BoundingBox {
  x: number
  y: number
  width: number
  height: number
}

export interface LogEntry {
  timestamp: string
  level: 'info' | 'warn' | 'error'
  step: string
  message: string
  data?: any
}

// Field extraction value types
export interface ScopeValue {
  objectives: string[]
  deliverables: string[]
  timeline: string
  budget?: string
}

export interface EligibilityValue {
  requirements: string[]
  restrictions: string[]
  qualifications: string[]
}

export interface EvaluationCriteriaValue {
  criteria: Array<{
    name: string
    weight?: number
    description: string
  }>
  scoringMethod?: string
}

export interface SubmissionMechanicsValue {
  format: string
  method: string
  requirements: string[]
  contactInfo?: {
    email?: string
    phone?: string
    address?: string
  }
}

export interface DeadlineSubmissionValue {
  date: Date
  time?: string
  timezone?: string
  isExtendable: boolean
}

export type FieldValue =
  | ScopeValue
  | EligibilityValue
  | EvaluationCriteriaValue
  | SubmissionMechanicsValue
  | DeadlineSubmissionValue