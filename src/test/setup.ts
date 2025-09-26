// Test Environment Setup
// Global test configuration and mocks

import { beforeAll, beforeEach, afterEach, afterAll, vi } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

// Mock Next.js router
vi.mock('next/router', () => ({
  useRouter: () => ({
    route: '/',
    pathname: '/',
    query: {},
    asPath: '/',
    push: vi.fn(),
    replace: vi.fn(),
    reload: vi.fn(),
    back: vi.fn(),
    prefetch: vi.fn(),
    beforePopState: vi.fn(),
    events: {
      on: vi.fn(),
      off: vi.fn(),
      emit: vi.fn()
    }
  }),
  useSearchParams: () => new URLSearchParams(),
  usePathname: () => '/'
}))

// Mock Next.js navigation
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    refresh: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    prefetch: vi.fn()
  }),
  useSearchParams: () => new URLSearchParams(),
  usePathname: () => '/',
  redirect: vi.fn()
}))

// Mock NextAuth
vi.mock('next-auth/react', () => ({
  useSession: () => ({
    data: null,
    status: 'unauthenticated',
    update: vi.fn()
  }),
  signIn: vi.fn(),
  signOut: vi.fn(),
  getSession: vi.fn(),
  SessionProvider: ({ children }: { children: React.ReactNode }) => children
}))

// Mock environment variables
process.env.NEXTAUTH_SECRET = 'test-secret'
process.env.NEXTAUTH_URL = 'http://localhost:3000'
process.env.DATABASE_URL = 'postgresql://test:test@localhost:5432/test'

// Mock fetch globally
const mockFetch = vi.fn()
global.fetch = mockFetch

// Mock IntersectionObserver
global.IntersectionObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn()
}))

// Mock ResizeObserver
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn()
}))

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn()
  }))
})

// Mock localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn()
}
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
})

// Mock sessionStorage
const sessionStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn()
}
Object.defineProperty(window, 'sessionStorage', {
  value: sessionStorageMock
})

// Mock URL.createObjectURL
Object.defineProperty(URL, 'createObjectURL', {
  writable: true,
  value: vi.fn(() => 'mocked-url')
})

Object.defineProperty(URL, 'revokeObjectURL', {
  writable: true,
  value: vi.fn()
})

// Mock scrollTo
Object.defineProperty(window, 'scrollTo', {
  writable: true,
  value: vi.fn()
})

// Global test hooks
beforeAll(() => {
  // Setup any global state
})

beforeEach(() => {
  // Reset all mocks before each test
  vi.clearAllMocks()
  mockFetch.mockClear()
  localStorageMock.getItem.mockClear()
  localStorageMock.setItem.mockClear()
  sessionStorageMock.getItem.mockClear()
  sessionStorageMock.setItem.mockClear()
})

afterEach(() => {
  // Cleanup after each test
  cleanup()
})

afterAll(() => {
  // Global cleanup
})

// Helper function to create mock API responses
export function createMockResponse<T>(data: T, options?: {
  status?: number
  statusText?: string
  headers?: Record<string, string>
}) {
  const { status = 200, statusText = 'OK', headers = {} } = options || {}

  return {
    ok: status >= 200 && status < 300,
    status,
    statusText,
    headers: new Headers(headers),
    json: vi.fn().mockResolvedValue(data),
    text: vi.fn().mockResolvedValue(JSON.stringify(data)),
    blob: vi.fn().mockResolvedValue(new Blob([JSON.stringify(data)])),
    arrayBuffer: vi.fn().mockResolvedValue(new ArrayBuffer(0))
  } as unknown as Response
}

// Helper to mock successful API responses
export function mockApiSuccess<T>(data: T, endpoint?: string) {
  const response = createMockResponse({
    success: true,
    data,
    error: null
  })

  if (endpoint) {
    mockFetch.mockImplementation((url: string) => {
      if (typeof url === 'string' && url.includes(endpoint)) {
        return Promise.resolve(response)
      }
      return Promise.reject(new Error(`Unmocked request: ${url}`))
    })
  } else {
    mockFetch.mockResolvedValue(response)
  }

  return response
}

// Helper to mock API errors
export function mockApiError(
  error: string,
  status = 500,
  endpoint?: string
) {
  const response = createMockResponse({
    success: false,
    data: null,
    error
  }, { status })

  if (endpoint) {
    mockFetch.mockImplementation((url: string) => {
      if (typeof url === 'string' && url.includes(endpoint)) {
        return Promise.resolve(response)
      }
      return Promise.reject(new Error(`Unmocked request: ${url}`))
    })
  } else {
    mockFetch.mockResolvedValue(response)
  }

  return response
}

// Helper to mock network errors
export function mockNetworkError(endpoint?: string) {
  const error = new Error('Network error')

  if (endpoint) {
    mockFetch.mockImplementation((url: string) => {
      if (typeof url === 'string' && url.includes(endpoint)) {
        return Promise.reject(error)
      }
      return Promise.reject(new Error(`Unmocked request: ${url}`))
    })
  } else {
    mockFetch.mockRejectedValue(error)
  }

  return error
}