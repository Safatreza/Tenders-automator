// Document Viewer Component - PDF Display with Navigation
// Professional document viewing with page navigation and highlighting

'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  RotateCw,
  Download,
  Maximize2,
  FileText
} from 'lucide-react'
import { cn } from '@/lib/utils'
import type { DocumentInfo } from '@/types/api-responses'

export interface DocumentViewerProps {
  documentId: string
  initialPage?: number
  highlightPage?: number
  className?: string
  onPageChange?: (page: number) => void
}

export function DocumentViewer({
  documentId,
  initialPage = 1,
  highlightPage,
  className,
  onPageChange
}: DocumentViewerProps) {
  const [document, setDocument] = useState<DocumentInfo | null>(null)
  const [currentPage, setCurrentPage] = useState(initialPage)
  const [numPages, setNumPages] = useState(0)
  const [scale, setScale] = useState(1.0)
  const [rotation, setRotation] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    fetchDocument()
  }, [documentId])

  useEffect(() => {
    if (highlightPage && highlightPage !== currentPage) {
      setCurrentPage(highlightPage)
    }
  }, [highlightPage])

  useEffect(() => {
    onPageChange?.(currentPage)
  }, [currentPage, onPageChange])

  const fetchDocument = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch(`/api/documents/${documentId}`)
      if (!response.ok) {
        throw new Error('Failed to load document')
      }

      const doc = await response.json()
      setDocument(doc)
      setNumPages(doc.pages || 10) // Fallback for demo

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
    } finally {
      setLoading(false)
    }
  }

  const handlePreviousPage = () => {
    setCurrentPage(prev => Math.max(1, prev - 1))
  }

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(numPages, prev + 1))
  }

  const handleZoomIn = () => {
    setScale(prev => Math.min(3.0, prev + 0.1))
  }

  const handleZoomOut = () => {
    setScale(prev => Math.max(0.3, prev - 0.1))
  }

  const handleRotate = () => {
    setRotation(prev => (prev + 90) % 360)
  }

  const handleDownload = async () => {
    try {
      const response = await fetch(`/api/documents/${documentId}/download`)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = document?.filename || 'document.pdf'
      a.click()
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Download failed:', error)
    }
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  if (loading) {
    return (
      <Card className={cn("h-96", className)}>
        <CardContent className="flex items-center justify-center h-full">
          <div className="text-center space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="text-gray-600">Loading document...</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (error) {
    return (
      <Card className={cn("h-96", className)}>
        <CardContent className="flex items-center justify-center h-full">
          <div className="text-center space-y-4">
            <FileText className="h-12 w-12 text-red-400 mx-auto" />
            <div>
              <p className="text-red-600 font-medium">Failed to load document</p>
              <p className="text-gray-500 text-sm">{error}</p>
            </div>
            <Button onClick={fetchDocument} variant="outline">
              Try Again
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  const containerClass = isFullscreen
    ? "fixed inset-0 z-50 bg-white"
    : cn("flex h-full", className)

  return (
    <div className={containerClass}>
      {/* Sidebar - Page Navigation */}
      <div className="w-64 bg-gray-50 border-r flex flex-col">
        {/* Header */}
        <div className="p-4 border-b bg-white">
          <h3 className="font-semibold text-sm truncate" title={document?.filename}>
            {document?.filename}
          </h3>
          <p className="text-xs text-gray-500">
            {numPages} pages • {Math.round(scale * 100)}%
          </p>
        </div>

        {/* Page Thumbnails */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {Array.from({ length: numPages }, (_, i) => i + 1).map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => setCurrentPage(pageNum)}
              className={cn(
                "w-full p-3 text-left text-sm rounded-md border transition-all",
                "hover:bg-blue-50 hover:border-blue-200",
                currentPage === pageNum
                  ? "bg-blue-100 border-blue-300 text-blue-700 font-medium"
                  : "bg-white border-gray-200 text-gray-700",
                highlightPage === pageNum && "ring-2 ring-yellow-400 ring-offset-1"
              )}
            >
              <div className="flex items-center justify-between">
                <span>Page {pageNum}</span>
                {highlightPage === pageNum && (
                  <span className="text-xs bg-yellow-100 text-yellow-800 px-1 rounded">
                    Cited
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Viewer */}
      <div className="flex-1 flex flex-col">
        {/* Toolbar */}
        <div className="bg-white border-b p-3 flex items-center justify-between">
          {/* Navigation Controls */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handlePreviousPage}
              disabled={currentPage <= 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex items-center gap-2 px-3">
              <input
                type="number"
                min="1"
                max={numPages}
                value={currentPage}
                onChange={(e) => {
                  const page = parseInt(e.target.value)
                  if (page >= 1 && page <= numPages) {
                    setCurrentPage(page)
                  }
                }}
                className="w-16 px-2 py-1 text-center border rounded text-sm"
              />
              <span className="text-sm text-gray-500">of {numPages}</span>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={handleNextPage}
              disabled={currentPage >= numPages}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* View Controls */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleZoomOut}
              disabled={scale <= 0.3}
            >
              <ZoomOut className="h-4 w-4" />
            </Button>

            <span className="text-sm font-mono w-12 text-center">
              {Math.round(scale * 100)}%
            </span>

            <Button
              variant="outline"
              size="sm"
              onClick={handleZoomIn}
              disabled={scale >= 3.0}
            >
              <ZoomIn className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={handleRotate}
            >
              <RotateCw className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={handleDownload}
            >
              <Download className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={toggleFullscreen}
            >
              <Maximize2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Document Display */}
        <div className="flex-1 overflow-auto bg-gray-100 p-6">
          <div className="flex justify-center">
            <div
              className={cn(
                "bg-white shadow-lg transition-all duration-200",
                highlightPage === currentPage && "ring-4 ring-yellow-400"
              )}
              style={{
                transform: `scale(${scale}) rotate(${rotation}deg)`,
                transformOrigin: 'center center'
              }}
            >
              {/* Document Page Placeholder */}
              <div className="w-[595px] h-[842px] bg-white border border-gray-300 flex items-center justify-center">
                <div className="text-center text-gray-400 space-y-4">
                  <FileText className="h-16 w-16 mx-auto" />
                  <div>
                    <p className="font-medium">Page {currentPage}</p>
                    <p className="text-sm">{document?.filename}</p>
                  </div>
                  {highlightPage === currentPage && (
                    <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                      🎯 Citation Reference
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Exit Button */}
      {isFullscreen && (
        <Button
          className="fixed top-4 right-4 z-50"
          onClick={toggleFullscreen}
          variant="secondary"
        >
          Exit Fullscreen
        </Button>
      )}
    </div>
  )
}

export default DocumentViewer