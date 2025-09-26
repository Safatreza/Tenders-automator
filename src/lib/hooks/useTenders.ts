// Tenders Data Management Hook
// Optimized state management with caching and optimistic updates

'use client'

import { useState, useCallback, useEffect } from 'react'
import { useLoading, LOADING_KEYS } from './useLoading'
import type {
  TenderSummary,
  TenderWithDetails,
  TenderFilters,
  CreateTenderInput,
  UpdateTenderInput,
  APIResponse,
  PaginatedResponse
} from '@/types/api-responses'

export interface UseTendersOptions {
  initialFilters?: TenderFilters
  autoFetch?: boolean
  cacheTime?: number
}

export interface UseTendersReturn {
  tenders: TenderSummary[]
  loading: boolean
  error: string | null
  filters: TenderFilters
  pagination: {
    page: number
    limit: number
    total: number
    pages: number
  } | null

  // Actions
  refetch: () => Promise<void>
  setFilters: (filters: Partial<TenderFilters>) => void
  createTender: (input: CreateTenderInput) => Promise<TenderWithDetails>
  updateTender: (id: string, input: UpdateTenderInput) => Promise<TenderWithDetails>
  deleteTender: (id: string) => Promise<void>
  approveTender: (id: string, comment?: string) => Promise<void>
  rejectTender: (id: string, comment?: string) => Promise<void>
}

// Cache for tender data
const tenderCache = new Map<string, {
  data: TenderSummary[]
  timestamp: number
  pagination: any
}>()

const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes

export function useTenders(options: UseTendersOptions = {}): UseTendersReturn {
  const {
    initialFilters = {},
    autoFetch = true,
    cacheTime = CACHE_DURATION
  } = options

  const [tenders, setTenders] = useState<TenderSummary[]>([])
  const [error, setError] = useState<string | null>(null)
  const [filters, setFiltersState] = useState<TenderFilters>(initialFilters)
  const [pagination, setPagination] = useState<{
    page: number
    limit: number
    total: number
    pages: number
  } | null>(null)

  const { isLoading, setLoading } = useLoading()
  const loading = isLoading(LOADING_KEYS.FETCH_TENDERS)

  // Generate cache key from filters
  const getCacheKey = useCallback((filterObj: TenderFilters) => {
    return JSON.stringify({
      ...filterObj,
      sortBy: filterObj.sortBy || 'createdAt',
      sortOrder: filterObj.sortOrder || 'desc'
    })
  }, [])

  // Fetch tenders from API
  const fetchTenders = useCallback(async (filterObj: TenderFilters = filters) => {
    const cacheKey = getCacheKey(filterObj)
    const cached = tenderCache.get(cacheKey)

    // Return cached data if valid
    if (cached && (Date.now() - cached.timestamp) < cacheTime) {
      setTenders(cached.data)
      setPagination(cached.pagination)
      return
    }

    try {
      setLoading(LOADING_KEYS.FETCH_TENDERS, true)
      setError(null)

      const params = new URLSearchParams()

      if (filterObj.status) params.append('status', filterObj.status)
      if (filterObj.search) params.append('search', filterObj.search)
      if (filterObj.sourceId) params.append('sourceId', filterObj.sourceId)
      if (filterObj.page) params.append('page', filterObj.page.toString())
      if (filterObj.limit) params.append('limit', filterObj.limit.toString())
      if (filterObj.sortBy) params.append('sortBy', filterObj.sortBy)
      if (filterObj.sortOrder) params.append('sortOrder', filterObj.sortOrder)

      const response = await fetch(`/api/tenders?${params}`)

      if (!response.ok) {
        throw new Error(`Failed to fetch tenders: ${response.statusText}`)
      }

      const result: PaginatedResponse<TenderSummary> = await response.json()

      if (!result.success || !result.data) {
        throw new Error(result.error || 'Failed to fetch tenders')
      }

      const tendersData = Array.isArray(result.data) ? result.data : result.data.items || []
      const paginationData = Array.isArray(result.data) ? null : result.data.pagination

      // Cache the result
      tenderCache.set(cacheKey, {
        data: tendersData,
        timestamp: Date.now(),
        pagination: paginationData
      })

      setTenders(tendersData)
      setPagination(paginationData)

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error'
      setError(errorMessage)
      console.error('Failed to fetch tenders:', err)
    } finally {
      setLoading(LOADING_KEYS.FETCH_TENDERS, false)
    }
  }, [filters, setLoading, getCacheKey, cacheTime])

  // Update filters and refetch
  const setFilters = useCallback((newFilters: Partial<TenderFilters>) => {
    const updatedFilters = { ...filters, ...newFilters }
    setFiltersState(updatedFilters)
    fetchTenders(updatedFilters)
  }, [filters, fetchTenders])

  // Optimistically update tender in local state
  const updateTenderOptimistically = useCallback((
    id: string,
    updates: Partial<TenderSummary>
  ) => {
    setTenders(prev => prev.map(tender =>
      tender.id === id ? { ...tender, ...updates } : tender
    ))
  }, [])

  // Create tender
  const createTender = useCallback(async (input: CreateTenderInput): Promise<TenderWithDetails> => {
    try {
      setLoading(LOADING_KEYS.CREATE_TENDER, true)
      setError(null)

      const response = await fetch('/api/tenders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(input)
      })

      if (!response.ok) {
        throw new Error(`Failed to create tender: ${response.statusText}`)
      }

      const result: APIResponse<TenderWithDetails> = await response.json()

      if (!result.success || !result.data) {
        throw new Error(result.error || 'Failed to create tender')
      }

      // Invalidate cache and refetch
      tenderCache.clear()
      await fetchTenders()

      return result.data

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error'
      setError(errorMessage)
      throw err
    } finally {
      setLoading(LOADING_KEYS.CREATE_TENDER, false)
    }
  }, [setLoading, fetchTenders])

  // Update tender
  const updateTender = useCallback(async (
    id: string,
    input: UpdateTenderInput
  ): Promise<TenderWithDetails> => {
    // Optimistic update
    if (input.status) {
      updateTenderOptimistically(id, { status: input.status })
    }

    try {
      setLoading(LOADING_KEYS.UPDATE_TENDER, true)
      setError(null)

      const response = await fetch(`/api/tenders/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(input)
      })

      if (!response.ok) {
        // Revert optimistic update on error
        await fetchTenders()
        throw new Error(`Failed to update tender: ${response.statusText}`)
      }

      const result: APIResponse<TenderWithDetails> = await response.json()

      if (!result.success || !result.data) {
        await fetchTenders()
        throw new Error(result.error || 'Failed to update tender')
      }

      // Refresh data
      tenderCache.clear()
      await fetchTenders()

      return result.data

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error'
      setError(errorMessage)
      throw err
    } finally {
      setLoading(LOADING_KEYS.UPDATE_TENDER, false)
    }
  }, [setLoading, fetchTenders, updateTenderOptimistically])

  // Delete tender
  const deleteTender = useCallback(async (id: string): Promise<void> => {
    // Optimistic update
    setTenders(prev => prev.filter(tender => tender.id !== id))

    try {
      setLoading(LOADING_KEYS.DELETE_TENDER, true)
      setError(null)

      const response = await fetch(`/api/tenders/${id}`, {
        method: 'DELETE'
      })

      if (!response.ok) {
        // Revert optimistic update
        await fetchTenders()
        throw new Error(`Failed to delete tender: ${response.statusText}`)
      }

      // Clear cache
      tenderCache.clear()

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error'
      setError(errorMessage)
      throw err
    } finally {
      setLoading(LOADING_KEYS.DELETE_TENDER, false)
    }
  }, [setLoading, fetchTenders])

  // Approve tender
  const approveTender = useCallback(async (id: string, comment?: string): Promise<void> => {
    updateTenderOptimistically(id, { status: 'APPROVED' })

    try {
      const response = await fetch(`/api/tenders/${id}/approve`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'APPROVED', comment })
      })

      if (!response.ok) {
        updateTenderOptimistically(id, { status: 'REVIEW' })
        throw new Error(`Failed to approve tender: ${response.statusText}`)
      }

      tenderCache.clear()

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
      throw err
    }
  }, [updateTenderOptimistically])

  // Reject tender
  const rejectTender = useCallback(async (id: string, comment?: string): Promise<void> => {
    updateTenderOptimistically(id, { status: 'REJECTED' })

    try {
      const response = await fetch(`/api/tenders/${id}/approve`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'REJECTED', comment })
      })

      if (!response.ok) {
        updateTenderOptimistically(id, { status: 'REVIEW' })
        throw new Error(`Failed to reject tender: ${response.statusText}`)
      }

      tenderCache.clear()

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
      throw err
    }
  }, [updateTenderOptimistically])

  // Auto-fetch on mount
  useEffect(() => {
    if (autoFetch) {
      fetchTenders()
    }
  }, [autoFetch, fetchTenders])

  return {
    tenders,
    loading,
    error,
    filters,
    pagination,
    refetch: () => fetchTenders(),
    setFilters,
    createTender,
    updateTender,
    deleteTender,
    approveTender,
    rejectTender
  }
}