// Optimized Tender Card Component
// React.memo with intelligent re-render prevention

'use client'

import { memo, useMemo } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, FileText, MapPin, DollarSign, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { TenderSummary } from '@/types/api-responses'

interface TenderCardProps {
  tender: TenderSummary
  onView?: (id: string) => void
  onApprove?: (id: string) => void
  onReject?: (id: string) => void
  className?: string
  showActions?: boolean
}

function TenderCardComponent({
  tender,
  onView,
  onApprove,
  onReject,
  className,
  showActions = true
}: TenderCardProps) {
  const statusConfig = useMemo(() => {
    const configs = {
      DRAFT: { variant: 'secondary' as const, color: 'text-gray-600' },
      PROCESSING: { variant: 'default' as const, color: 'text-blue-600' },
      REVIEW: { variant: 'outline' as const, color: 'text-amber-600' },
      APPROVED: { variant: 'default' as const, color: 'text-green-600' },
      REJECTED: { variant: 'destructive' as const, color: 'text-red-600' }
    }
    return configs[tender.status] || configs.DRAFT
  }, [tender.status])

  const formattedValue = useMemo(() => {
    if (!tender.estimatedValue) return 'TBD'
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(tender.estimatedValue)
  }, [tender.estimatedValue])

  const formattedDates = useMemo(() => {
    const formatDate = (date: string | Date) => {
      return new Date(date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      })
    }

    return {
      published: tender.publishedAt ? formatDate(tender.publishedAt) : 'TBD',
      deadline: tender.deadline ? formatDate(tender.deadline) : 'TBD',
      created: formatDate(tender.createdAt)
    }
  }, [tender.publishedAt, tender.deadline, tender.createdAt])

  const daysUntilDeadline = useMemo(() => {
    if (!tender.deadline) return null
    const deadline = new Date(tender.deadline)
    const now = new Date()
    const diffTime = deadline.getTime() - now.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }, [tender.deadline])

  const urgencyIndicator = useMemo(() => {
    if (!daysUntilDeadline) return null

    if (daysUntilDeadline < 0) {
      return { text: 'Expired', color: 'text-red-600 bg-red-50' }
    } else if (daysUntilDeadline <= 7) {
      return { text: `${daysUntilDeadline}d left`, color: 'text-red-600 bg-red-50' }
    } else if (daysUntilDeadline <= 14) {
      return { text: `${daysUntilDeadline}d left`, color: 'text-amber-600 bg-amber-50' }
    } else {
      return { text: `${daysUntilDeadline}d left`, color: 'text-green-600 bg-green-50' }
    }
  }, [daysUntilDeadline])

  return (
    <Card className={cn("hover:shadow-md transition-shadow duration-200", className)}>
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <CardTitle className="text-lg leading-tight mb-2 line-clamp-2">
              {tender.title}
            </CardTitle>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span className="truncate">{tender.organization}</span>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <Badge variant={statusConfig.variant} className={statusConfig.color}>
              {tender.status}
            </Badge>
            {urgencyIndicator && (
              <Badge className={cn("text-xs", urgencyIndicator.color)}>
                <Clock className="w-3 h-3 mr-1" />
                {urgencyIndicator.text}
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Key Details */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-green-600" />
            <div>
              <p className="text-gray-600">Est. Value</p>
              <p className="font-semibold">{formattedValue}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-blue-600" />
            <div>
              <p className="text-gray-600">Deadline</p>
              <p className="font-semibold">{formattedDates.deadline}</p>
            </div>
          </div>
        </div>

        {/* Description Preview */}
        {tender.description && (
          <div className="border-t pt-4">
            <p className="text-sm text-gray-700 line-clamp-3">
              {tender.description}
            </p>
          </div>
        )}

        {/* Document Count */}
        {tender._count?.documents && tender._count.documents > 0 && (
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <FileText className="w-4 h-4" />
            <span>{tender._count.documents} document{tender._count.documents !== 1 ? 's' : ''}</span>
          </div>
        )}

        {/* Actions */}
        {showActions && (
          <div className="flex gap-2 pt-4 border-t">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onView?.(tender.id)}
              className="flex-1"
            >
              View Details
            </Button>
            {tender.status === 'REVIEW' && (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onApprove?.(tender.id)}
                  className="text-green-600 hover:text-green-700 hover:bg-green-50"
                >
                  Approve
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onReject?.(tender.id)}
                  className="text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  Reject
                </Button>
              </>
            )}
          </div>
        )}

        {/* Metadata */}
        <div className="text-xs text-gray-500 pt-2 border-t">
          <div className="flex justify-between">
            <span>Created: {formattedDates.created}</span>
            {tender.source && (
              <span>Source: {tender.source.name}</span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Memoized component with intelligent comparison
export const MemoizedTenderCard = memo(TenderCardComponent, (prevProps, nextProps) => {
  // Deep comparison for tender object
  const tenderChanged = (
    prevProps.tender.id !== nextProps.tender.id ||
    prevProps.tender.status !== nextProps.tender.status ||
    prevProps.tender.title !== nextProps.tender.title ||
    prevProps.tender.updatedAt !== nextProps.tender.updatedAt
  )

  // Shallow comparison for other props
  const otherPropsChanged = (
    prevProps.onView !== nextProps.onView ||
    prevProps.onApprove !== nextProps.onApprove ||
    prevProps.onReject !== nextProps.onReject ||
    prevProps.className !== nextProps.className ||
    prevProps.showActions !== nextProps.showActions
  )

  // Only re-render if something meaningful changed
  return !tenderChanged && !otherPropsChanged
})

MemoizedTenderCard.displayName = 'MemoizedTenderCard'

export default MemoizedTenderCard