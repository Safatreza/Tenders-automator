// Virtualized Tender List Component
// Optimized rendering for large lists using react-window

'use client'

import { useMemo, forwardRef, useCallback } from 'react'
import { FixedSizeList as List, ListChildComponentProps } from 'react-window'
import { MemoizedTenderCard } from './MemoizedTenderCard'
import { cn } from '@/lib/utils'
import type { TenderSummary } from '@/types/api-responses'

interface VirtualizedTenderListProps {
  tenders: TenderSummary[]
  height: number
  itemHeight?: number
  onView?: (id: string) => void
  onApprove?: (id: string) => void
  onReject?: (id: string) => void
  className?: string
  showActions?: boolean
  overscan?: number
}

interface ItemData {
  tenders: TenderSummary[]
  onView?: (id: string) => void
  onApprove?: (id: string) => void
  onReject?: (id: string) => void
  showActions?: boolean
}

const TenderListItem = forwardRef<HTMLDivElement, ListChildComponentProps<ItemData>>(
  ({ index, style, data }, ref) => {
    const { tenders, onView, onApprove, onReject, showActions } = data
    const tender = tenders[index]

    if (!tender) {
      return (
        <div ref={ref} style={style} className="p-4">
          <div className="animate-pulse bg-gray-200 rounded-lg h-48" />
        </div>
      )
    }

    return (
      <div ref={ref} style={style} className="p-4">
        <MemoizedTenderCard
          tender={tender}
          onView={onView}
          onApprove={onApprove}
          onReject={onReject}
          showActions={showActions}
          className="h-full"
        />
      </div>
    )
  }
)

TenderListItem.displayName = 'TenderListItem'

export function VirtualizedTenderList({
  tenders,
  height,
  itemHeight = 280,
  onView,
  onApprove,
  onReject,
  className,
  showActions = true,
  overscan = 5
}: VirtualizedTenderListProps) {
  const itemData = useMemo<ItemData>(() => ({
    tenders,
    onView,
    onApprove,
    onReject,
    showActions
  }), [tenders, onView, onApprove, onReject, showActions])

  const getItemKey = useCallback((index: number, data: ItemData) => {
    return data.tenders[index]?.id || `item-${index}`
  }, [])

  if (tenders.length === 0) {
    return (
      <div
        className={cn("flex items-center justify-center", className)}
        style={{ height }}
      >
        <div className="text-center text-gray-500">
          <p className="text-lg font-medium">No tenders found</p>
          <p className="text-sm">Try adjusting your filters</p>
        </div>
      </div>
    )
  }

  return (
    <div className={cn("border rounded-lg overflow-hidden", className)}>
      <List
        height={height}
        itemCount={tenders.length}
        itemSize={itemHeight}
        itemData={itemData}
        itemKey={getItemKey}
        overscanCount={overscan}
        className="scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
      >
        {TenderListItem}
      </List>
    </div>
  )
}

// Hook for calculating optimal list dimensions
export function useVirtualizedListDimensions() {
  const getOptimalItemHeight = useCallback((tender: TenderSummary): number => {
    let baseHeight = 200 // Base card height

    // Add height for description
    if (tender.description) {
      const lines = Math.ceil(tender.description.length / 80) // Approximate characters per line
      baseHeight += Math.min(lines * 20, 60) // Max 3 lines for description
    }

    // Add height for document count
    if (tender._count?.documents && tender._count.documents > 0) {
      baseHeight += 24 // Document count line
    }

    // Add padding and margins
    baseHeight += 48 // Card padding and margins

    return Math.max(baseHeight, 220) // Minimum height
  }, [])

  const calculateAverageHeight = useCallback((tenders: TenderSummary[]): number => {
    if (tenders.length === 0) return 280

    const totalHeight = tenders
      .slice(0, 10) // Sample first 10 items for performance
      .reduce((sum, tender) => sum + getOptimalItemHeight(tender), 0)

    return Math.ceil(totalHeight / Math.min(tenders.length, 10))
  }, [getOptimalItemHeight])

  return {
    getOptimalItemHeight,
    calculateAverageHeight
  }
}

export default VirtualizedTenderList