import { prisma } from '@/lib/prisma'
import crypto from 'crypto'

export interface FileInfo {
  buffer: Buffer
  filename: string
  contentType: string
}

export interface DeduplicationResult {
  isDuplicate: boolean
  existingDocument?: {
    id: string
    filename: string
    version: number
    tenderId: string
  }
  sha256: string
}

export class FileDeduplicationService {
  static calculateSHA256(buffer: Buffer): string {
    return crypto.createHash('sha256').update(buffer).digest('hex')
  }

  static async checkForDuplicate(fileInfo: FileInfo): Promise<DeduplicationResult> {
    const sha256 = this.calculateSHA256(fileInfo.buffer)

    // Check if a document with this hash already exists
    const existingDocument = await prisma.document.findUnique({
      where: { sha256 },
      select: {
        id: true,
        filename: true,
        version: true,
        tenderId: true,
      },
    })

    return {
      isDuplicate: !!existingDocument,
      existingDocument: existingDocument || undefined,
      sha256,
    }
  }

  static async getNextVersion(tenderId: string, filename: string): Promise<number> {
    // Find the highest version number for files with the same name in this tender
    const latestDocument = await prisma.document.findFirst({
      where: {
        tenderId,
        filename: {
          startsWith: filename.split('.')[0], // Match base filename without extension
        },
      },
      orderBy: { version: 'desc' },
      select: { version: true },
    })

    return (latestDocument?.version || 0) + 1
  }

  static async handleFileVersioning(
    tenderId: string,
    fileInfo: FileInfo
  ): Promise<{
    shouldUpload: boolean
    version: number
    existingDocumentId?: string
  }> {
    const deduplicationResult = await this.checkForDuplicate(fileInfo)

    if (deduplicationResult.isDuplicate && deduplicationResult.existingDocument) {
      // File already exists - check if it's in the same tender
      if (deduplicationResult.existingDocument.tenderId === tenderId) {
        // Same file in same tender - no need to upload again
        return {
          shouldUpload: false,
          version: deduplicationResult.existingDocument.version,
          existingDocumentId: deduplicationResult.existingDocument.id,
        }
      } else {
        // Same file but different tender - create new version reference
        const nextVersion = await this.getNextVersion(tenderId, fileInfo.filename)
        return {
          shouldUpload: false, // File content already exists in storage
          version: nextVersion,
        }
      }
    }

    // New file - upload needed
    const nextVersion = await this.getNextVersion(tenderId, fileInfo.filename)
    return {
      shouldUpload: true,
      version: nextVersion,
    }
  }

  static async createDocumentRecord(params: {
    tenderId: string
    filename: string
    mime: string
    sha256: string
    pages?: number
    version: number
    storageKey?: string
    url?: string
  }) {
    return await prisma.document.create({
      data: {
        tenderId: params.tenderId,
        filename: params.filename,
        mime: params.mime,
        sha256: params.sha256,
        pages: params.pages,
        version: params.version,
        url: params.url,
      },
    })
  }
}

export const deduplicationService = FileDeduplicationService