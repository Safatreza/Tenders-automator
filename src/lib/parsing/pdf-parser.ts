import pdf from 'pdf-parse'

export interface ParsedPage {
  pageNumber: number
  text: string
  lines: string[]
}

export interface ParsedDocument {
  text: string
  pages: ParsedPage[]
  metadata: {
    title?: string
    author?: string
    creator?: string
    producer?: string
    creationDate?: Date
    modificationDate?: Date
    totalPages: number
  }
}

export class PDFParser {
  static async parsePDF(buffer: Buffer): Promise<ParsedDocument> {
    try {
      const data = await pdf(buffer, {
        // Enable page-level parsing
        pagerender: (pageData: any) => {
          return pageData.getTextContent().then((textContent: any) => {
            return textContent.items.map((item: any) => item.str).join(' ')
          })
        }
      })

      // Split text into pages (rough estimation)
      const pages = this.extractPages(data.text, data.numpages)

      return {
        text: data.text,
        pages,
        metadata: {
          title: data.info?.Title,
          author: data.info?.Author,
          creator: data.info?.Creator,
          producer: data.info?.Producer,
          creationDate: data.info?.CreationDate ? new Date(data.info.CreationDate) : undefined,
          modificationDate: data.info?.ModDate ? new Date(data.info.ModDate) : undefined,
          totalPages: data.numpages,
        },
      }
    } catch (error) {
      console.error('Error parsing PDF:', error)
      throw new Error('Failed to parse PDF document')
    }
  }

  private static extractPages(fullText: string, totalPages: number): ParsedPage[] {
    // Split text into roughly equal parts for each page
    // This is a simple heuristic - for better accuracy, use a library that preserves page boundaries
    const avgPageLength = Math.ceil(fullText.length / totalPages)
    const pages: ParsedPage[] = []

    for (let i = 0; i < totalPages; i++) {
      const start = i * avgPageLength
      const end = Math.min((i + 1) * avgPageLength, fullText.length)
      const pageText = fullText.slice(start, end)

      pages.push({
        pageNumber: i + 1,
        text: pageText,
        lines: pageText.split('\n').filter(line => line.trim() !== ''),
      })
    }

    return pages
  }

  static extractTextWithPositions(buffer: Buffer): Promise<Array<{
    text: string
    page: number
    x: number
    y: number
    width: number
    height: number
  }>> {
    // This would require a more advanced PDF library like pdf2pic + OCR
    // For now, we'll return basic text extraction
    return this.parsePDF(buffer).then(parsed => {
      const positions: Array<{
        text: string
        page: number
        x: number
        y: number
        width: number
        height: number
      }> = []

      parsed.pages.forEach((page, index) => {
        page.lines.forEach((line, lineIndex) => {
          if (line.trim()) {
            positions.push({
              text: line,
              page: index + 1,
              x: 0, // Placeholder - would need actual positioning data
              y: lineIndex * 20, // Estimated line height
              width: line.length * 8, // Estimated character width
              height: 20,
            })
          }
        })
      })

      return positions
    })
  }

  static async extractMetadata(buffer: Buffer): Promise<{
    pageCount: number
    title?: string
    author?: string
    creationDate?: Date
    fileSize: number
  }> {
    try {
      const data = await pdf(buffer)

      return {
        pageCount: data.numpages,
        title: data.info?.Title,
        author: data.info?.Author,
        creationDate: data.info?.CreationDate ? new Date(data.info.CreationDate) : undefined,
        fileSize: buffer.length,
      }
    } catch (error) {
      console.error('Error extracting PDF metadata:', error)
      throw new Error('Failed to extract PDF metadata')
    }
  }

  static searchInDocument(parsed: ParsedDocument, query: string): Array<{
    page: number
    snippet: string
    context: string
    position: number
  }> {
    const results: Array<{
      page: number
      snippet: string
      context: string
      position: number
    }> = []

    const queryLower = query.toLowerCase()

    parsed.pages.forEach(page => {
      const textLower = page.text.toLowerCase()
      let position = textLower.indexOf(queryLower)

      while (position !== -1) {
        // Extract context around the match
        const contextStart = Math.max(0, position - 100)
        const contextEnd = Math.min(page.text.length, position + query.length + 100)
        const context = page.text.slice(contextStart, contextEnd)

        // Extract the matched snippet
        const snippet = page.text.slice(position, position + query.length)

        results.push({
          page: page.pageNumber,
          snippet,
          context,
          position,
        })

        // Find next occurrence
        position = textLower.indexOf(queryLower, position + 1)
      }
    })

    return results
  }
}

export const pdfParser = PDFParser