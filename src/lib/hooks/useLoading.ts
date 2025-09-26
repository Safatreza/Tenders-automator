// Global Loading State Management
// Zustand-based loading state manager for the application

import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export interface LoadingState {
  operations: Record<string, boolean>
  setLoading: (operation: string, loading: boolean) => void
  isLoading: (operation: string) => boolean
  isAnyLoading: () => boolean
  clearAll: () => void
  getLoadingOperations: () => string[]
}

export const useLoading = create<LoadingState>()(
  devtools(
    (set, get) => ({
      operations: {},

      setLoading: (operation: string, loading: boolean) => {
        set(
          (state) => ({
            operations: {
              ...state.operations,
              [operation]: loading
            }
          }),
          false,
          `setLoading/${operation}/${loading}`
        )
      },

      isLoading: (operation: string) => {
        return get().operations[operation] || false
      },

      isAnyLoading: () => {
        return Object.values(get().operations).some(Boolean)
      },

      clearAll: () => {
        set(
          { operations: {} },
          false,
          'clearAll'
        )
      },

      getLoadingOperations: () => {
        const operations = get().operations
        return Object.keys(operations).filter(key => operations[key])
      }
    }),
    {
      name: 'loading-store',
      enabled: process.env.NODE_ENV === 'development'
    }
  )
)

// Predefined operation keys for consistency
export const LOADING_KEYS = {
  // Tender operations
  FETCH_TENDERS: 'fetchTenders',
  CREATE_TENDER: 'createTender',
  UPDATE_TENDER: 'updateTender',
  DELETE_TENDER: 'deleteTender',

  // Document operations
  UPLOAD_DOCUMENT: 'uploadDocument',
  PROCESS_DOCUMENT: 'processDocument',
  FETCH_DOCUMENTS: 'fetchDocuments',

  // Pipeline operations
  START_PIPELINE: 'startPipeline',
  FETCH_RUNS: 'fetchRuns',
  FETCH_PIPELINES: 'fetchPipelines',

  // User operations
  FETCH_USERS: 'fetchUsers',
  UPDATE_USER: 'updateUser',
  CREATE_USER: 'createUser',

  // Authentication
  SIGN_IN: 'signIn',
  SIGN_OUT: 'signOut',

  // Data export
  EXPORT_DATA: 'exportData',

  // Audit operations
  FETCH_AUDIT_LOGS: 'fetchAuditLogs',

  // Template operations
  FETCH_TEMPLATES: 'fetchTemplates',
  SAVE_TEMPLATE: 'saveTemplate'
} as const

// Hook for specific operation loading state
export function useOperationLoading(operation: keyof typeof LOADING_KEYS | string) {
  const { isLoading, setLoading } = useLoading()

  return {
    loading: isLoading(operation),
    setLoading: (loading: boolean) => setLoading(operation, loading),
    startLoading: () => setLoading(operation, true),
    stopLoading: () => setLoading(operation, false)
  }
}

// Hook for managing loading state of async functions
export function useAsyncOperation<T extends unknown[], R>(
  operation: string,
  asyncFn: (...args: T) => Promise<R>
) {
  const { setLoading } = useLoading()

  const execute = async (...args: T): Promise<R> => {
    try {
      setLoading(operation, true)
      const result = await asyncFn(...args)
      return result
    } finally {
      setLoading(operation, false)
    }
  }

  return execute
}

// Loading component wrapper
interface LoadingWrapperProps {
  children: React.ReactNode
  operation?: string
  fallback?: React.ReactNode
}

export function LoadingWrapper({
  children,
  operation,
  fallback = <div className="animate-pulse">Loading...</div>
}: LoadingWrapperProps) {
  const { isLoading, isAnyLoading } = useLoading()

  const loading = operation ? isLoading(operation) : isAnyLoading()

  if (loading) {
    return <>{fallback}</>
  }

  return <>{children}</>
}