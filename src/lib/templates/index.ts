// Template Engine with Handlebars Support
// Generates summaries and checklists from extracted data

import Handlebars from 'handlebars'
import { prisma } from '@/lib/prisma'

export interface TemplateContext {
  tender: any
  extractions: Record<string, any>
  metadata: {
    generatedAt: Date
    templateName: string
    version: string
  }
}

export interface SummaryBlock {
  blockKey: string
  contentMarkdown: string
  traceLinks: Array<{
    documentId: string
    page: number
    snippet: string
    sectionPath?: string
    bbox?: any
  }>
}

export interface ChecklistItem {
  key: string
  label: string
  status: 'PENDING' | 'OK' | 'MISSING' | 'N_A'
  notes?: string
  traceLinks: Array<{
    documentId: string
    page: number
    snippet: string
    sectionPath?: string
    bbox?: any
  }>
}

export class TemplateEngine {
  constructor() {
    this.registerHelpers()
  }

  private registerHelpers() {
    // Helper to format dates
    Handlebars.registerHelper('formatDate', (date: Date | string) => {
      if (!date) return 'Not specified'
      const d = new Date(date)
      return d.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    })

    // Helper to format confidence scores
    Handlebars.registerHelper('confidence', (confidence: number) => {
      if (typeof confidence !== 'number') return 'Unknown'
      return `${Math.round(confidence * 100)}%`
    })

    // Helper to create trace chip markdown
    Handlebars.registerHelper('traceChip', (page: number, id: string) => {
      return new Handlebars.SafeString(`[📄 p.${page}](trace:${id})`)
    })

    // Helper to check if value exists and has confidence
    Handlebars.registerHelper('hasValue', (extraction: any) => {
      return extraction && extraction.value && extraction.confidence > 0.3
    })

    // Helper to get field summary
    Handlebars.registerHelper('summary', (extraction: any) => {
      if (!extraction || !extraction.value) return 'Not found'
      return extraction.value.summary || 'Available'
    })

    // Helper for conditional rendering
    Handlebars.registerHelper('ifCond', function(v1: any, operator: string, v2: any, options: any) {
      switch (operator) {
        case '==': return (v1 == v2) ? options.fn(this) : options.inverse(this)
        case '===': return (v1 === v2) ? options.fn(this) : options.inverse(this)
        case '!=': return (v1 != v2) ? options.fn(this) : options.inverse(this)
        case '<': return (v1 < v2) ? options.fn(this) : options.inverse(this)
        case '<=': return (v1 <= v2) ? options.fn(this) : options.inverse(this)
        case '>': return (v1 > v2) ? options.fn(this) : options.inverse(this)
        case '>=': return (v1 >= v2) ? options.fn(this) : options.inverse(this)
        default: return options.inverse(this)
      }
    })
  }

  async getTemplate(name: string): Promise<{ template: string; schema: any }> {
    const templateRecord = await prisma.template.findFirst({
      where: { name, active: true }
    })

    if (!templateRecord) {
      // Return default template if not found
      return this.getDefaultTemplate(name)
    }

    return {
      template: templateRecord.template,
      schema: templateRecord.schema as any
    }
  }

  private getDefaultTemplate(name: string): { template: string; schema: any } {
    if (name.includes('summary')) {
      return {
        template: this.getDefaultSummaryTemplate(),
        schema: {
          type: 'object',
          properties: {
            extractions: { type: 'object' }
          }
        }
      }
    }

    if (name.includes('checklist')) {
      return {
        template: this.getDefaultChecklistTemplate(),
        schema: {
          type: 'object',
          properties: {
            extractions: { type: 'object' }
          }
        }
      }
    }

    throw new Error(`Unknown template: ${name}`)
  }

  private getDefaultSummaryTemplate(): string {
    return `# Tender Summary

## Project Scope
{{#if (hasValue extractions.scope)}}
{{summary extractions.scope}}

**Confidence:** {{confidence extractions.scope.confidence}}
{{#each extractions.scope.traceLinks}}
{{traceChip page id}}
{{/each}}
{{else}}
*Project scope information not clearly identified in the document.*
{{/if}}

## Eligibility Criteria
{{#if (hasValue extractions.eligibility)}}
{{summary extractions.eligibility}}

**Confidence:** {{confidence extractions.eligibility.confidence}}
{{#each extractions.eligibility.traceLinks}}
{{traceChip page id}}
{{/each}}
{{else}}
*Eligibility criteria not clearly identified in the document.*
{{/if}}

## Evaluation Criteria
{{#if (hasValue extractions.evaluationCriteria)}}
{{summary extractions.evaluationCriteria}}

**Confidence:** {{confidence extractions.evaluationCriteria.confidence}}
{{#each extractions.evaluationCriteria.traceLinks}}
{{traceChip page id}}
{{/each}}
{{else}}
*Evaluation criteria not clearly identified in the document.*
{{/if}}

## Submission Requirements
{{#if (hasValue extractions.submissionMechanics)}}
{{summary extractions.submissionMechanics}}

**Confidence:** {{confidence extractions.submissionMechanics.confidence}}
{{#each extractions.submissionMechanics.traceLinks}}
{{traceChip page id}}
{{/each}}
{{else}}
*Submission requirements not clearly identified in the document.*
{{/if}}

## Deadline
{{#if (hasValue extractions.deadlineSubmission)}}
{{#if extractions.deadlineSubmission.value.primaryDeadline}}
**Submission Deadline:** {{formatDate extractions.deadlineSubmission.value.primaryDeadline.date}}

{{extractions.deadlineSubmission.value.primaryDeadline.validationMessage}}

**Confidence:** {{confidence extractions.deadlineSubmission.confidence}}
{{#each extractions.deadlineSubmission.traceLinks}}
{{traceChip page id}}
{{/each}}
{{else}}
*Submission deadline found but requires manual review.*
{{/if}}
{{else}}
*Submission deadline not clearly identified in the document.*
{{/if}}

---
*Generated on {{formatDate metadata.generatedAt}} using {{metadata.templateName}} v{{metadata.version}}*`
  }

  private getDefaultChecklistTemplate(): string {
    return `[
  {
    "key": "project-scope-clear",
    "label": "Project scope is clearly defined",
    "condition": "extractions.scope && extractions.scope.confidence > 0.5",
    "traceLinks": "extractions.scope.traceLinks"
  },
  {
    "key": "eligibility-requirements",
    "label": "Eligibility requirements are specified",
    "condition": "extractions.eligibility && extractions.eligibility.confidence > 0.5",
    "traceLinks": "extractions.eligibility.traceLinks"
  },
  {
    "key": "evaluation-criteria-defined",
    "label": "Evaluation criteria are defined",
    "condition": "extractions.evaluationCriteria && extractions.evaluationCriteria.confidence > 0.5",
    "traceLinks": "extractions.evaluationCriteria.traceLinks"
  },
  {
    "key": "submission-format-specified",
    "label": "Submission format is specified",
    "condition": "extractions.submissionMechanics && extractions.submissionMechanics.confidence > 0.5",
    "traceLinks": "extractions.submissionMechanics.traceLinks"
  },
  {
    "key": "deadline-identified",
    "label": "Submission deadline is identified",
    "condition": "extractions.deadlineSubmission && extractions.deadlineSubmission.confidence > 0.5",
    "traceLinks": "extractions.deadlineSubmission.traceLinks"
  },
  {
    "key": "deadline-future",
    "label": "Submission deadline is in the future",
    "condition": "extractions.deadlineSubmission && extractions.deadlineSubmission.value.primaryDeadline && extractions.deadlineSubmission.value.primaryDeadline.isFuture",
    "traceLinks": "extractions.deadlineSubmission.traceLinks"
  },
  {
    "key": "high-confidence-extractions",
    "label": "All key fields extracted with high confidence",
    "condition": "Object.values(extractions).every(e => e.confidence > 0.7)",
    "traceLinks": "[]"
  }
]`
  }

  async generateSummary(
    tenderId: string,
    templateName: string,
    extractions: Record<string, any>
  ): Promise<SummaryBlock[]> {
    const tender = await prisma.tender.findUnique({
      where: { id: tenderId }
    })

    if (!tender) {
      throw new Error('Tender not found')
    }

    const { template } = await this.getTemplate(templateName)

    const context: TemplateContext = {
      tender,
      extractions,
      metadata: {
        generatedAt: new Date(),
        templateName,
        version: '1.0'
      }
    }

    const compiledTemplate = Handlebars.compile(template)
    const renderedMarkdown = compiledTemplate(context)

    // Parse the rendered markdown into sections
    const sections = this.parseMarkdownSections(renderedMarkdown, extractions)

    // Store summary blocks in database
    for (const section of sections) {
      await prisma.summaryBlock.upsert({
        where: {
          tenderId_blockKey: {
            tenderId,
            blockKey: section.blockKey
          }
        },
        create: {
          tenderId,
          blockKey: section.blockKey,
          contentMarkdown: section.contentMarkdown,
          traceLinks: {
            create: section.traceLinks.map(link => ({
              documentId: link.documentId,
              page: link.page,
              snippet: link.snippet,
              sectionPath: link.sectionPath,
              bbox: link.bbox,
            }))
          }
        },
        update: {
          contentMarkdown: section.contentMarkdown,
          traceLinks: {
            deleteMany: {},
            create: section.traceLinks.map(link => ({
              documentId: link.documentId,
              page: link.page,
              snippet: link.snippet,
              sectionPath: link.sectionPath,
              bbox: link.bbox,
            }))
          }
        }
      })
    }

    return sections
  }

  async generateChecklist(
    tenderId: string,
    templateName: string,
    extractions: Record<string, any>
  ): Promise<ChecklistItem[]> {
    const tender = await prisma.tender.findUnique({
      where: { id: tenderId }
    })

    if (!tender) {
      throw new Error('Tender not found')
    }

    const { template } = await this.getTemplate(templateName)

    // Parse checklist template (JSON format)
    let checklistConfig: any[]
    try {
      checklistConfig = JSON.parse(template)
    } catch {
      // Fallback to default checklist
      checklistConfig = JSON.parse(this.getDefaultChecklistTemplate())
    }

    const context: TemplateContext = {
      tender,
      extractions,
      metadata: {
        generatedAt: new Date(),
        templateName,
        version: '1.0'
      }
    }

    const checklist: ChecklistItem[] = []

    for (const item of checklistConfig) {
      const status = this.evaluateCondition(item.condition, context)
      const traceLinks = this.getTraceLinksFromPath(item.traceLinks, context)

      const checklistItem: ChecklistItem = {
        key: item.key,
        label: item.label,
        status: status ? 'OK' : 'MISSING',
        traceLinks
      }

      checklist.push(checklistItem)

      // Store in database
      await prisma.checklistItem.upsert({
        where: {
          tenderId_key: {
            tenderId,
            key: item.key
          }
        },
        create: {
          tenderId,
          key: item.key,
          label: item.label,
          status: checklistItem.status,
          traceLinks: {
            create: traceLinks.map(link => ({
              documentId: link.documentId,
              page: link.page,
              snippet: link.snippet,
              sectionPath: link.sectionPath,
              bbox: link.bbox,
            }))
          }
        },
        update: {
          label: item.label,
          status: checklistItem.status,
          traceLinks: {
            deleteMany: {},
            create: traceLinks.map(link => ({
              documentId: link.documentId,
              page: link.page,
              snippet: link.snippet,
              sectionPath: link.sectionPath,
              bbox: link.bbox,
            }))
          }
        }
      })
    }

    return checklist
  }

  private parseMarkdownSections(markdown: string, extractions: Record<string, any>): SummaryBlock[] {
    const sections: SummaryBlock[] = []
    const lines = markdown.split('\n')
    let currentSection: Partial<SummaryBlock> | null = null

    for (const line of lines) {
      // Check for h2 headers (##)
      const headerMatch = line.match(/^## (.+)$/)
      if (headerMatch) {
        // Save previous section
        if (currentSection && currentSection.blockKey && currentSection.contentMarkdown) {
          sections.push(currentSection as SummaryBlock)
        }

        // Start new section
        const title = headerMatch[1]
        currentSection = {
          blockKey: title.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, ''),
          contentMarkdown: `## ${title}\n`,
          traceLinks: []
        }
      } else if (currentSection) {
        // Add line to current section
        currentSection.contentMarkdown += line + '\n'

        // Extract trace links from this line
        const traceLinkMatches = line.matchAll(/\[📄 p\.(\d+)\]\(trace:([^)]+)\)/g)
        for (const match of traceLinkMatches) {
          const page = parseInt(match[1])
          const traceId = match[2]

          // Find corresponding trace link in extractions
          for (const extraction of Object.values(extractions)) {
            if (extraction && extraction.traceLinks) {
              const link = extraction.traceLinks.find((tl: any) => tl.id === traceId)
              if (link) {
                currentSection.traceLinks = currentSection.traceLinks || []
                currentSection.traceLinks.push(link)
              }
            }
          }
        }
      }
    }

    // Save final section
    if (currentSection && currentSection.blockKey && currentSection.contentMarkdown) {
      sections.push(currentSection as SummaryBlock)
    }

    return sections
  }

  private evaluateCondition(condition: string, context: TemplateContext): boolean {
    try {
      // Simple condition evaluation - in production, use a safer evaluator
      const func = new Function('extractions', 'tender', 'metadata', `return ${condition}`)
      return !!func(context.extractions, context.tender, context.metadata)
    } catch {
      return false
    }
  }

  private getTraceLinksFromPath(path: string, context: TemplateContext): any[] {
    try {
      // Simple path evaluation - in production, use a safer evaluator
      const func = new Function('extractions', 'tender', 'metadata', `return ${path}`)
      const result = func(context.extractions, context.tender, context.metadata)
      return Array.isArray(result) ? result : []
    } catch {
      return []
    }
  }
}

export const templateEngine = new TemplateEngine()

// Export constants for seeding
export { DEFAULT_SUMMARY_TEMPLATE, DEFAULT_CHECKLIST_SCHEMA } from './constants'