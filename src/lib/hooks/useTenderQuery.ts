// React Query Integration for Tenders
// Provides server-state management with automatic caching and background updates

'use client'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useCallback } from 'react'
import type {
  TenderSummary,
  TenderWithDetails,
  TenderFilters,
  CreateTenderInput,
  UpdateTenderInput,
  APIResponse,
  PaginatedResponse
} from '@/types/api-responses'

const QUERY_KEYS = {
  tenders: ['tenders'] as const,
  tender: (id: string) => ['tender', id] as const,
  tendersWithFilters: (filters: TenderFilters) => ['tenders', 'filtered', filters] as const,
} as const

interface UseTenderQueryOptions {
  filters?: TenderFilters
  enabled?: boolean
}

export function useTenderQuery(id: string, options: { enabled?: boolean } = {}) {
  return useQuery({
    queryKey: QUERY_KEYS.tender(id),
    queryFn: async (): Promise<TenderWithDetails> => {
      const response = await fetch(`/api/tenders/${id}`)
      if (!response.ok) {
        throw new Error('Failed to fetch tender')
      }
      const result: APIResponse<TenderWithDetails> = await response.json()
      if (!result.success || !result.data) {
        throw new Error(result.error || 'Failed to fetch tender')
      }
      return result.data
    },
    enabled: options.enabled,
    staleTime: 2 * 60 * 1000, // 2 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  })
}

export function useTendersQuery(options: UseTenderQueryOptions = {}) {
  const { filters = {}, enabled = true } = options

  return useQuery({
    queryKey: QUERY_KEYS.tendersWithFilters(filters),
    queryFn: async (): Promise<PaginatedResponse<TenderSummary>['data']> => {
      const params = new URLSearchParams()

      if (filters.status) params.append('status', filters.status)
      if (filters.search) params.append('search', filters.search)
      if (filters.sourceId) params.append('sourceId', filters.sourceId)
      if (filters.page) params.append('page', filters.page.toString())
      if (filters.limit) params.append('limit', filters.limit.toString())
      if (filters.sortBy) params.append('sortBy', filters.sortBy)
      if (filters.sortOrder) params.append('sortOrder', filters.sortOrder)

      const response = await fetch(`/api/tenders?${params}`)
      if (!response.ok) {
        throw new Error('Failed to fetch tenders')
      }

      const result: PaginatedResponse<TenderSummary> = await response.json()
      if (!result.success || !result.data) {
        throw new Error(result.error || 'Failed to fetch tenders')
      }

      return result.data
    },
    enabled,
    staleTime: 30 * 1000, // 30 seconds
    gcTime: 5 * 60 * 1000, // 5 minutes
  })
}

export function useCreateTenderMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (input: CreateTenderInput): Promise<TenderWithDetails> => {
      const response = await fetch('/api/tenders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(input)
      })

      if (!response.ok) {
        throw new Error('Failed to create tender')
      }

      const result: APIResponse<TenderWithDetails> = await response.json()
      if (!result.success || !result.data) {
        throw new Error(result.error || 'Failed to create tender')
      }

      return result.data
    },
    onSuccess: () => {
      // Invalidate and refetch tenders list
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.tenders })
    }
  })
}

export function useUpdateTenderMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({
      id,
      input
    }: {
      id: string
      input: UpdateTenderInput
    }): Promise<TenderWithDetails> => {
      const response = await fetch(`/api/tenders/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(input)
      })

      if (!response.ok) {
        throw new Error('Failed to update tender')
      }

      const result: APIResponse<TenderWithDetails> = await response.json()
      if (!result.success || !result.data) {
        throw new Error(result.error || 'Failed to update tender')
      }

      return result.data
    },
    onSuccess: (updatedTender) => {
      // Update specific tender in cache
      queryClient.setQueryData(
        QUERY_KEYS.tender(updatedTender.id),
        updatedTender
      )
      // Invalidate tenders list to reflect changes
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.tenders })
    }
  })
}

export function useDeleteTenderMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (id: string): Promise<void> => {
      const response = await fetch(`/api/tenders/${id}`, {
        method: 'DELETE'
      })

      if (!response.ok) {
        throw new Error('Failed to delete tender')
      }
    },
    onSuccess: (_, deletedId) => {
      // Remove from cache
      queryClient.removeQueries({ queryKey: QUERY_KEYS.tender(deletedId) })
      // Invalidate tenders list
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.tenders })
    }
  })
}

export function useTenderActions() {
  const queryClient = useQueryClient()

  const approveTender = useCallback(async (id: string, comment?: string): Promise<void> => {
    const response = await fetch(`/api/tenders/${id}/approve`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: 'APPROVED', comment })
    })

    if (!response.ok) {
      throw new Error('Failed to approve tender')
    }

    // Invalidate affected queries
    queryClient.invalidateQueries({ queryKey: QUERY_KEYS.tender(id) })
    queryClient.invalidateQueries({ queryKey: QUERY_KEYS.tenders })
  }, [queryClient])

  const rejectTender = useCallback(async (id: string, comment?: string): Promise<void> => {
    const response = await fetch(`/api/tenders/${id}/approve`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: 'REJECTED', comment })
    })

    if (!response.ok) {
      throw new Error('Failed to reject tender')
    }

    // Invalidate affected queries
    queryClient.invalidateQueries({ queryKey: QUERY_KEYS.tender(id) })
    queryClient.invalidateQueries({ queryKey: QUERY_KEYS.tenders })
  }, [queryClient])

  return {
    approveTender,
    rejectTender
  }
}

// Prefetch utilities for better UX
export function useTenderPrefetch() {
  const queryClient = useQueryClient()

  const prefetchTender = useCallback((id: string) => {
    queryClient.prefetchQuery({
      queryKey: QUERY_KEYS.tender(id),
      queryFn: async () => {
        const response = await fetch(`/api/tenders/${id}`)
        if (!response.ok) throw new Error('Failed to fetch tender')
        const result: APIResponse<TenderWithDetails> = await response.json()
        if (!result.success || !result.data) {
          throw new Error(result.error || 'Failed to fetch tender')
        }
        return result.data
      },
      staleTime: 2 * 60 * 1000,
    })
  }, [queryClient])

  const prefetchTenders = useCallback((filters: TenderFilters = {}) => {
    queryClient.prefetchQuery({
      queryKey: QUERY_KEYS.tendersWithFilters(filters),
      queryFn: async () => {
        const params = new URLSearchParams()
        Object.entries(filters).forEach(([key, value]) => {
          if (value !== undefined) params.append(key, value.toString())
        })

        const response = await fetch(`/api/tenders?${params}`)
        if (!response.ok) throw new Error('Failed to fetch tenders')
        const result: PaginatedResponse<TenderSummary> = await response.json()
        if (!result.success || !result.data) {
          throw new Error(result.error || 'Failed to fetch tenders')
        }
        return result.data
      },
      staleTime: 30 * 1000,
    })
  }, [queryClient])

  return {
    prefetchTender,
    prefetchTenders
  }
}