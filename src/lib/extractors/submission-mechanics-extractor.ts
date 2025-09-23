// Submission Mechanics Extractor - Extract format and submission method
// Identifies submission requirements, format, delivery method, and procedures

import { FieldExtractor, ExtractionResult, ExtractorContext, ExtractionUtils } from './index'

export class SubmissionMechanicsExtractor implements FieldExtractor {
  key = 'submissionMechanics'
  name = 'Submission Mechanics'
  description = 'Extracts submission format, delivery method, and procedural requirements'

  async extract(context: ExtractorContext): Promise<ExtractionResult> {
    const { document } = context
    const content = document.content.toLowerCase()

    // Keywords and patterns for submission mechanics identification
    const submissionKeywords = [
      'submission', 'submit', 'delivery', 'format', 'proposal format',
      'submission format', 'submission requirements', 'submission method',
      'delivery method', 'how to submit', 'submission process',
      'proposal submission', 'bid submission', 'tender submission',
      'electronic submission', 'email submission', 'postal submission',
      'hand delivery', 'courier', 'registered mail', 'certified mail',
      'online portal', 'e-procurement', 'upload', 'portal submission',
      'hard copy', 'soft copy', 'digital copy', 'printed copy',
      'number of copies', 'copies required', 'original copy',
      'sealed envelope', 'sealed bid', 'envelope marking',
      'proposal structure', 'document structure', 'proposal sections'
    ]

    const strongSubmissionPatterns = [
      /submission\s+(?:requirements|method|format|process)[:\s]/gi,
      /proposal\s+(?:submission|format|structure)[:\s]/gi,
      /bid\s+submission[:\s]/gi,
      /delivery\s+(?:method|requirements)[:\s]/gi,
      /how\s+to\s+submit[:\s]/gi,
      /submission\s+process[:\s]/gi,
      /proposal\s+format[:\s]/gi,
    ]

    const formatPatterns = [
      /(\d+)\s*(?:hard\s+)?copies?\s+(?:required|must\s+be\s+submitted)/gi,
      /(\d+)\s*original\s+(?:and\s+(\d+)\s*copies?)?/gi,
      /(?:hard\s+copy|printed\s+copy|physical\s+copy)/gi,
      /(?:soft\s+copy|digital\s+copy|electronic\s+copy)/gi,
      /(?:pdf|word|excel|powerpoint)\s+format/gi,
      /file\s+format[:\s]*([^\n]+)/gi,
    ]

    const deliveryPatterns = [
      /(?:email|e-mail)\s+(?:to|submission)[:\s]*([^\n]+)/gi,
      /postal\s+address[:\s]*([^\n]+)/gi,
      /delivery\s+address[:\s]*([^\n]+)/gi,
      /submit\s+(?:to|via|through)[:\s]*([^\n]+)/gi,
      /online\s+portal[:\s]*([^\n]+)/gi,
      /e-procurement\s+system[:\s]*([^\n]+)/gi,
      /hand\s+delivery/gi,
      /courier\s+service/gi,
      /registered\s+mail/gi,
      /certified\s+mail/gi,
    ]

    const structurePatterns = [
      /proposal\s+(?:structure|sections|components)[:\s]/gi,
      /(?:section|part|volume)\s+\d+[:\s]*([^\n]+)/gi,
      /technical\s+proposal[:\s]*([^\n]+)/gi,
      /commercial\s+proposal[:\s]*([^\n]+)/gi,
      /financial\s+proposal[:\s]*([^\n]+)/gi,
    ]

    // Find all relevant patterns and trace links
    const allPatterns = [
      ...strongSubmissionPatterns,
      ...formatPatterns,
      ...deliveryPatterns,
      ...structurePatterns,
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

    for (const keyword of submissionKeywords) {
      const regex = new RegExp(keyword.replace(/\s+/g, '\\s+'), 'gi')
      const keywordMatches = content.match(regex) || []
      matches += keywordMatches.length

      if (['submission', 'submit', 'delivery', 'format'].includes(keyword)) {
        strongMatches += keywordMatches.length
      }
    }

    // Extract submission requirements
    const format = this.extractFormatRequirements(document.content)
    const delivery = this.extractDeliveryRequirements(document.content)
    const structure = this.extractProposalStructure(document.content)
    const procedures = this.extractSubmissionProcedures(document.content)

    // Calculate confidence
    const confidence = ExtractionUtils.calculateConfidence(
      matches,
      strongMatches,
      document.content.length
    )

    return {
      value: {
        format,
        delivery,
        structure,
        procedures,
        summary: this.generateSummary(format, delivery, structure, procedures),
        matchCount: matches,
      },
      confidence,
      traceLinks,
    }
  }

  private extractFormatRequirements(content: string): {
    copies?: number
    originalRequired?: boolean
    formats?: string[]
    fileFormats?: string[]
    specifications?: string[]
  } {
    const format: {
      copies?: number
      originalRequired?: boolean
      formats?: string[]
      fileFormats?: string[]
      specifications?: string[]
    } = {}

    // Extract number of copies
    const copiesMatch = content.match(/(\d+)\s*(?:hard\s+)?copies?\s+(?:required|must\s+be\s+submitted)/i)
    if (copiesMatch) {
      format.copies = parseInt(copiesMatch[1])
    }

    // Check for original requirement
    if (/original\s+(?:copy|and)/i.test(content)) {
      format.originalRequired = true
    }

    // Extract format types
    const formatTypes: string[] = []
    if (/hard\s+copy|printed\s+copy|physical\s+copy/i.test(content)) {
      formatTypes.push('hard copy')
    }
    if (/soft\s+copy|digital\s+copy|electronic\s+copy/i.test(content)) {
      formatTypes.push('electronic copy')
    }
    if (formatTypes.length > 0) {
      format.formats = formatTypes
    }

    // Extract file formats
    const fileFormatMatches = content.matchAll(/(?:pdf|word|excel|powerpoint|docx?|xlsx?|pptx?)\s+format/gi)
    const fileFormats: string[] = []
    for (const match of fileFormatMatches) {
      fileFormats.push(match[0])
    }
    if (fileFormats.length > 0) {
      format.fileFormats = fileFormats
    }

    // Extract format specifications
    const specPattern = /format\s+(?:requirements|specifications)[:\s]*([^\n]+)/gi
    const specifications: string[] = []
    let match
    while ((match = specPattern.exec(content)) !== null) {
      specifications.push(match[1].trim())
    }
    if (specifications.length > 0) {
      format.specifications = specifications
    }

    return format
  }

  private extractDeliveryRequirements(content: string): {
    method?: string
    address?: string
    email?: string
    portal?: string
    deadline?: string
    instructions?: string[]
  } {
    const delivery: {
      method?: string
      address?: string
      email?: string
      portal?: string
      deadline?: string
      instructions?: string[]
    } = {}

    // Determine delivery method
    if (/email|e-mail/i.test(content)) {
      delivery.method = 'email'
      const emailMatch = content.match(/(?:email|e-mail)\s+(?:to|submission)[:\s]*([^\n]+)/i)
      if (emailMatch) {
        delivery.email = emailMatch[1].trim()
      }
    } else if (/online\s+portal|e-procurement/i.test(content)) {
      delivery.method = 'online portal'
      const portalMatch = content.match(/(?:online\s+portal|e-procurement\s+system)[:\s]*([^\n]+)/i)
      if (portalMatch) {
        delivery.portal = portalMatch[1].trim()
      }
    } else if (/hand\s+delivery|courier/i.test(content)) {
      delivery.method = 'physical delivery'
    } else if (/postal|mail/i.test(content)) {
      delivery.method = 'postal mail'
    }

    // Extract delivery address
    const addressMatch = content.match(/(?:delivery\s+address|postal\s+address|submit\s+to)[:\s]*([^\n]+(?:\n[^\n]*address[^\n]*)*)/i)
    if (addressMatch) {
      delivery.address = addressMatch[1].trim()
    }

    // Extract submission instructions
    const instructionPatterns = [
      /submission\s+(?:instructions|procedure)[:\s]*([^\n]+)/gi,
      /how\s+to\s+submit[:\s]*([^\n]+)/gi,
      /delivery\s+instructions[:\s]*([^\n]+)/gi,
    ]

    const instructions: string[] = []
    for (const pattern of instructionPatterns) {
      let match
      while ((match = pattern.exec(content)) !== null) {
        instructions.push(match[1].trim())
      }
    }
    if (instructions.length > 0) {
      delivery.instructions = instructions
    }

    return delivery
  }

  private extractProposalStructure(content: string): Array<{
    section: string
    description?: string
    required?: boolean
    order?: number
  }> {
    const structure: Array<{
      section: string
      description?: string
      required?: boolean
      order?: number
    }> = []

    // Extract sections from proposal structure
    const sectionPatterns = [
      /(?:section|part|volume)\s+(\d+)[:\s]*([^\n]+)/gi,
      /(?:technical|commercial|financial)\s+proposal[:\s]*([^\n]+)/gi,
      /(?:executive\s+summary|cover\s+letter|introduction)[:\s]*([^\n]+)/gi,
    ]

    for (const pattern of sectionPatterns) {
      let match
      while ((match = pattern.exec(content)) !== null) {
        const section: {
          section: string
          description?: string
          required?: boolean
          order?: number
        } = {
          section: match[0].split(':')[0].trim(),
        }

        if (match[2]) {
          section.description = match[2].trim()
        } else if (match[1] && !match[1].match(/\d+/)) {
          section.description = match[1].trim()
        }

        // Extract order number if present
        const orderMatch = match[1] && match[1].match(/\d+/)
        if (orderMatch) {
          section.order = parseInt(orderMatch[0])
        }

        // Check if required
        const fullMatch = match[0]
        if (/required|mandatory|must\s+include/i.test(fullMatch)) {
          section.required = true
        }

        structure.push(section)
      }
    }

    // Extract from lists
    const listPattern = /proposal\s+(?:structure|sections|components)[:\s]*\n?((?:[-•*]\s*[^\n]+\n?)+)/gi
    const listMatch = listPattern.exec(content)
    if (listMatch) {
      const items = listMatch[1].split(/\n\s*[-•*]\s*/).filter(item => item.trim().length > 0)
      for (const item of items) {
        if (item.trim().length > 5) {
          structure.push({
            section: item.trim(),
            required: /required|mandatory|must/i.test(item),
          })
        }
      }
    }

    return structure
  }

  private extractSubmissionProcedures(content: string): Array<{
    step: string
    description: string
    order?: number
  }> {
    const procedures: Array<{
      step: string
      description: string
      order?: number
    }> = []

    // Extract procedural steps
    const stepPatterns = [
      /(?:step|stage)\s+(\d+)[:\s]*([^\n]+)/gi,
      /(?:first|second|third|fourth|fifth|finally)[:\s]*([^\n]+)/gi,
      /\d+[\.\)]\s*([^\n]+)/gi,
    ]

    for (const pattern of stepPatterns) {
      let match
      while ((match = pattern.exec(content)) !== null) {
        const procedure: {
          step: string
          description: string
          order?: number
        } = {
          step: match[0].split(':')[0].trim(),
          description: match[match.length - 1].trim(),
        }

        const orderMatch = match[1] && match[1].match(/\d+/)
        if (orderMatch) {
          procedure.order = parseInt(orderMatch[0])
        }

        procedures.push(procedure)
      }
    }

    return procedures
  }

  private generateSummary(
    format: any,
    delivery: any,
    structure: any[],
    procedures: any[]
  ): string {
    const summaryParts: string[] = []

    // Format requirements
    const formatParts: string[] = []
    if (format.copies) {
      formatParts.push(`${format.copies} copies required`)
    }
    if (format.originalRequired) {
      formatParts.push('original copy required')
    }
    if (format.formats && format.formats.length > 0) {
      formatParts.push(`Format: ${format.formats.join(', ')}`)
    }
    if (format.fileFormats && format.fileFormats.length > 0) {
      formatParts.push(`File formats: ${format.fileFormats.join(', ')}`)
    }
    if (formatParts.length > 0) {
      summaryParts.push(`Format: ${formatParts.join('; ')}`)
    }

    // Delivery method
    if (delivery.method) {
      const deliveryParts = [`Method: ${delivery.method}`]
      if (delivery.email) {
        deliveryParts.push(`Email: ${delivery.email}`)
      }
      if (delivery.portal) {
        deliveryParts.push(`Portal: ${delivery.portal}`)
      }
      if (delivery.address) {
        deliveryParts.push(`Address: ${delivery.address}`)
      }
      summaryParts.push(`Delivery: ${deliveryParts.join('; ')}`)
    }

    // Proposal structure
    if (structure.length > 0) {
      const requiredSections = structure
        .filter(s => s.required !== false)
        .slice(0, 4)
        .map(s => s.section)
        .join(', ')
      if (requiredSections) {
        summaryParts.push(`Structure: ${requiredSections}`)
      }
    }

    // Procedures
    if (procedures.length > 0) {
      const keySteps = procedures
        .sort((a, b) => (a.order || 0) - (b.order || 0))
        .slice(0, 3)
        .map(p => p.step)
        .join(' → ')
      summaryParts.push(`Process: ${keySteps}`)
    }

    return summaryParts.join('\n\n') || 'Submission requirements found but require manual review.'
  }
}