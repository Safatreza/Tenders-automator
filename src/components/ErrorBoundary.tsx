// Global Error Boundary Component
// Catches and handles React component errors gracefully

'use client'

import { Component, ErrorInfo, ReactNode } from 'react'
import { AlertTriangle, RefreshCw, Home, Bug } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'

interface Props {
  children: ReactNode
  fallback?: ReactNode
  onError?: (error: Error, errorInfo: ErrorInfo) => void
}

interface State {
  hasError: boolean
  error: Error | null
  errorInfo: ErrorInfo | null
  errorId: string | null
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null
    }
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    const errorId = `err_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`

    return {
      hasError: true,
      error,
      errorId
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ errorInfo })

    // Log error to monitoring service
    this.logError(error, errorInfo)

    // Call optional error handler
    this.props.onError?.(error, errorInfo)
  }

  private logError = (error: Error, errorInfo: ErrorInfo) => {
    const errorData = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      errorId: this.state.errorId,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.group('🚨 Error Boundary Caught Error')
      console.error('Error:', error)
      console.error('Component Stack:', errorInfo.componentStack)
      console.error('Error ID:', this.state.errorId)
      console.groupEnd()
    }

    // Send to error reporting service in production
    if (process.env.NODE_ENV === 'production') {
      fetch('/api/errors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(errorData)
      }).catch(reportError => {
        console.error('Failed to report error:', reportError)
      })
    }
  }

  private handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null
    })
  }

  private handleReload = () => {
    window.location.reload()
  }

  private handleGoHome = () => {
    window.location.href = '/'
  }

  render() {
    if (this.state.hasError) {
      // Use custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback
      }

      const { error, errorId } = this.state
      const isDevelopment = process.env.NODE_ENV === 'development'

      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
          <Card className="max-w-2xl w-full">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="rounded-full bg-red-100 p-3">
                  <AlertTriangle className="h-8 w-8 text-red-600" />
                </div>
              </div>
              <CardTitle className="text-2xl text-red-600">
                Something went wrong
              </CardTitle>
              <p className="text-gray-600 mt-2">
                We encountered an unexpected error. Our team has been notified.
              </p>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Error ID for support */}
              {errorId && (
                <Alert>
                  <Bug className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Error ID:</strong> {errorId}
                    <br />
                    <span className="text-sm text-gray-600">
                      Please include this ID when contacting support.
                    </span>
                  </AlertDescription>
                </Alert>
              )}

              {/* Error details in development */}
              {isDevelopment && error && (
                <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm overflow-auto max-h-48">
                  <p className="font-semibold text-red-600 mb-2">
                    {error.name}: {error.message}
                  </p>
                  {error.stack && (
                    <pre className="text-gray-700 whitespace-pre-wrap text-xs">
                      {error.stack}
                    </pre>
                  )}
                </div>
              )}

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  onClick={this.handleRetry}
                  className="flex items-center gap-2"
                >
                  <RefreshCw className="h-4 w-4" />
                  Try Again
                </Button>

                <Button
                  variant="outline"
                  onClick={this.handleReload}
                  className="flex items-center gap-2"
                >
                  <RefreshCw className="h-4 w-4" />
                  Reload Page
                </Button>

                <Button
                  variant="outline"
                  onClick={this.handleGoHome}
                  className="flex items-center gap-2"
                >
                  <Home className="h-4 w-4" />
                  Go Home
                </Button>
              </div>

              {/* Support contact */}
              <div className="text-center text-sm text-gray-500 border-t pt-4">
                <p>
                  If this problem persists, please contact{' '}
                  <a
                    href="mailto:support@example.com"
                    className="text-blue-600 hover:underline"
                  >
                    technical support
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )
    }

    return this.props.children
  }
}

// Simplified error boundary for smaller components
export function SimpleErrorBoundary({
  children,
  fallback
}: {
  children: ReactNode
  fallback?: ReactNode
}) {
  const defaultFallback = (
    <div className="p-4 text-center text-red-600 bg-red-50 rounded-lg border border-red-200">
      <AlertTriangle className="h-5 w-5 mx-auto mb-2" />
      <p className="text-sm font-medium">Something went wrong</p>
      <p className="text-xs text-red-500 mt-1">Please refresh the page</p>
    </div>
  )

  return (
    <ErrorBoundary fallback={fallback || defaultFallback}>
      {children}
    </ErrorBoundary>
  )
}

export default ErrorBoundary