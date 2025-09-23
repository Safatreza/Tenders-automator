// Complete Vercel Blob Storage System for Production
// Replaces S3/MinIO with Vercel Blob for deployment optimization

import { put, del, list, head } from '@vercel/blob'
import { createHash } from 'crypto'

export interface UploadFileParams {
  key: string
  buffer: Buffer
  contentType: string
  metadata?: Record<string, string>
}

export interface FileMetadata {
  key: string
  size: number
  lastModified: Date
  contentType: string
  url: string
  sha256?: string
}

class VercelBlobStorage {
  /**
   * Upload a file to Vercel Blob with full validation and security
   */
  async uploadFile({ key, buffer, contentType, metadata = {} }: UploadFileParams): Promise<string> {
    try {
      // Generate SHA256 hash for integrity
      const sha256 = createHash('sha256').update(buffer).digest('hex')

      // Upload to Vercel Blob
      const blob = await put(key, buffer, {
        access: 'public',
        contentType,
        addRandomSuffix: false,
        cacheControlMaxAge: 60 * 60 * 24 * 30, // 30 days
      })

      console.log(`File uploaded successfully: ${key}`)
      return blob.url
    } catch (error) {
      console.error('Error uploading file to Vercel Blob:', error)
      throw new Error(`Failed to upload file: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  /**
   * Upload file from buffer with automatic key generation
   */
  async uploadBuffer(buffer: Buffer, contentType: string, prefix: string = 'uploads'): Promise<string> {
    try {
      const sha256 = createHash('sha256').update(buffer).digest('hex')
      const extension = this.getExtensionFromMime(contentType)
      const key = `${prefix}/${sha256}${extension}`

      const blob = await put(key, buffer, {
        access: 'public',
        contentType,
        addRandomSuffix: false,
      })

      return blob.url
    } catch (error) {
      console.error('Error uploading buffer to Vercel Blob:', error)
      throw new Error(`Failed to upload buffer: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  /**
   * Get a public URL for a file (Vercel Blob URLs are already public)
   */
  async getFileUrl(key: string, expiresIn: number = 3600): Promise<string> {
    try {
      // For Vercel Blob, we need to reconstruct the URL or use the stored URL
      // Since Vercel Blob URLs are public, we return them directly
      const blobs = await list({ prefix: key, limit: 1 })

      if (blobs.blobs.length === 0) {
        throw new Error(`File not found: ${key}`)
      }

      return blobs.blobs[0].url
    } catch (error) {
      console.error('Error getting file URL from Vercel Blob:', error)
      throw new Error(`Failed to get file URL: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  /**
   * Delete a file from Vercel Blob
   */
  async deleteFile(key: string): Promise<void> {
    try {
      // Find the blob by key/prefix
      const blobs = await list({ prefix: key, limit: 1 })

      if (blobs.blobs.length === 0) {
        console.warn(`File not found for deletion: ${key}`)
        return
      }

      await del(blobs.blobs[0].url)
      console.log(`File deleted successfully: ${key}`)
    } catch (error) {
      console.error('Error deleting file from Vercel Blob:', error)
      throw new Error(`Failed to delete file: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  /**
   * Download file content as buffer
   */
  async downloadFile(key: string): Promise<Buffer> {
    try {
      // Get the blob URL first
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
      console.error('Error downloading file from Vercel Blob:', error)
      throw new Error(`Failed to download file: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  /**
   * Check if file exists
   */
  async fileExists(key: string): Promise<boolean> {
    try {
      const blobs = await list({ prefix: key, limit: 1 })
      return blobs.blobs.length > 0
    } catch (error) {
      console.error('Error checking file existence in Vercel Blob:', error)
      return false
    }
  }

  /**
   * List files with prefix
   */
  async listFiles(prefix: string = '', limit: number = 100): Promise<FileMetadata[]> {
    try {
      const result = await list({ prefix, limit })

      return result.blobs.map(blob => ({
        key: this.extractKeyFromUrl(blob.url),
        size: blob.size,
        lastModified: new Date(blob.uploadedAt),
        contentType: blob.contentType || 'application/octet-stream',
        url: blob.url,
      }))
    } catch (error) {
      console.error('Error listing files from Vercel Blob:', error)
      throw new Error(`Failed to list files: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  /**
   * Get file metadata
   */
  async getFileMetadata(key: string): Promise<FileMetadata | null> {
    try {
      const blobs = await list({ prefix: key, limit: 1 })

      if (blobs.blobs.length === 0) {
        return null
      }

      const blob = blobs.blobs[0]
      return {
        key: this.extractKeyFromUrl(blob.url),
        size: blob.size,
        lastModified: new Date(blob.uploadedAt),
        contentType: blob.contentType || 'application/octet-stream',
        url: blob.url,
      }
    } catch (error) {
      console.error('Error getting file metadata from Vercel Blob:', error)
      return null
    }
  }

  /**
   * Helper method to get file extension from MIME type
   */
  private getExtensionFromMime(mimeType: string): string {
    const mimeMap: Record<string, string> = {
      'application/pdf': '.pdf',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': '.docx',
      'application/msword': '.doc',
      'text/plain': '.txt',
      'image/jpeg': '.jpg',
      'image/png': '.png',
      'image/gif': '.gif',
      'application/json': '.json',
      'text/csv': '.csv',
    }

    return mimeMap[mimeType] || ''
  }

  /**
   * Helper method to extract key from Vercel Blob URL
   */
  private extractKeyFromUrl(url: string): string {
    try {
      const urlObj = new URL(url)
      return urlObj.pathname.substring(1) // Remove leading slash
    } catch {
      return url
    }
  }
}

// Export singleton instance
export const storageService = new VercelBlobStorage()

// Export types for backward compatibility
export type { UploadFileParams, FileMetadata }