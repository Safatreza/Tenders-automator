// Scope Extractor - Extract project objectives and deliverables
// Identifies project scope, objectives, and key deliverables with citations

import { FieldExtractor, ExtractionResult, ExtractorContext, ExtractionUtils } from './index'

export class ScopeExtractor implements FieldExtractor {
  key = 'scope'
  name = 'Project Scope'
  description = 'Extracts project objectives, deliverables, and scope of work'

  async extract(context: ExtractorContext): Promise<ExtractionResult> {
    const { document } = context
    const content = document.content.toLowerCase()

    // Keywords and patterns for scope identification
    const scopeKeywords = [
      'scope of work', 'project scope', 'scope', 'objectives', 'deliverables',
      'project objectives', 'project description', 'purpose', 'goals',
      'requirements', 'specifications', 'project requirements',
      'work to be performed', 'services required', 'services to be provided'
    ]

    const strongScopePatterns = [
      /scope\s+of\s+work[:\s]/gi,
      /project\s+scope[:\s]/gi,
      /project\s+objectives[:\s]/gi,
      /deliverables[:\s]/gi,
      /project\s+description[:\s]/gi,
      /purpose[:\s]/gi,
      /requirements[:\s]/gi,
    ]

    const sectionPatterns = [
      /(?:section|chapter|part)\s*\d+[:\.\s]*(?:scope|objectives|deliverables|requirements)/gi,
      /\d+\.\s*(?:scope|objectives|deliverables|requirements)/gi,
    ]

    // Find all relevant patterns and trace links
    const allPatterns = [...strongScopePatterns, ...sectionPatterns]
    const traceLinks = ExtractionUtils.findPatterns(
      document.content,
      allPatterns,
      document.id,
      document.pages
    )

    // Count matches for confidence calculation
    let matches = 0
    let strongMatches = 0

    for (const keyword of scopeKeywords) {
      const regex = new RegExp(keyword.replace(/\s+/g, '\\s+'), 'gi')
      const keywordMatches = content.match(regex) || []
      matches += keywordMatches.length

      if (['scope of work', 'project scope', 'deliverables', 'objectives'].includes(keyword)) {
        strongMatches += keywordMatches.length
      }
    }

    // Extract scope content sections
    const scopeSections = this.extractScopeContent(document.content)

    // Calculate confidence
    const confidence = ExtractionUtils.calculateConfidence(
      matches,
      strongMatches,
      document.content.length
    )

    return {
      value: {
        sections: scopeSections,
        keywords: scopeKeywords.filter(keyword => {
          const regex = new RegExp(keyword.replace(/\s+/g, '\\s+'), 'gi')
          return regex.test(content)
        }),
        summary: this.generateSummary(scopeSections),
        matchCount: matches,
      },
      confidence,
      traceLinks,
    }
  }

  private extractScopeContent(content: string): Array<{type: string, content: string, section?: string}> {
    const sections: Array<{type: string, content: string, section?: string}> = []

    // Extract sections with scope-related headings
    const headingPatterns = [
      /(?:^|\n)\s*(?:section|chapter|part)?\s*\d*[:\.\)]?\s*(scope\s+of\s+work|project\s+scope|objectives|deliverables|requirements|project\s+description)[:\.]?\s*\n((?:[^\n]+\n?)*?)(?=\n\s*(?:section|chapter|part|\d+\.|[A-Z][A-Z\s]+:)|\n\s*$)/gim,
      /(?:^|\n)\s*\d+[:\.\)]\s*(scope|objectives|deliverables|requirements)[:\.]?\s*\n((?:[^\n]+\n?)*?)(?=\n\s*\d+[:\.\)]|\n\s*[A-Z][A-Z\s]+:|\n\s*$)/gim,
    ]

    for (const pattern of headingPatterns) {
      let match
      while ((match = pattern.exec(content)) !== null) {
        sections.push({
          type: 'section',
          content: match[2].trim(),
          section: match[1].trim(),
        })
      }
    }

    // Extract bullet points and lists related to scope
    const listPatterns = [
      /(?:the\s+scope\s+includes?|deliverables\s+include|objectives\s+include|requirements\s+include)[:\.]?\s*((?:[-•*]\s*[^\n]+\n?)*)/gim,
      /(?:^|\n)\s*(?:[-•*]|\d+[\.\)])[\s]*((?:develop|design|implement|provide|deliver|install|configure|maintain|support|create|build|establish)[^\n]+)/gim,
    ]

    for (const pattern of listPatterns) {
      let match
      while ((match = pattern.exec(content)) !== null) {
        sections.push({
          type: 'list',
          content: match[1].trim(),
        })
      }
    }

    // Extract paragraphs that mention key scope indicators
    const paragraphPattern = /([^.\n]*(?:scope|objectives?|deliverables?|requirements?|project\s+description|purpose|goals?)[^.\n]*\.)/gim
    let match
    while ((match = paragraphPattern.exec(content)) !== null) {
      const sentence = match[1].trim()
      if (sentence.length > 50 && sentence.length < 500) { // Filter for reasonable length
        sections.push({
          type: 'paragraph',
          content: sentence,
        })
      }
    }

    return sections
  }

  private generateSummary(sections: Array<{type: string, content: string, section?: string}>): string {
    if (sections.length === 0) {
      return 'No clear project scope identified in the document.'
    }

    const sectionSummaries = sections
      .filter(section => section.content.length > 20)
      .slice(0, 5) // Limit to top 5 sections
      .map(section => {
        const prefix = section.section ? `${section.section}: ` : ''
        const content = section.content.length > 200
          ? section.content.substring(0, 200) + '...'
          : section.content
        return prefix + content
      })
      .join('\n\n')

    return sectionSummaries || 'Project scope information found but requires manual review.'
  }
}