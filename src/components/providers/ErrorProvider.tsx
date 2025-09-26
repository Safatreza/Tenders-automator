// Error Provider Component
// Global error context and configuration

'use client'

import React, { createContext, useContext, ReactNode, useCallback, useState } from 'react'
import { Toaster } from 'sonner'

interface ErrorConfig {
  enableErrorReporting: boolean
  enableConsoleLogging: boolean
  maxToastDuration: number
  retryDelay: number
}

interface ErrorContextType {
  config: ErrorConfig
  updateConfig: (updates: Partial<ErrorConfig>) => void
  errorStats: {
    totalErrors: number
    recentErrors: number
    lastErrorTime: Date | null
  }
  clearStats: () => void
}

const ErrorContext = createContext<ErrorContextType | undefined>(undefined)

export function useErrorContext() {
  const context = useContext(ErrorContext)
  if (!context) {
    throw new Error('useErrorContext must be used within an ErrorProvider')
  }
  return context
}

interface ErrorProviderProps {
  children: ReactNode
  initialConfig?: Partial<ErrorConfig>
}

const DEFAULT_CONFIG: ErrorConfig = {
  enableErrorReporting: process.env.NODE_ENV === 'production',
  enableConsoleLogging: process.env.NODE_ENV === 'development',
  maxToastDuration: 8000,
  retryDelay: 1000
}

export function ErrorProvider({ children, initialConfig = {} }: ErrorProviderProps) {
  const [config, setConfig] = useState<ErrorConfig>({
    ...DEFAULT_CONFIG,
    ...initialConfig
  })

  const [errorStats, setErrorStats] = useState({
    totalErrors: 0,
    recentErrors: 0,
    lastErrorTime: null as Date | null
  })

  const updateConfig = useCallback((updates: Partial<ErrorConfig>) => {
    setConfig(prev => ({ ...prev, ...updates }))
  }, [])

  const clearStats = useCallback(() => {
    setErrorStats({
      totalErrors: 0,
      recentErrors: 0,
      lastErrorTime: null
    })
  }, [])

  // Track error statistics
  const trackError = useCallback(() => {
    setErrorStats(prev => ({
      totalErrors: prev.totalErrors + 1,
      recentErrors: prev.recentErrors + 1,
      lastErrorTime: new Date()
    }))

    // Clear recent errors count after 5 minutes
    setTimeout(() => {
      setErrorStats(prev => ({
        ...prev,
        recentErrors: Math.max(0, prev.recentErrors - 1)
      }))
    }, 5 * 60 * 1000)
  }, [])

  // Global error handler for unhandled promise rejections
  const handleUnhandledRejection = useCallback((event: PromiseRejectionEvent) => {
    trackError()

    if (config.enableConsoleLogging) {
      console.error('Unhandled promise rejection:', event.reason)
    }

    if (config.enableErrorReporting) {
      const errorData = {
        type: 'unhandled_error' as const,
        error: {
          name: 'UnhandledPromiseRejection',
          message: event.reason?.toString() || 'Promise rejected without error',
          stack: event.reason?.stack
        },
        context: {
          component: 'GlobalErrorHandler',
          operation: 'promise_rejection'
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
        // Silent fail
      })
    }

    // Prevent default browser error handling
    event.preventDefault()
  }, [config, trackError])

  // Global error handler for JavaScript errors
  const handleError = useCallback((event: ErrorEvent) => {
    trackError()

    if (config.enableConsoleLogging) {
      console.error('Global error:', event.error || event.message)
    }

    if (config.enableErrorReporting) {
      const errorData = {
        type: 'unhandled_error' as const,
        error: {
          name: event.error?.name || 'JavaScriptError',
          message: event.message || 'JavaScript error occurred',
          stack: event.error?.stack
        },
        context: {
          component: 'GlobalErrorHandler',
          operation: 'javascript_error',
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno
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
        // Silent fail
      })
    }
  }, [config, trackError])

  // Setup global error handlers
  React.useEffect(() => {
    window.addEventListener('unhandledrejection', handleUnhandledRejection)
    window.addEventListener('error', handleError)

    return () => {
      window.removeEventListener('unhandledrejection', handleUnhandledRejection)
      window.removeEventListener('error', handleError)
    }
  }, [handleUnhandledRejection, handleError])

  const value: ErrorContextType = {
    config,
    updateConfig,
    errorStats,
    clearStats
  }

  return (
    <ErrorContext.Provider value={value}>
      {children}
      <Toaster
        position="top-right"
        expand
        richColors
        closeButton
        toastOptions={{
          duration: config.maxToastDuration,
          style: {
            background: 'white',
            border: '1px solid #e5e7eb',
            color: '#374151'
          }
        }}
      />
    </ErrorContext.Provider>
  )
}

// Development tools for error testing
export function ErrorTestTools() {
  if (process.env.NODE_ENV !== 'development') {
    return null
  }

  const triggerError = () => {
    throw new Error('Test error for development')
  }

  const triggerAsyncError = async () => {
    await new Promise(resolve => setTimeout(resolve, 100))
    throw new Error('Test async error for development')
  }

  const triggerPromiseRejection = () => {
    Promise.reject(new Error('Test promise rejection for development'))
  }

  return (
    <div className="fixed bottom-4 left-4 bg-yellow-100 border border-yellow-300 rounded-lg p-4 space-y-2 z-50">
      <h3 className="font-semibold text-yellow-800">Error Testing Tools</h3>
      <div className="space-x-2">
        <button
          onClick={triggerError}
          className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600"
        >
          Trigger Error
        </button>
        <button
          onClick={triggerAsyncError}
          className="px-3 py-1 bg-orange-500 text-white rounded text-sm hover:bg-orange-600"
        >
          Async Error
        </button>
        <button
          onClick={triggerPromiseRejection}
          className="px-3 py-1 bg-purple-500 text-white rounded text-sm hover:bg-purple-600"
        >
          Promise Rejection
        </button>
      </div>
    </div>
  )
}

export default ErrorProvider