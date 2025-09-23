import { PDFParser, ParsedDocument as PDFDocument } from './pdf-parser'
import { DOCXParser, DocxParseResult } from './docx-parser'
import { prisma } from '@/lib/prisma'

export interface UnifiedDocument {
  id: string
  type: 'pdf' | 'docx'
  text: string
  pages?: number
  sections: Array<{
    title: string
    content: string
    startPage?: number
    endPage?: number
  }>
  metadata: {
    title?: string
    author?: string
    pageCount?: number
    wordCount?: number
    creationDate?: Date
  }
}

export interface ParseResult {
  document: UnifiedDocument
  traceLinks: Array<{
    page: number
    snippet: string
    sectionPath?: string
    bbox?: { x: number; y: number; width: number; height: number }
  }>
}

export class DocumentParser {
  static async parseDocument(
    buffer: Buffer,
    filename: string,
    documentId: string
  ): Promise<ParseResult> {
    const fileExtension = filename.toLowerCase().split('.').pop()

    let document: UnifiedDocument
    let traceLinks: ParseResult['traceLinks'] = []

    try {
      if (fileExtension === 'pdf') {
        const pdfResult = await PDFParser.parsePDF(buffer)
        document = this.convertPDFToUnified(pdfResult, documentId)
        traceLinks = this.extractPDFTraceLinks(pdfResult)
      } else if (fileExtension === 'docx') {
        const docxResult = await DOCXParser.parseDOCX(buffer)
        document = this.convertDOCXToUnified(docxResult, documentId)
        traceLinks = this.extractDOCXTraceLinks(docxResult)
      } else {
        throw new Error(`Unsupported file type: ${fileExtension}`)
      }

      return { document, traceLinks }
    } catch (error) {
      console.error('Error parsing document:', error)
      throw new Error(`Failed to parse ${fileExtension?.toUpperCase()} document`)
    }
  }

  private static convertPDFToUnified(
    pdf: PDFDocument,
    documentId: string
  ): UnifiedDocument {
    return {
      id: documentId,
      type: 'pdf',
      text: pdf.text,
      pages: pdf.metadata.totalPages,
      sections: pdf.pages.map((page, index) => ({
        title: `Page ${page.pageNumber}`,
        content: page.text,
        startPage: page.pageNumber,
        endPage: page.pageNumber,
      })),
      metadata: {
        title: pdf.metadata.title,
        author: pdf.metadata.author,
        pageCount: pdf.metadata.totalPages,
        wordCount: pdf.text.split(/\s+/).length,
        creationDate: pdf.metadata.creationDate,
      },
    }
  }

  private static convertDOCXToUnified(
    docx: DocxParseResult,
    documentId: string
  ): UnifiedDocument {
    return {
      id: documentId,
      type: 'docx',
      text: docx.text,
      sections: docx.sections.map(section => ({
        title: section.title,
        content: section.content,
      })),
      metadata: {
        title: docx.metadata.title,
        author: docx.metadata.author,
        wordCount: docx.metadata.wordCount,
      },
    }
  }

  private static extractPDFTraceLinks(pdf: PDFDocument): ParseResult['traceLinks'] {
    const traceLinks: ParseResult['traceLinks'] = []

    pdf.pages.forEach(page => {
      // Create trace links for meaningful sentences
      const sentences = this.extractSentences(page.text)

      sentences.forEach(sentence => {
        if (sentence.trim().length > 20) { // Only meaningful sentences
          traceLinks.push({
            page: page.pageNumber,
            snippet: sentence.trim(),
            sectionPath: `page-${page.pageNumber}`,
          })
        }
      })
    })

    return traceLinks
  }

  private static extractDOCXTraceLinks(docx: DocxParseResult): ParseResult['traceLinks'] {
    const traceLinks: ParseResult['traceLinks'] = []

    docx.sections.forEach((section, sectionIndex) => {
      // Create trace links for meaningful sentences in each section
      const sentences = this.extractSentences(section.content)

      sentences.forEach(sentence => {
        if (sentence.trim().length > 20) { // Only meaningful sentences
          traceLinks.push({
            page: 1, // DOCX doesn't have page numbers in this context
            snippet: sentence.trim(),
            sectionPath: `section-${sectionIndex}-${section.title.replace(/[^a-zA-Z0-9]/g, '-')}`,
          })
        }
      })
    })

    return traceLinks
  }

  private static extractSentences(text: string): string[] {
    // Split text into sentences using common sentence endings
    return text
      .split(/[.!?]+/)
      .map(sentence => sentence.trim())
      .filter(sentence => sentence.length > 0)
  }

  static async saveParseResults(
    documentId: string,
    parseResult: ParseResult
  ): Promise<void> {
    try {
      // Update document with page count
      await prisma.document.update({
        where: { id: documentId },
        data: {
          pages: parseResult.document.metadata.pageCount || 1,
        },
      })

      // Save trace links
      const traceLinkData = parseResult.traceLinks.map(link => ({
        documentId,
        page: link.page,
        snippet: link.snippet,
        sectionPath: link.sectionPath,
        bbox: link.bbox ? JSON.parse(JSON.stringify(link.bbox)) : null,
      }))

      await prisma.traceLink.createMany({
        data: traceLinkData,
        skipDuplicates: true,
      })

      console.log(`Saved ${traceLinkData.length} trace links for document ${documentId}`)
    } catch (error) {
      console.error('Error saving parse results:', error)
      throw new Error('Failed to save parse results')
    }
  }

  static async searchAcrossDocuments(
    tenderIds: string[],
    query: string
  ): Promise<Array<{
    documentId: string
    filename: string
    matches: Array<{
      snippet: string
      page: number
      context: string
    }>
  }>> {
    try {
      // Search in trace links
      const traceLinks = await prisma.traceLink.findMany({
        where: {
          document: {
            tenderId: { in: tenderIds },
          },
          snippet: {
            contains: query,
            mode: 'insensitive',
          },
        },
        include: {
          document: {
            select: {
              id: true,
              filename: true,
            },
          },
        },
      })

      // Group results by document
      const resultMap = new Map<string, {
        documentId: string
        filename: string
        matches: Array<{
          snippet: string
          page: number
          context: string
        }>
      }>()

      traceLinks.forEach(link => {
        const key = link.document.id
        if (!resultMap.has(key)) {
          resultMap.set(key, {
            documentId: link.document.id,
            filename: link.document.filename,
            matches: [],
          })
        }

        resultMap.get(key)!.matches.push({
          snippet: link.snippet,
          page: link.page,
          context: link.snippet, // For now, snippet is the context
        })
      })

      return Array.from(resultMap.values())
    } catch (error) {
      console.error('Error searching across documents:', error)
      throw new Error('Failed to search documents')
    }
  }
}

export const documentParser = DocumentParser