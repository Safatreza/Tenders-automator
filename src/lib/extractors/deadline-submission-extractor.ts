// Deadline Submission Extractor - Extract due dates with validation
// Identifies submission deadlines, important dates, and validates future dates

import { FieldExtractor, ExtractionResult, ExtractorContext, ExtractionUtils } from './index'

export class DeadlineSubmissionExtractor implements FieldExtractor {
  key = 'deadlineSubmission'
  name = 'Submission Deadline'
  description = 'Extracts submission deadlines and validates future dates'

  async extract(context: ExtractorContext): Promise<ExtractionResult> {
    const { document } = context
    const content = document.content.toLowerCase()

    // Keywords and patterns for deadline identification
    const deadlineKeywords = [
      'deadline', 'due date', 'submission deadline', 'closing date',
      'final date', 'last date', 'expiry date', 'cutoff date',
      'submission date', 'proposals due', 'bids due', 'tender closing',
      'closing time', 'submission time', 'latest submission',
      'no later than', 'before', 'by', 'on or before',
      'must be received', 'must be submitted', 'latest acceptance'
    ]

    const strongDeadlinePatterns = [
      /submission\s+deadline[:\s]/gi,
      /closing\s+date[:\s]/gi,
      /due\s+date[:\s]/gi,
      /proposals?\s+due[:\s]/gi,
      /bids?\s+due[:\s]/gi,
      /tender\s+closing[:\s]/gi,
      /final\s+date[:\s]/gi,
      /last\s+date[:\s]/gi,
      /no\s+later\s+than[:\s]/gi,
      /must\s+be\s+(?:received|submitted)\s+(?:by|before)[:\s]/gi,
    ]

    const dateTimePatterns = [
      // Date with time patterns
      /(?:by|before|on|due)\s+([A-Za-z]+\s+\d{1,2},?\s+\d{4})\s+(?:at|by)\s+(\d{1,2}:\d{2}\s*(?:am|pm|AM|PM)?)/gi,
      /(\d{1,2}[\/\-]\d{1,2}[\/\-]\d{4})\s+(?:at|by)\s+(\d{1,2}:\d{2}\s*(?:am|pm|AM|PM)?)/gi,
      // Date only patterns
      /(?:by|before|on|due)\s+([A-Za-z]+\s+\d{1,2},?\s+\d{4})/gi,
      /(?:by|before|on|due)\s+(\d{1,2}[\/\-]\d{1,2}[\/\-]\d{4})/gi,
      /(\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2})/gi,
    ]

    // Find all relevant patterns and trace links
    const allPatterns = [
      ...strongDeadlinePatterns,
      ...dateTimePatterns,
    ]

    const traceLinks = ExtractionUtils.findPatterns(
      document.content,
      allPatterns,
      document.id,
      document.pages
    )

    // Count matches for confidence calculation
    let matches = 0
    let strongMatches = 0

    for (const keyword of deadlineKeywords) {
      const regex = new RegExp(keyword.replace(/\s+/g, '\\s+'), 'gi')
      const keywordMatches = content.match(regex) || []
      matches += keywordMatches.length

      if (['deadline', 'due date', 'closing date', 'submission deadline'].includes(keyword)) {
        strongMatches += keywordMatches.length
      }
    }

    // Extract deadline information
    const deadlines = this.extractDeadlines(document.content)
    const validatedDeadlines = this.validateDeadlines(deadlines)
    const primaryDeadline = this.identifyPrimaryDeadline(validatedDeadlines)

    // Calculate confidence
    let confidence = ExtractionUtils.calculateConfidence(
      matches,
      strongMatches,
      document.content.length
    )

    // Boost confidence if we found valid future dates
    if (validatedDeadlines.some(d => d.isValid && d.isFuture)) {
      confidence = Math.min(1, confidence + 0.2)
    }

    // Reduce confidence if no valid dates found
    if (validatedDeadlines.length === 0 || !validatedDeadlines.some(d => d.isValid)) {
      confidence *= 0.5
    }

    return {
      value: {
        primaryDeadline,
        allDeadlines: validatedDeadlines,
        summary: this.generateSummary(primaryDeadline, validatedDeadlines),
        matchCount: matches,
        validDateCount: validatedDeadlines.filter(d => d.isValid).length,
      },
      confidence,
      traceLinks,
    }
  }

  private extractDeadlines(content: string): Array<{
    text: string
    date?: Date
    time?: string
    context?: string
    type?: string
  }> {
    const deadlines: Array<{
      text: string
      date?: Date
      time?: string
      context?: string
      type?: string
    }> = []

    // Extract deadline sentences
    const deadlinePattern = /([^.\n]*(?:deadline|due\s+date|closing\s+date|final\s+date|last\s+date|submission\s+deadline|proposals?\s+due|bids?\s+due|tender\s+closing|no\s+later\s+than|must\s+be\s+(?:received|submitted))[^.\n]*\.?)/gi

    let match
    while ((match = deadlinePattern.exec(content)) !== null) {
      const sentence = match[1].trim()
      const deadline = this.parseDeadlineFromText(sentence)
      if (deadline) {
        deadlines.push(deadline)
      }
    }

    // Extract dates from specific deadline contexts
    const contextPatterns = [
      { pattern: /submission\s+deadline[:\s]*([^\n]+)/gi, type: 'submission' },
      { pattern: /closing\s+date[:\s]*([^\n]+)/gi, type: 'closing' },
      { pattern: /due\s+date[:\s]*([^\n]+)/gi, type: 'due' },
      { pattern: /proposals?\s+due[:\s]*([^\n]+)/gi, type: 'proposal' },
      { pattern: /bids?\s+due[:\s]*([^\n]+)/gi, type: 'bid' },
    ]

    for (const contextPattern of contextPatterns) {
      while ((match = contextPattern.pattern.exec(content)) !== null) {
        const contextText = match[1].trim()
        const deadline = this.parseDeadlineFromText(contextText, contextPattern.type)
        if (deadline) {
          deadline.context = match[0]
          deadlines.push(deadline)
        }
      }
    }

    return deadlines
  }

  private parseDeadlineFromText(text: string, type?: string): {
    text: string
    date?: Date
    time?: string
    context?: string
    type?: string
  } | null {
    const deadline: {
      text: string
      date?: Date
      time?: string
      context?: string
      type?: string
    } = {
      text,
      type,
    }

    // Extract dates using utility function
    const dates = ExtractionUtils.parseDates(text)
    if (dates.length > 0) {
      // Use the first valid date found
      deadline.date = dates[0]
    }

    // Extract time if present
    const timePattern = /(\d{1,2}:\d{2}\s*(?:am|pm|AM|PM)?)/
    const timeMatch = text.match(timePattern)
    if (timeMatch) {
      deadline.time = timeMatch[1]
    }

    // Only return if we found a date
    return deadline.date ? deadline : null
  }

  private validateDeadlines(deadlines: Array<{
    text: string
    date?: Date
    time?: string
    context?: string
    type?: string
  }>): Array<{
    text: string
    date?: Date
    time?: string
    context?: string
    type?: string
    isValid: boolean
    isFuture: boolean
    daysFromNow?: number
    validationMessage?: string
  }> {
    const now = new Date()

    return deadlines.map(deadline => {
      const validated = {
        ...deadline,
        isValid: false,
        isFuture: false,
        daysFromNow: undefined as number | undefined,
        validationMessage: undefined as string | undefined,
      }

      if (!deadline.date) {
        validated.validationMessage = 'No valid date found'
        return validated
      }

      // Check if date is valid
      if (isNaN(deadline.date.getTime())) {
        validated.validationMessage = 'Invalid date format'
        return validated
      }

      validated.isValid = true

      // Check if date is in the future
      const diffMs = deadline.date.getTime() - now.getTime()
      const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24))

      validated.daysFromNow = diffDays
      validated.isFuture = diffDays > 0

      if (diffDays < 0) {
        validated.validationMessage = `Date is ${Math.abs(diffDays)} days in the past`
      } else if (diffDays === 0) {
        validated.validationMessage = 'Date is today'
      } else if (diffDays <= 7) {
        validated.validationMessage = `Date is in ${diffDays} days (urgent)`
      } else if (diffDays <= 30) {
        validated.validationMessage = `Date is in ${diffDays} days`
      } else {
        validated.validationMessage = `Date is in ${diffDays} days (${Math.ceil(diffDays / 30)} months)`
      }

      return validated
    })
  }

  private identifyPrimaryDeadline(deadlines: Array<{
    text: string
    date?: Date
    time?: string
    context?: string
    type?: string
    isValid: boolean
    isFuture: boolean
    daysFromNow?: number
    validationMessage?: string
  }>): typeof deadlines[0] | null {
    if (deadlines.length === 0) return null

    // Filter to valid, future dates
    const validFutureDates = deadlines.filter(d => d.isValid && d.isFuture)

    if (validFutureDates.length === 0) {
      // No future dates, return the most recent valid date
      const validDates = deadlines.filter(d => d.isValid)
      if (validDates.length === 0) return deadlines[0] // Return first if no valid dates

      return validDates.reduce((latest, current) => {
        if (!latest.date || !current.date) return latest
        return current.date.getTime() > latest.date.getTime() ? current : latest
      })
    }

    // Prioritize by type
    const typeOrder = ['submission', 'due', 'closing', 'proposal', 'bid']
    for (const type of typeOrder) {
      const typed = validFutureDates.filter(d => d.type === type)
      if (typed.length > 0) {
        // Return earliest date of this type
        return typed.reduce((earliest, current) => {
          if (!earliest.date || !current.date) return earliest
          return current.date.getTime() < earliest.date.getTime() ? current : earliest
        })
      }
    }

    // Return earliest future date
    return validFutureDates.reduce((earliest, current) => {
      if (!earliest.date || !current.date) return earliest
      return current.date.getTime() < earliest.date.getTime() ? current : earliest
    })
  }

  private generateSummary(
    primaryDeadline: any,
    allDeadlines: Array<{
      text: string
      date?: Date
      time?: string
      context?: string
      type?: string
      isValid: boolean
      isFuture: boolean
      daysFromNow?: number
      validationMessage?: string
    }>
  ): string {
    if (!primaryDeadline) {
      return 'No clear submission deadline identified in the document.'
    }

    const summaryParts: string[] = []

    // Primary deadline
    if (primaryDeadline.date) {
      const dateStr = primaryDeadline.date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })

      const timeStr = primaryDeadline.time ? ` at ${primaryDeadline.time}` : ''
      summaryParts.push(`Primary Deadline: ${dateStr}${timeStr}`)

      if (primaryDeadline.validationMessage) {
        summaryParts.push(`Status: ${primaryDeadline.validationMessage}`)
      }
    }

    // Additional deadlines if any
    const otherValidDeadlines = allDeadlines.filter(d =>
      d !== primaryDeadline && d.isValid && d.date
    )

    if (otherValidDeadlines.length > 0) {
      const otherDates = otherValidDeadlines
        .slice(0, 2)
        .map(d => {
          const dateStr = d.date!.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
          return `${dateStr} (${d.type || 'other'})`
        })
        .join(', ')

      summaryParts.push(`Other Dates: ${otherDates}`)
    }

    // Warning for past dates
    const pastDeadlines = allDeadlines.filter(d => d.isValid && !d.isFuture)
    if (pastDeadlines.length > 0 && (!primaryDeadline.isFuture)) {
      summaryParts.push('⚠️ Warning: Found deadline(s) in the past')
    }

    // Urgency indicator
    if (primaryDeadline.isFuture && primaryDeadline.daysFromNow !== undefined) {
      if (primaryDeadline.daysFromNow <= 7) {
        summaryParts.push('🚨 Urgent: Deadline within 1 week')
      } else if (primaryDeadline.daysFromNow <= 30) {
        summaryParts.push('⚡ Moderate: Deadline within 1 month')
      }
    }

    return summaryParts.join('\n') || 'Deadline information requires manual review.'
  }
}