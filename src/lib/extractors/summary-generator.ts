import { prisma } from '@/lib/prisma'
import Handlebars from 'handlebars'
import { TraceChip } from '@/components/tender/trace-chip'

export interface SummaryGenerationResult {
  blocks: Array<{
    blockKey: string
    contentMarkdown: string
    traceLinkIds: string[]
  }>
  metadata: {
    templateId: string
    generatedAt: Date
    totalCitations: number
    wordCount: number
  }
}

export interface SummaryContext {
  tender: {
    id: string
    title: string
    agency?: string
    dueAt?: Date
    publishedAt?: Date
  }
  fields: Record<string, {
    value: any
    confidence: number
    citations: Array<{
      traceLinkId: string
      page: number
      snippet: string
    }>
  }>
  documents: Array<{
    id: string
    filename: string
    pages?: number
  }>
  metadata: {
    generatedAt: Date
    totalPages: number
    documentCount: number
  }
}

export class SummaryGenerator {
  constructor() {
    this.registerHelpers()
  }

  private registerHelpers() {
    // Register Handlebars helpers for template rendering
    Handlebars.registerHelper('formatDate', function(date: Date) {
      if (!date) return 'Not specified'
      return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }).format(new Date(date))
    })

    Handlebars.registerHelper('citation', function(traceLinkId: string, page: number, snippet: string) {
      return new Handlebars.SafeString(`[📄 p.${page}](trace:${traceLinkId})`)
    })

    Handlebars.registerHelper('confidenceLevel', function(confidence: number) {
      if (confidence >= 0.8) return 'High'
      if (confidence >= 0.6) return 'Medium'
      return 'Low'
    })

    Handlebars.registerHelper('eq', function(a: any, b: any) {
      return a === b
    })

    Handlebars.registerHelper('gt', function(a: number, b: number) {
      return a > b
    })

    Handlebars.registerHelper('length', function(array: any[]) {
      return array ? array.length : 0
    })

    Handlebars.registerHelper('truncate', function(str: string, limit: number) {
      if (!str) return ''
      if (str.length <= limit) return str
      return str.substring(0, limit) + '...'
    })
  }

  async generateSummary(
    tenderId: string,
    templateId: string,
    options: {
      requireCitations?: boolean
      maxSectionLength?: number
      includeMetadata?: boolean
    } = {}
  ): Promise<SummaryGenerationResult> {
    try {
      // Get template
      const template = await prisma.template.findUnique({
        where: { id: templateId },
      })

      if (!template || template.kind !== 'SUMMARY') {
        throw new Error('Summary template not found')
      }

      // Build context
      const context = await this.buildSummaryContext(tenderId)

      // Validate required citations if specified
      if (options.requireCitations) {
        await this.validateCitations(context)
      }

      // Generate summary blocks
      const blocks = await this.renderSummaryBlocks(template, context, options)

      // Save summary blocks to database
      await this.saveSummaryBlocks(tenderId, blocks)

      const totalCitations = blocks.reduce((sum, block) => sum + block.traceLinkIds.length, 0)
      const wordCount = blocks.reduce((sum, block) =>
        sum + (block.contentMarkdown.split(/\s+/).length), 0
      )

      return {
        blocks,
        metadata: {
          templateId,
          generatedAt: new Date(),
          totalCitations,
          wordCount,
        },
      }
    } catch (error) {
      console.error('Error generating summary:', error)
      throw error
    }
  }

  private async buildSummaryContext(tenderId: string): Promise<SummaryContext> {
    // Get tender details
    const tender = await prisma.tender.findUnique({
      where: { id: tenderId },
      select: {
        id: true,
        title: true,
        agency: true,
        dueAt: true,
        publishedAt: true,
      },
    })

    if (!tender) {
      throw new Error('Tender not found')
    }

    // Get extracted fields
    const fieldExtractions = await prisma.fieldExtraction.findMany({
      where: { tenderId },
      include: {
        traceLinks: {
          select: {
            id: true,
            page: true,
            snippet: true,
          },
        },
      },
    })

    // Get documents
    const documents = await prisma.document.findMany({
      where: { tenderId },
      select: {
        id: true,
        filename: true,
        pages: true,
      },
    })

    // Build fields object
    const fields: Record<string, any> = {}
    for (const extraction of fieldExtractions) {
      fields[extraction.key] = {
        value: extraction.value,
        confidence: extraction.confidence,
        citations: extraction.traceLinks.map(link => ({
          traceLinkId: link.id,
          page: link.page,
          snippet: link.snippet,
        })),
      }
    }

    return {
      tender,
      fields,
      documents,
      metadata: {
        generatedAt: new Date(),
        totalPages: documents.reduce((sum, doc) => sum + (doc.pages || 0), 0),
        documentCount: documents.length,
      },
    }
  }

  private async validateCitations(context: SummaryContext): Promise<void> {
    const fieldsWithoutCitations = Object.entries(context.fields)
      .filter(([_, field]) => field.citations.length === 0)
      .map(([key, _]) => key)

    if (fieldsWithoutCitations.length > 0) {
      throw new Error(`Fields without citations: ${fieldsWithoutCitations.join(', ')}`)
    }
  }

  private async renderSummaryBlocks(
    template: any,
    context: SummaryContext,
    options: any
  ): Promise<Array<{
    blockKey: string
    contentMarkdown: string
    traceLinkIds: string[]
  }>> {
    const templateSchema = template.schema as {
      sections: Array<{
        key: string
        title: string
        template: string
        required: boolean
      }>
    }

    const blocks: Array<{
      blockKey: string
      contentMarkdown: string
      traceLinkIds: string[]
    }> = []

    for (const section of templateSchema.sections) {
      try {
        const compiledTemplate = Handlebars.compile(section.template)
        let content = compiledTemplate(context)

        // Apply length limits if specified
        if (options.maxSectionLength && content.length > options.maxSectionLength) {
          content = content.substring(0, options.maxSectionLength) + '\n\n*[Content truncated]*'
        }

        // Extract trace link IDs from citations in the content
        const traceLinkIds = this.extractTraceLinkIds(content, context)

        blocks.push({
          blockKey: section.key,
          contentMarkdown: content,
          traceLinkIds,
        })
      } catch (error) {
        console.error(`Error rendering section ${section.key}:`, error)
        if (section.required) {
          throw new Error(`Failed to render required section: ${section.key}`)
        }
      }
    }

    return blocks
  }

  private extractTraceLinkIds(content: string, context: SummaryContext): string[] {
    const traceLinkIds: string[] = []

    // Extract all trace link IDs referenced in the content
    Object.values(context.fields).forEach(field => {
      field.citations.forEach((citation: any) => {
        if (content.includes(citation.traceLinkId)) {
          traceLinkIds.push(citation.traceLinkId)
        }
      })
    })

    return Array.from(new Set(traceLinkIds)) // Remove duplicates
  }

  private async saveSummaryBlocks(
    tenderId: string,
    blocks: Array<{
      blockKey: string
      contentMarkdown: string
      traceLinkIds: string[]
    }>
  ): Promise<void> {
    try {
      for (const block of blocks) {
        await prisma.summaryBlock.upsert({
          where: {
            tenderId_blockKey: {
              tenderId,
              blockKey: block.blockKey,
            },
          },
          create: {
            tenderId,
            blockKey: block.blockKey,
            contentMarkdown: block.contentMarkdown,
            traceLinks: {
              connect: block.traceLinkIds.map(id => ({ id })),
            },
          },
          update: {
            contentMarkdown: block.contentMarkdown,
            traceLinks: {
              set: block.traceLinkIds.map(id => ({ id })),
            },
          },
        })
      }
    } catch (error) {
      console.error('Error saving summary blocks:', error)
      throw new Error('Failed to save summary blocks')
    }
  }

  async getSummary(tenderId: string): Promise<Array<{
    blockKey: string
    contentMarkdown: string
    traceLinks: Array<{
      id: string
      page: number
      snippet: string
      documentId: string
    }>
  }>> {
    try {
      const summaryBlocks = await prisma.summaryBlock.findMany({
        where: { tenderId },
        include: {
          traceLinks: {
            select: {
              id: true,
              page: true,
              snippet: true,
              documentId: true,
            },
          },
        },
        orderBy: { blockKey: 'asc' },
      })

      return summaryBlocks.map(block => ({
        blockKey: block.blockKey,
        contentMarkdown: block.contentMarkdown,
        traceLinks: block.traceLinks,
      }))
    } catch (error) {
      console.error('Error getting summary:', error)
      throw new Error('Failed to get summary')
    }
  }

  async validateSummary(tenderId: string): Promise<{
    isValid: boolean
    missingBlocks: string[]
    blocksWithoutCitations: string[]
    issues: string[]
  }> {
    try {
      const summaryBlocks = await prisma.summaryBlock.findMany({
        where: { tenderId },
        include: { traceLinks: true },
      })

      const requiredBlocks = ['scope', 'eligibility', 'evaluation', 'submission', 'legal']
      const existingBlocks = new Set(summaryBlocks.map(b => b.blockKey))

      const missingBlocks = requiredBlocks.filter(block => !existingBlocks.has(block))
      const blocksWithoutCitations = summaryBlocks
        .filter(block => block.traceLinks.length === 0)
        .map(block => block.blockKey)

      const issues: string[] = []

      // Check for empty content
      summaryBlocks.forEach(block => {
        if (!block.contentMarkdown.trim()) {
          issues.push(`Block '${block.blockKey}' has empty content`)
        }
      })

      const isValid = missingBlocks.length === 0 &&
                     blocksWithoutCitations.length === 0 &&
                     issues.length === 0

      return {
        isValid,
        missingBlocks,
        blocksWithoutCitations,
        issues,
      }
    } catch (error) {
      console.error('Error validating summary:', error)
      throw new Error('Failed to validate summary')
    }
  }
}

export const summaryGenerator = new SummaryGenerator()