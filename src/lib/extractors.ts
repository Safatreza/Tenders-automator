import { DocumentParser, ParsedDocument, TextProcessor } from './parsing'
import { prisma } from './db'
import {
  ScopeValue,
  EligibilityValue,
  EvaluationCriteriaValue,
  SubmissionMechanicsValue,
  DeadlineSubmissionValue,
  FieldValue,
} from '@/types/database'

// ==========================================
// Types
// ==========================================

export interface ExtractedField {
  key: string
  value: FieldValue
  confidence: number
  citations: Citation[]
}

export interface Citation {
  documentId: string
  page: number
  snippet: string
  sectionPath?: string
  bbox?: BoundingBox
}

export interface BoundingBox {
  x: number
  y: number
  width: number
  height: number
}

export interface ExtractionResult {
  fields: ExtractedField[]
  errors: string[]
  warnings: string[]
}

// ==========================================
// Base Extractor Class
// ==========================================

abstract class BaseExtractor {
  protected document: ParsedDocument
  protected confidence: number = 0.0

  constructor(document: ParsedDocument) {
    this.document = document
  }

  abstract extract(): Promise<ExtractedField>

  protected findKeywords(keywords: string[], contextLength: number = 150): Citation[] {
    const citations: Citation[] = []

    this.document.pages.forEach((page) => {
      const snippets = TextProcessor.findSnippets(page.text, keywords, contextLength)

      snippets.forEach((snippet) => {
        citations.push({
          documentId: '', // Will be set by the caller
          page: page.pageNumber,
          snippet: snippet.snippet,
          sectionPath: this.findSectionPath(page, snippet.index),
        })
      })
    })

    return citations
  }

  protected findSectionPath(page: any, textIndex: number): string | undefined {
    if (!page.sections) return undefined

    // Find which section contains this text index
    for (const section of page.sections) {
      if (textIndex >= section.startIndex && textIndex <= section.endIndex) {
        return section.title
      }
    }

    return undefined
  }

  protected calculateConfidence(citations: Citation[], requiredKeywords: string[]): number {
    if (citations.length === 0) return 0.0

    // Base confidence on number of citations and keyword coverage
    const keywordCoverage = requiredKeywords.length > 0
      ? citations.length / requiredKeywords.length
      : 1.0

    return Math.min(1.0, keywordCoverage * 0.8 + (citations.length > 1 ? 0.2 : 0.0))
  }
}

// ==========================================
// Scope Extractor
// ==========================================

export class ScopeExtractor extends BaseExtractor {
  async extract(): Promise<ExtractedField> {
    const keywords = [
      'scope',
      'objectives',
      'project description',
      'deliverables',
      'requirements',
      'purpose',
      'goals',
      'aims',
    ]

    const citations = this.findKeywords(keywords)

    if (citations.length === 0) {
      throw new Error('No scope information found - citations required')
    }

    // Extract structured scope information
    const objectives = this.extractObjectives()
    const deliverables = this.extractDeliverables()
    const timeline = this.extractTimeline()
    const budget = this.extractBudget()

    const value: ScopeValue = {
      objectives,
      deliverables,
      timeline,
      budget,
    }

    this.confidence = this.calculateConfidence(citations, keywords)

    return {
      key: 'scope',
      value,
      confidence: this.confidence,
      citations,
    }
  }

  private extractObjectives(): string[] {
    const objectiveKeywords = ['objective', 'goal', 'aim', 'purpose']
    const objectives: string[] = []

    this.document.pages.forEach((page) => {
      const sentences = TextProcessor.splitSentences(page.text)

      sentences.forEach((sentence) => {
        if (objectiveKeywords.some(keyword =>
          sentence.toLowerCase().includes(keyword)
        )) {
          objectives.push(TextProcessor.cleanText(sentence))
        }
      })
    })

    return [...new Set(objectives)] // Remove duplicates
  }

  private extractTimeline(): string {
    const timelineKeywords = ['timeline', 'schedule', 'duration', 'timeframe', 'completion']

    for (const page of this.document.pages) {
      const sentences = TextProcessor.splitSentences(page.text)
      for (const sentence of sentences) {
        if (timelineKeywords.some(keyword =>
          sentence.toLowerCase().includes(keyword)
        )) {
          return TextProcessor.cleanText(sentence)
        }
      }
    }

    return 'Not specified'
  }

  private extractBudget(): string | undefined {
    const budgetPatterns = [
      /\$[\d,]+(?:\.\d{2})?/g,
      /budget\s*:?\s*([^.]+)/gi,
      /cost\s*:?\s*([^.]+)/gi,
    ]

    for (const page of this.document.pages) {
      for (const pattern of budgetPatterns) {
        const match = pattern.exec(page.text)
        if (match) {
          return match[0]
        }
      }
    }

    return undefined
  }

  private extractDeliverables(): string[] {
    const deliverableKeywords = ['deliverable', 'output', 'result', 'product']
    const deliverables: string[] = []

    this.document.pages.forEach((page) => {
      const sentences = TextProcessor.splitSentences(page.text)

      sentences.forEach((sentence) => {
        if (deliverableKeywords.some(keyword =>
          sentence.toLowerCase().includes(keyword)
        )) {
          deliverables.push(TextProcessor.cleanText(sentence))
        }
      })
    })

    return [...new Set(deliverables)]
  }
}

// ==========================================
// Eligibility Extractor
// ==========================================

export class EligibilityExtractor extends BaseExtractor {
  async extract(): Promise<ExtractedField> {
    const keywords = [
      'eligibility',
      'eligible',
      'qualification',
      'requirements',
      'criteria',
      'who can apply',
      'applicant',
      'bidder',
    ]

    const citations = this.findKeywords(keywords)

    if (citations.length === 0) {
      throw new Error('No eligibility information found - citations required')
    }

    const requirements = this.extractRequirements()
    const restrictions = this.extractRestrictions()
    const qualifications = this.extractQualifications()

    const value: EligibilityValue = {
      requirements,
      restrictions,
      qualifications,
    }

    this.confidence = this.calculateConfidence(citations, keywords)

    return {
      key: 'eligibility',
      value,
      confidence: this.confidence,
      citations,
    }
  }

  private extractRequirements(): string[] {
    const requirementKeywords = ['must', 'required', 'shall', 'need to', 'minimum']
    const requirements: string[] = []

    this.document.pages.forEach((page) => {
      const sentences = TextProcessor.splitSentences(page.text)

      sentences.forEach((sentence) => {
        if (requirementKeywords.some(keyword =>
          sentence.toLowerCase().includes(keyword)
        )) {
          requirements.push(TextProcessor.cleanText(sentence))
        }
      })
    })

    return [...new Set(requirements)]
  }

  private extractRestrictions(): string[] {
    const restrictionKeywords = ['cannot', 'prohibited', 'not eligible', 'excluded']
    const restrictions: string[] = []

    this.document.pages.forEach((page) => {
      const sentences = TextProcessor.splitSentences(page.text)

      sentences.forEach((sentence) => {
        if (restrictionKeywords.some(keyword =>
          sentence.toLowerCase().includes(keyword)
        )) {
          restrictions.push(TextProcessor.cleanText(sentence))
        }
      })
    })

    return [...new Set(restrictions)]
  }

  private extractQualifications(): string[] {
    const qualificationKeywords = ['qualification', 'certified', 'licensed', 'experience']
    const qualifications: string[] = []

    this.document.pages.forEach((page) => {
      const sentences = TextProcessor.splitSentences(page.text)

      sentences.forEach((sentence) => {
        if (qualificationKeywords.some(keyword =>
          sentence.toLowerCase().includes(keyword)
        )) {
          qualifications.push(TextProcessor.cleanText(sentence))
        }
      })
    })

    return [...new Set(qualifications)]
  }
}

// ==========================================
// Evaluation Criteria Extractor
// ==========================================

export class EvaluationCriteriaExtractor extends BaseExtractor {
  async extract(): Promise<ExtractedField> {
    const keywords = [
      'evaluation',
      'criteria',
      'scoring',
      'assessment',
      'judging',
      'selection',
      'weighting',
      'points',
    ]

    const citations = this.findKeywords(keywords)

    if (citations.length === 0) {
      throw new Error('No evaluation criteria found - citations required')
    }

    const criteria = this.extractCriteria()
    const scoringMethod = this.extractScoringMethod()

    const value: EvaluationCriteriaValue = {
      criteria,
      scoringMethod,
    }

    this.confidence = this.calculateConfidence(citations, keywords)

    return {
      key: 'evaluationCriteria',
      value,
      confidence: this.confidence,
      citations,
    }
  }

  private extractCriteria(): Array<{ name: string; weight?: number; description: string }> {
    const criteria: Array<{ name: string; weight?: number; description: string }> = []

    this.document.pages.forEach((page) => {
      page.sections?.forEach((section) => {
        if (section.title.toLowerCase().includes('criteria') ||
            section.title.toLowerCase().includes('evaluation')) {

          const sentences = TextProcessor.splitSentences(section.content)

          sentences.forEach((sentence) => {
            // Look for weighted criteria (e.g., "Technical capability (40%)")
            const weightMatch = sentence.match(/(.+?)\s*\((\d+)%\)/i)
            if (weightMatch) {
              criteria.push({
                name: weightMatch[1].trim(),
                weight: parseInt(weightMatch[2]),
                description: sentence,
              })
            } else if (sentence.length > 20) {
              criteria.push({
                name: sentence.substring(0, 50) + '...',
                description: sentence,
              })
            }
          })
        }
      })
    })

    return criteria
  }

  private extractScoringMethod(): string | undefined {
    const methodKeywords = ['scoring method', 'evaluation method', 'assessment approach']

    for (const page of this.document.pages) {
      for (const section of page.sections || []) {
        if (methodKeywords.some(keyword =>
          section.title.toLowerCase().includes(keyword)
        )) {
          return section.content
        }
      }
    }

    return undefined
  }
}

// ==========================================
// Submission Mechanics Extractor
// ==========================================

export class SubmissionMechanicsExtractor extends BaseExtractor {
  async extract(): Promise<ExtractedField> {
    const keywords = [
      'submission',
      'submit',
      'how to apply',
      'application',
      'format',
      'deadline',
      'contact',
      'email',
      'portal',
    ]

    const citations = this.findKeywords(keywords)

    if (citations.length === 0) {
      throw new Error('No submission mechanics found - citations required')
    }

    const format = this.extractFormat()
    const method = this.extractMethod()
    const requirements = this.extractRequirements()
    const contactInfo = this.extractContactInfo()

    const value: SubmissionMechanicsValue = {
      format,
      method,
      requirements,
      contactInfo,
    }

    this.confidence = this.calculateConfidence(citations, keywords)

    return {
      key: 'submissionMechanics',
      value,
      confidence: this.confidence,
      citations,
    }
  }

  private extractFormat(): string {
    const formatKeywords = ['format', 'pdf', 'word', 'electronic', 'hard copy']

    for (const page of this.document.pages) {
      const sentences = TextProcessor.splitSentences(page.text)

      for (const sentence of sentences) {
        if (formatKeywords.some(keyword =>
          sentence.toLowerCase().includes(keyword)
        )) {
          return TextProcessor.cleanText(sentence)
        }
      }
    }

    return 'Not specified'
  }

  private extractMethod(): string {
    const methodKeywords = ['email', 'portal', 'mail', 'deliver', 'online', 'website']

    for (const page of this.document.pages) {
      const sentences = TextProcessor.splitSentences(page.text)

      for (const sentence of sentences) {
        if (methodKeywords.some(keyword =>
          sentence.toLowerCase().includes(keyword)
        )) {
          return TextProcessor.cleanText(sentence)
        }
      }
    }

    return 'Not specified'
  }

  private extractRequirements(): string[] {
    const requirements: string[] = []

    this.document.pages.forEach((page) => {
      page.sections?.forEach((section) => {
        if (section.title.toLowerCase().includes('submission') ||
            section.title.toLowerCase().includes('requirement')) {

          const sentences = TextProcessor.splitSentences(section.content)
          requirements.push(...sentences.map(s => TextProcessor.cleanText(s)))
        }
      })
    })

    return [...new Set(requirements)]
  }

  private extractContactInfo(): { email?: string; phone?: string; address?: string } | undefined {
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g
    const phoneRegex = /\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/g

    let email: string | undefined
    let phone: string | undefined
    let address: string | undefined

    for (const page of this.document.pages) {
      const emailMatch = page.text.match(emailRegex)
      if (emailMatch) email = emailMatch[0]

      const phoneMatch = page.text.match(phoneRegex)
      if (phoneMatch) phone = phoneMatch[0]

      // Simple address detection (lines with street indicators)
      const lines = page.text.split('\n')
      for (const line of lines) {
        if (/\b(street|st|avenue|ave|road|rd|drive|dr|lane|ln)\b/i.test(line)) {
          address = line.trim()
          break
        }
      }
    }

    if (email || phone || address) {
      return { email, phone, address }
    }

    return undefined
  }
}

// ==========================================
// Deadline Submission Extractor
// ==========================================

export class DeadlineSubmissionExtractor extends BaseExtractor {
  async extract(): Promise<ExtractedField> {
    const keywords = [
      'deadline',
      'due date',
      'submit by',
      'closing date',
      'final date',
      'expiry',
      'expires',
    ]

    const citations = this.findKeywords(keywords)

    if (citations.length === 0) {
      throw new Error('No deadline information found - citations required')
    }

    const dateInfo = this.extractDeadlineDate()

    if (!dateInfo.date) {
      throw new Error('Could not extract a valid deadline date')
    }

    const value: DeadlineSubmissionValue = {
      date: dateInfo.date,
      time: dateInfo.time,
      timezone: dateInfo.timezone,
      isExtendable: this.checkIfExtendable(),
    }

    this.confidence = this.calculateConfidence(citations, keywords)

    return {
      key: 'deadlineSubmission',
      value,
      confidence: this.confidence,
      citations,
    }
  }

  private extractDeadlineDate(): { date?: Date; time?: string; timezone?: string } {
    const dates = TextProcessor.extractDates(this.document.text)

    if (dates.length === 0) {
      return {}
    }

    // Find the most likely deadline date (usually the latest future date)
    const futureDates = dates.filter(d => d.date > new Date())
    const selectedDate = futureDates.length > 0
      ? futureDates.sort((a, b) => a.date.getTime() - b.date.getTime())[0]
      : dates[0]

    // Try to extract time information
    const timeRegex = /\b(\d{1,2}):(\d{2})\s*(am|pm|AM|PM)?\b/
    const timeMatch = this.document.text.match(timeRegex)
    const time = timeMatch ? timeMatch[0] : undefined

    // Try to extract timezone
    const timezoneRegex = /\b(EST|PST|CST|MST|EDT|PDT|CDT|MDT|UTC|GMT)\b/
    const timezoneMatch = this.document.text.match(timezoneRegex)
    const timezone = timezoneMatch ? timezoneMatch[0] : undefined

    return {
      date: selectedDate.date,
      time,
      timezone,
    }
  }

  private checkIfExtendable(): boolean {
    const extendableKeywords = ['extendable', 'extension', 'may be extended', 'can be extended']

    return extendableKeywords.some(keyword =>
      this.document.text.toLowerCase().includes(keyword)
    )
  }
}

// ==========================================
// Main Field Extraction Service
// ==========================================

export class FieldExtractionService {
  static async extractAllFields(
    tenderId: string,
    documentId: string,
    documentKey: string,
    mimeType: string
  ): Promise<ExtractionResult> {
    try {
      // Parse the document
      const parsedDoc = await DocumentParser.parseDocument(documentKey, mimeType)

      // Create extractors
      const extractors = [
        new ScopeExtractor(parsedDoc),
        new EligibilityExtractor(parsedDoc),
        new EvaluationCriteriaExtractor(parsedDoc),
        new SubmissionMechanicsExtractor(parsedDoc),
        new DeadlineSubmissionExtractor(parsedDoc),
      ]

      const fields: ExtractedField[] = []
      const errors: string[] = []
      const warnings: string[] = []

      // Extract each field
      for (const extractor of extractors) {
        try {
          const field = await extractor.extract()

          // Set document ID for citations
          field.citations.forEach(citation => {
            citation.documentId = documentId
          })

          fields.push(field)
        } catch (error) {
          const message = error instanceof Error ? error.message : 'Unknown extraction error'
          errors.push(message)
        }
      }

      // Add warnings for low confidence fields
      fields.forEach(field => {
        if (field.confidence < 0.5) {
          warnings.push(`Low confidence (${Math.round(field.confidence * 100)}%) for field: ${field.key}`)
        }
      })

      return { fields, errors, warnings }
    } catch (error) {
      return {
        fields: [],
        errors: [error instanceof Error ? error.message : 'Unknown error'],
        warnings: [],
      }
    }
  }

  static async saveExtractionResults(
    tenderId: string,
    extractionResult: ExtractionResult
  ): Promise<void> {
    // Save each field and its citations
    for (const field of extractionResult.fields) {
      // Create trace links first
      const traceLinkIds: string[] = []

      for (const citation of field.citations) {
        const traceLink = await prisma.traceLink.create({
          data: {
            documentId: citation.documentId,
            page: citation.page,
            snippet: citation.snippet,
            sectionPath: citation.sectionPath,
            bbox: citation.bbox,
          },
        })
        traceLinkIds.push(traceLink.id)
      }

      // Create or update field extraction
      await prisma.fieldExtraction.upsert({
        where: {
          tenderId_key: {
            tenderId,
            key: field.key,
          },
        },
        update: {
          value: field.value as any,
          confidence: field.confidence,
          traceLinks: {
            set: traceLinkIds.map(id => ({ id })),
          },
        },
        create: {
          tenderId,
          key: field.key,
          value: field.value as any,
          confidence: field.confidence,
          traceLinks: {
            connect: traceLinkIds.map(id => ({ id })),
          },
        },
      })
    }
  }
}

export default FieldExtractionService