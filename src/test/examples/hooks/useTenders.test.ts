// useTenders Hook Tests
// Example test suite for custom React hooks

import { describe, it, expect, vi, beforeEach } from 'vitest'
import { renderHook, waitFor } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { useTenders } from '@/lib/hooks/useTenders'
import {
  mockApiSuccess,
  mockApiError,
  createMockTender,
  createMockPaginatedResponse,
  createTestQueryClient
} from '@/test/utils'

// Mock the useLoading hook
vi.mock('@/lib/hooks/useLoading', () => ({
  useLoading: () => ({
    isLoading: vi.fn(() => false),
    setLoading: vi.fn()
  }),
  LOADING_KEYS: {
    FETCH_TENDERS: 'fetchTenders',
    CREATE_TENDER: 'createTender',
    UPDATE_TENDER: 'updateTender',
    DELETE_TENDER: 'deleteTender'
  }
}))

describe('useTenders', () => {
  beforeEach(() => {
    // Clear cache before each test
    vi.clearAllMocks()
  })

  describe('Initial State', () => {
    it('initializes with empty state', () => {
      mockApiSuccess(createMockPaginatedResponse([]))

      const { result } = renderHook(() => useTenders({
        autoFetch: false
      }))

      expect(result.current.tenders).toEqual([])
      expect(result.current.loading).toBe(false)
      expect(result.current.error).toBe(null)
      expect(result.current.pagination).toBe(null)
    })

    it('applies initial filters correctly', () => {
      const initialFilters = { status: 'APPROVED' as const }

      const { result } = renderHook(() => useTenders({
        initialFilters,
        autoFetch: false
      }))

      expect(result.current.filters).toEqual(initialFilters)
    })
  })

  describe('Data Fetching', () => {
    it('fetches tenders on mount when autoFetch is true', async () => {
      const mockTenders = [createMockTender(), createMockTender({ id: 'tender-2' })]
      mockApiSuccess(createMockPaginatedResponse(mockTenders))

      const { result } = renderHook(() => useTenders())

      await waitFor(() => {
        expect(result.current.tenders).toHaveLength(2)
      })

      expect(result.current.loading).toBe(false)
      expect(result.current.error).toBe(null)
    })

    it('does not fetch on mount when autoFetch is false', () => {
      const { result } = renderHook(() => useTenders({ autoFetch: false }))

      expect(result.current.tenders).toEqual([])
      expect(global.fetch).not.toHaveBeenCalled()
    })

    it('handles fetch errors gracefully', async () => {
      mockApiError('Failed to fetch tenders', 500)

      const { result } = renderHook(() => useTenders())

      await waitFor(() => {
        expect(result.current.error).toBe('Failed to fetch tenders: Internal Server Error')
      })

      expect(result.current.tenders).toEqual([])
      expect(result.current.loading).toBe(false)
    })
  })

  describe('Filtering', () => {
    it('applies filters and refetches data', async () => {
      const mockTenders = [createMockTender({ status: 'APPROVED' })]
      mockApiSuccess(createMockPaginatedResponse(mockTenders), 'tenders')

      const { result } = renderHook(() => useTenders({ autoFetch: false }))

      await act(async () => {
        result.current.setFilters({ status: 'APPROVED' })
      })

      await waitFor(() => {
        expect(result.current.filters).toEqual({ status: 'APPROVED' })
      })
    })

    it('constructs query parameters correctly', async () => {
      mockApiSuccess(createMockPaginatedResponse([]))

      const { result } = renderHook(() => useTenders({ autoFetch: false }))

      await act(async () => {
        result.current.setFilters({
          status: 'APPROVED',
          search: 'test query',
          page: 2,
          limit: 25
        })
      })

      await waitFor(() => {
        const fetchCall = (global.fetch as any).mock.calls[0][0]
        expect(fetchCall).toContain('status=APPROVED')
        expect(fetchCall).toContain('search=test+query')
        expect(fetchCall).toContain('page=2')
        expect(fetchCall).toContain('limit=25')
      })
    })
  })

  describe('CRUD Operations', () => {
    describe('Create Tender', () => {
      it('creates tender and refreshes list', async () => {
        const newTender = createMockTender()
        const createInput = {
          title: newTender.title,
          description: newTender.description,
          organization: newTender.organization
        }

        mockApiSuccess(newTender, 'tenders')

        const { result } = renderHook(() => useTenders({ autoFetch: false }))

        await act(async () => {
          const created = await result.current.createTender(createInput)
          expect(created).toEqual(newTender)
        })
      })

      it('handles create errors', async () => {
        mockApiError('Validation failed', 422, 'tenders')

        const { result } = renderHook(() => useTenders({ autoFetch: false }))

        await expect(act(async () => {
          await result.current.createTender({
            title: '',
            description: '',
            organization: ''
          })
        })).rejects.toThrow('Validation failed')
      })
    })

    describe('Update Tender', () => {
      it('updates tender optimistically', async () => {
        const existingTender = createMockTender({ status: 'DRAFT' })
        mockApiSuccess(createMockPaginatedResponse([existingTender]))

        const { result } = renderHook(() => useTenders())

        await waitFor(() => {
          expect(result.current.tenders).toHaveLength(1)
        })

        const updatedTender = { ...existingTender, status: 'REVIEW' as const }
        mockApiSuccess(updatedTender, `tenders/${existingTender.id}`)

        await act(async () => {
          await result.current.updateTender(existingTender.id, {
            status: 'REVIEW'
          })
        })

        // Should update optimistically
        expect(result.current.tenders[0].status).toBe('REVIEW')
      })

      it('reverts optimistic update on error', async () => {
        const existingTender = createMockTender({ status: 'DRAFT' })
        mockApiSuccess(createMockPaginatedResponse([existingTender]))

        const { result } = renderHook(() => useTenders())

        await waitFor(() => {
          expect(result.current.tenders).toHaveLength(1)
        })

        // Mock error for update
        mockApiError('Update failed', 500, `tenders/${existingTender.id}`)

        // Mock successful refetch
        mockApiSuccess(createMockPaginatedResponse([existingTender]), 'tenders')

        await expect(act(async () => {
          await result.current.updateTender(existingTender.id, {
            status: 'REVIEW'
          })
        })).rejects.toThrow('Update failed')

        // Should revert to original status
        await waitFor(() => {
          expect(result.current.tenders[0].status).toBe('DRAFT')
        })
      })
    })

    describe('Delete Tender', () => {
      it('removes tender optimistically', async () => {
        const tender1 = createMockTender({ id: 'tender-1' })
        const tender2 = createMockTender({ id: 'tender-2' })
        mockApiSuccess(createMockPaginatedResponse([tender1, tender2]))

        const { result } = renderHook(() => useTenders())

        await waitFor(() => {
          expect(result.current.tenders).toHaveLength(2)
        })

        mockApiSuccess(undefined, `tenders/${tender1.id}`)

        await act(async () => {
          await result.current.deleteTender(tender1.id)
        })

        // Should remove optimistically
        expect(result.current.tenders).toHaveLength(1)
        expect(result.current.tenders[0].id).toBe('tender-2')
      })
    })

    describe('Approval Actions', () => {
      it('approves tender with optimistic update', async () => {
        const tender = createMockTender({ status: 'REVIEW' })
        mockApiSuccess(createMockPaginatedResponse([tender]))

        const { result } = renderHook(() => useTenders())

        await waitFor(() => {
          expect(result.current.tenders).toHaveLength(1)
        })

        mockApiSuccess(undefined, `tenders/${tender.id}/approve`)

        await act(async () => {
          await result.current.approveTender(tender.id, 'Approved for processing')
        })

        expect(result.current.tenders[0].status).toBe('APPROVED')
      })

      it('rejects tender with optimistic update', async () => {
        const tender = createMockTender({ status: 'REVIEW' })
        mockApiSuccess(createMockPaginatedResponse([tender]))

        const { result } = renderHook(() => useTenders())

        await waitFor(() => {
          expect(result.current.tenders).toHaveLength(1)
        })

        mockApiSuccess(undefined, `tenders/${tender.id}/approve`)

        await act(async () => {
          await result.current.rejectTender(tender.id, 'Missing requirements')
        })

        expect(result.current.tenders[0].status).toBe('REJECTED')
      })
    })
  })

  describe('Caching', () => {
    it('uses cached data when available', async () => {
      const mockTenders = [createMockTender()]
      mockApiSuccess(createMockPaginatedResponse(mockTenders))

      // First render - should fetch
      const { result: result1 } = renderHook(() => useTenders())

      await waitFor(() => {
        expect(result1.current.tenders).toHaveLength(1)
      })

      // Clear mock calls
      vi.clearAllMocks()

      // Second render with same filters - should use cache
      const { result: result2 } = renderHook(() => useTenders())

      await waitFor(() => {
        expect(result2.current.tenders).toHaveLength(1)
      })

      // Should not have made another fetch call
      expect(global.fetch).not.toHaveBeenCalled()
    })

    it('bypasses cache after cache time expires', async () => {
      const mockTenders = [createMockTender()]
      mockApiSuccess(createMockPaginatedResponse(mockTenders))

      const { result } = renderHook(() => useTenders({
        cacheTime: 100 // 100ms cache
      }))

      await waitFor(() => {
        expect(result.current.tenders).toHaveLength(1)
      })

      // Wait for cache to expire
      await new Promise(resolve => setTimeout(resolve, 150))

      vi.clearAllMocks()
      mockApiSuccess(createMockPaginatedResponse(mockTenders))

      // Trigger refetch
      await act(async () => {
        await result.current.refetch()
      })

      // Should fetch again
      expect(global.fetch).toHaveBeenCalled()
    })
  })

  describe('Pagination', () => {
    it('handles paginated responses correctly', async () => {
      const mockTenders = [createMockTender()]
      const paginatedResponse = createMockPaginatedResponse(
        mockTenders,
        2, // page 2
        10, // limit 10
        25  // total 25
      )
      mockApiSuccess(paginatedResponse)

      const { result } = renderHook(() => useTenders({
        initialFilters: { page: 2, limit: 10 }
      }))

      await waitFor(() => {
        expect(result.current.pagination).toEqual({
          page: 2,
          limit: 10,
          total: 25,
          pages: 3
        })
      })
    })
  })
})