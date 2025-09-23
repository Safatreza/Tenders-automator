// Complete Vercel Blob Storage System for Production
// Production-ready file storage with validation, deduplication, and audit

import { put, del, list, head } from '@vercel/blob'
import crypto from 'crypto'
import { z } from 'zod'

// ==========================================
// Configuration & Types
// ==========================================

const MAX_FILE_SIZE = parseInt(process.env.MAX_FILE_SIZE || '52428800') // 50MB default
const ALLOWED_MIME_TYPES = (process.env.ALLOWED_MIME_TYPES ||
  'application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/msword,text/plain'
).split(',')

// Validation schema for file uploads
const FileUploadSchema = z.object({
  filename: z.string().min(1).max(255),
  mime: z.string().refine(mime => ALLOWED_MIME_TYPES.includes(mime), {
    message: 'File type not allowed',
  }),
  size: z.number().positive().max(MAX_FILE_SIZE, {
    message: `File size cannot exceed ${Math.round(MAX_FILE_SIZE / 1024 / 1024)}MB`,
  }),
})

export interface UploadResult {
  id: string
  filename: string
  originalName: string
  mime: string
  size: number
  sha256: string
  url: string
  key: string
  version: number
}

export interface UploadOptions {
  prefix?: string
  metadata?: Record<string, string>
  generateThumbnail?: boolean
}

// ==========================================
// Utility Functions
// ==========================================

function sanitizeFilename(filename: string): string {
  // Remove dangerous characters and normalize
  return filename
    .replace(/[^a-zA-Z0-9._-]/g, '_')
    .replace(/_{2,}/g, '_')
    .replace(/^_+|_+$/g, '')
    .substring(0, 255)
}

function generateFileKey(filename: string, prefix?: string): string {
  const timestamp = Date.now()
  const random = crypto.randomBytes(8).toString('hex')
  const sanitized = sanitizeFilename(filename)

  const key = `${timestamp}-${random}-${sanitized}`
  return prefix ? `${prefix}/${key}` : key
}

function calculateSHA256(buffer: Buffer): string {
  return crypto.createHash('sha256').update(buffer).digest('hex')
}

async function validateFile(file: File): Promise<void> {
  const validation = FileUploadSchema.safeParse({
    filename: file.name,
    mime: file.type,
    size: file.size,
  })

  if (!validation.success) {
    throw new Error(`File validation failed: ${validation.error.issues.map(i => i.message).join(', ')}`)
  }

  // Additional security checks
  const fileExtension = file.name.split('.').pop()?.toLowerCase()
  const expectedExtensions: Record<string, string[]> = {
    'application/pdf': ['pdf'],
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['docx'],
    'application/msword': ['doc'],
    'text/plain': ['txt'],
  }

  const allowedExtensions = expectedExtensions[file.type] || []
  if (fileExtension && !allowedExtensions.includes(fileExtension)) {
    throw new Error('File extension does not match MIME type')
  }
}

// ==========================================
// Storage Service
// ==========================================

export class StorageService {
  /**
   * Upload a file to Vercel Blob with full validation and security
   */
  static async uploadFile(
    file: File,
    options: UploadOptions = {}
  ): Promise<UploadResult> {
    try {
      // Validate file
      await validateFile(file)

      // Read file buffer and calculate hash
      const buffer = Buffer.from(await file.arrayBuffer())
      const sha256 = calculateSHA256(buffer)

      // Check for duplicates
      const existingFile = await this.findDuplicateFile(sha256)
      if (existingFile) {
        // Return existing file info instead of uploading duplicate
        return {
          id: existingFile.id,
          filename: existingFile.filename,
          originalName: file.name,
          mime: file.type,
          size: file.size,
          sha256,
          url: existingFile.url,
          key: this.extractKeyFromUrl(existingFile.url),
          version: existingFile.version,
        }
      }

      // Generate unique file key
      const key = generateFileKey(file.name, options.prefix)

      // Upload to Vercel Blob
      const blob = await put(key, buffer, {
        access: 'public',
        contentType: file.type,
        addRandomSuffix: false,
        cacheControlMaxAge: 60 * 60 * 24 * 30, // 30 days
      })

      return {
        id: crypto.randomUUID(),
        filename: key.split('/').pop() || key,
        originalName: file.name,
        mime: file.type,
        size: file.size,
        sha256,
        url: blob.url,
        key,
        version: 1,
      }
    } catch (error) {
      console.error('File upload failed:', error)
      throw new Error(`Upload failed: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  /**
   * Upload file from URL with validation
   */
  static async uploadFromUrl(
    url: string,
    filename: string,
    options: UploadOptions = {}
  ): Promise<UploadResult> {
    try {
      // Fetch the file
      const response = await fetch(url, {
        headers: {
          'User-Agent': 'TenderAutomator/1.0',
        },
      })

      if (!response.ok) {
        throw new Error(`Failed to fetch file: ${response.status} ${response.statusText}`)
      }

      // Validate content length
      const contentLength = parseInt(response.headers.get('content-length') || '0')
      if (contentLength > MAX_FILE_SIZE) {
        throw new Error(`File too large: ${contentLength} bytes`)
      }

      const buffer = Buffer.from(await response.arrayBuffer())
      const sha256 = calculateSHA256(buffer)

      // Validate MIME type
      const contentType = response.headers.get('content-type') || 'application/octet-stream'
      if (!ALLOWED_MIME_TYPES.includes(contentType)) {
        throw new Error(`MIME type not allowed: ${contentType}`)
      }

      // Check for duplicates
      const existingFile = await this.findDuplicateFile(sha256)
      if (existingFile) {
        return {
          id: existingFile.id,
          filename: existingFile.filename,
          originalName: filename,
          mime: contentType,
          size: buffer.length,
          sha256,
          url: existingFile.url,
          key: this.extractKeyFromUrl(existingFile.url),
          version: existingFile.version,
        }
      }

      // Generate unique file key
      const key = generateFileKey(filename, options.prefix)

      // Upload to Vercel Blob
      const blob = await put(key, buffer, {
        access: 'public',
        contentType: contentType,
        addRandomSuffix: false,
        cacheControlMaxAge: 60 * 60 * 24 * 30, // 30 days
      })

      return {
        id: crypto.randomUUID(),
        filename: key.split('/').pop() || key,
        originalName: filename,
        mime: contentType,
        size: buffer.length,
        sha256,
        url: blob.url,
        key,
        version: 1,
      }
    } catch (error) {
      console.error('URL upload failed:', error)
      throw new Error(`URL upload failed: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  /**
   * Get a public URL for a file (Vercel Blob URLs are already public)
   */
  static async getSignedUrl(key: string, expiresIn: number = 3600): Promise<string> {
    try {
      // For Vercel Blob, we need to find the blob by key/prefix
      const blobs = await list({ prefix: key, limit: 1 })

      if (blobs.blobs.length === 0) {
        throw new Error(`File not found: ${key}`)
      }

      return blobs.blobs[0].url
    } catch (error) {
      console.error('Failed to get signed URL:', error)
      throw new Error('Failed to generate download URL')
    }
  }

  /**
   * Download file as buffer
   */
  static async downloadFile(key: string): Promise<Buffer> {
    try {
      // Find the blob by key/prefix
      const blobs = await list({ prefix: key, limit: 1 })

      if (blobs.blobs.length === 0) {
        throw new Error(`File not found: ${key}`)
      }

      // Fetch the blob content
      const response = await fetch(blobs.blobs[0].url)

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }

      const arrayBuffer = await response.arrayBuffer()
      return Buffer.from(arrayBuffer)
    } catch (error) {
      console.error('Failed to download file:', error)
      throw new Error('Failed to download file')
    }
  }

  /**
   * Delete a file
   */
  static async deleteFile(key: string): Promise<void> {
    try {
      // Find the blob by key/prefix
      const blobs = await list({ prefix: key, limit: 1 })

      if (blobs.blobs.length === 0) {
        console.warn(`File not found for deletion: ${key}`)
        return
      }

      await del(blobs.blobs[0].url)
    } catch (error) {
      console.error('Failed to delete file:', error)
      throw new Error('Failed to delete file')
    }
  }

  /**
   * Check if file exists
   */
  static async fileExists(key: string): Promise<boolean> {
    try {
      const blobs = await list({ prefix: key, limit: 1 })
      return blobs.blobs.length > 0
    } catch {
      return false
    }
  }

  /**
   * Get file metadata
   */
  static async getFileMetadata(key: string) {
    try {
      const blobs = await list({ prefix: key, limit: 1 })

      if (blobs.blobs.length === 0) {
        throw new Error(`File not found: ${key}`)
      }

      const blob = blobs.blobs[0]
      return {
        size: blob.size,
        lastModified: new Date(blob.uploadedAt),
        contentType: blob.contentType,
        url: blob.url,
      }
    } catch (error) {
      console.error('Failed to get file metadata:', error)
      throw new Error('Failed to get file metadata')
    }
  }

  /**
   * Helper method to extract key from Vercel Blob URL
   */
  private static extractKeyFromUrl(url: string): string {
    try {
      const urlObj = new URL(url)
      return urlObj.pathname.substring(1) // Remove leading slash
    } catch {
      return url
    }
  }

  /**
   * Find duplicate file by SHA-256 hash
   */
  private static async findDuplicateFile(sha256: string) {
    const { prisma } = await import('./prisma')

    return await prisma.document.findFirst({
      where: { sha256 },
      select: {
        id: true,
        filename: true,
        version: true,
        url: true,
      },
    })
  }
}

// ==========================================
// Deduplication Service
// ==========================================

export class DeduplicationService {
  /**
   * Check for duplicate files and handle versioning
   */
  static async handleDuplicate(
    sha256: string,
    tenderId: string,
    newFileData: UploadResult
  ) {
    const { prisma } = await import('./prisma')

    const existingDoc = await prisma.document.findFirst({
      where: {
        sha256,
        tenderId, // Same tender
      },
    })

    if (existingDoc) {
      // Create new version
      return await prisma.document.create({
        data: {
          tenderId,
          filename: newFileData.filename,
          mime: newFileData.mime,
          sha256: newFileData.sha256,
          version: existingDoc.version + 1,
          url: newFileData.url,
          pages: null, // Will be set after parsing
        },
      })
    }

    // Create new document
    return await prisma.document.create({
      data: {
        tenderId,
        filename: newFileData.filename,
        mime: newFileData.mime,
        sha256: newFileData.sha256,
        version: 1,
        url: newFileData.url,
        pages: null,
      },
    })
  }
}

export default StorageService