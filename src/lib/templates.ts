import Handlebars from 'handlebars'
import { prisma } from './db'
import { TemplateKind } from '@prisma/client'

// ==========================================
// Types
// ==========================================

export interface TemplateContext {
  tender: {
    id: string
    title: string
    agency?: string
    publishedAt?: Date
    dueAt?: Date
  }
  fields: Record<string, any>
  traceLinks: Array<{
    id: string
    documentId: string
    page: number
    snippet: string
    document: {
      filename: string
    }
  }>
}

export interface RenderResult {
  content: string
  citations: string[]
  errors: string[]
}

export interface ChecklistRule {
  key: string
  label: string
  required: boolean
  condition?: string
  validationRule?: string
}

export interface ChecklistResult {
  items: Array<{
    key: string
    label: string
    status: 'PENDING' | 'OK' | 'MISSING' | 'N_A'
    notes?: string
    required: boolean
  }>
  errors: string[]
}

// ==========================================
// Template Engine
// ==========================================

export class TemplateEngine {
  private static instance: TemplateEngine
  private handlebars: typeof Handlebars

  private constructor() {
    this.handlebars = Handlebars.create()
    this.registerHelpers()
  }

  static getInstance(): TemplateEngine {
    if (!TemplateEngine.instance) {
      TemplateEngine.instance = new TemplateEngine()
    }
    return TemplateEngine.instance
  }

  private registerHelpers(): void {
    // Date formatting helper
    this.handlebars.registerHelper('formatDate', (date: Date | string, format: string = 'YYYY-MM-DD') => {
      if (!date) return 'Not specified'

      const d = typeof date === 'string' ? new Date(date) : date
      if (isNaN(d.getTime())) return 'Invalid date'

      // Simple date formatting (you might want to use a proper date library)
      const year = d.getFullYear()
      const month = String(d.getMonth() + 1).padStart(2, '0')
      const day = String(d.getDate()).padStart(2, '0')

      switch (format) {
        case 'YYYY-MM-DD':
          return `${year}-${month}-${day}`
        case 'DD/MM/YYYY':
          return `${day}/${month}/${year}`
        case 'MMMM DD, YYYY':
          const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
          ]
          return `${monthNames[d.getMonth()]} ${day}, ${year}`
        default:
          return `${year}-${month}-${day}`
      }
    })

    // TraceChip helper for inline citations
    this.handlebars.registerHelper('traceChip', (traceLinkIds: string[], context: TemplateContext) => {
      if (!Array.isArray(traceLinkIds) || traceLinkIds.length === 0) {
        return new this.handlebars.SafeString('<span class="text-red-500">[Missing Citation]</span>')
      }

      const citations = context.traceLinks.filter(link => traceLinkIds.includes(link.id))
      if (citations.length === 0) {
        return new this.handlebars.SafeString('<span class="text-red-500">[Citation Not Found]</span>')
      }

      const citationText = citations
        .map(c => `${c.document.filename}:${c.page}`)
        .join(', ')

      return new this.handlebars.SafeString(
        `<span class="trace-chip" data-trace-ids="${traceLinkIds.join(',')}" title="${citationText}">📎</span>`
      )
    })

    // List formatting helper
    this.handlebars.registerHelper('list', (items: string[], format: 'bullet' | 'numbered' = 'bullet') => {
      if (!Array.isArray(items) || items.length === 0) {
        return 'None specified'
      }

      const listItems = items.map((item, index) => {
        const prefix = format === 'numbered' ? `${index + 1}. ` : '- '
        return `${prefix}${item}`
      }).join('\n')

      return new this.handlebars.SafeString(`\n${listItems}\n`)
    })

    // Conditional helper
    this.handlebars.registerHelper('if_exists', function(value, options) {
      if (value && value !== '' && value !== null && value !== undefined) {
        return options.fn(this)
      } else {
        return options.inverse(this)
      }
    })

    // Array length helper
    this.handlebars.registerHelper('length', (array: any[]) => {
      return Array.isArray(array) ? array.length : 0
    })

    // Truncate helper
    this.handlebars.registerHelper('truncate', (text: string, length: number = 100) => {
      if (!text || typeof text !== 'string') return ''
      return text.length > length ? text.substring(0, length) + '...' : text
    })
  }

  render(template: string, context: TemplateContext): RenderResult {
    try {
      const compiledTemplate = this.handlebars.compile(template)
      const content = compiledTemplate(context)

      // Extract citations from rendered content
      const citationMatches = content.match(/data-trace-ids="([^"]+)"/g) || []
      const citations = citationMatches
        .map(match => match.match(/data-trace-ids="([^"]+)"/)?.[1])
        .filter(Boolean)
        .flatMap(ids => ids?.split(','))
        .filter(Boolean) as string[]

      return {
        content,
        citations: [...new Set(citations)], // Remove duplicates
        errors: [],
      }
    } catch (error) {
      return {
        content: '',
        citations: [],
        errors: [error instanceof Error ? error.message : 'Template rendering failed'],
      }
    }
  }
}

// ==========================================
// Summary Generator
// ==========================================

export class SummaryGenerator {
  static async generateSummary(
    tenderId: string,
    templateId: string
  ): Promise<RenderResult> {
    try {
      // Get template
      const template = await prisma.template.findUnique({
        where: { id: templateId },
      })

      if (!template || template.kind !== TemplateKind.SUMMARY) {
        throw new Error('Summary template not found')
      }

      // Get tender data with all relations
      const tender = await prisma.tender.findUnique({
        where: { id: tenderId },
        include: {
          fieldExtractions: {
            include: {
              traceLinks: {
                include: {
                  document: {
                    select: {
                      filename: true,
                    },
                  },
                },
              },
            },
          },
        },
      })

      if (!tender) {
        throw new Error('Tender not found')
      }

      // Prepare context
      const context: TemplateContext = {
        tender: {
          id: tender.id,
          title: tender.title,
          agency: tender.agency || undefined,
          publishedAt: tender.publishedAt || undefined,
          dueAt: tender.dueAt || undefined,
        },
        fields: tender.fieldExtractions.reduce((acc, field) => {
          acc[field.key] = field.value
          return acc
        }, {} as Record<string, any>),
        traceLinks: tender.fieldExtractions.flatMap(field =>
          field.traceLinks.map(link => ({
            id: link.id,
            documentId: link.documentId,
            page: link.page,
            snippet: link.snippet,
            document: link.document,
          }))
        ),
      }

      // Render template
      const engine = TemplateEngine.getInstance()
      const result = engine.render(template.template, context)

      // Save summary blocks
      await this.saveSummaryBlocks(tenderId, result.content, result.citations)

      return result
    } catch (error) {
      return {
        content: '',
        citations: [],
        errors: [error instanceof Error ? error.message : 'Summary generation failed'],
      }
    }
  }

  private static async saveSummaryBlocks(
    tenderId: string,
    content: string,
    citationIds: string[]
  ): Promise<void> {
    // Parse content into blocks (assuming H2 headings separate blocks)
    const sections = content.split(/^## (.+)$/gm)
    const blocks: Array<{ key: string; content: string }> = []

    for (let i = 1; i < sections.length; i += 2) {
      const title = sections[i]?.trim()
      const blockContent = sections[i + 1]?.trim()

      if (title && blockContent) {
        const key = title.toLowerCase().replace(/[^a-z0-9]/g, '_')
        blocks.push({ key, content: blockContent })
      }
    }

    // If no sections found, treat entire content as one block
    if (blocks.length === 0) {
      blocks.push({ key: 'summary', content })
    }

    // Save each block
    for (const block of blocks) {
      await prisma.summaryBlock.upsert({
        where: {
          tenderId_blockKey: {
            tenderId,
            blockKey: block.key,
          },
        },
        update: {
          contentMarkdown: block.content,
          traceLinks: {
            set: citationIds.map(id => ({ id })),
          },
        },
        create: {
          tenderId,
          blockKey: block.key,
          contentMarkdown: block.content,
          traceLinks: {
            connect: citationIds.map(id => ({ id })),
          },
        },
      })
    }
  }
}

// ==========================================
// Checklist Generator
// ==========================================

export class ChecklistGenerator {
  static async generateChecklist(
    tenderId: string,
    templateId: string
  ): Promise<ChecklistResult> {
    try {
      // Get template
      const template = await prisma.template.findUnique({
        where: { id: templateId },
      })

      if (!template || template.kind !== TemplateKind.CHECKLIST) {
        throw new Error('Checklist template not found')
      }

      // Parse checklist rules from template schema
      const rules = this.parseChecklistRules(template.schema as any)

      // Get tender data
      const tender = await prisma.tender.findUnique({
        where: { id: tenderId },
        include: {
          fieldExtractions: true,
          documents: true,
        },
      })

      if (!tender) {
        throw new Error('Tender not found')
      }

      // Evaluate checklist items
      const items = await this.evaluateChecklistItems(tender, rules)

      // Save checklist items
      await this.saveChecklistItems(tenderId, items)

      return {
        items: items.map(item => ({
          key: item.key,
          label: item.label,
          status: item.status,
          notes: item.notes,
          required: item.required,
        })),
        errors: [],
      }
    } catch (error) {
      return {
        items: [],
        errors: [error instanceof Error ? error.message : 'Checklist generation failed'],
      }
    }
  }

  private static parseChecklistRules(schema: any): ChecklistRule[] {
    const rules: ChecklistRule[] = []

    if (schema.items && Array.isArray(schema.items)) {
      schema.items.forEach((item: any) => {
        rules.push({
          key: item.key || '',
          label: item.label || '',
          required: item.required !== false,
          condition: item.condition,
          validationRule: item.validationRule,
        })
      })
    }

    return rules
  }

  private static async evaluateChecklistItems(
    tender: any,
    rules: ChecklistRule[]
  ): Promise<Array<{
    key: string
    label: string
    status: 'PENDING' | 'OK' | 'MISSING' | 'N_A'
    notes?: string
    required: boolean
  }>> {
    const items = []

    for (const rule of rules) {
      const status = await this.evaluateRule(tender, rule)

      items.push({
        key: rule.key,
        label: rule.label,
        status,
        required: rule.required,
      })
    }

    return items
  }

  private static async evaluateRule(
    tender: any,
    rule: ChecklistRule
  ): Promise<'PENDING' | 'OK' | 'MISSING' | 'N_A'> {
    // Default business rules for common checklist items
    const businessRules: Record<string, () => Promise<'PENDING' | 'OK' | 'MISSING' | 'N_A'>> = {
      'tax_certificate': async () => {
        // Check if documents contain tax certificate
        const hasTaxDoc = tender.documents.some((doc: any) =>
          doc.filename.toLowerCase().includes('tax')
        )
        return hasTaxDoc ? 'OK' : 'MISSING'
      },

      'iso_9001': async () => {
        // Check if ISO 9001 is mentioned in eligibility requirements
        const eligibilityField = tender.fieldExtractions.find((f: any) => f.key === 'eligibility')
        if (eligibilityField) {
          const content = JSON.stringify(eligibilityField.value).toLowerCase()
          return content.includes('iso 9001') ? 'PENDING' : 'N_A'
        }
        return 'N_A'
      },

      'technical_proposal': async () => {
        // Check if technical proposal is required
        const submissionField = tender.fieldExtractions.find((f: any) => f.key === 'submissionMechanics')
        if (submissionField) {
          const content = JSON.stringify(submissionField.value).toLowerCase()
          return content.includes('technical') ? 'PENDING' : 'N_A'
        }
        return 'N_A'
      },

      'financial_proposal': async () => {
        // Financial proposal is typically always required
        return 'PENDING'
      },

      'company_profile': async () => {
        // Check if company profile is mentioned in requirements
        const eligibilityField = tender.fieldExtractions.find((f: any) => f.key === 'eligibility')
        if (eligibilityField) {
          const content = JSON.stringify(eligibilityField.value).toLowerCase()
          return content.includes('company') || content.includes('profile') ? 'PENDING' : 'N_A'
        }
        return 'PENDING' // Default to required
      },

      'deadline_check': async () => {
        // Check if deadline is in the future
        const deadlineField = tender.fieldExtractions.find((f: any) => f.key === 'deadlineSubmission')
        if (deadlineField && deadlineField.value?.date) {
          const deadline = new Date(deadlineField.value.date)
          return deadline > new Date() ? 'OK' : 'MISSING'
        }
        return 'MISSING'
      },
    }

    // Use business rule if available, otherwise default to PENDING
    const ruleFunction = businessRules[rule.key]
    if (ruleFunction) {
      return await ruleFunction()
    }

    // Custom validation rule evaluation
    if (rule.validationRule) {
      try {
        // Simple validation rule evaluation (you might want to use a proper expression engine)
        if (rule.validationRule.includes('required')) {
          return 'PENDING'
        }
      } catch {
        // Ignore validation errors
      }
    }

    return 'PENDING'
  }

  private static async saveChecklistItems(
    tenderId: string,
    items: Array<{
      key: string
      label: string
      status: 'PENDING' | 'OK' | 'MISSING' | 'N_A'
      notes?: string
      required: boolean
    }>
  ): Promise<void> {
    for (const item of items) {
      await prisma.checklistItem.upsert({
        where: {
          tenderId_key: {
            tenderId,
            key: item.key,
          },
        },
        update: {
          label: item.label,
          status: item.status as any,
          notes: item.notes,
        },
        create: {
          tenderId,
          key: item.key,
          label: item.label,
          status: item.status as any,
          notes: item.notes,
        },
      })
    }
  }
}

// ==========================================
// Default Templates
// ==========================================

export const DEFAULT_SUMMARY_TEMPLATE = `# Tender Summary: {{tender.title}}

{{#if_exists tender.agency}}
**Agency:** {{tender.agency}}
{{/if_exists}}

{{#if_exists tender.dueAt}}
**Submission Deadline:** {{formatDate tender.dueAt "MMMM DD, YYYY"}} {{traceChip fields.deadlineSubmission.traceLinkIds @root}}
{{/if_exists}}

## Scope & Objectives

{{#if_exists fields.scope}}
{{#if_exists fields.scope.projectDescription}}
{{fields.scope.projectDescription}} {{traceChip fields.scope.traceLinkIds @root}}
{{/if_exists}}

{{#if_exists fields.scope.objectives}}
**Key Objectives:**
{{list fields.scope.objectives "bullet"}}
{{/if_exists}}

{{#if_exists fields.scope.deliverables}}
**Expected Deliverables:**
{{list fields.scope.deliverables "bullet"}}
{{/if_exists}}
{{else}}
*Scope information not available*
{{/if_exists}}

## Eligibility Requirements

{{#if_exists fields.eligibility}}
{{#if_exists fields.eligibility.requirements}}
**Requirements:**
{{list fields.eligibility.requirements "bullet"}} {{traceChip fields.eligibility.traceLinkIds @root}}
{{/if_exists}}

{{#if_exists fields.eligibility.qualifications}}
**Qualifications:**
{{list fields.eligibility.qualifications "bullet"}}
{{/if_exists}}

{{#if_exists fields.eligibility.restrictions}}
**Restrictions:**
{{list fields.eligibility.restrictions "bullet"}}
{{/if_exists}}
{{else}}
*Eligibility information not available*
{{/if_exists}}

## Evaluation Criteria

{{#if_exists fields.evaluationCriteria}}
{{#if_exists fields.evaluationCriteria.criteria}}
{{#each fields.evaluationCriteria.criteria}}
- **{{this.name}}**{{#if this.weight}} ({{this.weight}}%){{/if}}: {{this.description}}
{{/each}}
{{traceChip fields.evaluationCriteria.traceLinkIds @root}}
{{/if_exists}}

{{#if_exists fields.evaluationCriteria.scoringMethod}}
**Scoring Method:** {{fields.evaluationCriteria.scoringMethod}}
{{/if_exists}}
{{else}}
*Evaluation criteria not available*
{{/if_exists}}

## Submission Requirements

{{#if_exists fields.submissionMechanics}}
**Format:** {{fields.submissionMechanics.format}} {{traceChip fields.submissionMechanics.traceLinkIds @root}}

**Method:** {{fields.submissionMechanics.method}}

{{#if_exists fields.submissionMechanics.requirements}}
**Additional Requirements:**
{{list fields.submissionMechanics.requirements "bullet"}}
{{/if_exists}}

{{#if_exists fields.submissionMechanics.contactInfo}}
**Contact Information:**
{{#if_exists fields.submissionMechanics.contactInfo.email}}
- Email: {{fields.submissionMechanics.contactInfo.email}}
{{/if_exists}}
{{#if_exists fields.submissionMechanics.contactInfo.phone}}
- Phone: {{fields.submissionMechanics.contactInfo.phone}}
{{/if_exists}}
{{#if_exists fields.submissionMechanics.contactInfo.address}}
- Address: {{fields.submissionMechanics.contactInfo.address}}
{{/if_exists}}
{{/if_exists}}
{{else}}
*Submission mechanics not available*
{{/if_exists}}`

export const DEFAULT_CHECKLIST_SCHEMA = {
  type: 'checklist',
  items: [
    {
      key: 'deadline_check',
      label: 'Submission deadline is in the future',
      required: true,
      validationRule: 'deadline > now',
    },
    {
      key: 'tax_certificate',
      label: 'Valid tax clearance certificate',
      required: true,
    },
    {
      key: 'iso_9001',
      label: 'ISO 9001 certification (if required)',
      required: false,
    },
    {
      key: 'technical_proposal',
      label: 'Technical proposal prepared',
      required: true,
    },
    {
      key: 'financial_proposal',
      label: 'Financial proposal prepared',
      required: true,
    },
    {
      key: 'company_profile',
      label: 'Company profile and credentials',
      required: true,
    },
    {
      key: 'bid_security',
      label: 'Bid security/guarantee (if required)',
      required: false,
    },
    {
      key: 'legal_documents',
      label: 'Legal and compliance documents',
      required: true,
    },
  ],
}

export default TemplateEngine