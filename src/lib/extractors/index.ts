// Field Extractors - 5 MVP Extractors with Citation Tracking
// Production-ready extractors for tender document analysis

import { TraceLink } from '@prisma/client'

export interface ExtractionResult {
  value: any
  confidence: number
  traceLinks: Omit<TraceLink, 'id' | 'createdAt'>[]
}

export interface DocumentContent {
  id: string
  content: string
  pages: Array<{
    number: number
    content: string
  }>
}

export interface ExtractorContext {
  document: DocumentContent
  allDocuments: DocumentContent[]
  tenderTitle?: string
}

// Base extractor interface
export interface FieldExtractor {
  key: string
  name: string
  description: string
  extract(context: ExtractorContext): Promise<ExtractionResult>
}

// Import all extractors
export { ScopeExtractor } from './scope-extractor'
export { EligibilityExtractor } from './eligibility-extractor'
export { EvaluationCriteriaExtractor } from './evaluation-criteria-extractor'
export { SubmissionMechanicsExtractor } from './submission-mechanics-extractor'
export { DeadlineSubmissionExtractor } from './deadline-submission-extractor'

// Export extractor registry
import { ScopeExtractor } from './scope-extractor'
import { EligibilityExtractor } from './eligibility-extractor'
import { EvaluationCriteriaExtractor } from './evaluation-criteria-extractor'
import { SubmissionMechanicsExtractor } from './submission-mechanics-extractor'
import { DeadlineSubmissionExtractor } from './deadline-submission-extractor'

// Create extractor instances
const scopeExtractor = new ScopeExtractor()
const eligibilityExtractor = new EligibilityExtractor()
const evaluationCriteriaExtractor = new EvaluationCriteriaExtractor()
const submissionMechanicsExtractor = new SubmissionMechanicsExtractor()
const deadlineSubmissionExtractor = new DeadlineSubmissionExtractor()

export const FIELD_EXTRACTORS: FieldExtractor[] = [
  scopeExtractor,
  eligibilityExtractor,
  evaluationCriteriaExtractor,
  submissionMechanicsExtractor,
  deadlineSubmissionExtractor,
]

// Export individual extractors for direct use
export {
  scopeExtractor,
  eligibilityExtractor,
  evaluationCriteriaExtractor,
  submissionMechanicsExtractor,
  deadlineSubmissionExtractor
}

// Export as default too
export default FIELD_EXTRACTORS

export const getExtractorByKey = (key: string): FieldExtractor | undefined => {
  return FIELD_EXTRACTORS.find(extractor => extractor.key === key)
}

export const getAllExtractorKeys = (): string[] => {
  return FIELD_EXTRACTORS.map(extractor => extractor.key)
}

// Utility functions for extractors
export class ExtractionUtils {
  /**
   * Find text patterns in document content and return trace links
   */
  static findPatterns(
    content: string,
    patterns: (string | RegExp)[],
    documentId: string,
    pages: Array<{ number: number; content: string }>
  ): Omit<TraceLink, 'id' | 'createdAt'>[] {
    const traceLinks: Omit<TraceLink, 'id' | 'createdAt'>[] = []

    for (const pattern of patterns) {
      const regex = typeof pattern === 'string' ? new RegExp(pattern, 'gi') : pattern
      let match

      // Search in full content first to get all matches
      const fullMatches = content.matchAll(regex)

      for (const fullMatch of fullMatches) {
        // Find which page contains this match
        let currentIndex = 0
        for (const page of pages) {
          const startIndex = currentIndex
          const endIndex = currentIndex + page.content.length

          if (fullMatch.index! >= startIndex && fullMatch.index! < endIndex) {
            // Extract snippet around the match
            const localIndex = fullMatch.index! - startIndex
            const snippet = this.extractSnippet(page.content, localIndex, fullMatch[0])

            traceLinks.push({
              documentId,
              page: page.number,
              snippet,
              sectionPath: null,
              bbox: null,
            })
            break
          }

          currentIndex += page.content.length + 1 // +1 for potential page break
        }
      }
    }

    return traceLinks
  }

  /**
   * Extract a relevant snippet around a matched text
   */
  static extractSnippet(pageContent: string, matchIndex: number, matchText: string): string {
    const SNIPPET_LENGTH = 200
    const start = Math.max(0, matchIndex - SNIPPET_LENGTH / 2)
    const end = Math.min(pageContent.length, matchIndex + matchText.length + SNIPPET_LENGTH / 2)

    let snippet = pageContent.substring(start, end).trim()

    // Clean up snippet
    snippet = snippet.replace(/\s+/g, ' ')
    snippet = snippet.replace(/^\W+|\W+$/g, '')

    // Add ellipsis if truncated
    if (start > 0) snippet = '...' + snippet
    if (end < pageContent.length) snippet = snippet + '...'

    return snippet
  }

  /**
   * Calculate confidence score based on match quality
   */
  static calculateConfidence(
    matches: number,
    strongMatches: number,
    documentLength: number
  ): number {
    if (matches === 0) return 0

    // Base confidence from match count
    let confidence = Math.min(0.8, matches * 0.2)

    // Bonus for strong matches (exact keywords)
    confidence += strongMatches * 0.1

    // Penalty for very short documents (may be incomplete)
    if (documentLength < 1000) {
      confidence *= 0.8
    }

    // Ensure confidence is between 0 and 1
    return Math.min(1, Math.max(0, confidence))
  }

  /**
   * Parse dates from text with various formats
   */
  static parseDates(text: string): Date[] {
    const dates: Date[] = []

    // Various date patterns
    const datePatterns = [
      // DD/MM/YYYY, MM/DD/YYYY
      /\b(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})\b/g,
      // YYYY-MM-DD
      /\b(\d{4})[\/\-](\d{1,2})[\/\-](\d{1,2})\b/g,
      // Month DD, YYYY
      /\b(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{1,2}),?\s+(\d{4})\b/gi,
      // DD Month YYYY
      /\b(\d{1,2})\s+(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{4})\b/gi,
    ]

    for (const pattern of datePatterns) {
      let match
      while ((match = pattern.exec(text)) !== null) {
        try {
          let date: Date | null = null

          if (pattern.source.includes('January|February')) {
            // Month name patterns
            const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                              'July', 'August', 'September', 'October', 'November', 'December']
            const monthIndex = monthNames.findIndex(m =>
              m.toLowerCase() === match[1].toLowerCase() || m.toLowerCase() === match[2].toLowerCase()
            )

            if (monthIndex !== -1) {
              const day = parseInt(match[1].match(/\d+/) ? match[1] : match[2])
              const year = parseInt(match[3])
              date = new Date(year, monthIndex, day)
            }
          } else {
            // Numeric patterns - try different interpretations
            const num1 = parseInt(match[1])
            const num2 = parseInt(match[2])
            const num3 = parseInt(match[3])

            if (num1 > 1000) {
              // YYYY-MM-DD format
              date = new Date(num1, num2 - 1, num3)
            } else {
              // DD/MM/YYYY or MM/DD/YYYY - prefer DD/MM/YYYY
              if (num1 <= 12 && num2 <= 31) {
                date = new Date(num3, num1 - 1, num2)
              } else if (num2 <= 12 && num1 <= 31) {
                date = new Date(num3, num2 - 1, num1)
              }
            }
          }

          if (date && !isNaN(date.getTime()) && date.getFullYear() > 2020 && date.getFullYear() < 2030) {
            dates.push(date)
          }
        } catch (error) {
          // Skip invalid dates
        }
      }
    }

    return dates
  }
}