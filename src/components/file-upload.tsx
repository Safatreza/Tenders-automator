'use client'

import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import {
  Upload,
  FileText,
  AlertCircle,
  CheckCircle2,
  X,
  Globe,
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface UploadedFile {
  id: string
  name: string
  size: number
  type: string
  status: 'uploading' | 'success' | 'error'
  progress?: number
  error?: string
  url?: string
}

interface FileUploadProps {
  onFilesUploaded?: (files: UploadedFile[]) => void
  maxFiles?: number
  maxSizeMB?: number
  accept?: Record<string, string[]>
  disabled?: boolean
}

const DEFAULT_ACCEPT = {
  'application/pdf': ['.pdf'],
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
  'application/msword': ['.doc'],
  'text/plain': ['.txt'],
}

export function FileUpload({
  onFilesUploaded,
  maxFiles = 5,
  maxSizeMB = 50,
  accept = DEFAULT_ACCEPT,
  disabled = false,
}: FileUploadProps) {
  const [files, setFiles] = useState<UploadedFile[]>([])
  const [urlInput, setUrlInput] = useState('')
  const [isUrlMode, setIsUrlMode] = useState(false)

  const uploadFile = async (file: File): Promise<UploadedFile> => {
    const fileId = Math.random().toString(36).substring(7)
    const uploadedFile: UploadedFile = {
      id: fileId,
      name: file.name,
      size: file.size,
      type: file.type,
      status: 'uploading',
      progress: 0,
    }

    try {
      // Simulate upload progress
      const formData = new FormData()
      formData.append('file', file)

      // Update progress
      for (let progress = 0; progress <= 100; progress += 10) {
        await new Promise(resolve => setTimeout(resolve, 100))
        setFiles(prev =>
          prev.map(f => f.id === fileId ? { ...f, progress } : f)
        )
      }

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error(`Upload failed: ${response.statusText}`)
      }

      const result = await response.json()

      return {
        ...uploadedFile,
        status: 'success',
        progress: 100,
        url: result.url,
      }
    } catch (error) {
      return {
        ...uploadedFile,
        status: 'error',
        error: error instanceof Error ? error.message : 'Upload failed',
      }
    }
  }

  const uploadFromUrl = async (url: string): Promise<UploadedFile> => {
    const fileId = Math.random().toString(36).substring(7)
    const uploadedFile: UploadedFile = {
      id: fileId,
      name: url.split('/').pop() || 'document',
      size: 0,
      type: 'application/pdf', // Assume PDF for now
      status: 'uploading',
      progress: 0,
    }

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      })

      if (!response.ok) {
        throw new Error(`Upload failed: ${response.statusText}`)
      }

      const result = await response.json()

      return {
        ...uploadedFile,
        status: 'success',
        progress: 100,
        name: result.filename || uploadedFile.name,
        size: result.size || 0,
        type: result.mime || uploadedFile.type,
        url: result.url,
      }
    } catch (error) {
      return {
        ...uploadedFile,
        status: 'error',
        error: error instanceof Error ? error.message : 'Upload failed',
      }
    }
  }

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      if (disabled) return

      const newFiles = acceptedFiles.slice(0, maxFiles - files.length).map(file => ({
        id: Math.random().toString(36).substring(7),
        name: file.name,
        size: file.size,
        type: file.type,
        status: 'uploading' as const,
        progress: 0,
      }))

      setFiles(prev => [...prev, ...newFiles])

      // Upload files
      const uploadPromises = acceptedFiles.slice(0, maxFiles - files.length).map(uploadFile)
      const uploadedFiles = await Promise.all(uploadPromises)

      setFiles(prev => {
        const updated = [...prev]
        uploadedFiles.forEach(uploadedFile => {
          const index = updated.findIndex(f => f.name === uploadedFile.name && f.status === 'uploading')
          if (index !== -1) {
            updated[index] = uploadedFile
          }
        })
        return updated
      })

      if (onFilesUploaded) {
        onFilesUploaded(uploadedFiles.filter(f => f.status === 'success'))
      }
    },
    [files.length, maxFiles, onFilesUploaded, disabled]
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
    maxSize: maxSizeMB * 1024 * 1024,
    disabled,
    multiple: maxFiles > 1,
  })

  const handleUrlUpload = async () => {
    if (!urlInput.trim() || disabled) return

    const urlFile = await uploadFromUrl(urlInput.trim())
    setFiles(prev => [...prev, urlFile])

    if (onFilesUploaded && urlFile.status === 'success') {
      onFilesUploaded([urlFile])
    }

    setUrlInput('')
  }

  const removeFile = (fileId: string) => {
    setFiles(prev => prev.filter(f => f.id !== fileId))
  }

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const acceptedFormats = Object.values(accept).flat().join(', ')

  return (
    <div className="space-y-4">
      {/* Upload Mode Toggle */}
      <div className="flex space-x-2">
        <Button
          variant={!isUrlMode ? 'default' : 'outline'}
          size="sm"
          onClick={() => setIsUrlMode(false)}
          disabled={disabled}
        >
          <Upload className="w-4 h-4 mr-1" />
          File Upload
        </Button>
        <Button
          variant={isUrlMode ? 'default' : 'outline'}
          size="sm"
          onClick={() => setIsUrlMode(true)}
          disabled={disabled}
        >
          <Globe className="w-4 h-4 mr-1" />
          URL Upload
        </Button>
      </div>

      {/* URL Upload Mode */}
      {isUrlMode ? (
        <div className="space-y-2">
          <Label htmlFor="url-input">Document URL</Label>
          <div className="flex space-x-2">
            <Input
              id="url-input"
              type="url"
              placeholder="https://example.com/document.pdf"
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              disabled={disabled}
            />
            <Button
              onClick={handleUrlUpload}
              disabled={!urlInput.trim() || disabled}
            >
              Upload
            </Button>
          </div>
        </div>
      ) : (
        /* File Upload Mode */
        <div
          {...getRootProps()}
          className={cn(
            'border-2 border-dashed rounded-lg p-8 text-center transition-colors',
            isDragActive
              ? 'border-blue-400 bg-blue-50'
              : 'border-gray-300 hover:border-gray-400',
            disabled && 'opacity-50 cursor-not-allowed'
          )}
        >
          <input {...getInputProps()} />
          <div className="space-y-2">
            <Upload className="w-12 h-12 mx-auto text-gray-400" />
            <div className="text-lg font-medium">
              {isDragActive ? 'Drop files here' : 'Drag & drop files here'}
            </div>
            <div className="text-sm text-gray-500">
              or click to browse files
            </div>
            <div className="text-xs text-gray-400">
              Supports: {acceptedFormats} (max {maxSizeMB}MB each)
            </div>
          </div>
        </div>
      )}

      {/* File List */}
      {files.length > 0 && (
        <div className="space-y-2">
          <Label>Uploaded Files ({files.length}/{maxFiles})</Label>
          <div className="space-y-2">
            {files.map((file) => (
              <div
                key={file.id}
                className="flex items-center space-x-3 p-3 border rounded-lg"
              >
                <FileText className="w-5 h-5 text-gray-500" />

                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium truncate">
                      {file.name}
                    </span>
                    <span className="text-xs text-gray-500">
                      {formatFileSize(file.size)}
                    </span>
                  </div>

                  {file.status === 'uploading' && (
                    <div className="mt-1">
                      <Progress value={file.progress || 0} className="h-1" />
                    </div>
                  )}

                  {file.status === 'error' && (
                    <div className="text-xs text-red-600 mt-1">
                      {file.error}
                    </div>
                  )}
                </div>

                <div className="flex items-center space-x-2">
                  {file.status === 'success' && (
                    <Badge variant="default" className="text-xs">
                      <CheckCircle2 className="w-3 h-3 mr-1" />
                      Uploaded
                    </Badge>
                  )}

                  {file.status === 'error' && (
                    <Badge variant="destructive" className="text-xs">
                      <AlertCircle className="w-3 h-3 mr-1" />
                      Error
                    </Badge>
                  )}

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFile(file.id)}
                    className="h-6 w-6 p-0"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Upload Summary */}
      {files.length > 0 && (
        <div className="text-sm text-gray-600">
          {files.filter(f => f.status === 'success').length} of {files.length} files uploaded successfully
        </div>
      )}
    </div>
  )
}

export default FileUpload