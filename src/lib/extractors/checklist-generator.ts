import { prisma } from '@/lib/prisma'
import { ChecklistStatus } from '@prisma/client'

export interface ChecklistGenerationResult {
  items: Array<{
    key: string
    label: string
    status: ChecklistStatus
    notes?: string
    traceLinkIds: string[]
    autoChecked: boolean
  }>
  metadata: {
    templateId: string
    generatedAt: Date
    totalItems: number
    autoCheckedItems: number
    requiresManualReview: number
  }
}

export interface ChecklistRule {
  key: string
  name: string
  description: string
  autoCheck: {
    enabled: boolean
    field?: string
    condition?: {
      operator: 'contains' | 'equals' | 'exists' | 'matches' | 'date_before' | 'date_after'
      value?: any
      caseSensitive?: boolean
    }
  }
  required: boolean
}

export class ChecklistGenerator {
  private autoCheckRules: Map<string, ChecklistRule> = new Map()

  constructor() {
    this.initializeRules()
  }

  private initializeRules() {
    // Tax Certificate Rule
    this.autoCheckRules.set('tax-certificate', {
      key: 'tax-certificate',
      name: 'Tax Certificate',
      description: 'Valid tax certificate or clearance required',
      autoCheck: {
        enabled: true,
        field: 'eligibility',
        condition: {
          operator: 'contains',
          value: 'tax',
          caseSensitive: false,
        },
      },
      required: true,
    })

    // ISO 9001 Rule
    this.autoCheckRules.set('iso-9001', {
      key: 'iso-9001',
      name: 'ISO 9001 Certification',
      description: 'ISO 9001 quality management certification',
      autoCheck: {
        enabled: true,
        field: 'eligibility',
        condition: {
          operator: 'contains',
          value: 'iso',
          caseSensitive: false,
        },
      },
      required: false,
    })

    // Financial Statements Rule
    this.autoCheckRules.set('financial-statements', {
      key: 'financial-statements',
      name: 'Financial Statements',
      description: 'Audited financial statements for last 3 years',
      autoCheck: {
        enabled: true,
        field: 'eligibility',
        condition: {
          operator: 'contains',
          value: 'financial',
          caseSensitive: false,
        },
      },
      required: true,
    })

    // Technical Specifications Rule
    this.autoCheckRules.set('technical-specifications', {
      key: 'technical-specifications',
      name: 'Technical Specifications',
      description: 'Detailed technical specifications and drawings',
      autoCheck: {
        enabled: true,
        field: 'submissionMechanics',
        condition: {
          operator: 'contains',
          value: 'technical',
          caseSensitive: false,
        },
      },
      required: true,
    })

    // Legal Compliance Rule
    this.autoCheckRules.set('legal-compliance', {
      key: 'legal-compliance',
      name: 'Legal Compliance',
      description: 'Legal compliance and regulatory requirements',
      autoCheck: {
        enabled: true,
        field: 'eligibility',
        condition: {
          operator: 'contains',
          value: 'legal',
          caseSensitive: false,
        },
      },
      required: true,
    })

    // Insurance Coverage Rule
    this.autoCheckRules.set('insurance-coverage', {
      key: 'insurance-coverage',
      name: 'Insurance Coverage',
      description: 'Professional indemnity and public liability insurance',
      autoCheck: {
        enabled: true,
        field: 'eligibility',
        condition: {
          operator: 'contains',
          value: 'insurance',
          caseSensitive: false,
        },
      },
      required: false,
    })

    // Company Registration Rule
    this.autoCheckRules.set('company-registration', {
      key: 'company-registration',
      name: 'Company Registration',
      description: 'Valid company registration certificate',
      autoCheck: {
        enabled: true,
        field: 'eligibility',
        condition: {
          operator: 'contains',
          value: 'registration',
          caseSensitive: false,
        },
      },
      required: true,
    })

    // Deadline Compliance Rule
    this.autoCheckRules.set('deadline-compliance', {
      key: 'deadline-compliance',
      name: 'Deadline Compliance',
      description: 'Submission before deadline',
      autoCheck: {
        enabled: true,
        field: 'deadlineSubmission',
        condition: {
          operator: 'date_after',
          value: new Date(),
        },
      },
      required: true,
    })
  }

  async generateChecklist(
    tenderId: string,
    templateId: string,
    options: {
      autoCheck?: boolean
      requiredItemsOnly?: boolean
    } = {}
  ): Promise<ChecklistGenerationResult> {
    try {
      // Get template
      const template = await prisma.template.findUnique({
        where: { id: templateId },
      })

      if (!template || template.kind !== 'CHECKLIST') {
        throw new Error('Checklist template not found')
      }

      // Get extracted fields for auto-checking
      const fieldExtractions = await prisma.fieldExtraction.findMany({
        where: { tenderId },
        include: {
          traceLinks: {
            select: { id: true },
          },
        },
      })

      const fieldsMap = new Map(fieldExtractions.map(f => [f.key, f]))

      // Get template schema
      const templateSchema = template.schema as {
        categories: Array<{
          key: string
          name: string
          items: Array<{
            key: string
            label: string
            required: boolean
            autoCheck?: any
          }>
        }>
      }

      const items: Array<{
        key: string
        label: string
        status: ChecklistStatus
        notes?: string
        traceLinkIds: string[]
        autoChecked: boolean
      }> = []

      let autoCheckedCount = 0
      let requiresManualReview = 0

      // Process all items from template
      for (const category of templateSchema.categories) {
        for (const templateItem of category.items) {
          // Skip non-required items if requiredItemsOnly is true
          if (options.requiredItemsOnly && !templateItem.required) {
            continue
          }

          const rule = this.autoCheckRules.get(templateItem.key)
          let status: ChecklistStatus = 'PENDING'
          let notes: string | undefined
          let traceLinkIds: string[] = []
          let autoChecked = false

          // Perform auto-check if enabled
          if (options.autoCheck !== false && rule?.autoCheck.enabled) {
            const autoCheckResult = await this.performAutoCheck(rule, fieldsMap)
            status = autoCheckResult.status
            notes = autoCheckResult.notes
            traceLinkIds = autoCheckResult.traceLinkIds
            autoChecked = autoCheckResult.autoChecked

            if (autoChecked) {
              autoCheckedCount++
            }
          }

          if (status === 'PENDING') {
            requiresManualReview++
          }

          items.push({
            key: templateItem.key,
            label: templateItem.label,
            status,
            notes,
            traceLinkIds,
            autoChecked,
          })
        }
      }

      // Save checklist items to database
      await this.saveChecklistItems(tenderId, items)

      return {
        items,
        metadata: {
          templateId,
          generatedAt: new Date(),
          totalItems: items.length,
          autoCheckedItems: autoCheckedCount,
          requiresManualReview,
        },
      }
    } catch (error) {
      console.error('Error generating checklist:', error)
      throw error
    }
  }

  private async performAutoCheck(
    rule: ChecklistRule,
    fieldsMap: Map<string, any>
  ): Promise<{
    status: ChecklistStatus
    notes?: string
    traceLinkIds: string[]
    autoChecked: boolean
  }> {
    try {
      if (!rule.autoCheck.field || !rule.autoCheck.condition) {
        return {
          status: 'PENDING',
          traceLinkIds: [],
          autoChecked: false,
        }
      }

      const field = fieldsMap.get(rule.autoCheck.field)
      if (!field) {
        return {
          status: 'MISSING',
          notes: `Required field '${rule.autoCheck.field}' not found`,
          traceLinkIds: [],
          autoChecked: true,
        }
      }

      const condition = rule.autoCheck.condition
      const fieldValue = field.value
      const traceLinkIds = field.traceLinks.map((link: any) => link.id)

      let matches = false

      switch (condition.operator) {
        case 'contains':
          if (typeof fieldValue === 'string') {
            const searchValue = condition.caseSensitive
              ? condition.value
              : condition.value.toLowerCase()
            const fieldText = condition.caseSensitive
              ? fieldValue
              : fieldValue.toLowerCase()
            matches = fieldText.includes(searchValue)
          }
          break

        case 'equals':
          matches = fieldValue === condition.value
          break

        case 'exists':
          matches = fieldValue != null && fieldValue !== ''
          break

        case 'matches':
          if (typeof fieldValue === 'string' && condition.value) {
            const regex = new RegExp(condition.value, condition.caseSensitive ? 'g' : 'gi')
            matches = regex.test(fieldValue)
          }
          break

        case 'date_after':
          if (fieldValue instanceof Date && condition.value instanceof Date) {
            matches = fieldValue > condition.value
          }
          break

        case 'date_before':
          if (fieldValue instanceof Date && condition.value instanceof Date) {
            matches = fieldValue < condition.value
          }
          break
      }

      return {
        status: matches ? 'OK' : (rule.required ? 'MISSING' : 'PENDING'),
        notes: matches
          ? `Auto-checked: Found evidence in ${rule.autoCheck.field}`
          : `Auto-checked: No evidence found in ${rule.autoCheck.field}`,
        traceLinkIds,
        autoChecked: true,
      }
    } catch (error) {
      console.error('Error in auto-check:', error)
      return {
        status: 'PENDING',
        notes: 'Auto-check failed, manual review required',
        traceLinkIds: [],
        autoChecked: false,
      }
    }
  }

  private async saveChecklistItems(
    tenderId: string,
    items: Array<{
      key: string
      label: string
      status: ChecklistStatus
      notes?: string
      traceLinkIds: string[]
    }>
  ): Promise<void> {
    try {
      for (const item of items) {
        await prisma.checklistItem.upsert({
          where: {
            tenderId_key: {
              tenderId,
              key: item.key,
            },
          },
          create: {
            tenderId,
            key: item.key,
            label: item.label,
            status: item.status,
            notes: item.notes,
            traceLinks: {
              connect: item.traceLinkIds.map(id => ({ id })),
            },
          },
          update: {
            status: item.status,
            notes: item.notes,
            traceLinks: {
              set: item.traceLinkIds.map(id => ({ id })),
            },
          },
        })
      }
    } catch (error) {
      console.error('Error saving checklist items:', error)
      throw new Error('Failed to save checklist items')
    }
  }

  async updateChecklistItem(
    tenderId: string,
    itemKey: string,
    update: {
      status: ChecklistStatus
      notes?: string
    }
  ): Promise<void> {
    try {
      await prisma.checklistItem.update({
        where: {
          tenderId_key: {
            tenderId,
            key: itemKey,
          },
        },
        data: {
          status: update.status,
          notes: update.notes,
          updatedAt: new Date(),
        },
      })
    } catch (error) {
      console.error('Error updating checklist item:', error)
      throw new Error('Failed to update checklist item')
    }
  }

  async getChecklist(tenderId: string): Promise<Array<{
    key: string
    label: string
    status: ChecklistStatus
    notes?: string
    traceLinks: Array<{
      id: string
      page: number
      snippet: string
      documentId: string
    }>
    updatedAt: Date
  }>> {
    try {
      const checklistItems = await prisma.checklistItem.findMany({
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
        orderBy: { key: 'asc' },
      })

      return checklistItems.map(item => ({
        key: item.key,
        label: item.label,
        status: item.status,
        notes: item.notes || undefined,
        traceLinks: item.traceLinks,
        updatedAt: item.updatedAt,
      }))
    } catch (error) {
      console.error('Error getting checklist:', error)
      throw new Error('Failed to get checklist')
    }
  }

  async validateChecklist(tenderId: string): Promise<{
    isComplete: boolean
    canApprove: boolean
    pendingItems: string[]
    missingItems: string[]
    statistics: {
      total: number
      ok: number
      missing: number
      pending: number
      notApplicable: number
    }
  }> {
    try {
      const checklistItems = await prisma.checklistItem.findMany({
        where: { tenderId },
      })

      const statistics = {
        total: checklistItems.length,
        ok: 0,
        missing: 0,
        pending: 0,
        notApplicable: 0,
      }

      const pendingItems: string[] = []
      const missingItems: string[] = []

      checklistItems.forEach(item => {
        switch (item.status) {
          case 'OK':
            statistics.ok++
            break
          case 'MISSING':
            statistics.missing++
            missingItems.push(item.key)
            break
          case 'PENDING':
            statistics.pending++
            pendingItems.push(item.key)
            break
          case 'N_A':
            statistics.notApplicable++
            break
        }
      })

      const isComplete = pendingItems.length === 0 && missingItems.length === 0
      const canApprove = isComplete // Can only approve if all items are resolved

      return {
        isComplete,
        canApprove,
        pendingItems,
        missingItems,
        statistics,
      }
    } catch (error) {
      console.error('Error validating checklist:', error)
      throw new Error('Failed to validate checklist')
    }
  }

  async bulkUpdateChecklist(
    tenderId: string,
    updates: Array<{
      key: string
      status: ChecklistStatus
      notes?: string
    }>
  ): Promise<void> {
    try {
      await prisma.$transaction(
        updates.map(update =>
          prisma.checklistItem.update({
            where: {
              tenderId_key: {
                tenderId,
                key: update.key,
              },
            },
            data: {
              status: update.status,
              notes: update.notes,
              updatedAt: new Date(),
            },
          })
        )
      )
    } catch (error) {
      console.error('Error bulk updating checklist:', error)
      throw new Error('Failed to bulk update checklist')
    }
  }
}

export const checklistGenerator = new ChecklistGenerator()