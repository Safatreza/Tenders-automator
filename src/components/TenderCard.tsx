'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, Building2, FileText, Clock, ArrowRight } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'

interface TenderCardProps {
  tender: {
    id: string
    title: string
    agency: string
    status: string
    publishedAt: Date
    dueAt?: Date
    description?: string
    documentsCount?: number
  }
  onClick?: (tenderId: string) => void
  showActions?: boolean
}

const statusConfig = {
  DRAFT: { label: 'Draft', variant: 'secondary' as const },
  PROCESSING: { label: 'Processing', variant: 'default' as const },
  READY_FOR_REVIEW: { label: 'Ready for Review', variant: 'outline' as const },
  APPROVED: { label: 'Approved', variant: 'default' as const },
  REJECTED: { label: 'Rejected', variant: 'destructive' as const },
  CHANGES_REQUESTED: { label: 'Changes Requested', variant: 'secondary' as const },
}

export function TenderCard({ tender, onClick, showActions = true }: TenderCardProps) {
  const statusInfo = statusConfig[tender.status as keyof typeof statusConfig] || statusConfig.DRAFT

  const isOverdue = tender.dueAt && new Date(tender.dueAt) < new Date()
  const daysUntilDue = tender.dueAt ? formatDistanceToNow(new Date(tender.dueAt), { addSuffix: true }) : null

  const handleClick = () => {
    if (onClick) {
      onClick(tender.id)
    }
  }

  return (
    <Card className="hover:shadow-md transition-shadow cursor-pointer" onClick={handleClick}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1 flex-1">
            <CardTitle className="text-lg line-clamp-2">{tender.title}</CardTitle>
            <CardDescription className="flex items-center text-sm">
              <Building2 className="w-4 h-4 mr-1" />
              {tender.agency}
            </CardDescription>
          </div>
          <Badge variant={statusInfo.variant}>{statusInfo.label}</Badge>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        {tender.description && (
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{tender.description}</p>
        )}

        <div className="space-y-2 text-sm text-gray-500">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            <span>Published {formatDistanceToNow(new Date(tender.publishedAt), { addSuffix: true })}</span>
          </div>

          {tender.dueAt && (
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span className={isOverdue ? 'text-red-600 font-medium' : ''}>
                Due {daysUntilDue}
                {isOverdue && ' (Overdue)'}
              </span>
            </div>
          )}

          {tender.documentsCount !== undefined && (
            <div className="flex items-center">
              <FileText className="w-4 h-4 mr-2" />
              <span>{tender.documentsCount} document{tender.documentsCount !== 1 ? 's' : ''}</span>
            </div>
          )}
        </div>

        {showActions && (
          <div className="flex justify-end mt-4 pt-3 border-t">
            <Button variant="ghost" size="sm" onClick={handleClick}>
              View Details
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default TenderCard