import { storageService, UploadFileParams } from './vercel-blob'
import { deduplicationService, FileInfo } from './deduplication'
import { prisma } from '@/lib/prisma'

export interface UploadServiceResult {
  documentId: string
  filename: string
  version: number
  isDuplicate: boolean
  sha256: string
  url: string
}

export class UploadService {
  static async uploadTenderDocument(
    tenderId: string,
    fileInfo: FileInfo
  ): Promise<UploadServiceResult> {
    try {
      // Check for deduplication and versioning
      const versioningResult = await deduplicationService.handleFileVersioning(
        tenderId,
        fileInfo
      )

      let storageKey: string
      let url: string
      let sha256 = deduplicationService.calculateSHA256(fileInfo.buffer)

      if (versioningResult.shouldUpload) {
        // Upload new file to storage
        const key = `tenders/${tenderId}/${fileInfo.filename}`
        url = await storageService.uploadFile({
          key,
          buffer: fileInfo.buffer,
          contentType: fileInfo.contentType,
        })

        storageKey = key
      } else {
        // File already exists in storage, just generate URL
        if (versioningResult.existingDocumentId) {
          // Get existing document details
          const existingDoc = await prisma.document.findUnique({
            where: { id: versioningResult.existingDocumentId },
          })

          if (existingDoc?.url) {
            url = existingDoc.url
          } else {
            // Generate URL from storage key if needed
            storageKey = `tenders/${tenderId}/${fileInfo.filename}`
            url = await storageService.getFileUrl(storageKey)
          }
        } else {
          // Create storage key and URL for new document reference
          storageKey = `tenders/${tenderId}/${fileInfo.filename}`
          url = await storageService.getFileUrl(storageKey)
        }
      }

      // Create document record in database
      const document = await deduplicationService.createDocumentRecord({
        tenderId,
        filename: fileInfo.filename,
        mime: fileInfo.contentType,
        sha256,
        version: versioningResult.version,
        url,
      })

      // Log the upload event
      await this.logUploadEvent(tenderId, document.id, fileInfo.filename)

      return {
        documentId: document.id,
        filename: fileInfo.filename,
        version: versioningResult.version,
        isDuplicate: !versioningResult.shouldUpload,
        sha256,
        url,
      }
    } catch (error) {
      console.error('Error in upload service:', error)
      throw new Error('Failed to process file upload')
    }
  }

  static async downloadDocument(documentId: string): Promise<Buffer> {
    try {
      const document = await prisma.document.findUnique({
        where: { id: documentId },
      })

      if (!document) {
        throw new Error('Document not found')
      }

      // Generate storage key from document info
      const storageKey = `tenders/${document.tenderId}/${document.filename}`

      return await storageService.downloadFile(storageKey)
    } catch (error) {
      console.error('Error downloading document:', error)
      throw new Error('Failed to download document')
    }
  }

  static async deleteDocument(documentId: string): Promise<void> {
    try {
      const document = await prisma.document.findUnique({
        where: { id: documentId },
      })

      if (!document) {
        throw new Error('Document not found')
      }

      // Check if this is the only reference to the file
      const referenceCount = await prisma.document.count({
        where: { sha256: document.sha256 },
      })

      // Delete from storage only if this is the last reference
      if (referenceCount === 1) {
        const storageKey = `tenders/${document.tenderId}/${document.filename}`
        await storageService.deleteFile(storageKey)
      }

      // Delete document record
      await prisma.document.delete({
        where: { id: documentId },
      })

      // Log the deletion event
      await this.logDeletionEvent(document.tenderId, documentId, document.filename)
    } catch (error) {
      console.error('Error deleting document:', error)
      throw new Error('Failed to delete document')
    }
  }

  private static async logUploadEvent(
    tenderId: string,
    documentId: string,
    filename: string
  ): Promise<void> {
    try {
      await prisma.auditLog.create({
        data: {
          actorId: 'system', // TODO: Get from session
          action: 'UPLOAD_DOCUMENT',
          entity: 'Document',
          entityId: documentId,
          diff: {
            filename,
            tenderId,
            action: 'uploaded',
          },
        },
      })
    } catch (error) {
      console.error('Error logging upload event:', error)
      // Don't throw here, as the main operation succeeded
    }
  }

  private static async logDeletionEvent(
    tenderId: string,
    documentId: string,
    filename: string
  ): Promise<void> {
    try {
      await prisma.auditLog.create({
        data: {
          actorId: 'system', // TODO: Get from session
          action: 'DELETE_DOCUMENT',
          entity: 'Document',
          entityId: documentId,
          diff: {
            filename,
            tenderId,
            action: 'deleted',
          },
        },
      })
    } catch (error) {
      console.error('Error logging deletion event:', error)
      // Don't throw here
    }
  }
}

export const uploadService = UploadService