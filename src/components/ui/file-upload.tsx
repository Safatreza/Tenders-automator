'use client'

import React, { useState, useCallback, useRef } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import {
  Upload,
  File,
  FileText,
  X,
  Check,
  AlertCircle,
  Download,
  Link2,
  Plus,
} from 'lucide-react'

export interface UploadedFile {
  id: string
  name: string
  size: number
  type: string
  url?: string
  status: 'pending' | 'uploading' | 'completed' | 'error'
  progress?: number
  error?: string
  sha256?: string
}

export interface FileUploadProps {
  accept?: string
  maxFiles?: number
  maxFileSize?: number // in bytes
  allowedTypes?: string[]
  multiple?: boolean
  allowUrls?: boolean
  value?: UploadedFile[]
  className?: string
  disabled?: boolean
  onFilesChange?: (files: UploadedFile[]) => void
  onUpload?: (file: File | string) => Promise<UploadedFile>
  onRemove?: (fileId: string) => void
}

const defaultAllowedTypes = [
  'application/pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/msword',
  'text/plain'
]

const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

const getFileIcon = (type: string) => {
  if (type.includes('pdf')) return '📄'
  if (type.includes('word') || type.includes('document')) return '📝'
  if (type.includes('text')) return '📄'
  return '📁'
}

export function FileUpload({
  accept = '.pdf,.docx,.doc,.txt',
  maxFiles = 10,
  maxFileSize = 50 * 1024 * 1024, // 50MB
  allowedTypes = defaultAllowedTypes,
  multiple = true,
  allowUrls = true,
  value = [],
  className,
  disabled = false,
  onFilesChange,
  onUpload,
  onRemove,
}: FileUploadProps) {
  const [files, setFiles] = useState<UploadedFile[]>(value)
  const [isDragging, setIsDragging] = useState(false)
  const [urlInput, setUrlInput] = useState('')
  const [showUrlInput, setShowUrlInput] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const updateFiles = useCallback((newFiles: UploadedFile[]) => {
    setFiles(newFiles)
    onFilesChange?.(newFiles)
  }, [onFilesChange])

  const validateFile = (file: File): string | null => {
    if (file.size > maxFileSize) {
      return `File size exceeds ${formatFileSize(maxFileSize)}`
    }

    if (!allowedTypes.includes(file.type)) {
      return `File type not allowed. Supported types: ${allowedTypes.join(', ')}`
    }

    if (files.length >= maxFiles) {
      return `Maximum ${maxFiles} files allowed`
    }

    return null
  }

  const handleFileSelect = async (selectedFiles: FileList | File[]) => {
    const fileArray = Array.from(selectedFiles)

    for (const file of fileArray) {
      const error = validateFile(file)
      if (error) {
        // Add file with error status
        const errorFile: UploadedFile = {
          id: `error-${Date.now()}-${Math.random()}`,
          name: file.name,
          size: file.size,
          type: file.type,
          status: 'error',
          error,
        }
        updateFiles([...files, errorFile])
        continue
      }

      // Add file with pending status
      const newFile: UploadedFile = {
        id: `upload-${Date.now()}-${Math.random()}`,
        name: file.name,
        size: file.size,
        type: file.type,
        status: 'pending',
      }

      const updatedFiles = [...files, newFile]
      updateFiles(updatedFiles)

      // Start upload if handler provided
      if (onUpload) {
        try {
          // Update status to uploading
          updateFiles(updatedFiles.map(f =>
            f.id === newFile.id ? { ...f, status: 'uploading' as const, progress: 0 } : f
          ))

          const result = await onUpload(file)

          // Update with completed status
          updateFiles(updatedFiles.map(f =>
            f.id === newFile.id ? { ...result, status: 'completed' as const } : f
          ))
        } catch (error) {
          // Update with error status
          updateFiles(updatedFiles.map(f =>
            f.id === newFile.id ? {
              ...f,
              status: 'error' as const,
              error: error instanceof Error ? error.message : 'Upload failed'
            } : f
          ))
        }
      }
    }
  }

  const handleUrlSubmit = async () => {
    if (!urlInput.trim()) return

    const url = urlInput.trim()
    const filename = url.split('/').pop() || 'document.pdf'

    // Add URL with pending status
    const newFile: UploadedFile = {
      id: `url-${Date.now()}-${Math.random()}`,
      name: filename,
      size: 0, // Unknown for URLs
      type: 'application/pdf', // Assume PDF for URLs
      status: 'pending',
      url,
    }

    const updatedFiles = [...files, newFile]
    updateFiles(updatedFiles)

    if (onUpload) {
      try {
        // Update status to uploading
        updateFiles(updatedFiles.map(f =>
          f.id === newFile.id ? { ...f, status: 'uploading' as const } : f
        ))

        const result = await onUpload(url)

        // Update with completed status
        updateFiles(updatedFiles.map(f =>
          f.id === newFile.id ? { ...result, status: 'completed' as const } : f
        ))
      } catch (error) {
        updateFiles(updatedFiles.map(f =>
          f.id === newFile.id ? {
            ...f,
            status: 'error' as const,
            error: error instanceof Error ? error.message : 'URL upload failed'
          } : f
        ))
      }
    }

    setUrlInput('')
    setShowUrlInput(false)
  }

  const handleRemoveFile = (fileId: string) => {
    const updatedFiles = files.filter(f => f.id !== fileId)
    updateFiles(updatedFiles)
    onRemove?.(fileId)
  }

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    if (disabled) return

    const droppedFiles = e.dataTransfer.files
    if (droppedFiles.length > 0) {
      handleFileSelect(droppedFiles)
    }
  }, [disabled, files, handleFileSelect])

  const completedFiles = files.filter(f => f.status === 'completed')
  const hasErrors = files.some(f => f.status === 'error')

  return (
    <Card className={cn('w-full', className)}>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center">
            <Upload className="w-5 h-5 mr-2" />
            Document Upload
          </span>
          <div className="flex items-center space-x-2">
            <Badge variant="outline">
              {completedFiles.length}/{maxFiles} files
            </Badge>
            {allowUrls && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowUrlInput(!showUrlInput)}
                disabled={disabled}
              >
                <Link2 className="w-4 h-4 mr-1" />
                Add URL
              </Button>
            )}
          </div>
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* URL Input */}
        {showUrlInput && (
          <div className="space-y-2">
            <Label htmlFor="url-input">Document URL</Label>
            <div className="flex space-x-2">
              <Input
                id="url-input"
                placeholder="https://example.com/document.pdf"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleUrlSubmit()}
                disabled={disabled}
              />
              <Button onClick={handleUrlSubmit} disabled={!urlInput.trim() || disabled}>
                Add
              </Button>
            </div>
          </div>
        )}

        {/* Drop Zone */}
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={cn(
            'border-2 border-dashed rounded-lg p-8 text-center transition-colors',
            isDragging
              ? 'border-primary bg-primary/5'
              : 'border-muted-foreground/25 hover:border-muted-foreground/50',
            disabled && 'opacity-50 cursor-not-allowed'
          )}
        >
          <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
          <div className="space-y-2">
            <p className="text-lg font-medium">
              {isDragging ? 'Drop files here' : 'Drag and drop files here'}
            </p>
            <p className="text-muted-foreground">
              or{' '}
              <Button
                variant="link"
                className="p-0 h-auto"
                onClick={() => fileInputRef.current?.click()}
                disabled={disabled}
              >
                browse files
              </Button>
            </p>
            <p className="text-xs text-muted-foreground">
              Supports: PDF, Word documents, Text files
              <br />
              Max size: {formatFileSize(maxFileSize)}
              {multiple && ` • Max ${maxFiles} files`}
            </p>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept={accept}
            multiple={multiple}
            onChange={(e) => e.target.files && handleFileSelect(e.target.files)}
            className="hidden"
            disabled={disabled}
          />
        </div>

        {/* File List */}
        {files.length > 0 && (
          <div className="space-y-2">
            <Label>Uploaded Files</Label>
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {files.map((file) => (
                <div
                  key={file.id}
                  className={cn(
                    'flex items-center justify-between p-3 border rounded-lg',
                    file.status === 'error' && 'border-red-200 bg-red-50',
                    file.status === 'completed' && 'border-green-200 bg-green-50',
                    file.status === 'uploading' && 'border-blue-200 bg-blue-50'
                  )}
                >
                  <div className="flex items-center space-x-3 flex-1">
                    <span className="text-lg">{getFileIcon(file.type)}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{file.name}</p>
                      <div className="flex items-center space-x-2">
                        {file.size > 0 && (
                          <p className="text-xs text-muted-foreground">
                            {formatFileSize(file.size)}
                          </p>
                        )}
                        <Badge
                          variant={
                            file.status === 'completed' ? 'default' :
                            file.status === 'error' ? 'destructive' :
                            file.status === 'uploading' ? 'secondary' : 'outline'
                          }
                          className="text-xs"
                        >
                          {file.status === 'uploading' ? 'Uploading...' : file.status}
                        </Badge>
                      </div>
                      {file.status === 'uploading' && file.progress !== undefined && (
                        <Progress value={file.progress} className="mt-1 h-1" />
                      )}
                      {file.error && (
                        <p className="text-xs text-red-600 mt-1">{file.error}</p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    {file.status === 'completed' && (
                      <Check className="w-4 h-4 text-green-600" />
                    )}
                    {file.status === 'error' && (
                      <AlertCircle className="w-4 h-4 text-red-600" />
                    )}
                    {file.url && file.status === 'completed' && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => window.open(file.url, '_blank')}
                      >
                        <Download className="w-4 h-4" />
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRemoveFile(file.id)}
                      disabled={disabled}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Errors Summary */}
        {hasErrors && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Some files failed to upload. Please check the errors above and try again.
            </AlertDescription>
          </Alert>
        )}

        {/* Upload Summary */}
        {completedFiles.length > 0 && (
          <Alert>
            <Check className="h-4 w-4" />
            <AlertDescription>
              Successfully uploaded {completedFiles.length} file{completedFiles.length !== 1 ? 's' : ''}.
              {completedFiles.length >= maxFiles && ' Upload limit reached.'}
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  )
}

export default FileUpload