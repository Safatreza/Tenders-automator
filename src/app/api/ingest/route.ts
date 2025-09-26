// Document Ingestion API Route
// Handles file uploads and URL ingestion with processing pipeline trigger

import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { uploadService } from '@/lib/storage/upload-service'
import { storageService } from '@/lib/storage/vercel-blob'
import { z } from 'zod'

const MAX_FILE_SIZE = 50 * 1024 * 1024 // 50MB
const ALLOWED_MIME_TYPES = [
  'application/pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/msword',
  'text/plain'
]

const UrlIngestSchema = z.object({
  url: z.string().url(),
  filename: z.string().optional(),
  tenderId: z.string().optional(),
  createNewTender: z.boolean().optional().default(false),
  tenderTitle: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Check permissions
    if (!['ANALYST', 'REVIEWER', 'ADMIN'].includes(session.user.role)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const contentType = request.headers.get('content-type')

    if (contentType?.includes('multipart/form-data')) {
      // Handle file upload
      return await handleFileUpload(request, session)
    } else if (contentType?.includes('application/json')) {
      // Handle URL ingestion
      return await handleUrlIngestion(request, session)
    } else {
      return NextResponse.json(
        { error: 'Unsupported content type' },
        { status: 400 }
      )
    }

  } catch (error) {
    console.error('Error in ingest API:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

async function handleFileUpload(request: NextRequest, session: any) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    const tenderId = formData.get('tenderId') as string
    const createNewTender = formData.get('createNewTender') === 'true'
    const tenderTitle = formData.get('tenderTitle') as string

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      )
    }

    // Validate file
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: `File too large. Maximum size is ${MAX_FILE_SIZE / 1024 / 1024}MB` },
        { status: 400 }
      )
    }

    if (!ALLOWED_MIME_TYPES.includes(file.type)) {
      return NextResponse.json(
        { error: `Unsupported file type. Allowed types: ${ALLOWED_MIME_TYPES.join(', ')}` },
        { status: 400 }
      )
    }

    let finalTenderId = tenderId

    // Create new tender if requested
    if (createNewTender) {
      if (!tenderTitle) {
        return NextResponse.json(
          { error: 'Tender title required when creating new tender' },
          { status: 400 }
        )
      }

      const newTender = await prisma.tender.create({
        data: {
          title: tenderTitle,
          status: 'DRAFT',
        }
      })

      finalTenderId = newTender.id

      // Log tender creation
      await prisma.auditLog.create({
        data: {
          actorId: session.user.id,
          action: 'CREATE_TENDER',
          entity: 'Tender',
          entityId: newTender.id,
          diff: {
            before: null,
            after: { title: tenderTitle, status: 'DRAFT' }
          }
        }
      })
    }

    if (!finalTenderId) {
      return NextResponse.json(
        { error: 'Tender ID required' },
        { status: 400 }
      )
    }

    // Verify tender exists
    const tender = await prisma.tender.findUnique({
      where: { id: finalTenderId }
    })

    if (!tender) {
      return NextResponse.json(
        { error: 'Tender not found' },
        { status: 404 }
      )
    }

    // Upload file using upload service
    const buffer = Buffer.from(await file.arrayBuffer())
    const uploadResult = await uploadService.uploadTenderDocument(finalTenderId, {
      filename: file.name,
      contentType: file.type,
      buffer,
      // size removed - not part of FileInfo interface
    })

    // Log file upload
    await prisma.auditLog.create({
      data: {
        actorId: session.user.id,
        action: 'UPLOAD_DOCUMENT',
        entity: 'Document',
        entityId: uploadResult.documentId,
        diff: {
          before: null,
          after: {
            filename: uploadResult.filename,
            tenderId: finalTenderId,
            isDuplicate: uploadResult.isDuplicate,
            version: uploadResult.version,
          }
        }
      }
    })

    // TODO: Trigger processing pipeline here
    // await pipelineService.startProcessing(finalTenderId, 'phase1-mvp')

    return NextResponse.json({
      success: true,
      data: {
        document: uploadResult,
        tenderId: finalTenderId,
        message: uploadResult.isDuplicate
          ? 'File already exists, linked to tender'
          : 'File uploaded successfully'
      }
    }, { status: 201 })

  } catch (error) {
    console.error('Error handling file upload:', error)
    throw error
  }
}

async function handleUrlIngestion(request: NextRequest, session: any) {
  try {
    const body = await request.json()
    const { url, filename, tenderId, createNewTender, tenderTitle } = UrlIngestSchema.parse(body)

    let finalTenderId = tenderId

    // Create new tender if requested
    if (createNewTender) {
      if (!tenderTitle) {
        return NextResponse.json(
          { error: 'Tender title required when creating new tender' },
          { status: 400 }
        )
      }

      const newTender = await prisma.tender.create({
        data: {
          title: tenderTitle,
          status: 'DRAFT',
        }
      })

      finalTenderId = newTender.id

      // Log tender creation
      await prisma.auditLog.create({
        data: {
          actorId: session.user.id,
          action: 'CREATE_TENDER',
          entity: 'Tender',
          entityId: newTender.id,
          diff: {
            before: null,
            after: { title: tenderTitle, status: 'DRAFT' }
          }
        }
      })
    }

    if (!finalTenderId) {
      return NextResponse.json(
        { error: 'Tender ID required' },
        { status: 400 }
      )
    }

    // Verify tender exists
    const tender = await prisma.tender.findUnique({
      where: { id: finalTenderId }
    })

    if (!tender) {
      return NextResponse.json(
        { error: 'Tender not found' },
        { status: 404 }
      )
    }

    // Fetch file from URL
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'TenderAutomator/1.0',
      },
    })

    if (!response.ok) {
      return NextResponse.json(
        { error: `Failed to fetch file: ${response.status} ${response.statusText}` },
        { status: 400 }
      )
    }

    // Validate content length
    const contentLength = parseInt(response.headers.get('content-length') || '0')
    if (contentLength > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: `File too large: ${contentLength} bytes` },
        { status: 400 }
      )
    }

    // Get content type and validate
    const contentType = response.headers.get('content-type') || 'application/octet-stream'
    if (!ALLOWED_MIME_TYPES.includes(contentType)) {
      return NextResponse.json(
        { error: `Unsupported file type: ${contentType}` },
        { status: 400 }
      )
    }

    // Read file content
    const buffer = Buffer.from(await response.arrayBuffer())

    // Generate filename if not provided
    const finalFilename = filename || `document-${Date.now()}.${getExtensionFromMime(contentType)}`

    // Upload file using upload service
    const uploadResult = await uploadService.uploadTenderDocument(finalTenderId, {
      filename: finalFilename,
      contentType,
      buffer,
      // size removed - not part of FileInfo interface
    })

    // Log URL ingestion
    await prisma.auditLog.create({
      data: {
        actorId: session.user.id,
        action: 'INGEST_URL',
        entity: 'Document',
        entityId: uploadResult.documentId,
        diff: {
          before: null,
          after: {
            filename: uploadResult.filename,
            sourceUrl: url,
            tenderId: finalTenderId,
            isDuplicate: uploadResult.isDuplicate,
            version: uploadResult.version,
          }
        }
      }
    })

    // TODO: Trigger processing pipeline here
    // await pipelineService.startProcessing(finalTenderId, 'phase1-mvp')

    return NextResponse.json({
      success: true,
      data: {
        document: uploadResult,
        tenderId: finalTenderId,
        sourceUrl: url,
        message: uploadResult.isDuplicate
          ? 'File already exists, linked to tender'
          : 'File ingested successfully'
      }
    }, { status: 201 })

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation error', details: error.issues },
        { status: 400 }
      )
    }

    console.error('Error handling URL ingestion:', error)
    throw error
  }
}

function getExtensionFromMime(mimeType: string): string {
  const mimeMap: Record<string, string> = {
    'application/pdf': 'pdf',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'docx',
    'application/msword': 'doc',
    'text/plain': 'txt',
  }

  return mimeMap[mimeType] || 'bin'
}