// Comprehensive API Response Type Definitions
// Eliminates all 'any' types with proper typing

import type {
  Tender,
  Document,
  Run,
  User,
  Source,
  Template,
  FieldExtraction,
  ChecklistItem,
  SummaryBlock,
  TraceLink,
  AuditLog,
  Approval,
  Pipeline
} from '@prisma/client'

// Base API Response Structure
export interface APIResponse<T = unknown> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

// Pagination Structure
export interface PaginationInfo {
  page: number
  limit: number
  total: number
  pages: number
}

export interface PaginatedResponse<T = unknown> extends APIResponse<T[]> {
  data: {
    items: T[]
    pagination: PaginationInfo
  }
}

// Extended Model Types with Relations
export interface TenderWithDetails extends Tender {
  documents?: DocumentWithInfo[]
  fieldExtractions?: FieldExtractionWithTrace[]
  checklistItems?: ChecklistItemWithTrace[]
  summaryBlocks?: SummaryBlockWithTrace[]
  runs?: RunSummary[]
  approvals?: ApprovalWithUser[]
  source?: Source
}

export interface DocumentWithInfo extends Document {
  pages?: number
  processed?: boolean
  extractionCount?: number
}

export interface FieldExtractionWithTrace extends FieldExtraction {
  traceLinks?: TraceLinkInfo[]
}

export interface ChecklistItemWithTrace extends ChecklistItem {
  traceLinks?: TraceLinkInfo[]
}

export interface SummaryBlockWithTrace extends SummaryBlock {
  traceLinks?: TraceLinkInfo[]
}

export interface TraceLinkInfo extends TraceLink {
  document?: {
    id: string
    filename: string
  }
}

export interface RunSummary extends Run {
  tender?: {
    id: string
    title: string
  }
  duration?: number
  stepsCompleted?: number
  totalSteps?: number
}

export interface ApprovalWithUser extends Approval {
  user?: {
    id: string
    name: string | null
    email: string
  }
}

// Summary Types for Lists
export interface TenderSummary {
  id: string
  title: string
  agency?: string | null
  status: Tender['status']
  dueAt?: string | null
  progress: number
  lastRun?: string | null
  documentCount: number
  extractionProgress: number
}

export interface DocumentInfo {
  id: string
  filename: string
  mime: string
  size?: number
  pages?: number
  uploadedAt: string
  processed: boolean
}

export interface UserInfo {
  id: string
  email: string
  name?: string | null
  role: User['role']
  createdAt: string
  lastActive?: string
  activityCount: number
}

// Pipeline Execution Types
export interface PipelineStep {
  id: string
  name: string
  type: 'prepare' | 'extract' | 'template' | 'validate' | 'gate'
  config?: Record<string, unknown>
  dependencies?: string[]
  timeout?: number
  retries?: number
}

export interface PipelineConfig {
  name: string
  description?: string
  version: string
  steps: PipelineStep[]
  variables?: Record<string, unknown>
}

export interface StepResult {
  success: boolean
  data?: Record<string, unknown>
  error?: string
  logs?: Array<{
    level: 'info' | 'warn' | 'error'
    message: string
    data?: unknown
  }>
}

export interface RunResult {
  runId: string
  success: boolean
  logs?: Array<{
    timestamp: Date
    level: 'info' | 'warn' | 'error'
    step?: string
    message: string
    data?: unknown
  }>
}

// Template Types
export interface TemplateContext {
  tender: TenderWithDetails
  extractions: Record<string, FieldExtractionWithTrace>
  metadata: {
    generatedAt: Date
    templateName: string
    version: string
  }
}

export interface HandlebarsHelperOptions {
  fn: (context?: unknown) => string
  inverse: (context?: unknown) => string
  hash: Record<string, unknown>
  data?: {
    root?: unknown
  }
}

// Form Input Types
export interface CreateTenderInput {
  title: string
  agency?: string
  sourceId?: string
  publishedAt?: string
  dueAt?: string
}

export interface UpdateTenderInput {
  title?: string
  agency?: string
  status?: Tender['status']
  publishedAt?: string
  dueAt?: string
}

export interface CreateRunInput {
  tenderId: string
  pipelineName: string
  parameters?: Record<string, unknown>
}

export interface ApprovalInput {
  status: 'APPROVED' | 'REJECTED'
  comment?: string
}

export interface CreateUserInput {
  email: string
  name: string
  role: User['role']
}

export interface UpdateUserInput {
  name?: string
  role?: User['role']
}

export interface CreateSourceInput {
  name: string
  description?: string
  baseUrl?: string
  keywords?: string[]
  active?: boolean
}

export interface CreateTemplateInput {
  name: string
  kind: Template['kind']
  schema: Record<string, unknown>
  template: string
  active?: boolean
}

// Filter Types
export interface TenderFilters {
  status?: Tender['status']
  search?: string
  sourceId?: string
  page?: number
  limit?: number
  sortBy?: 'createdAt' | 'updatedAt' | 'title' | 'dueAt'
  sortOrder?: 'asc' | 'desc'
}

export interface RunFilters {
  tenderId?: string
  pipelineName?: string
  status?: Run['status']
  page?: number
  limit?: number
}

export interface UserFilters {
  role?: User['role']
  search?: string
  page?: number
  limit?: number
}

export interface AuditFilters {
  entity?: string
  entityId?: string
  actorId?: string
  action?: string
  page?: number
  limit?: number
}

// Upload Types
export interface FileUploadResult {
  documentId: string
  filename: string
  url: string
  size: number
  pages?: number
}

export interface FileUploadProgress {
  filename: string
  progress: number
  status: 'uploading' | 'processing' | 'complete' | 'error'
  error?: string
}

// Extraction Types
export interface ExtractionResult {
  key: string
  value: Record<string, unknown>
  confidence: number
  traceLinks: TraceLinkInfo[]
}

export interface ExtractionContext {
  document: DocumentWithInfo
  allDocuments: DocumentWithInfo[]
  tenderTitle?: string
}

// Error Types
export interface APIError {
  message: string
  code?: string
  field?: string
  statusCode: number
}

export interface ValidationError {
  field: string
  message: string
  code: string
}

// WebSocket Types (for real-time updates)
export interface WebSocketMessage {
  type: 'run_update' | 'tender_update' | 'approval_notification'
  data: Record<string, unknown>
  timestamp: string
}

export interface RunUpdateMessage extends WebSocketMessage {
  type: 'run_update'
  data: {
    runId: string
    status: Run['status']
    progress: number
    currentStep?: string
    logs?: Array<{
      level: 'info' | 'warn' | 'error'
      message: string
      timestamp: string
    }>
  }
}

// Chart/Analytics Types
export interface TenderStatistics {
  total: number
  byStatus: Record<Tender['status'], number>
  recentActivity: Array<{
    date: string
    created: number
    approved: number
    rejected: number
  }>
  averageProcessingTime: number
  successRate: number
}

export interface ExtractionStatistics {
  totalExtractions: number
  averageConfidence: number
  fieldPerformance: Record<string, {
    success: number
    total: number
    averageConfidence: number
  }>
}

// Component Props Types
export interface TenderCardProps {
  tender: TenderSummary
  onApprove?: (id: string) => void
  onReject?: (id: string) => void
  onClick?: (id: string) => void
  className?: string
}

export interface TraceChipProps {
  traceLink: TraceLinkInfo
  children: React.ReactNode
  className?: string
  showPopover?: boolean
}

export interface DataTableProps<T> {
  data: T[]
  columns: Array<{
    key: keyof T | string
    label: string
    render?: (value: unknown, item: T) => React.ReactNode
    sortable?: boolean
  }>
  loading?: boolean
  pagination?: PaginationInfo
  onPageChange?: (page: number) => void
  onSort?: (field: string, direction: 'asc' | 'desc') => void
}

// Hook Return Types
export interface UseTendersReturn {
  tenders: TenderSummary[]
  loading: boolean
  error: APIError | null
  refetch: () => void
  createTender: (input: CreateTenderInput) => Promise<TenderWithDetails>
  updateTender: (id: string, input: UpdateTenderInput) => Promise<TenderWithDetails>
  deleteTender: (id: string) => Promise<void>
}

export interface UseRunsReturn {
  runs: RunSummary[]
  loading: boolean
  error: APIError | null
  startRun: (input: CreateRunInput) => Promise<{ runId: string }>
  refetch: () => void
}

// Storage Types
export interface StorageMetadata {
  contentType: string
  size: number
  uploadedAt: string
  sha256?: string
  originalFilename: string
}

export interface BlobInfo {
  url: string
  pathname: string
  size: number
  downloadUrl: string
  contentType?: string
  contentDisposition?: string
}