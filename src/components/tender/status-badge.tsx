import { cn } from '@/lib/utils'
import { TenderStatus, ChecklistStatus } from '@prisma/client'

interface StatusBadgeProps {
  status: TenderStatus | ChecklistStatus
  className?: string
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const getStatusStyles = (status: TenderStatus | ChecklistStatus) => {
    switch (status) {
      case 'DRAFT':
        return 'bg-gray-100 text-gray-800'
      case 'PROCESSING':
        return 'bg-blue-100 text-blue-800'
      case 'READY_FOR_REVIEW':
        return 'bg-yellow-100 text-yellow-800'
      case 'APPROVED':
        return 'bg-green-100 text-green-800'
      case 'REJECTED':
        return 'bg-red-100 text-red-800'
      case 'ARCHIVED':
        return 'bg-gray-100 text-gray-600'
      case 'PENDING':
        return 'bg-orange-100 text-orange-800'
      case 'OK':
        return 'bg-green-100 text-green-800'
      case 'MISSING':
        return 'bg-red-100 text-red-800'
      case 'N_A':
        return 'bg-gray-100 text-gray-600'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusLabel = (status: TenderStatus | ChecklistStatus) => {
    switch (status) {
      case 'READY_FOR_REVIEW':
        return 'Ready for Review'
      case 'N_A':
        return 'N/A'
      default:
        return status.charAt(0) + status.slice(1).toLowerCase().replace('_', ' ')
    }
  }

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
        getStatusStyles(status),
        className
      )}
    >
      {getStatusLabel(status)}
    </span>
  )
}