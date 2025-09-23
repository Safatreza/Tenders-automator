'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ExternalLink, FileText, MapPin } from 'lucide-react'

export interface TraceChipProps {
  id: string
  text: string
  pageNumber: number
  documentId: string
  documentName: string
  fieldKey: string
  confidence: number
  context?: string
  boundingBox?: {
    x: number
    y: number
    width: number
    height: number
  }
  className?: string
  variant?: 'inline' | 'block'
  showConfidence?: boolean
  onNavigate?: (documentId: string, pageNumber: number) => void
}

export function TraceChip({
  id,
  text,
  pageNumber,
  documentId,
  documentName,
  fieldKey,
  confidence,
  context,
  boundingBox,
  className,
  variant = 'inline',
  showConfidence = true,
  onNavigate,
}: TraceChipProps) {
  const [isOpen, setIsOpen] = useState(false)

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 0.8) return 'bg-green-100 text-green-800 border-green-200'
    if (confidence >= 0.6) return 'bg-yellow-100 text-yellow-800 border-yellow-200'
    return 'bg-red-100 text-red-800 border-red-200'
  }

  const getConfidenceLabel = (confidence: number) => {
    if (confidence >= 0.8) return 'High'
    if (confidence >= 0.6) return 'Medium'
    return 'Low'
  }

  const handleNavigate = () => {
    if (onNavigate) {
      onNavigate(documentId, pageNumber)
    }
    setIsOpen(false)
  }

  const chipContent = (
    <Badge
      variant="outline"
      className={cn(
        'cursor-pointer transition-all duration-200 hover:shadow-md',
        getConfidenceColor(confidence),
        variant === 'block' && 'inline-block mb-1 mr-1',
        className
      )}
    >
      <FileText className="w-3 h-3 mr-1" />
      {showConfidence && (
        <span className="text-xs font-medium mr-1">
          {Math.round(confidence * 100)}%
        </span>
      )}
      <span className="text-xs">p.{pageNumber}</span>
    </Badge>
  )

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        {chipContent}
      </PopoverTrigger>
      <PopoverContent className="w-80" align="start">
        <Card className="border-0 shadow-none">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center justify-between">
              <span className="flex items-center">
                <FileText className="w-4 h-4 mr-2" />
                Citation Details
              </span>
              <Badge
                variant="secondary"
                className={cn(
                  'text-xs',
                  getConfidenceColor(confidence)
                )}
              >
                {getConfidenceLabel(confidence)} Confidence
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {/* Document Info */}
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">Document</p>
              <p className="text-sm font-medium truncate" title={documentName}>
                {documentName}
              </p>
            </div>

            {/* Page Info */}
            <div className="flex items-center space-x-4">
              <div>
                <p className="text-xs text-muted-foreground">Page</p>
                <p className="text-sm font-medium">{pageNumber}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Field</p>
                <p className="text-sm font-medium capitalize">
                  {fieldKey.replace(/([A-Z])/g, ' $1').trim()}
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Confidence</p>
                <p className="text-sm font-medium">{Math.round(confidence * 100)}%</p>
              </div>
            </div>

            {/* Extracted Text */}
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">Extracted Text</p>
              <p className="text-sm bg-muted p-2 rounded text-wrap">
                "{text}"
              </p>
            </div>

            {/* Context (if available) */}
            {context && (
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">Context</p>
                <p className="text-xs text-muted-foreground bg-muted/50 p-2 rounded leading-relaxed">
                  {context}
                </p>
              </div>
            )}

            {/* Bounding Box (if available) */}
            {boundingBox && (
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground flex items-center">
                  <MapPin className="w-3 h-3 mr-1" />
                  Position
                </p>
                <p className="text-xs text-muted-foreground">
                  x: {boundingBox.x}, y: {boundingBox.y},
                  w: {boundingBox.width}, h: {boundingBox.height}
                </p>
              </div>
            )}

            {/* Navigation Button */}
            <Button
              onClick={handleNavigate}
              variant="outline"
              size="sm"
              className="w-full"
              disabled={!onNavigate}
            >
              <ExternalLink className="w-3 h-3 mr-2" />
              View in Document
            </Button>
          </CardContent>
        </Card>
      </PopoverContent>
    </Popover>
  )
}

export default TraceChip