import pdfParse from 'pdf-parse'
import * as mammoth from 'mammoth'
import { StorageService } from './storage'

// ==========================================
// Types
// ==========================================

export interface ParsedDocument {
  text: string
  pages: ParsedPage[]
  metadata: DocumentMetadata
}

export interface ParsedPage {
  pageNumber: number
  text: string
  sections?: DocumentSection[]
}

export interface DocumentSection {
  title: string
  content: string
  level: number
  startIndex: number
  endIndex: number
}

export interface DocumentMetadata {
  title?: string
  author?: string
  subject?: string
  creator?: string
  producer?: string
  creationDate?: Date
  modificationDate?: Date
  pageCount: number
  wordCount: number
}

export interface ExtractionContext {
  document: ParsedDocument
  targetFields: string[]
  confidence: number
}

// ==========================================
// PDF Parser
// ==========================================

export class PDFParser {
  static async parseFromBuffer(buffer: Buffer): Promise<ParsedDocument> {
    try {
      const data = await pdfParse(buffer, {
        // Extract individual pages
        pagerender: async (pageData) => {
          return pageData.getTextContent().then((textContent) => {
            return textContent.items.map((item: any) => item.str).join(' ')
          })
        },
      })

      // Split text into pages (this is approximate since pdf-parse doesn't give exact page breaks)
      const pageTexts = this.splitIntoPages(data.text, data.numpages)

      const pages: ParsedPage[] = pageTexts.map((text, index) => ({
        pageNumber: index + 1,
        text: text.trim(),
        sections: this.extractSections(text),
      }))

      const metadata: DocumentMetadata = {
        title: data.info?.Title,
        author: data.info?.Author,
        subject: data.info?.Subject,
        creator: data.info?.Creator,
        producer: data.info?.Producer,
        creationDate: data.info?.CreationDate ? new Date(data.info.CreationDate) : undefined,
        modificationDate: data.info?.ModDate ? new Date(data.info.ModDate) : undefined,
        pageCount: data.numpages,
        wordCount: data.text.split(/\s+/).length,
      }

      return {
        text: data.text,
        pages,
        metadata,
      }
    } catch (error) {
      console.error('PDF parsing failed:', error)
      throw new Error(`PDF parsing failed: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  static async parseFromKey(key: string): Promise<ParsedDocument> {
    const buffer = await StorageService.downloadFile(key)
    return this.parseFromBuffer(buffer)
  }

  private static splitIntoPages(text: string, pageCount: number): string[] {
    if (pageCount <= 1) return [text]

    // This is a heuristic - actual page boundaries would require more sophisticated parsing
    const lines = text.split('\n')
    const linesPerPage = Math.ceil(lines.length / pageCount)

    const pages: string[] = []
    for (let i = 0; i < pageCount; i++) {
      const startLine = i * linesPerPage
      const endLine = Math.min((i + 1) * linesPerPage, lines.length)
      pages.push(lines.slice(startLine, endLine).join('\n'))
    }

    return pages
  }

  private static extractSections(text: string): DocumentSection[] {
    const sections: DocumentSection[] = []
    const lines = text.split('\n')

    // Simple section detection based on patterns
    const sectionPatterns = [
      /^(\d+\.?\s+)?([A-Z][A-Z\s]{2,})\s*$/,  // ALL CAPS titles
      /^(\d+\.?\s+)?([A-Z][a-z\s]{5,})\s*:?\s*$/,  // Title case with optional colon
      /^([A-Z]{2,}\s+[A-Z]{2,})/,  // Multiple words in caps
    ]

    let currentSection: DocumentSection | null = null
    let startIndex = 0

    lines.forEach((line, index) => {
      for (const pattern of sectionPatterns) {
        const match = line.match(pattern)
        if (match) {
          // Save previous section
          if (currentSection) {
            currentSection.endIndex = startIndex + text.slice(startIndex, startIndex + line.length).length
            currentSection.content = text.slice(currentSection.startIndex, currentSection.endIndex).trim()
            sections.push(currentSection)
          }

          // Start new section
          currentSection = {
            title: match[2] || match[1] || line.trim(),
            content: '',
            level: match[1] ? (match[1].split('.').length) : 1,
            startIndex: startIndex,
            endIndex: 0,
          }
          break
        }
      }
      startIndex += line.length + 1 // +1 for newline
    })

    // Add the last section
    if (currentSection) {
      currentSection.endIndex = text.length
      currentSection.content = text.slice(currentSection.startIndex, currentSection.endIndex).trim()
      sections.push(currentSection)
    }

    return sections
  }
}

// ==========================================
// DOCX Parser
// ==========================================

export class DOCXParser {
  static async parseFromBuffer(buffer: Buffer): Promise<ParsedDocument> {
    try {
      const result = await mammoth.extractRawText({ buffer })
      const text = result.value

      // DOCX doesn't have page concept, so we simulate pages
      const pages: ParsedPage[] = this.simulatePages(text)

      const metadata: DocumentMetadata = {
        pageCount: pages.length,
        wordCount: text.split(/\s+/).length,
      }

      return {
        text,
        pages,
        metadata,
      }
    } catch (error) {
      console.error('DOCX parsing failed:', error)
      throw new Error(`DOCX parsing failed: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  static async parseFromKey(key: string): Promise<ParsedDocument> {
    const buffer = await StorageService.downloadFile(key)
    return this.parseFromBuffer(buffer)
  }

  private static simulatePages(text: string, wordsPerPage: number = 300): ParsedPage[] {
    const words = text.split(/\s+/)
    const pages: ParsedPage[] = []

    for (let i = 0; i < words.length; i += wordsPerPage) {
      const pageWords = words.slice(i, i + wordsPerPage)
      const pageText = pageWords.join(' ')

      pages.push({
        pageNumber: pages.length + 1,
        text: pageText,
        sections: PDFParser['extractSections'](pageText),
      })
    }

    return pages.length > 0 ? pages : [{
      pageNumber: 1,
      text,
      sections: PDFParser['extractSections'](text),
    }]
  }
}

// ==========================================
// Text Parser
// ==========================================

export class TextParser {
  static async parseFromBuffer(buffer: Buffer): Promise<ParsedDocument> {
    try {
      const text = buffer.toString('utf-8')

      // Simulate pages for plain text
      const pages: ParsedPage[] = this.simulatePages(text)

      const metadata: DocumentMetadata = {
        pageCount: pages.length,
        wordCount: text.split(/\s+/).length,
      }

      return {
        text,
        pages,
        metadata,
      }
    } catch (error) {
      console.error('Text parsing failed:', error)
      throw new Error(`Text parsing failed: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  static async parseFromKey(key: string): Promise<ParsedDocument> {
    const buffer = await StorageService.downloadFile(key)
    return this.parseFromBuffer(buffer)
  }

  private static simulatePages(text: string, linesPerPage: number = 50): ParsedPage[] {
    const lines = text.split('\n')
    const pages: ParsedPage[] = []

    for (let i = 0; i < lines.length; i += linesPerPage) {
      const pageLines = lines.slice(i, i + linesPerPage)
      const pageText = pageLines.join('\n')

      pages.push({
        pageNumber: pages.length + 1,
        text: pageText,
        sections: PDFParser['extractSections'](pageText),
      })
    }

    return pages.length > 0 ? pages : [{
      pageNumber: 1,
      text,
      sections: PDFParser['extractSections'](text),
    }]
  }
}

// ==========================================
// Universal Document Parser
// ==========================================

export class DocumentParser {
  static async parseDocument(key: string, mimeType: string): Promise<ParsedDocument> {
    switch (mimeType) {
      case 'application/pdf':
        return PDFParser.parseFromKey(key)

      case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
      case 'application/msword':
        return DOCXParser.parseFromKey(key)

      case 'text/plain':
        return TextParser.parseFromKey(key)

      default:
        throw new Error(`Unsupported document type: ${mimeType}`)
    }
  }

  static async parseBuffer(buffer: Buffer, mimeType: string): Promise<ParsedDocument> {
    switch (mimeType) {
      case 'application/pdf':
        return PDFParser.parseFromBuffer(buffer)

      case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
      case 'application/msword':
        return DOCXParser.parseFromBuffer(buffer)

      case 'text/plain':
        return TextParser.parseFromBuffer(buffer)

      default:
        throw new Error(`Unsupported document type: ${mimeType}`)
    }
  }
}

// ==========================================
// Text Processing Utilities
// ==========================================

export class TextProcessor {
  /**
   * Find text snippets around keywords
   */
  static findSnippets(
    text: string,
    keywords: string[],
    contextLength: number = 100
  ): Array<{ keyword: string; snippet: string; index: number }> {
    const snippets: Array<{ keyword: string; snippet: string; index: number }> = []

    keywords.forEach((keyword) => {
      const regex = new RegExp(keyword, 'gi')
      let match

      while ((match = regex.exec(text)) !== null) {
        const start = Math.max(0, match.index - contextLength)
        const end = Math.min(text.length, match.index + keyword.length + contextLength)
        const snippet = text.slice(start, end).trim()

        snippets.push({
          keyword,
          snippet,
          index: match.index,
        })
      }
    })

    return snippets
  }

  /**
   * Extract dates from text
   */
  static extractDates(text: string): Array<{ date: Date; text: string; index: number }> {
    const datePatterns = [
      /\b(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})\b/g,
      /\b(\d{4})[\/\-](\d{1,2})[\/\-](\d{1,2})\b/g,
      /\b(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{1,2}),?\s+(\d{4})\b/gi,
      /\b(\d{1,2})\s+(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{4})\b/gi,
    ]

    const dates: Array<{ date: Date; text: string; index: number }> = []

    datePatterns.forEach((pattern) => {
      let match
      while ((match = pattern.exec(text)) !== null) {
        try {
          const dateText = match[0]
          const date = new Date(dateText)

          if (!isNaN(date.getTime())) {
            dates.push({
              date,
              text: dateText,
              index: match.index,
            })
          }
        } catch {
          // Ignore invalid dates
        }
      }
    })

    return dates
  }

  /**
   * Clean and normalize text
   */
  static cleanText(text: string): string {
    return text
      .replace(/\s+/g, ' ')  // Normalize whitespace
      .replace(/[^\w\s\.,!?;:()\-]/g, '')  // Remove special characters
      .trim()
  }

  /**
   * Split text into sentences
   */
  static splitSentences(text: string): string[] {
    return text
      .split(/[.!?]+/)
      .map(s => s.trim())
      .filter(s => s.length > 0)
  }
}

export default DocumentParser