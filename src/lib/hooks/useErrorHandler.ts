// Error Handling Hook
// Centralized error handling with user-friendly notifications

'use client'

import { useCallback } from 'react'
import { toast } from 'sonner'
import { APIError, NetworkError, ValidationError, TimeoutError } from '@/lib/api/client'
import { useLoading } from './useLoading'

interface ErrorContext {
  operation?: string
  component?: string
  retryAction?: () => void
  fallbackAction?: () => void
}

interface UseErrorHandlerReturn {
  handleError: (error: Error, context?: ErrorContext) => void
  handleAsyncError: <T extends (...args: any[]) => Promise<any>>(
    fn: T,
    context?: ErrorContext
  ) => T
  clearErrors: () => void
}

export function useErrorHandler(): UseErrorHandlerReturn {
  const { setLoading } = useLoading()

  const getErrorMessage = useCallback((error: Error): string => {
    if (error instanceof APIError) {
      switch (error.status) {
        case 400:
          return 'Invalid request. Please check your input and try again.'
        case 401:
          return 'You are not authorized. Please sign in and try again.'
        case 403:
          return 'You do not have permission to perform this action.'
        case 404:
          return 'The requested resource was not found.'
        case 409:
          return 'This action conflicts with existing data. Please refresh and try again.'
        case 422:
          return 'The data provided is invalid. Please check your input.'
        case 429:
          return 'Too many requests. Please wait a moment and try again.'
        case 500:
          return 'Server error. Our team has been notified. Please try again later.'
        case 502:
        case 503:
        case 504:
          return 'Service temporarily unavailable. Please try again in a few minutes.'
        default:
          return error.message || 'An unexpected error occurred.'
      }
    }

    if (error instanceof NetworkError) {
      return 'Network error. Please check your connection and try again.'
    }

    if (error instanceof TimeoutError) {
      return 'Request timed out. Please try again.'
    }

    if (error instanceof ValidationError) {
      const firstError = error.errors[0]
      if (firstError) {
        return `Validation error: ${firstError.message}`
      }
      return 'Data validation failed. Please check your input.'
    }

    // Generic error handling
    if (error.message) {
      return error.message
    }

    return 'An unexpected error occurred. Please try again.'
  }, [])

  const getErrorActions = useCallback((error: Error, context?: ErrorContext) => {
    const actions: Array<{
      label: string
      action: () => void
      variant?: 'default' | 'destructive'
    }> = []

    // Add retry action for retryable errors
    if (
      context?.retryAction &&
      (error instanceof NetworkError ||
        error instanceof TimeoutError ||
        (error instanceof APIError && error.status >= 500))
    ) {
      actions.push({
        label: 'Retry',
        action: context.retryAction
      })
    }

    // Add fallback action if provided
    if (context?.fallbackAction) {
      actions.push({
        label: 'Go Back',
        action: context.fallbackAction
      })
    }

    return actions
  }, [])

  const reportError = useCallback((error: Error, context?: ErrorContext) => {
    // Only report unexpected errors, not user errors
    const shouldReport = !(
      error instanceof APIError && error.status >= 400 && error.status < 500
    )

    if (shouldReport) {
      const errorData = {
        type: 'unhandled_error' as const,
        error: {
          name: error.name,
          message: error.message,
          stack: error.stack
        },
        context: {
          operation: context?.operation,
          component: context?.component
        },
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent
      }

      // Send to error reporting endpoint
      fetch('/api/errors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(errorData)
      }).catch(() => {
        // Silent fail for error reporting
      })
    }
  }, [])

  const handleError = useCallback((error: Error, context?: ErrorContext) => {
    console.error('Error handled:', error, context)

    // Stop any loading states for the operation
    if (context?.operation) {
      setLoading(context.operation, false)
    }

    // Get user-friendly message
    const message = getErrorMessage(error)

    // Get available actions
    const actions = getErrorActions(error, context)

    // Report error if needed
    reportError(error, context)

    // Show toast notification
    if (actions.length > 0) {
      toast.error(message, {
        action: actions.length === 1 ? {
          label: actions[0].label,
          onClick: actions[0].action
        } : undefined,
        duration: 8000
      })

      // If multiple actions, show them as separate toasts or in a custom component
      if (actions.length > 1) {
        actions.slice(1).forEach((action, index) => {
          setTimeout(() => {
            toast(action.label, {
              action: {
                label: action.label,
                onClick: action.action
              },
              duration: 6000
            })
          }, index * 100)
        })
      }
    } else {
      toast.error(message, {
        duration: 5000
      })
    }
  }, [getErrorMessage, getErrorActions, reportError, setLoading])

  const handleAsyncError = useCallback(<T extends (...args: any[]) => Promise<any>>(
    fn: T,
    context?: ErrorContext
  ): T => {
    return (async (...args: Parameters<T>) => {
      try {
        if (context?.operation) {
          setLoading(context.operation, true)
        }

        const result = await fn(...args)

        if (context?.operation) {
          setLoading(context.operation, false)
        }

        return result
      } catch (error) {
        handleError(error instanceof Error ? error : new Error('Unknown error'), context)
        throw error
      }
    }) as T
  }, [handleError, setLoading])

  const clearErrors = useCallback(() => {
    toast.dismiss()
  }, [])

  return {
    handleError,
    handleAsyncError,
    clearErrors
  }
}

// Hook for specific operation error handling
export function useOperationErrorHandler(operation: string, component?: string) {
  const { handleError, handleAsyncError } = useErrorHandler()

  const handleOperationError = useCallback((
    error: Error,
    options?: {
      retryAction?: () => void
      fallbackAction?: () => void
    }
  ) => {
    handleError(error, {
      operation,
      component,
      ...options
    })
  }, [handleError, operation, component])

  const handleAsyncOperationError = useCallback(<T extends (...args: any[]) => Promise<any>>(
    fn: T,
    options?: {
      retryAction?: () => void
      fallbackAction?: () => void
    }
  ): T => {
    return handleAsyncError(fn, {
      operation,
      component,
      ...options
    })
  }, [handleAsyncError, operation, component])

  return {
    handleError: handleOperationError,
    handleAsyncError: handleAsyncOperationError
  }
}

// Error boundary hook for components
export function useComponentErrorHandler(componentName: string) {
  const { handleError } = useErrorHandler()

  const handleComponentError = useCallback((error: Error, errorInfo?: { componentStack?: string }) => {
    handleError(error, {
      component: componentName,
      operation: `${componentName}_render`
    })

    // Report component error
    const errorData = {
      type: 'component_error' as const,
      error: {
        name: error.name,
        message: error.message,
        stack: error.stack
      },
      context: {
        component: componentName,
        componentStack: errorInfo?.componentStack
      },
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent
    }

    fetch('/api/errors', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(errorData)
    }).catch(() => {
      // Silent fail for error reporting
    })
  }, [handleError, componentName])

  return {
    handleComponentError
  }
}