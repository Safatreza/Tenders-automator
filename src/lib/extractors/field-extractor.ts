import { prisma } from '@/lib/prisma'

export interface FieldExtractionResult {
  value: any
  confidence: number
  citations: Array<{
    traceLinkId: string
    documentId: string
    page: number
    snippet: string
    relevanceScore: number
  }>
  metadata?: Record<string, any>
}

export interface ExtractionPattern {
  name: string
  pattern: RegExp
  valueExtractor: (match: RegExpMatchArray, context: string) => any
  confidenceCalculator?: (match: RegExpMatchArray, context: string) => number
}

export class FieldExtractor {
  private patterns: Map<string, ExtractionPattern[]> = new Map()

  constructor() {
    this.initializePatterns()
  }

  private initializePatterns() {
    // Scope patterns
    this.patterns.set('scope', [
      {
        name: 'project_scope',
        pattern: /(?:project\s+)?scope[:\s]*([^.]{20,200})/gi,
        valueExtractor: (match) => match[1].trim(),
        confidenceCalculator: (match, context) => {
          const keywords = ['objective', 'goal', 'purpose', 'aim', 'scope']
          const hasKeywords = keywords.some(kw => context.toLowerCase().includes(kw))
          return hasKeywords ? 0.8 : 0.6
        }
      },
      {
        name: 'objectives',
        pattern: /(?:objectives?|goals?|aims?)[:\s]*([^.]{20,300})/gi,
        valueExtractor: (match) => match[1].trim(),
        confidenceCalculator: () => 0.9
      }
    ])

    // Eligibility patterns
    this.patterns.set('eligibility', [
      {
        name: 'eligibility_criteria',
        pattern: /(?:eligibility|eligible|qualification)[:\s]*([^.]{20,400})/gi,
        valueExtractor: (match) => match[1].trim(),
        confidenceCalculator: () => 0.9
      },
      {
        name: 'requirements',
        pattern: /(?:requirements?|criteria)[:\s]*([^.]{20,300})/gi,
        valueExtractor: (match) => match[1].trim(),
        confidenceCalculator: () => 0.7
      }
    ])

    // Evaluation criteria patterns
    this.patterns.set('evaluationCriteria', [
      {
        name: 'evaluation_criteria',
        pattern: /(?:evaluation\s+criteria|assessment\s+criteria)[:\s]*([^.]{20,500})/gi,
        valueExtractor: (match) => match[1].trim(),
        confidenceCalculator: () => 0.95
      },
      {
        name: 'scoring_criteria',
        pattern: /(?:scoring|points?|marks?)[:\s]*([^.]{20,300})/gi,
        valueExtractor: (match) => match[1].trim(),
        confidenceCalculator: () => 0.8
      }
    ])

    // Submission mechanics patterns
    this.patterns.set('submissionMechanics', [
      {
        name: 'submission_process',
        pattern: /(?:submission|submit|how\s+to\s+apply)[:\s]*([^.]{20,400})/gi,
        valueExtractor: (match) => match[1].trim(),
        confidenceCalculator: () => 0.9
      },
      {
        name: 'application_process',
        pattern: /(?:application\s+process|submission\s+method)[:\s]*([^.]{20,300})/gi,
        valueExtractor: (match) => match[1].trim(),
        confidenceCalculator: () => 0.85
      }
    ])

    // Deadline patterns
    this.patterns.set('deadlineSubmission', [
      {
        name: 'deadline_date',
        pattern: /(?:deadline|due\s+date|closing\s+date)[:\s]*([^.]{5,100})/gi,
        valueExtractor: (match) => this.extractDate(match[1]),
        confidenceCalculator: (match) => {
          const dateValue = this.extractDate(match[1])
          return dateValue ? 0.9 : 0.4
        }
      },
      {
        name: 'submission_deadline',
        pattern: /(?:submit\s+by|submissions?\s+must\s+be\s+received)[:\s]*([^.]{5,100})/gi,
        valueExtractor: (match) => this.extractDate(match[1]),
        confidenceCalculator: (match) => {
          const dateValue = this.extractDate(match[1])
          return dateValue ? 0.85 : 0.3
        }
      }
    ])
  }

  async extractField(
    tenderId: string,
    fieldKey: string,
    options: {
      requireCitations?: boolean
      minConfidence?: number
      maxResults?: number
    } = {}
  ): Promise<FieldExtractionResult> {
    try {
      const patterns = this.patterns.get(fieldKey)
      if (!patterns) {
        throw new Error(`No extraction patterns found for field: ${fieldKey}`)
      }

      // Get all trace links for this tender
      const traceLinks = await prisma.traceLink.findMany({
        where: {
          document: {
            tenderId,
          },
        },
        include: {
          document: {
            select: { id: true, filename: true },
          },
        },
      })

      if (traceLinks.length === 0) {
        throw new Error('No trace links found for tender documents')
      }

      const extractions: Array<{
        value: any
        confidence: number
        traceLinkId: string
        documentId: string
        page: number
        snippet: string
        relevanceScore: number
      }> = []

      // Apply patterns to each trace link
      for (const traceLink of traceLinks) {
        for (const pattern of patterns) {
          const matches = Array.from(traceLink.snippet.matchAll(pattern.pattern))

          for (const match of matches) {
            const value = pattern.valueExtractor(match, traceLink.snippet)
            if (!value) continue

            const confidence = pattern.confidenceCalculator
              ? pattern.confidenceCalculator(match, traceLink.snippet)
              : 0.5

            if (confidence < (options.minConfidence || 0.5)) continue

            const relevanceScore = this.calculateRelevanceScore(
              fieldKey,
              value,
              traceLink.snippet
            )

            extractions.push({
              value,
              confidence,
              traceLinkId: traceLink.id,
              documentId: traceLink.document.id,
              page: traceLink.page,
              snippet: match[0],
              relevanceScore,
            })
          }
        }
      }

      if (extractions.length === 0) {
        if (options.requireCitations) {
          throw new Error(`No valid extractions found for field: ${fieldKey}`)
        }
        return {
          value: null,
          confidence: 0,
          citations: [],
        }
      }

      // Sort by relevance and confidence
      extractions.sort((a, b) => {
        const scoreA = (a.confidence + a.relevanceScore) / 2
        const scoreB = (b.confidence + b.relevanceScore) / 2
        return scoreB - scoreA
      })

      // Take the best extraction as the primary value
      const bestExtraction = extractions[0]

      // Create citation list
      const maxResults = options.maxResults || 5
      const citations = extractions.slice(0, maxResults).map(ext => ({
        traceLinkId: ext.traceLinkId,
        documentId: ext.documentId,
        page: ext.page,
        snippet: ext.snippet,
        relevanceScore: ext.relevanceScore,
      }))

      // Save the extraction to database
      await this.saveExtraction(tenderId, fieldKey, {
        value: bestExtraction.value,
        confidence: bestExtraction.confidence,
        citations,
      })

      return {
        value: bestExtraction.value,
        confidence: bestExtraction.confidence,
        citations,
        metadata: {
          totalExtractions: extractions.length,
          pattern: 'regex-based',
          fieldKey,
        },
      }
    } catch (error) {
      console.error(`Error extracting field ${fieldKey}:`, error)
      throw error
    }
  }

  private calculateRelevanceScore(fieldKey: string, value: any, context: string): number {
    const contextLower = context.toLowerCase()

    // Field-specific relevance indicators
    const relevanceIndicators: Record<string, string[]> = {
      scope: ['scope', 'objective', 'goal', 'purpose', 'project', 'work'],
      eligibility: ['eligible', 'qualification', 'requirement', 'criteria', 'must'],
      evaluationCriteria: ['evaluation', 'assess', 'score', 'criteria', 'weight'],
      submissionMechanics: ['submit', 'application', 'process', 'method', 'how'],
      deadlineSubmission: ['deadline', 'due', 'closing', 'submit by', 'before'],
    }

    const indicators = relevanceIndicators[fieldKey] || []
    const foundIndicators = indicators.filter(ind => contextLower.includes(ind))

    // Base score based on indicator presence
    let score = foundIndicators.length / indicators.length

    // Boost for value quality
    if (typeof value === 'string') {
      if (value.length > 50) score += 0.1 // Prefer longer, more detailed extractions
      if (value.includes('shall') || value.includes('must')) score += 0.1 // Legal language
    }

    // Boost for date fields with valid dates
    if (fieldKey === 'deadlineSubmission' && value instanceof Date) {
      score += 0.2
    }

    return Math.min(score, 1.0)
  }

  private extractDate(text: string): Date | null {
    try {
      // Common date patterns
      const patterns = [
        /(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/,
        /(\d{4})[\/\-](\d{1,2})[\/\-](\d{1,2})/,
        /(\d{1,2})\s+(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{4})/i,
        /(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{1,2}),?\s+(\d{4})/i,
      ]

      for (const pattern of patterns) {
        const match = text.match(pattern)
        if (match) {
          const date = new Date(text)
          if (!isNaN(date.getTime())) {
            return date
          }
        }
      }

      // Try direct parsing
      const date = new Date(text.trim())
      if (!isNaN(date.getTime())) {
        return date
      }

      return null
    } catch {
      return null
    }
  }

  private async saveExtraction(
    tenderId: string,
    fieldKey: string,
    extraction: {
      value: any
      confidence: number
      citations: Array<{ traceLinkId: string }>
    }
  ): Promise<void> {
    try {
      // Upsert field extraction
      await prisma.fieldExtraction.upsert({
        where: {
          tenderId_key: { tenderId, key: fieldKey },
        },
        create: {
          tenderId,
          key: fieldKey,
          value: extraction.value,
          confidence: extraction.confidence,
          traceLinks: {
            connect: extraction.citations.map(c => ({ id: c.traceLinkId })),
          },
        },
        update: {
          value: extraction.value,
          confidence: extraction.confidence,
          traceLinks: {
            set: extraction.citations.map(c => ({ id: c.traceLinkId })),
          },
        },
      })
    } catch (error) {
      console.error('Error saving extraction:', error)
      throw new Error('Failed to save field extraction')
    }
  }

  async validateExtractions(tenderId: string): Promise<{
    isValid: boolean
    missingFields: string[]
    lowConfidenceFields: string[]
    fieldsWithoutCitations: string[]
  }> {
    try {
      const requiredFields = ['scope', 'eligibility', 'evaluationCriteria', 'submissionMechanics', 'deadlineSubmission']
      const minConfidence = 0.5

      const extractions = await prisma.fieldExtraction.findMany({
        where: { tenderId },
        include: { traceLinks: true },
      })

      const extractedFields = new Set(extractions.map(e => e.key))
      const missingFields = requiredFields.filter(field => !extractedFields.has(field))

      const lowConfidenceFields = extractions
        .filter(e => e.confidence < minConfidence)
        .map(e => e.key)

      const fieldsWithoutCitations = extractions
        .filter(e => e.traceLinks.length === 0)
        .map(e => e.key)

      const isValid = missingFields.length === 0 &&
                     lowConfidenceFields.length === 0 &&
                     fieldsWithoutCitations.length === 0

      return {
        isValid,
        missingFields,
        lowConfidenceFields,
        fieldsWithoutCitations,
      }
    } catch (error) {
      console.error('Error validating extractions:', error)
      throw new Error('Failed to validate extractions')
    }
  }
}

export const fieldExtractor = new FieldExtractor()