// Test Utilities
// Common testing helpers and custom render functions

import { ReactElement, ReactNode } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SessionProvider } from 'next-auth/react'
import { ErrorProvider } from '@/components/providers/ErrorProvider'
import type { Session } from 'next-auth'

// Custom render function with providers
interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  initialSession?: Session | null
  queryClient?: QueryClient
  errorConfig?: {
    enableErrorReporting?: boolean
    enableConsoleLogging?: boolean
  }
}

export function renderWithProviders(
  ui: ReactElement,
  options: CustomRenderOptions = {}
) {
  const {
    initialSession = null,
    queryClient = createTestQueryClient(),
    errorConfig = { enableErrorReporting: false, enableConsoleLogging: false },
    ...renderOptions
  } = options

  function Wrapper({ children }: { children: ReactNode }) {
    return (
      <ErrorProvider initialConfig={errorConfig}>
        <SessionProvider session={initialSession}>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </SessionProvider>
      </ErrorProvider>
    )
  }

  return render(ui, { wrapper: Wrapper, ...renderOptions })
}

// Create a test query client with disabled retries
export function createTestQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        gcTime: 0,
        staleTime: 0
      },
      mutations: {
        retry: false
      }
    }
  })
}

// Mock session factory
export function createMockSession(overrides: Partial<Session> = {}): Session {
  return {
    user: {
      id: 'test-user-id',
      email: 'test@example.com',
      name: 'Test User',
      role: 'ANALYST',
      ...overrides.user
    },
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    ...overrides
  }
}

// Mock tender data factory
export function createMockTender(overrides = {}) {
  return {
    id: 'tender-1',
    title: 'Test Tender',
    description: 'Test tender description',
    organization: 'Test Organization',
    status: 'DRAFT' as const,
    estimatedValue: 100000,
    publishedAt: new Date().toISOString(),
    deadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    sourceId: 'source-1',
    source: {
      id: 'source-1',
      name: 'Test Source',
      url: 'https://example.com'
    },
    _count: {
      documents: 2,
      extractions: 5
    },
    ...overrides
  }
}

// Mock document data factory
export function createMockDocument(overrides = {}) {
  return {
    id: 'doc-1',
    filename: 'test-document.pdf',
    originalName: 'test-document.pdf',
    mimeType: 'application/pdf',
    size: 1024000,
    pages: 10,
    uploadedAt: new Date().toISOString(),
    tenderId: 'tender-1',
    blobUrl: 'https://example.com/document.pdf',
    ...overrides
  }
}

// Mock extraction data factory
export function createMockExtraction(overrides = {}) {
  return {
    id: 'extraction-1',
    fieldName: 'deadline',
    value: '2024-12-31',
    confidence: 0.95,
    extractedAt: new Date().toISOString(),
    tenderId: 'tender-1',
    traceLinks: [
      {
        id: 'trace-1',
        documentId: 'doc-1',
        page: 1,
        snippet: 'Applications must be submitted by December 31, 2024',
        document: {
          filename: 'test-document.pdf'
        }
      }
    ],
    ...overrides
  }
}

// Mock API response factory
export function createMockApiResponse<T>(data: T, success = true) {
  return {
    success,
    data: success ? data : null,
    error: success ? null : 'Test error message'
  }
}

// Mock paginated response factory
export function createMockPaginatedResponse<T>(
  items: T[],
  page = 1,
  limit = 10,
  total?: number
) {
  const actualTotal = total ?? items.length
  return createMockApiResponse({
    items: items.slice((page - 1) * limit, page * limit),
    pagination: {
      page,
      limit,
      total: actualTotal,
      pages: Math.ceil(actualTotal / limit)
    }
  })
}

// Wait for async operations to complete
export function waitForAsyncOperations() {
  return new Promise(resolve => setTimeout(resolve, 0))
}

// Mock file for file upload tests
export function createMockFile(
  name = 'test.pdf',
  type = 'application/pdf',
  size = 1024
) {
  return new File(['mock content'], name, { type, lastModified: Date.now() })
}

// Mock event factory
export function createMockEvent<T extends Event>(
  type: string,
  overrides: Partial<T> = {}
) {
  const event = new Event(type) as T
  Object.assign(event, overrides)
  return event
}

// Helper to find by test ID
export function getByTestId(container: HTMLElement, testId: string) {
  return container.querySelector(`[data-testid="${testId}"]`)
}

// Helper to check if element has class
export function hasClass(element: Element, className: string) {
  return element.classList.contains(className)
}

// Helper to trigger async state updates
export async function actAndWait(fn: () => void | Promise<void>) {
  await fn()
  await waitForAsyncOperations()
}

// Mock intersection observer entry
export function createMockIntersectionObserverEntry(
  target: Element,
  isIntersecting = true
): IntersectionObserverEntry {
  return {
    target,
    isIntersecting,
    intersectionRatio: isIntersecting ? 1 : 0,
    intersectionRect: isIntersecting ? target.getBoundingClientRect() : new DOMRect(),
    boundingClientRect: target.getBoundingClientRect(),
    rootBounds: new DOMRect(0, 0, 1024, 768),
    time: Date.now()
  }
}

// Re-export testing library utilities
export * from '@testing-library/react'
export * from '@testing-library/user-event'
export { renderWithProviders as render }