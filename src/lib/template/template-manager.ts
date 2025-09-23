import { prisma } from '@/lib/prisma'
import { TemplateKind } from '@prisma/client'
import Handlebars from 'handlebars'

export interface TemplateValidationResult {
  isValid: boolean
  errors: string[]
  warnings: string[]
}

export class TemplateManager {
  async createTemplate(data: {
    kind: TemplateKind
    name: string
    schema: any
    template: string
    active?: boolean
  }): Promise<string> {
    try {
      // Validate template
      const validation = await this.validateTemplate(data.schema, data.template)
      if (!validation.isValid) {
        throw new Error(`Template validation failed: ${validation.errors.join(', ')}`)
      }

      const template = await prisma.template.create({
        data: {
          kind: data.kind,
          name: data.name,
          schema: data.schema,
          template: data.template,
          active: data.active ?? true,
        },
      })

      return template.id
    } catch (error) {
      console.error('Error creating template:', error)
      throw error
    }
  }

  async updateTemplate(
    id: string,
    data: Partial<{
      name: string
      schema: any
      template: string
      active: boolean
    }>
  ): Promise<void> {
    try {
      // Validate template if schema or template is being updated
      if (data.schema || data.template) {
        const existing = await prisma.template.findUnique({ where: { id } })
        if (!existing) {
          throw new Error('Template not found')
        }

        const schema = data.schema || existing.schema
        const template = data.template || existing.template

        const validation = await this.validateTemplate(schema, template)
        if (!validation.isValid) {
          throw new Error(`Template validation failed: ${validation.errors.join(', ')}`)
        }
      }

      await prisma.template.update({
        where: { id },
        data,
      })
    } catch (error) {
      console.error('Error updating template:', error)
      throw error
    }
  }

  async deleteTemplate(id: string): Promise<void> {
    try {
      // Check if template is being used
      const usageCount = await this.getTemplateUsageCount(id)
      if (usageCount > 0) {
        throw new Error('Cannot delete template that is currently in use')
      }

      await prisma.template.delete({ where: { id } })
    } catch (error) {
      console.error('Error deleting template:', error)
      throw error
    }
  }

  async getTemplate(id: string): Promise<any> {
    try {
      const template = await prisma.template.findUnique({
        where: { id },
      })

      if (!template) {
        throw new Error('Template not found')
      }

      return template
    } catch (error) {
      console.error('Error getting template:', error)
      throw error
    }
  }

  async listTemplates(filters?: {
    kind?: TemplateKind
    active?: boolean
    search?: string
  }): Promise<Array<{
    id: string
    kind: TemplateKind
    name: string
    active: boolean
    createdAt: Date
    updatedAt: Date
    usageCount: number
  }>> {
    try {
      const where: any = {}

      if (filters?.kind) {
        where.kind = filters.kind
      }

      if (filters?.active !== undefined) {
        where.active = filters.active
      }

      if (filters?.search) {
        where.name = {
          contains: filters.search,
          mode: 'insensitive',
        }
      }

      const templates = await prisma.template.findMany({
        where,
        orderBy: { createdAt: 'desc' },
      })

      // Get usage counts
      const templatesWithUsage = await Promise.all(
        templates.map(async (template) => ({
          id: template.id,
          kind: template.kind,
          name: template.name,
          active: template.active,
          createdAt: template.createdAt,
          updatedAt: template.updatedAt,
          usageCount: await this.getTemplateUsageCount(template.id),
        }))
      )

      return templatesWithUsage
    } catch (error) {
      console.error('Error listing templates:', error)
      throw error
    }
  }

  async validateTemplate(schema: any, templateContent: string): Promise<TemplateValidationResult> {
    const errors: string[] = []
    const warnings: string[] = []

    try {
      // Validate Handlebars template syntax
      try {
        Handlebars.compile(templateContent)
      } catch (handlebarsError) {
        errors.push(`Invalid Handlebars syntax: ${handlebarsError.message}`)
      }

      // Validate schema structure based on template kind
      if (schema.sections) {
        // Summary template validation
        for (const section of schema.sections) {
          if (!section.key) {
            errors.push('Section missing required "key" field')
          }
          if (!section.title) {
            errors.push(`Section "${section.key}" missing required "title" field`)
          }
          if (!section.template) {
            errors.push(`Section "${section.key}" missing required "template" field`)
          }

          // Validate section template syntax
          if (section.template) {
            try {
              Handlebars.compile(section.template)
            } catch (sectionError) {
              errors.push(`Invalid template syntax in section "${section.key}": ${sectionError.message}`)
            }
          }
        }
      } else if (schema.categories) {
        // Checklist template validation
        for (const category of schema.categories) {
          if (!category.key) {
            errors.push('Category missing required "key" field')
          }
          if (!category.name) {
            errors.push(`Category "${category.key}" missing required "name" field`)
          }
          if (!category.items || !Array.isArray(category.items)) {
            errors.push(`Category "${category.key}" missing required "items" array`)
          } else {
            for (const item of category.items) {
              if (!item.key) {
                errors.push(`Item in category "${category.key}" missing required "key" field`)
              }
              if (!item.label) {
                errors.push(`Item "${item.key}" missing required "label" field`)
              }
            }
          }
        }
      } else {
        errors.push('Schema must contain either "sections" (for summary) or "categories" (for checklist)')
      }

      return {
        isValid: errors.length === 0,
        errors,
        warnings,
      }
    } catch (error) {
      console.error('Error validating template:', error)
      return {
        isValid: false,
        errors: [`Validation error: ${error.message}`],
        warnings,
      }
    }
  }

  async previewTemplate(
    templateId: string,
    sampleData: any
  ): Promise<{ preview: string; errors: string[] }> {
    try {
      const template = await this.getTemplate(templateId)
      const errors: string[] = []

      if (template.kind === 'SUMMARY') {
        const sections = []

        for (const section of template.schema.sections) {
          try {
            const compiledTemplate = Handlebars.compile(section.template)
            const content = compiledTemplate(sampleData)
            sections.push(`## ${section.title}\n\n${content}`)
          } catch (error) {
            errors.push(`Error rendering section "${section.key}": ${error.message}`)
            sections.push(`## ${section.title}\n\n*[Error rendering section]*`)
          }
        }

        return {
          preview: sections.join('\n\n---\n\n'),
          errors,
        }
      } else {
        // Checklist preview
        const items = []

        for (const category of template.schema.categories) {
          items.push(`### ${category.name}`)

          for (const item of category.items) {
            const required = item.required ? ' (Required)' : ''
            items.push(`- [ ] ${item.label}${required}`)
          }

          items.push('')
        }

        return {
          preview: items.join('\n'),
          errors,
        }
      }
    } catch (error) {
      console.error('Error previewing template:', error)
      return {
        preview: '',
        errors: [`Preview error: ${error.message}`],
      }
    }
  }

  async cloneTemplate(id: string, newName: string): Promise<string> {
    try {
      const original = await this.getTemplate(id)

      return await this.createTemplate({
        kind: original.kind,
        name: newName,
        schema: original.schema,
        template: original.template,
        active: false, // New templates start as inactive
      })
    } catch (error) {
      console.error('Error cloning template:', error)
      throw error
    }
  }

  async exportTemplate(id: string): Promise<{
    template: any
    exportedAt: Date
  }> {
    try {
      const template = await this.getTemplate(id)

      return {
        template: {
          kind: template.kind,
          name: template.name,
          schema: template.schema,
          template: template.template,
          metadata: {
            version: '1.0',
            exportedFrom: 'tender-automator',
          },
        },
        exportedAt: new Date(),
      }
    } catch (error) {
      console.error('Error exporting template:', error)
      throw error
    }
  }

  async importTemplate(templateData: {
    kind: TemplateKind
    name: string
    schema: any
    template: string
  }): Promise<string> {
    try {
      // Check if template with same name exists
      const existing = await prisma.template.findFirst({
        where: {
          kind: templateData.kind,
          name: templateData.name,
        },
      })

      if (existing) {
        throw new Error(`Template with name "${templateData.name}" already exists`)
      }

      return await this.createTemplate(templateData)
    } catch (error) {
      console.error('Error importing template:', error)
      throw error
    }
  }

  private async getTemplateUsageCount(templateId: string): Promise<number> {
    try {
      // This would count actual usage in pipelines, runs, etc.
      // For now, return 0 as a placeholder
      return 0
    } catch (error) {
      console.error('Error getting template usage count:', error)
      return 0
    }
  }

  async getDefaultTemplates(): Promise<{
    summary: string
    checklist: string
  }> {
    try {
      const [summaryTemplate, checklistTemplate] = await Promise.all([
        prisma.template.findFirst({
          where: {
            kind: 'SUMMARY',
            name: 'summary-v1',
            active: true,
          },
        }),
        prisma.template.findFirst({
          where: {
            kind: 'CHECKLIST',
            name: 'checklist-internal-v1',
            active: true,
          },
        }),
      ])

      if (!summaryTemplate || !checklistTemplate) {
        throw new Error('Default templates not found')
      }

      return {
        summary: summaryTemplate.id,
        checklist: checklistTemplate.id,
      }
    } catch (error) {
      console.error('Error getting default templates:', error)
      throw error
    }
  }
}

export const templateManager = new TemplateManager()