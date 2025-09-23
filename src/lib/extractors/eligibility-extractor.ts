// Eligibility Extractor - Extract who can apply and qualification requirements
// Identifies eligibility criteria, qualifications, and participation requirements

import { FieldExtractor, ExtractionResult, ExtractorContext, ExtractionUtils } from './index'

export class EligibilityExtractor implements FieldExtractor {
  key = 'eligibility'
  name = 'Eligibility Criteria'
  description = 'Extracts eligibility requirements and qualification criteria for bidders'

  async extract(context: ExtractorContext): Promise<ExtractionResult> {
    const { document } = context
    const content = document.content.toLowerCase()

    // Keywords and patterns for eligibility identification
    const eligibilityKeywords = [
      'eligibility', 'eligible', 'qualification', 'qualifications', 'qualified',
      'requirements', 'criteria', 'prerequisites', 'minimum requirements',
      'bidder requirements', 'vendor requirements', 'contractor requirements',
      'participation requirements', 'submission requirements',
      'pre-qualified', 'prequalified', 'certified', 'certification',
      'experience required', 'minimum experience', 'years of experience',
      'financial capacity', 'bonding capacity', 'insurance requirements',
      'license', 'licensed', 'registration', 'accreditation'
    ]

    const strongEligibilityPatterns = [
      /eligibility\s+(?:criteria|requirements)[:\s]/gi,
      /qualification\s+(?:criteria|requirements)[:\s]/gi,
      /minimum\s+requirements[:\s]/gi,
      /bidder\s+(?:requirements|qualifications)[:\s]/gi,
      /vendor\s+(?:requirements|qualifications)[:\s]/gi,
      /contractor\s+(?:requirements|qualifications)[:\s]/gi,
      /participation\s+requirements[:\s]/gi,
      /pre-?qualified?\s+(?:vendors|contractors|bidders)[:\s]/gi,
    ]

    const experiencePatterns = [
      /(?:minimum\s+)?(\d+)\s+years?\s+(?:of\s+)?experience/gi,
      /experience\s+(?:of\s+)?(?:at\s+least\s+)?(\d+)\s+years?/gi,
      /(?:minimum\s+)?(\d+)\s+years?\s+(?:in|with|of)/gi,
    ]

    const financialPatterns = [
      /annual\s+(?:revenue|turnover)\s+of\s+[^\d]*(\d+(?:,\d{3})*(?:\.\d{2})?)\s*(?:million|m|k|thousand)?/gi,
      /financial\s+capacity\s+of\s+[^\d]*(\d+(?:,\d{3})*(?:\.\d{2})?)/gi,
      /minimum\s+(?:revenue|turnover)[^\d]*(\d+(?:,\d{3})*(?:\.\d{2})?)/gi,
    ]

    const certificationPatterns = [
      /iso\s+\d+/gi,
      /certified\s+(?:in|for|by)\s+([^\n,]+)/gi,
      /(?:license|licensing)\s+(?:in|for|from)\s+([^\n,]+)/gi,
      /accredited\s+(?:by|with)\s+([^\n,]+)/gi,
    ]

    // Find all relevant patterns and trace links
    const allPatterns = [
      ...strongEligibilityPatterns,
      ...experiencePatterns,
      ...financialPatterns,
      ...certificationPatterns,
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

    for (const keyword of eligibilityKeywords) {
      const regex = new RegExp(keyword.replace(/\s+/g, '\\s+'), 'gi')
      const keywordMatches = content.match(regex) || []
      matches += keywordMatches.length

      if (['eligibility', 'qualification', 'requirements', 'eligible'].includes(keyword)) {
        strongMatches += keywordMatches.length
      }
    }

    // Extract eligibility requirements
    const requirements = this.extractEligibilityRequirements(document.content)

    // Calculate confidence
    const confidence = ExtractionUtils.calculateConfidence(
      matches,
      strongMatches,
      document.content.length
    )

    return {
      value: {
        requirements,
        categories: this.categorizeRequirements(requirements),
        summary: this.generateSummary(requirements),
        matchCount: matches,
      },
      confidence,
      traceLinks,
    }
  }

  private extractEligibilityRequirements(content: string): Array<{
    type: string
    requirement: string
    value?: string | number
    section?: string
  }> {
    const requirements: Array<{
      type: string
      requirement: string
      value?: string | number
      section?: string
    }> = []

    // Extract experience requirements
    const experiencePattern = /(?:minimum\s+)?(\d+)\s+years?\s+(?:of\s+)?experience\s+(?:in|with|of)\s+([^\n,.]+)/gi
    let match
    while ((match = experiencePattern.exec(content)) !== null) {
      requirements.push({
        type: 'experience',
        requirement: match[0],
        value: parseInt(match[1]),
      })
    }

    // Extract financial requirements
    const financialPattern = /(?:annual\s+(?:revenue|turnover)|financial\s+capacity|minimum\s+(?:revenue|turnover))\s+[^\d]*(\d+(?:,\d{3})*(?:\.\d{2})?)\s*(million|m|thousand|k)?/gi
    while ((match = financialPattern.exec(content)) !== null) {
      let value = parseFloat(match[1].replace(/,/g, ''))
      const unit = match[2]?.toLowerCase()

      if (unit === 'million' || unit === 'm') {
        value *= 1000000
      } else if (unit === 'thousand' || unit === 'k') {
        value *= 1000
      }

      requirements.push({
        type: 'financial',
        requirement: match[0],
        value,
      })
    }

    // Extract certification requirements
    const certificationPattern = /(?:iso\s+\d+|certified\s+(?:in|for|by)\s+[^\n,]+|(?:license|licensing)\s+(?:in|for|from)\s+[^\n,]+|accredited\s+(?:by|with)\s+[^\n,]+)/gi
    while ((match = certificationPattern.exec(content)) !== null) {
      requirements.push({
        type: 'certification',
        requirement: match[0],
      })
    }

    // Extract general eligibility criteria from lists
    const listPattern = /(?:eligibility|qualification|requirements?)[:\s]*\n?((?:[-•*]\s*[^\n]+\n?)+)/gi
    while ((match = listPattern.exec(content)) !== null) {
      const items = match[1].split(/\n\s*[-•*]\s*/).filter(item => item.trim().length > 0)
      for (const item of items) {
        if (item.trim().length > 10) {
          requirements.push({
            type: 'general',
            requirement: item.trim(),
          })
        }
      }
    }

    // Extract requirements from numbered lists
    const numberedListPattern = /(?:eligibility|qualification|requirements?)[:\s]*\n?((?:\d+[\.\)]\s*[^\n]+\n?)+)/gi
    while ((match = numberedListPattern.exec(content)) !== null) {
      const items = match[1].split(/\n\s*\d+[\.\)]\s*/).filter(item => item.trim().length > 0)
      for (const item of items) {
        if (item.trim().length > 10) {
          requirements.push({
            type: 'general',
            requirement: item.trim(),
          })
        }
      }
    }

    // Extract eligibility sentences
    const sentencePattern = /([^.\n]*(?:eligible|qualified|requirement|criteria|must\s+(?:have|be|possess))[^.\n]*\.)/gi
    while ((match = sentencePattern.exec(content)) !== null) {
      const sentence = match[1].trim()
      if (sentence.length > 20 && sentence.length < 300) {
        requirements.push({
          type: 'criteria',
          requirement: sentence,
        })
      }
    }

    return requirements
  }

  private categorizeRequirements(requirements: Array<{
    type: string
    requirement: string
    value?: string | number
    section?: string
  }>): {[key: string]: any[]} {
    const categories: {[key: string]: any[]} = {
      experience: [],
      financial: [],
      certification: [],
      legal: [],
      technical: [],
      general: [],
    }

    for (const req of requirements) {
      const reqText = req.requirement.toLowerCase()

      if (req.type === 'experience' || reqText.includes('experience') || reqText.includes('years')) {
        categories.experience.push(req)
      } else if (req.type === 'financial' || reqText.includes('revenue') || reqText.includes('financial') || reqText.includes('turnover')) {
        categories.financial.push(req)
      } else if (req.type === 'certification' || reqText.includes('iso') || reqText.includes('certified') || reqText.includes('license') || reqText.includes('accredited')) {
        categories.certification.push(req)
      } else if (reqText.includes('legal') || reqText.includes('tax') || reqText.includes('registration') || reqText.includes('incorporated')) {
        categories.legal.push(req)
      } else if (reqText.includes('technical') || reqText.includes('equipment') || reqText.includes('software') || reqText.includes('technology')) {
        categories.technical.push(req)
      } else {
        categories.general.push(req)
      }
    }

    return categories
  }

  private generateSummary(requirements: Array<{
    type: string
    requirement: string
    value?: string | number
    section?: string
  }>): string {
    if (requirements.length === 0) {
      return 'No clear eligibility criteria identified in the document.'
    }

    const categories = this.categorizeRequirements(requirements)
    const summaryParts: string[] = []

    if (categories.experience.length > 0) {
      const expReqs = categories.experience.slice(0, 2)
      summaryParts.push(`Experience: ${expReqs.map(req => req.requirement).join('; ')}`)
    }

    if (categories.financial.length > 0) {
      const finReqs = categories.financial.slice(0, 2)
      summaryParts.push(`Financial: ${finReqs.map(req => req.requirement).join('; ')}`)
    }

    if (categories.certification.length > 0) {
      const certReqs = categories.certification.slice(0, 2)
      summaryParts.push(`Certifications: ${certReqs.map(req => req.requirement).join('; ')}`)
    }

    if (categories.general.length > 0 && summaryParts.length < 3) {
      const genReqs = categories.general.slice(0, 2)
      summaryParts.push(`General: ${genReqs.map(req => req.requirement).join('; ')}`)
    }

    return summaryParts.join('\n\n') || 'Eligibility criteria found but require manual review.'
  }
}