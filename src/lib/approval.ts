import { prisma } from './db'
import { ApprovalStatus, ChecklistStatus, TenderStatus, UserRole } from '@prisma/client'

// ==========================================
// Types
// ==========================================

export interface ApprovalContext {
  tenderId: string
  userId: string
  userRole: UserRole
  status: ApprovalStatus
  comment?: string
}

export interface ApprovalValidation {
  canApprove: boolean
  errors: string[]
  warnings: string[]
  blockingItems: Array<{
    key: string
    label: string
    status: ChecklistStatus
    reason: string
  }>
}

export interface AuditLogEntry {
  actorId: string
  action: string
  entity: string
  entityId: string
  diff?: Record<string, any>
  metadata?: Record<string, any>
}

// ==========================================
// Approval Validation Service
// ==========================================

export class ApprovalValidationService {
  /**
   * Validate if a tender can be approved
   */
  static async validateApprovalEligibility(
    tenderId: string,
    userId: string
  ): Promise<ApprovalValidation> {
    try {
      const errors: string[] = []
      const warnings: string[] = []
      const blockingItems: Array<{
        key: string
        label: string
        status: ChecklistStatus
        reason: string
      }> = []

      // Get user information
      const user = await prisma.user.findUnique({
        where: { id: userId },
      })

      if (!user) {
        errors.push('User not found')
        return { canApprove: false, errors, warnings, blockingItems }
      }

      // Check user role permissions
      if (user.role === UserRole.ANALYST) {
        errors.push('Analysts cannot approve tenders - only Reviewers and Admins')
        return { canApprove: false, errors, warnings, blockingItems }
      }

      // Get tender with related data
      const tender = await prisma.tender.findUnique({
        where: { id: tenderId },
        include: {
          fieldExtractions: true,
          checklistItems: true,
          approvals: {
            orderBy: { at: 'desc' },
            take: 1,
          },
        },
      })

      if (!tender) {
        errors.push('Tender not found')
        return { canApprove: false, errors, warnings, blockingItems }
      }

      // Check tender status
      if (tender.status === TenderStatus.APPROVED) {
        errors.push('Tender is already approved')
      }

      if (tender.status === TenderStatus.REJECTED) {
        errors.push('Tender is rejected - cannot approve')
      }

      if (tender.status !== TenderStatus.READY_FOR_REVIEW) {
        warnings.push('Tender status is not "Ready for Review" - ensure processing is complete')
      }

      // Validate required field extractions
      const requiredFields = ['scope', 'eligibility', 'evaluationCriteria', 'submissionMechanics', 'deadlineSubmission']
      const extractedFields = tender.fieldExtractions.map(f => f.key)

      for (const field of requiredFields) {
        if (!extractedFields.includes(field)) {
          errors.push(`Required field extraction missing: ${field}`)
        }
      }

      // Check field extraction confidence
      for (const extraction of tender.fieldExtractions) {
        if (extraction.confidence < 0.5) {
          warnings.push(`Low confidence (${Math.round(extraction.confidence * 100)}%) for field: ${extraction.key}`)
        }
      }

      // Validate checklist items
      const requiredChecklistItems = tender.checklistItems.filter(
        item => !item.key.startsWith('optional_')
      )

      for (const item of requiredChecklistItems) {
        if (item.status === ChecklistStatus.PENDING) {
          blockingItems.push({
            key: item.key,
            label: item.label,
            status: item.status,
            reason: 'Item is still pending review',
          })
        }

        if (item.status === ChecklistStatus.MISSING) {
          blockingItems.push({
            key: item.key,
            label: item.label,
            status: item.status,
            reason: 'Required item is missing',
          })
        }
      }

      // Check deadline validity
      const deadlineField = tender.fieldExtractions.find(f => f.key === 'deadlineSubmission')
      if (deadlineField && deadlineField.value) {
        try {
          const deadline = new Date((deadlineField.value as any).date)
          if (deadline <= new Date()) {
            warnings.push('Submission deadline has passed')
          }
        } catch {
          warnings.push('Could not validate submission deadline')
        }
      }

      // Check if user has already approved/rejected this tender
      const existingApproval = tender.approvals.find(a => a.by === userId)
      if (existingApproval) {
        warnings.push(`You have already ${existingApproval.status.toLowerCase()} this tender`)
      }

      const canApprove = errors.length === 0 && blockingItems.length === 0

      return {
        canApprove,
        errors,
        warnings,
        blockingItems,
      }
    } catch (error) {
      return {
        canApprove: false,
        errors: [error instanceof Error ? error.message : 'Validation failed'],
        warnings: [],
        blockingItems: [],
      }
    }
  }
}

// ==========================================
// Approval Service
// ==========================================

export class ApprovalService {
  /**
   * Submit an approval or rejection
   */
  static async submitApproval(context: ApprovalContext): Promise<void> {
    // Validate approval eligibility
    const validation = await ApprovalValidationService.validateApprovalEligibility(
      context.tenderId,
      context.userId
    )

    if (!validation.canApprove && context.status === ApprovalStatus.APPROVED) {
      throw new Error(`Cannot approve tender: ${validation.errors.join(', ')}`)
    }

    await prisma.$transaction(async (tx) => {
      // Create approval record
      const approval = await tx.approval.create({
        data: {
          tenderId: context.tenderId,
          status: context.status,
          by: context.userId,
          comment: context.comment,
        },
      })

      // Update tender status
      let newTenderStatus: TenderStatus
      switch (context.status) {
        case ApprovalStatus.APPROVED:
          newTenderStatus = TenderStatus.APPROVED
          break
        case ApprovalStatus.REJECTED:
          newTenderStatus = TenderStatus.REJECTED
          break
        case ApprovalStatus.PENDING_REVIEW:
          newTenderStatus = TenderStatus.READY_FOR_REVIEW
          break
      }

      await tx.tender.update({
        where: { id: context.tenderId },
        data: { status: newTenderStatus },
      })

      // Create audit log
      await AuditService.logAction({
        actorId: context.userId,
        action: `TENDER_${context.status}`,
        entity: 'Tender',
        entityId: context.tenderId,
        diff: {
          before: { status: 'Previous status' },
          after: { status: newTenderStatus, approvalId: approval.id },
        },
        metadata: {
          comment: context.comment,
          approvalId: approval.id,
        },
      })
    })
  }

  /**
   * Get approval history for a tender
   */
  static async getApprovalHistory(tenderId: string) {
    return await prisma.approval.findMany({
      where: { tenderId },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
          },
        },
      },
      orderBy: { at: 'desc' },
    })
  }

  /**
   * Get current approval status
   */
  static async getCurrentApprovalStatus(tenderId: string) {
    const latestApproval = await prisma.approval.findFirst({
      where: { tenderId },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
          },
        },
      },
      orderBy: { at: 'desc' },
    })

    return latestApproval
  }
}

// ==========================================
// Audit Service
// ==========================================

export class AuditService {
  /**
   * Log an action in the audit trail
   */
  static async logAction(entry: AuditLogEntry): Promise<void> {
    await prisma.auditLog.create({
      data: {
        actorId: entry.actorId,
        action: entry.action,
        entity: entry.entity,
        entityId: entry.entityId,
        diff: entry.diff,
      },
    })
  }

  /**
   * Log tender creation
   */
  static async logTenderCreation(
    tenderId: string,
    userId: string,
    tenderData: any
  ): Promise<void> {
    await this.logAction({
      actorId: userId,
      action: 'TENDER_CREATED',
      entity: 'Tender',
      entityId: tenderId,
      diff: {
        before: null,
        after: tenderData,
      },
    })
  }

  /**
   * Log document upload
   */
  static async logDocumentUpload(
    documentId: string,
    tenderId: string,
    userId: string,
    documentData: any
  ): Promise<void> {
    await this.logAction({
      actorId: userId,
      action: 'DOCUMENT_UPLOADED',
      entity: 'Document',
      entityId: documentId,
      metadata: {
        tenderId,
        filename: documentData.filename,
        mime: documentData.mime,
        size: documentData.size,
      },
    })
  }

  /**
   * Log field extraction
   */
  static async logFieldExtraction(
    tenderId: string,
    userId: string,
    extractionResults: any
  ): Promise<void> {
    await this.logAction({
      actorId: userId,
      action: 'FIELDS_EXTRACTED',
      entity: 'Tender',
      entityId: tenderId,
      diff: {
        before: null,
        after: {
          fieldsCount: extractionResults.fields?.length || 0,
          errorsCount: extractionResults.errors?.length || 0,
          warningsCount: extractionResults.warnings?.length || 0,
        },
      },
    })
  }

  /**
   * Log checklist item update
   */
  static async logChecklistUpdate(
    checklistItemId: string,
    tenderId: string,
    userId: string,
    before: any,
    after: any
  ): Promise<void> {
    await this.logAction({
      actorId: userId,
      action: 'CHECKLIST_UPDATED',
      entity: 'ChecklistItem',
      entityId: checklistItemId,
      diff: {
        before,
        after,
      },
      metadata: {
        tenderId,
      },
    })
  }

  /**
   * Log template changes
   */
  static async logTemplateChange(
    templateId: string,
    userId: string,
    action: 'CREATED' | 'UPDATED' | 'DELETED',
    before: any = null,
    after: any = null
  ): Promise<void> {
    await this.logAction({
      actorId: userId,
      action: `TEMPLATE_${action}`,
      entity: 'Template',
      entityId: templateId,
      diff: {
        before,
        after,
      },
    })
  }

  /**
   * Log pipeline changes
   */
  static async logPipelineChange(
    pipelineId: string,
    userId: string,
    action: 'CREATED' | 'UPDATED' | 'DELETED',
    before: any = null,
    after: any = null
  ): Promise<void> {
    await this.logAction({
      actorId: userId,
      action: `PIPELINE_${action}`,
      entity: 'Pipeline',
      entityId: pipelineId,
      diff: {
        before,
        after,
      },
    })
  }

  /**
   * Log user role changes
   */
  static async logUserRoleChange(
    targetUserId: string,
    actorId: string,
    beforeRole: UserRole,
    afterRole: UserRole
  ): Promise<void> {
    await this.logAction({
      actorId,
      action: 'USER_ROLE_CHANGED',
      entity: 'User',
      entityId: targetUserId,
      diff: {
        before: { role: beforeRole },
        after: { role: afterRole },
      },
    })
  }

  /**
   * Get audit trail for an entity
   */
  static async getAuditTrail(
    entityId: string,
    entity?: string,
    limit: number = 50
  ) {
    const where: any = { entityId }
    if (entity) {
      where.entity = entity
    }

    return await prisma.auditLog.findMany({
      where,
      include: {
        actor: {
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
          },
        },
      },
      orderBy: { at: 'desc' },
      take: limit,
    })
  }

  /**
   * Get recent activity across the system
   */
  static async getRecentActivity(limit: number = 20) {
    return await prisma.auditLog.findMany({
      include: {
        actor: {
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
          },
        },
      },
      orderBy: { at: 'desc' },
      take: limit,
    })
  }

  /**
   * Get activity for a specific user
   */
  static async getUserActivity(userId: string, limit: number = 50) {
    return await prisma.auditLog.findMany({
      where: { actorId: userId },
      include: {
        actor: {
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
          },
        },
      },
      orderBy: { at: 'desc' },
      take: limit,
    })
  }

  /**
   * Get statistics for audit trail
   */
  static async getAuditStatistics(days: number = 30) {
    const since = new Date()
    since.setDate(since.getDate() - days)

    const stats = await prisma.auditLog.groupBy({
      by: ['action'],
      where: {
        at: {
          gte: since,
        },
      },
      _count: {
        action: true,
      },
      orderBy: {
        _count: {
          action: 'desc',
        },
      },
    })

    const totalActions = await prisma.auditLog.count({
      where: {
        at: {
          gte: since,
        },
      },
    })

    const uniqueActors = await prisma.auditLog.findMany({
      where: {
        at: {
          gte: since,
        },
      },
      select: {
        actorId: true,
      },
      distinct: ['actorId'],
    })

    return {
      totalActions,
      uniqueActors: uniqueActors.length,
      actionBreakdown: stats.map(stat => ({
        action: stat.action,
        count: stat._count.action,
        percentage: Math.round((stat._count.action / totalActions) * 100),
      })),
      period: `${days} days`,
    }
  }
}

// ==========================================
// Permission Service
// ==========================================

export class PermissionService {
  /**
   * Check if user can perform an action on a tender
   */
  static async canPerformAction(
    userId: string,
    action: string,
    resourceId?: string
  ): Promise<boolean> {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    })

    if (!user) return false

    const permissions: Record<UserRole, string[]> = {
      [UserRole.ANALYST]: [
        'tender:create',
        'tender:read',
        'tender:update',
        'document:upload',
        'run:start',
        'checklist:update',
      ],
      [UserRole.REVIEWER]: [
        'tender:create',
        'tender:read',
        'tender:update',
        'tender:approve',
        'tender:reject',
        'document:upload',
        'run:start',
        'checklist:update',
        'template:read',
        'pipeline:read',
      ],
      [UserRole.ADMIN]: [
        'tender:*',
        'document:*',
        'run:*',
        'checklist:*',
        'template:*',
        'pipeline:*',
        'user:*',
        'settings:*',
        'audit:read',
      ],
    }

    const userPermissions = permissions[user.role] || []

    // Check for wildcard permissions
    const wildcardPermission = action.split(':')[0] + ':*'
    if (userPermissions.includes(wildcardPermission)) {
      return true
    }

    return userPermissions.includes(action)
  }

  /**
   * Get user permissions
   */
  static async getUserPermissions(userId: string): Promise<string[]> {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    })

    if (!user) return []

    const permissions: Record<UserRole, string[]> = {
      [UserRole.ANALYST]: [
        'tender:create',
        'tender:read',
        'tender:update',
        'document:upload',
        'run:start',
        'checklist:update',
      ],
      [UserRole.REVIEWER]: [
        'tender:create',
        'tender:read',
        'tender:update',
        'tender:approve',
        'tender:reject',
        'document:upload',
        'run:start',
        'checklist:update',
        'template:read',
        'pipeline:read',
      ],
      [UserRole.ADMIN]: [
        'tender:*',
        'document:*',
        'run:*',
        'checklist:*',
        'template:*',
        'pipeline:*',
        'user:*',
        'settings:*',
        'audit:read',
      ],
    }

    return permissions[user.role] || []
  }
}

export default ApprovalService