import mammoth from 'mammoth'

export interface DocxParseResult {
  text: string
  html: string
  sections: Section[]
  metadata: {
    title?: string
    author?: string
    wordCount: number
    characterCount: number
  }
}

export interface Section {
  title: string
  content: string
  level: number
  startPosition: number
  endPosition: number
}

export class DOCXParser {
  static async parseDOCX(buffer: Buffer): Promise<DocxParseResult> {
    try {
      // Extract plain text
      const textResult = await mammoth.extractRawText({ buffer })

      // Extract HTML with formatting
      const htmlResult = await mammoth.convertToHtml({ buffer })

      // Extract sections and headings
      const sections = this.extractSections(textResult.value)

      // Calculate basic metadata
      const words = textResult.value.split(/\s+/).filter(word => word.length > 0)
      const metadata = {
        wordCount: words.length,
        characterCount: textResult.value.length,
      }

      return {
        text: textResult.value,
        html: htmlResult.value,
        sections,
        metadata,
      }
    } catch (error) {
      console.error('Error parsing DOCX:', error)
      throw new Error('Failed to parse DOCX document')
    }
  }

  private static extractSections(text: string): Section[] {
    const sections: Section[] = []
    const lines = text.split('\n')
    let currentSection: Section | null = null
    let currentPosition = 0

    lines.forEach((line, index) => {
      const trimmedLine = line.trim()

      if (trimmedLine === '') {
        currentPosition += line.length + 1
        return
      }

      // Simple heuristic to detect headings
      // - Lines that are short (< 80 chars) and don't end with punctuation
      // - Lines that are all caps or title case
      const isHeading = this.isLikelyHeading(trimmedLine)

      if (isHeading) {
        // Close previous section
        if (currentSection) {
          currentSection.endPosition = currentPosition
          sections.push(currentSection)
        }

        // Start new section
        currentSection = {
          title: trimmedLine,
          content: '',
          level: this.determineHeadingLevel(trimmedLine),
          startPosition: currentPosition,
          endPosition: 0,
        }
      } else if (currentSection) {
        // Add content to current section
        currentSection.content += (currentSection.content ? '\n' : '') + trimmedLine
      }

      currentPosition += line.length + 1
    })

    // Close final section
    if (currentSection) {
      currentSection.endPosition = currentPosition
      sections.push(currentSection)
    }

    return sections
  }

  private static isLikelyHeading(line: string): boolean {
    // Skip very long lines
    if (line.length > 80) return false

    // Skip lines ending with sentence punctuation
    if (/[.!?]$/.test(line)) return false

    // Check for title case or all caps
    const words = line.split(/\s+/)
    const capitalizedWords = words.filter(word =>
      /^[A-Z]/.test(word) && word.length > 1
    )

    // If most words are capitalized, likely a heading
    return capitalizedWords.length / words.length > 0.6
  }

  private static determineHeadingLevel(heading: string): number {
    // Simple heuristics for heading levels
    if (heading.length < 20) return 1
    if (heading.length < 40) return 2
    return 3
  }

  static async extractStructuredContent(buffer: Buffer): Promise<{
    paragraphs: Array<{ text: string; style?: string }>
    tables: Array<{ rows: string[][]; caption?: string }>
    lists: Array<{ items: string[]; ordered: boolean }>
  }> {
    try {
      // Use mammoth with custom style mapping
      const result = await mammoth.convertToHtml({
        buffer,
        styleMap: [
          "p[style-name='Heading 1'] => h1:fresh",
          "p[style-name='Heading 2'] => h2:fresh",
          "p[style-name='Heading 3'] => h3:fresh",
        ]
      })

      // Parse the HTML to extract structured content
      const paragraphs: Array<{ text: string; style?: string }> = []
      const tables: Array<{ rows: string[][]; caption?: string }> = []
      const lists: Array<{ items: string[]; ordered: boolean }> = []

      // This is a simplified extraction - for production, use a proper HTML parser
      const htmlLines = result.value.split('\n')

      htmlLines.forEach(line => {
        const trimmed = line.trim()

        if (trimmed.startsWith('<p>') && trimmed.endsWith('</p>')) {
          const text = trimmed.replace(/<\/?p>/g, '').trim()
          if (text) {
            paragraphs.push({ text })
          }
        } else if (trimmed.startsWith('<h')) {
          const text = trimmed.replace(/<\/?h[1-6]>/g, '').trim()
          if (text) {
            const level = trimmed.match(/<h([1-6])>/)?.[1] || '1'
            paragraphs.push({ text, style: `heading${level}` })
          }
        }
      })

      return { paragraphs, tables, lists }
    } catch (error) {
      console.error('Error extracting structured content:', error)
      throw new Error('Failed to extract structured content from DOCX')
    }
  }

  static searchInDocument(parsed: DocxParseResult, query: string): Array<{
    section: string
    snippet: string
    context: string
    position: number
  }> {
    const results: Array<{
      section: string
      snippet: string
      context: string
      position: number
    }> = []

    const queryLower = query.toLowerCase()

    // Search in main text
    const textLower = parsed.text.toLowerCase()
    let position = textLower.indexOf(queryLower)

    while (position !== -1) {
      // Find which section this belongs to
      const section = parsed.sections.find(s =>
        position >= s.startPosition && position <= s.endPosition
      )

      // Extract context around the match
      const contextStart = Math.max(0, position - 100)
      const contextEnd = Math.min(parsed.text.length, position + query.length + 100)
      const context = parsed.text.slice(contextStart, contextEnd)

      // Extract the matched snippet
      const snippet = parsed.text.slice(position, position + query.length)

      results.push({
        section: section?.title || 'Document',
        snippet,
        context,
        position,
      })

      // Find next occurrence
      position = textLower.indexOf(queryLower, position + 1)
    }

    return results
  }
}

export const docxParser = DOCXParser