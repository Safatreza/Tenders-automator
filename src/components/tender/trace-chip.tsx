'use client'

import { FileText, ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface TraceChipProps {
  snippet: string
  page: number
  documentId: string
  className?: string
  onClick?: () => void
  onViewDocument?: (documentId: string, page: number) => void
}

export function TraceChip({
  snippet,
  page,
  documentId,
  className,
  onClick,
  onViewDocument
}: TraceChipProps) {
  const handleViewDocument = (e: React.MouseEvent) => {
    e.stopPropagation()
    onViewDocument?.(documentId, page)
  }

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Badge
          variant="secondary"
          className={cn(
            "inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-blue-50 text-blue-700 hover:bg-blue-100 cursor-pointer transition-colors border border-blue-200",
            className
          )}
          onClick={onClick}
        >
          <FileText className="h-3 w-3" />
          p.{page}
        </Badge>
      </HoverCardTrigger>
      <HoverCardContent className="w-80" side="top">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-blue-600" />
              <span className="font-semibold text-sm">Page {page}</span>
            </div>
            <Badge variant="outline" className="text-xs">
              Document Citation
            </Badge>
          </div>

          <div className="text-sm text-gray-700 leading-relaxed">
            <div className="bg-gray-50 p-3 rounded-md border-l-4 border-blue-400">
              <span className="italic">
                "{snippet.length > 200 ? snippet.slice(0, 200) + '...' : snippet}"
              </span>
            </div>
          </div>

          {onViewDocument && (
            <div className="flex justify-end pt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleViewDocument}
                className="text-xs"
              >
                <ExternalLink className="h-3 w-3 mr-1" />
                View in Document
              </Button>
            </div>
          )}
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}