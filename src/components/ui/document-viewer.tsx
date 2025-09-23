'use client'

import React, { useState, useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import {
  ZoomIn,
  ZoomOut,
  RotateCw,
  Download,
  Search,
  ChevronLeft,
  ChevronRight,
  FileText,
  Maximize2,
  Minimize2,
} from 'lucide-react'

export interface DocumentPage {
  pageNumber: number
  content: string
  wordCount: number
}

export interface DocumentViewerProps {
  documentId: string
  documentName: string
  pages: DocumentPage[]
  currentPage?: number
  searchTerm?: string
  highlights?: Array<{
    pageNumber: number
    text: string
    startIndex: number
    endIndex: number
    className?: string
  }>
  className?: string
  onPageChange?: (pageNumber: number) => void
  onDownload?: () => void
  onFullscreen?: (isFullscreen: boolean) => void
}

export function DocumentViewer({
  documentId,
  documentName,
  pages,
  currentPage = 1,
  searchTerm: initialSearchTerm = '',
  highlights = [],
  className,
  onPageChange,
  onDownload,
  onFullscreen,
}: DocumentViewerProps) {
  const [zoom, setZoom] = useState(100)
  const [rotation, setRotation] = useState(0)
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm)
  const [searchResults, setSearchResults] = useState<Array<{ page: number; matches: number }>>([])
  const [isFullscreen, setIsFullscreen] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  const currentPageData = pages.find(p => p.pageNumber === currentPage)
  const totalPages = pages.length

  // Search functionality
  useEffect(() => {
    if (!searchTerm.trim()) {
      setSearchResults([])
      return
    }

    const results = pages.map(page => ({
      page: page.pageNumber,
      matches: (page.content.toLowerCase().match(new RegExp(searchTerm.toLowerCase(), 'g')) || []).length
    })).filter(result => result.matches > 0)

    setSearchResults(results)
  }, [searchTerm, pages])

  // Scroll to highlighted text
  useEffect(() => {
    if (highlights.length > 0 && contentRef.current) {
      const highlight = highlights.find(h => h.pageNumber === currentPage)
      if (highlight) {
        // In a real implementation, you'd scroll to the specific highlight
        contentRef.current.scrollTop = 0
      }
    }
  }, [currentPage, highlights])

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 25, 200))
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 25, 50))
  const handleRotate = () => setRotation(prev => (prev + 90) % 360)

  const handlePrevPage = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1
      onPageChange?.(newPage)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      const newPage = currentPage + 1
      onPageChange?.(newPage)
    }
  }

  const handlePageInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const target = e.target as HTMLInputElement
      const pageNum = parseInt(target.value)
      if (pageNum >= 1 && pageNum <= totalPages) {
        onPageChange?.(pageNum)
      }
    }
  }

  const handleFullscreen = () => {
    const newFullscreen = !isFullscreen
    setIsFullscreen(newFullscreen)
    onFullscreen?.(newFullscreen)
  }

  const highlightText = (text: string, searchTerm: string) => {
    if (!searchTerm.trim()) return text

    const regex = new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi')
    return text.replace(regex, '<mark class="bg-yellow-200 text-yellow-900">$1</mark>')
  }

  const applyHighlights = (text: string) => {
    let highlightedText = text

    // Apply search highlighting
    if (searchTerm) {
      highlightedText = highlightText(highlightedText, searchTerm)
    }

    // Apply custom highlights for current page
    const pageHighlights = highlights.filter(h => h.pageNumber === currentPage)
    pageHighlights.forEach(highlight => {
      const beforeText = highlightedText.substring(0, highlight.startIndex)
      const highlightedPart = highlightedText.substring(highlight.startIndex, highlight.endIndex)
      const afterText = highlightedText.substring(highlight.endIndex)

      highlightedText = beforeText +
        `<span class="${highlight.className || 'bg-blue-200 text-blue-900 font-medium'}">${highlightedPart}</span>` +
        afterText
    })

    return highlightedText
  }

  return (
    <Card className={cn('flex flex-col h-full', className)}>
      {/* Header */}
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center">
            <FileText className="w-5 h-5 mr-2" />
            <span className="truncate">{documentName}</span>
          </CardTitle>
          <div className="flex items-center space-x-2">
            <Badge variant="outline">
              {totalPages} page{totalPages !== 1 ? 's' : ''}
            </Badge>
            {onDownload && (
              <Button variant="outline" size="sm" onClick={onDownload}>
                <Download className="w-4 h-4" />
              </Button>
            )}
            <Button variant="outline" size="sm" onClick={handleFullscreen}>
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </Button>
          </div>
        </div>
      </CardHeader>

      {/* Toolbar */}
      <div className="px-6 pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* Page Navigation */}
            <Button
              variant="outline"
              size="sm"
              onClick={handlePrevPage}
              disabled={currentPage <= 1}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex items-center space-x-1">
              <Input
                type="number"
                min={1}
                max={totalPages}
                value={currentPage}
                onChange={(e) => onPageChange?.(parseInt(e.target.value) || 1)}
                onKeyDown={handlePageInput}
                className="w-16 text-center text-sm"
              />
              <span className="text-sm text-muted-foreground">of {totalPages}</span>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={handleNextPage}
              disabled={currentPage >= totalPages}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex items-center space-x-2">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search in document..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8 w-48 text-sm"
              />
              {searchResults.length > 0 && (
                <Badge
                  variant="secondary"
                  className="absolute -right-2 -top-2 text-xs"
                >
                  {searchResults.reduce((sum, r) => sum + r.matches, 0)}
                </Badge>
              )}
            </div>

            <Separator orientation="vertical" className="h-6" />

            {/* Zoom Controls */}
            <Button variant="outline" size="sm" onClick={handleZoomOut}>
              <ZoomOut className="w-4 h-4" />
            </Button>
            <span className="text-sm font-medium w-12 text-center">{zoom}%</span>
            <Button variant="outline" size="sm" onClick={handleZoomIn}>
              <ZoomIn className="w-4 h-4" />
            </Button>

            {/* Rotate */}
            <Button variant="outline" size="sm" onClick={handleRotate}>
              <RotateCw className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Search Results */}
        {searchResults.length > 0 && (
          <div className="mt-2 flex items-center space-x-2">
            <span className="text-xs text-muted-foreground">Found in pages:</span>
            {searchResults.map(result => (
              <Button
                key={result.page}
                variant={result.page === currentPage ? "default" : "outline"}
                size="sm"
                onClick={() => onPageChange?.(result.page)}
                className="text-xs"
              >
                {result.page} ({result.matches})
              </Button>
            ))}
          </div>
        )}
      </div>

      {/* Document Content */}
      <CardContent className="flex-1 p-0">
        <ScrollArea className="h-full">
          <div
            ref={contentRef}
            className="p-6"
            style={{
              transform: `scale(${zoom / 100}) rotate(${rotation}deg)`,
              transformOrigin: 'top left',
              minHeight: `${100 * (zoom / 100)}%`,
            }}
          >
            {currentPageData ? (
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm min-h-[800px]">
                <div className="mb-4 pb-2 border-b border-gray-100">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium text-gray-900">
                      Page {currentPageData.pageNumber}
                    </h3>
                    <Badge variant="outline" className="text-xs">
                      {currentPageData.wordCount} words
                    </Badge>
                  </div>
                </div>
                <div
                  className="prose max-w-none text-sm leading-relaxed whitespace-pre-wrap"
                  dangerouslySetInnerHTML={{
                    __html: applyHighlights(currentPageData.content)
                  }}
                />
              </div>
            ) : (
              <div className="flex items-center justify-center h-96 text-muted-foreground">
                <div className="text-center">
                  <FileText className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Page not found</p>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}

export default DocumentViewer