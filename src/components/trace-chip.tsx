'use client'

import { useState } from 'react'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { FileText, ExternalLink } from 'lucide-react'

interface TraceLink {
  id: string
  documentId: string
  page: number
  snippet: string
  document: {
    filename: string
  }
}

interface TraceChipProps {
  traceLinks: TraceLink[]
  children?: React.ReactNode
  variant?: 'default' | 'inline' | 'button'
  onOpenDocument?: (documentId: string, page: number) => void
}

export function TraceChip({
  traceLinks,
  children,
  variant = 'default',
  onOpenDocument,
}: TraceChipProps) {
  const [isOpen, setIsOpen] = useState(false)

  if (!traceLinks || traceLinks.length === 0) {
    return (
      <Badge variant="destructive" className="text-xs">
        Missing Citation
      </Badge>
    )
  }

  const handleDocumentClick = (documentId: string, page: number) => {
    if (onOpenDocument) {
      onOpenDocument(documentId, page)
    }
  }

  const renderTrigger = () => {
    switch (variant) {
      case 'inline':
        return (
          <Button
            variant="ghost"
            size="sm"
            className="h-5 px-1 text-xs text-blue-600 hover:text-blue-800"
          >
            📎{traceLinks.length}
          </Button>
        )
      case 'button':
        return (
          <Button
            variant="outline"
            size="sm"
            className="h-6 px-2 text-xs"
          >
            <FileText className="w-3 h-3 mr-1" />
            {traceLinks.length} citation{traceLinks.length !== 1 ? 's' : ''}
          </Button>
        )
      default:
        return (
          <Badge
            variant="secondary"
            className="text-xs cursor-pointer hover:bg-blue-100"
          >
            📎 {traceLinks.length}
          </Badge>
        )
    }
  }

  return (
    <HoverCard open={isOpen} onOpenChange={setIsOpen}>
      <HoverCardTrigger asChild>
        {children ? (
          <span className="relative">
            {children}
            <sup className="ml-1">
              {renderTrigger()}
            </sup>
          </span>
        ) : (
          renderTrigger()
        )}
      </HoverCardTrigger>
      <HoverCardContent className="w-96 p-4" side="top">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold">Citations</h4>
            <Badge variant="outline" className="text-xs">
              {traceLinks.length} source{traceLinks.length !== 1 ? 's' : ''}
            </Badge>
          </div>

          <div className="space-y-2 max-h-60 overflow-y-auto">
            {traceLinks.map((link, index) => (
              <div
                key={link.id}
                className="border rounded-lg p-3 space-y-2 hover:bg-gray-50"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <FileText className="w-4 h-4 text-gray-500" />
                    <span className="text-sm font-medium truncate">
                      {link.document.filename}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="text-xs">
                      Page {link.page}
                    </Badge>
                    {onOpenDocument && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0"
                        onClick={() => handleDocumentClick(link.documentId, link.page)}
                        title="Open document at this page"
                      >
                        <ExternalLink className="w-3 h-3" />
                      </Button>
                    )}
                  </div>
                </div>

                <div className="text-xs text-gray-600 bg-gray-50 p-2 rounded border-l-2 border-blue-200">
                  <p className="italic">"{link.snippet}"</p>
                </div>
              </div>
            ))}
          </div>

          {traceLinks.length > 3 && (
            <div className="text-xs text-gray-500 text-center">
              Showing {Math.min(3, traceLinks.length)} of {traceLinks.length} citations
            </div>
          )}
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export default TraceChip