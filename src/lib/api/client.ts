// API Client with Comprehensive Error Handling
// Centralized API communication with retry logic and error recovery

import { z } from 'zod'
import type { APIResponse, PaginatedResponse } from '@/types/api-responses'

// Error types
export class APIError extends Error {
  constructor(
    message: string,
    public status: number,
    public code?: string,
    public details?: unknown
  ) {
    super(message)
    this.name = 'APIError'
  }
}

export class NetworkError extends Error {
  constructor(message: string, public originalError: Error) {
    super(message)
    this.name = 'NetworkError'
  }
}

export class ValidationError extends Error {
  constructor(
    message: string,
    public errors: z.ZodError['errors']
  ) {
    super(message)
    this.name = 'ValidationError'
  }
}

export class TimeoutError extends Error {
  constructor(message: string = 'Request timed out') {
    super(message)
    this.name = 'TimeoutError'
  }
}

// Retry configuration
interface RetryConfig {
  maxAttempts: number
  delayMs: number
  backoffFactor: number
  retryCondition?: (error: Error) => boolean
}

const DEFAULT_RETRY_CONFIG: RetryConfig = {
  maxAttempts: 3,
  delayMs: 1000,
  backoffFactor: 2,
  retryCondition: (error) => {
    if (error instanceof APIError) {
      // Retry on server errors but not client errors
      return error.status >= 500 && error.status < 600
    }
    if (error instanceof NetworkError || error instanceof TimeoutError) {
      return true
    }
    return false
  }
}

// Request configuration
interface RequestConfig {
  timeout?: number
  retries?: Partial<RetryConfig>
  validate?: z.ZodSchema
  skipErrorReporting?: boolean
}

class APIClient {
  private baseUrl: string
  private defaultHeaders: Record<string, string>
  private requestInterceptors: ((config: RequestInit) => RequestInit)[] = []
  private responseInterceptors: ((response: Response) => Promise<Response>)[] = []

  constructor(baseUrl = '/api', defaultHeaders: Record<string, string> = {}) {
    this.baseUrl = baseUrl
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      ...defaultHeaders
    }
  }

  // Add request interceptor
  addRequestInterceptor(interceptor: (config: RequestInit) => RequestInit) {
    this.requestInterceptors.push(interceptor)
  }

  // Add response interceptor
  addResponseInterceptor(interceptor: (response: Response) => Promise<Response>) {
    this.responseInterceptors.push(interceptor)
  }

  // Core request method with comprehensive error handling
  private async request<T>(
    endpoint: string,
    options: RequestInit & RequestConfig = {}
  ): Promise<T> {
    const {
      timeout = 30000,
      retries = {},
      validate,
      skipErrorReporting = false,
      ...requestOptions
    } = options

    const retryConfig = { ...DEFAULT_RETRY_CONFIG, ...retries }
    const url = `${this.baseUrl}${endpoint}`

    let lastError: Error

    for (let attempt = 1; attempt <= retryConfig.maxAttempts; attempt++) {
      try {
        // Apply request interceptors
        let config: RequestInit = {
          ...requestOptions,
          headers: {
            ...this.defaultHeaders,
            ...requestOptions.headers
          }
        }

        for (const interceptor of this.requestInterceptors) {
          config = interceptor(config)
        }

        // Create request with timeout
        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), timeout)

        config.signal = controller.signal

        let response: Response
        try {
          response = await fetch(url, config)
          clearTimeout(timeoutId)
        } catch (fetchError) {
          clearTimeout(timeoutId)

          if (fetchError instanceof Error && fetchError.name === 'AbortError') {
            throw new TimeoutError(`Request to ${endpoint} timed out after ${timeout}ms`)
          }

          throw new NetworkError(
            `Network request failed: ${fetchError instanceof Error ? fetchError.message : 'Unknown error'}`,
            fetchError instanceof Error ? fetchError : new Error('Unknown network error')
          )
        }

        // Apply response interceptors
        for (const interceptor of this.responseInterceptors) {
          response = await interceptor(response)
        }

        // Handle HTTP errors
        if (!response.ok) {
          const errorText = await response.text().catch(() => 'Unknown error')

          let errorData: { error?: string; message?: string; code?: string; details?: unknown } = {}

          try {
            errorData = JSON.parse(errorText)
          } catch {
            errorData = { error: errorText }
          }

          const errorMessage = errorData.error || errorData.message || `HTTP ${response.status}`

          const apiError = new APIError(
            errorMessage,
            response.status,
            errorData.code,
            errorData.details
          )

          // Don't retry client errors (4xx)
          if (response.status >= 400 && response.status < 500) {
            throw apiError
          }

          lastError = apiError
        } else {
          // Parse successful response
          const responseText = await response.text()

          if (!responseText) {
            return undefined as T
          }

          let data: T
          try {
            data = JSON.parse(responseText)
          } catch (parseError) {
            throw new APIError(
              'Invalid JSON response',
              response.status,
              'INVALID_JSON',
              parseError
            )
          }

          // Validate response if schema provided
          if (validate) {
            try {
              data = validate.parse(data)
            } catch (validationError) {
              if (validationError instanceof z.ZodError) {
                throw new ValidationError(
                  'Response validation failed',
                  validationError.errors
                )
              }
              throw validationError
            }
          }

          return data
        }

      } catch (error) {
        lastError = error instanceof Error ? error : new Error('Unknown error')

        // Check if we should retry
        if (
          attempt < retryConfig.maxAttempts &&
          retryConfig.retryCondition?.(lastError)
        ) {
          const delay = retryConfig.delayMs * Math.pow(retryConfig.backoffFactor, attempt - 1)
          await new Promise(resolve => setTimeout(resolve, delay))
          continue
        }

        // Report error (unless skipped)
        if (!skipErrorReporting) {
          this.reportError(lastError, { endpoint, attempt, config: options })
        }

        throw lastError
      }
    }

    throw lastError!
  }

  // Error reporting
  private reportError(error: Error, context: {
    endpoint: string
    attempt: number
    config: unknown
  }) {
    if (process.env.NODE_ENV === 'development') {
      console.group('🚨 API Error')
      console.error('Error:', error)
      console.error('Context:', context)
      console.groupEnd()
    }

    // Send to error tracking service in production
    if (process.env.NODE_ENV === 'production') {
      // Could integrate with Sentry, LogRocket, etc.
      fetch('/api/errors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'api_error',
          error: {
            name: error.name,
            message: error.message,
            stack: error.stack
          },
          context,
          timestamp: new Date().toISOString()
        })
      }).catch(() => {
        // Silent fail for error reporting
      })
    }
  }

  // Convenience methods
  async get<T>(endpoint: string, config?: RequestConfig): Promise<T> {
    return this.request<T>(endpoint, { ...config, method: 'GET' })
  }

  async post<T>(
    endpoint: string,
    data?: unknown,
    config?: RequestConfig
  ): Promise<T> {
    return this.request<T>(endpoint, {
      ...config,
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined
    })
  }

  async put<T>(
    endpoint: string,
    data?: unknown,
    config?: RequestConfig
  ): Promise<T> {
    return this.request<T>(endpoint, {
      ...config,
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined
    })
  }

  async patch<T>(
    endpoint: string,
    data?: unknown,
    config?: RequestConfig
  ): Promise<T> {
    return this.request<T>(endpoint, {
      ...config,
      method: 'PATCH',
      body: data ? JSON.stringify(data) : undefined
    })
  }

  async delete<T>(endpoint: string, config?: RequestConfig): Promise<T> {
    return this.request<T>(endpoint, { ...config, method: 'DELETE' })
  }

  // Typed API methods
  async apiRequest<T>(endpoint: string, config?: RequestConfig): Promise<APIResponse<T>> {
    return this.get<APIResponse<T>>(endpoint, config)
  }

  async paginatedRequest<T>(
    endpoint: string,
    config?: RequestConfig
  ): Promise<PaginatedResponse<T>> {
    return this.get<PaginatedResponse<T>>(endpoint, config)
  }
}

// Global API client instance
export const apiClient = new APIClient()

// Add authentication interceptor
apiClient.addRequestInterceptor((config) => {
  // Add auth headers if available
  const token = typeof window !== 'undefined' ?
    localStorage.getItem('auth-token') : null

  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`
    }
  }

  return config
})

// Add response interceptor for auth errors
apiClient.addResponseInterceptor(async (response) => {
  if (response.status === 401) {
    // Clear auth token and redirect to login
    if (typeof window !== 'undefined') {
      localStorage.removeItem('auth-token')
      window.location.href = '/auth/signin'
    }
  }

  return response
})

export default apiClient