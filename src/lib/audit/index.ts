// Audit Trail Service - Complete action logging system
// Tracks all user actions and system events with full history

import { prisma } from '@/lib/prisma'

export interface AuditEvent {
  actorId: string
  action: string
  entity: string
  entityId: string
  diff?: {
    before?: any
    after?: any
    changes?: Record<string, { from: any; to: any }>
    metadata?: Record<string, any>
  }
  userAgent?: string
  ipAddress?: string
}

export interface AuditQuery {
  actorId?: string
  entity?: string
  entityId?: string
  action?: string
  dateFrom?: Date
  dateTo?: Date
  limit?: number
  offset?: number
}

export class AuditService {
  /**
   * Log an audit event
   */
  static async log(event: AuditEvent): Promise<void> {
    try {
      await prisma.auditLog.create({
        data: {
          actorId: event.actorId,
          action: event.action,
          entity: event.entity,
          entityId: event.entityId,
          diff: event.diff || {},
        }
      })
    } catch (error) {
      console.error('Failed to log audit event:', error)
      // Don't throw - audit logging should not break application flow
    }
  }

  /**
   * Log user authentication events
   */
  static async logAuth(actorId: string, action: 'SIGNIN' | 'SIGNOUT' | 'SIGNUP', metadata?: any): Promise<void> {
    await this.log({
      actorId,
      action: `USER_${action}`,
      entity: 'User',
      entityId: actorId,
      diff: {
        metadata: {
          timestamp: new Date().toISOString(),
          ...metadata
        }
      }
    })
  }

  /**
   * Log tender lifecycle events
   */
  static async logTenderEvent(
    actorId: string,
    tenderId: string,
    action: 'CREATE' | 'UPDATE' | 'DELETE' | 'PROCESS' | 'APPROVE' | 'REJECT',
    before?: any,
    after?: any
  ): Promise<void> {
    await this.log({
      actorId,
      action: `TENDER_${action}`,
      entity: 'Tender',
      entityId: tenderId,
      diff: { before, after }
    })
  }

  /**
   * Log document operations
   */
  static async logDocumentEvent(
    actorId: string,
    documentId: string,
    action: 'UPLOAD' | 'DELETE' | 'DOWNLOAD' | 'VIEW',
    metadata?: any
  ): Promise<void> {
    await this.log({
      actorId,
      action: `DOCUMENT_${action}`,
      entity: 'Document',
      entityId: documentId,
      diff: { metadata }
    })
  }

  /**
   * Log pipeline execution events
   */
  static async logPipelineEvent(
    actorId: string,
    runId: string,
    action: 'START' | 'COMPLETE' | 'FAIL' | 'STEP_START' | 'STEP_COMPLETE' | 'STEP_FAIL',
    metadata?: any
  ): Promise<void> {
    await this.log({
      actorId,
      action: `PIPELINE_${action}`,
      entity: 'Run',
      entityId: runId,
      diff: { metadata }
    })
  }

  /**
   * Log approval workflow events
   */
  static async logApprovalEvent(
    actorId: string,
    tenderId: string,
    action: 'APPROVE' | 'REJECT' | 'REQUEST_CHANGES',
    comment?: string,
    before?: any,
    after?: any
  ): Promise<void> {
    await this.log({
      actorId,
      action: `APPROVAL_${action}`,
      entity: 'Tender',
      entityId: tenderId,
      diff: {
        before,
        after,
        metadata: { comment, timestamp: new Date().toISOString() }
      }
    })
  }

  /**
   * Log system configuration changes
   */
  static async logConfigEvent(
    actorId: string,
    entity: 'Template' | 'Pipeline' | 'Source' | 'User',
    entityId: string,
    action: 'CREATE' | 'UPDATE' | 'DELETE' | 'ACTIVATE' | 'DEACTIVATE',
    before?: any,
    after?: any
  ): Promise<void> {
    await this.log({
      actorId,
      action: `CONFIG_${action}`,
      entity,
      entityId,
      diff: { before, after }
    })
  }

  /**
   * Query audit logs with filtering
   */
  static async query(query: AuditQuery) {
    const where: any = {}

    if (query.actorId) where.actorId = query.actorId
    if (query.entity) where.entity = query.entity
    if (query.entityId) where.entityId = query.entityId
    if (query.action) where.action = query.action

    if (query.dateFrom || query.dateTo) {
      where.at = {}
      if (query.dateFrom) where.at.gte = query.dateFrom
      if (query.dateTo) where.at.lte = query.dateTo
    }

    const logs = await prisma.auditLog.findMany({
      where,
      include: {
        actor: {
          select: {
            id: true,
            name: true,
            email: true,
            role: true
          }
        }
      },
      orderBy: { at: 'desc' },
      take: query.limit || 100,
      skip: query.offset || 0
    })

    const totalCount = await prisma.auditLog.count({ where })

    return {
      logs,
      totalCount,
      hasMore: (query.offset || 0) + logs.length < totalCount
    }
  }

  /**
   * Get audit trail for a specific entity
   */
  static async getEntityHistory(entity: string, entityId: string, limit: number = 50) {
    return await prisma.auditLog.findMany({
      where: { entity, entityId },
      include: {
        actor: {
          select: {
            id: true,
            name: true,
            email: true,
            role: true
          }
        }
      },
      orderBy: { at: 'desc' },
      take: limit
    })
  }

  /**
   * Get user activity summary
   */
  static async getUserActivity(actorId: string, days: number = 30) {
    const since = new Date()
    since.setDate(since.getDate() - days)

    const activities = await prisma.auditLog.findMany({
      where: {
        actorId,
        at: { gte: since }
      },
      orderBy: { at: 'desc' },
      take: 100
    })

    // Group by action type
    const actionCounts = activities.reduce((acc, log) => {
      acc[log.action] = (acc[log.action] || 0) + 1
      return acc
    }, {} as Record<string, number>)

    // Group by day
    const dailyActivity = activities.reduce((acc, log) => {
      const day = log.at.toISOString().split('T')[0]
      acc[day] = (acc[day] || 0) + 1
      return acc
    }, {} as Record<string, number>)

    return {
      totalActions: activities.length,
      actionCounts,
      dailyActivity,
      recentActivities: activities.slice(0, 20)
    }
  }

  /**
   * Get system activity summary
   */
  static async getSystemActivity(days: number = 7) {
    const since = new Date()
    since.setDate(since.getDate() - days)

    const activities = await prisma.auditLog.findMany({
      where: { at: { gte: since } },
      include: {
        actor: {
          select: { name: true, role: true }
        }
      },
      orderBy: { at: 'desc' }
    })

    // Group by entity type
    const entityCounts = activities.reduce((acc, log) => {
      acc[log.entity] = (acc[log.entity] || 0) + 1
      return acc
    }, {} as Record<string, number>)

    // Group by action type
    const actionCounts = activities.reduce((acc, log) => {
      const actionType = log.action.split('_')[0]
      acc[actionType] = (acc[actionType] || 0) + 1
      return acc
    }, {} as Record<string, number>)

    // Group by user role
    const roleCounts = activities.reduce((acc, log) => {
      const role = log.actor?.role || 'Unknown'
      acc[role] = (acc[role] || 0) + 1
      return acc
    }, {} as Record<string, number>)

    // Daily activity
    const dailyActivity = activities.reduce((acc, log) => {
      const day = log.at.toISOString().split('T')[0]
      acc[day] = (acc[day] || 0) + 1
      return acc
    }, {} as Record<string, number>)

    return {
      totalActions: activities.length,
      entityCounts,
      actionCounts,
      roleCounts,
      dailyActivity,
      recentActivities: activities.slice(0, 50)
    }
  }

  /**
   * Export audit logs for compliance
   */
  static async exportLogs(query: AuditQuery): Promise<string> {
    const { logs } = await this.query({ ...query, limit: 10000 })

    const csvHeaders = [
      'Timestamp',
      'Actor ID',
      'Actor Name',
      'Actor Email',
      'Actor Role',
      'Action',
      'Entity',
      'Entity ID',
      'Changes'
    ]

    const csvRows = logs.map(log => [
      log.at.toISOString(),
      log.actorId,
      log.actor?.name || '',
      log.actor?.email || '',
      log.actor?.role || '',
      log.action,
      log.entity,
      log.entityId,
      JSON.stringify(log.diff)
    ])

    const csvContent = [
      csvHeaders.join(','),
      ...csvRows.map(row => row.map(field => `"${field}"`).join(','))
    ].join('\n')

    return csvContent
  }

  /**
   * Clean up old audit logs (for data retention policies)
   */
  static async cleanup(retentionDays: number = 365): Promise<number> {
    const cutoffDate = new Date()
    cutoffDate.setDate(cutoffDate.getDate() - retentionDays)

    const result = await prisma.auditLog.deleteMany({
      where: {
        at: { lt: cutoffDate }
      }
    })

    return result.count
  }

  /**
   * Detect suspicious activity patterns
   */
  static async detectSuspiciousActivity(actorId?: string, hours: number = 24) {
    const since = new Date()
    since.setHours(since.getHours() - hours)

    const activities = await prisma.auditLog.findMany({
      where: {
        ...(actorId && { actorId }),
        at: { gte: since }
      },
      include: {
        actor: {
          select: { name: true, email: true, role: true }
        }
      }
    })

    const suspiciousPatterns = []

    // Check for high activity volume
    const activityCounts = activities.reduce((acc, log) => {
      acc[log.actorId] = (acc[log.actorId] || 0) + 1
      return acc
    }, {} as Record<string, number>)

    for (const [userId, count] of Object.entries(activityCounts)) {
      if (count > 1000) { // More than 1000 actions in 24h
        const user = activities.find(a => a.actorId === userId)?.actor
        suspiciousPatterns.push({
          type: 'HIGH_ACTIVITY_VOLUME',
          userId,
          userName: user?.name,
          count,
          severity: 'HIGH'
        })
      }
    }

    // Check for failed operations
    const failedActions = activities.filter(log => log.action.includes('FAIL'))
    const failedCounts = failedActions.reduce((acc, log) => {
      acc[log.actorId] = (acc[log.actorId] || 0) + 1
      return acc
    }, {} as Record<string, number>)

    for (const [userId, count] of Object.entries(failedCounts)) {
      if (count > 50) { // More than 50 failed actions
        const user = activities.find(a => a.actorId === userId)?.actor
        suspiciousPatterns.push({
          type: 'HIGH_FAILURE_RATE',
          userId,
          userName: user?.name,
          count,
          severity: 'MEDIUM'
        })
      }
    }

    // Check for unusual deletion activity
    const deletions = activities.filter(log => log.action.includes('DELETE'))
    const deletionCounts = deletions.reduce((acc, log) => {
      acc[log.actorId] = (acc[log.actorId] || 0) + 1
      return acc
    }, {} as Record<string, number>)

    for (const [userId, count] of Object.entries(deletionCounts)) {
      if (count > 10) { // More than 10 deletions
        const user = activities.find(a => a.actorId === userId)?.actor
        suspiciousPatterns.push({
          type: 'HIGH_DELETION_ACTIVITY',
          userId,
          userName: user?.name,
          count,
          severity: 'HIGH'
        })
      }
    }

    return suspiciousPatterns
  }
}

export const auditService = AuditService