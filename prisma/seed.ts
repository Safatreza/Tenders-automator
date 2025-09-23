import { PrismaClient, UserRole, TenderStatus, ChecklistStatus, TemplateKind, ApprovalStatus, RunStatus } from '@prisma/client'
import { DEFAULT_SUMMARY_TEMPLATE, DEFAULT_CHECKLIST_SCHEMA } from '../src/lib/templates'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Create demo users
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@demo.com' },
    update: {},
    create: {
      email: 'admin@demo.com',
      name: 'Admin User',
      role: UserRole.ADMIN,
    },
  })

  const reviewerUser = await prisma.user.upsert({
    where: { email: 'reviewer@demo.com' },
    update: {},
    create: {
      email: 'reviewer@demo.com',
      name: 'Reviewer User',
      role: UserRole.REVIEWER,
    },
  })

  const analystUser = await prisma.user.upsert({
    where: { email: 'analyst@demo.com' },
    update: {},
    create: {
      email: 'analyst@demo.com',
      name: 'Analyst User',
      role: UserRole.ANALYST,
    },
  })

  console.log('👥 Demo users created')

  // Create sources
  const govSource = await prisma.source.upsert({
    where: { name: 'Government Procurement Portal' },
    update: {},
    create: {
      name: 'Government Procurement Portal',
      description: 'Official government tender publication portal',
      baseUrl: 'https://procurement.gov.example',
      keywords: ['government', 'public', 'ministry', 'department'],
      active: true,
    },
  })

  const privateSource = await prisma.source.upsert({
    where: { name: 'Private Sector RFPs' },
    update: {},
    create: {
      name: 'Private Sector RFPs',
      description: 'Corporate procurement and RFP portal',
      baseUrl: 'https://corporate-rfps.example',
      keywords: ['corporation', 'private', 'company', 'enterprise'],
      active: true,
    },
  })

  const intlSource = await prisma.source.upsert({
    where: { name: 'International Organizations' },
    update: {},
    create: {
      name: 'International Organizations',
      description: 'UN, World Bank, and other international body tenders',
      baseUrl: 'https://international-tenders.example',
      keywords: ['UN', 'world bank', 'international', 'development'],
      active: true,
    },
  })

  console.log('📊 Sources created')

  // Create default templates
  const summaryTemplate = await prisma.template.upsert({
    where: {
      kind_name: {
        kind: TemplateKind.SUMMARY,
        name: 'summary-v1'
      }
    },
    update: {},
    create: {
      kind: TemplateKind.SUMMARY,
      name: 'summary-v1',
      schema: {
        type: 'summary',
        version: '1.0',
        sections: ['scope', 'eligibility', 'evaluation', 'submission', 'legal']
      },
      template: DEFAULT_SUMMARY_TEMPLATE,
      active: true,
    },
  })

  const checklistTemplate = await prisma.template.upsert({
    where: {
      kind_name: {
        kind: TemplateKind.CHECKLIST,
        name: 'checklist-internal-v1'
      }
    },
    update: {},
    create: {
      kind: TemplateKind.CHECKLIST,
      name: 'checklist-internal-v1',
      schema: DEFAULT_CHECKLIST_SCHEMA,
      template: JSON.stringify(DEFAULT_CHECKLIST_SCHEMA.items),
      active: true,
    },
  })

  console.log('📄 Templates created')

  // Create pipelines
  const mvpPipeline = await prisma.pipeline.upsert({
    where: { name: 'phase1-mvp' },
    update: {},
    create: {
      name: 'phase1-mvp',
      config: {
        name: 'phase1-mvp',
        steps: [
          {
            id: 'prepare',
            uses: 'pipeline/prepare',
            with: { ocr: 'auto', splitPages: true }
          },
          {
            id: 'extract',
            uses: 'pipeline/extract',
            with: {
              fields: [
                { key: 'scope', requireCitations: true },
                { key: 'eligibility', requireCitations: true },
                { key: 'evaluationCriteria', requireCitations: true },
                { key: 'submissionMechanics', requireCitations: true },
                { key: 'deadlineSubmission', type: 'date', validators: ['isFutureDate'] }
              ]
            }
          },
          {
            id: 'checklist',
            uses: 'pipeline/checklist',
            with: { templateId: checklistTemplate.id }
          },
          {
            id: 'summary',
            uses: 'pipeline/summary',
            with: { templateId: summaryTemplate.id, requireCitations: true }
          },
          {
            id: 'gate',
            uses: 'pipeline/human-approval',
            with: { rolesAllowed: ['REVIEWER', 'ADMIN'] }
          }
        ]
      },
      active: true,
    },
  })

  console.log('⚙️ Pipelines created')

  // Create demo tender with full data
  const tender1 = await prisma.tender.create({
    data: {
      title: 'IT Infrastructure Modernization Project',
      agency: 'Department of Technology',
      status: TenderStatus.READY_FOR_REVIEW,
      publishedAt: new Date('2024-01-15'),
      dueAt: new Date('2024-03-15'),
      sourceId: govSource.id,
    },
  })

  // Create documents for tender1
  const doc1 = await prisma.document.create({
    data: {
      tenderId: tender1.id,
      filename: 'IT_Modernization_RFP.pdf',
      mime: 'application/pdf',
      sha256: 'abc123def456ghi789jkl012mno345pqr678stu901vwx234yz567890abcdef12',
      pages: 45,
      version: 1,
      url: 'https://storage.example.com/documents/IT_Modernization_RFP.pdf',
    },
  })

  const doc2 = await prisma.document.create({
    data: {
      tenderId: tender1.id,
      filename: 'Technical_Requirements.docx',
      mime: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      sha256: 'def456ghi789abc123jkl012mno345pqr678stu901vwx234yz567890abcdef34',
      pages: 12,
      version: 1,
      url: 'https://storage.example.com/documents/Technical_Requirements.docx',
    },
  })

  // Create trace links
  const traceLink1 = await prisma.traceLink.create({
    data: {
      documentId: doc1.id,
      page: 3,
      snippet: 'The project aims to modernize IT infrastructure across all government departments within 18 months',
      sectionPath: 'Project Scope and Objectives',
    },
  })

  const traceLink2 = await prisma.traceLink.create({
    data: {
      documentId: doc1.id,
      page: 8,
      snippet: 'Bidders must have ISO 9001 certification and demonstrate at least 5 years of experience in government IT projects',
      sectionPath: 'Eligibility Requirements',
    },
  })

  const traceLink3 = await prisma.traceLink.create({
    data: {
      documentId: doc1.id,
      page: 15,
      snippet: 'Submissions must be received by March 15, 2024, 5:00 PM EST via the electronic procurement portal',
      sectionPath: 'Submission Guidelines',
    },
  })

  // Create field extractions with citations
  await prisma.fieldExtraction.create({
    data: {
      tenderId: tender1.id,
      key: 'scope',
      value: {
        objectives: [
          'Modernize IT infrastructure across all government departments',
          'Improve system performance and reliability',
          'Enhance cybersecurity posture'
        ],
        projectDescription: 'Comprehensive IT infrastructure modernization including server upgrades, network enhancement, and cloud migration',
        deliverables: [
          'Updated server infrastructure',
          'Enhanced network connectivity',
          'Cloud migration services',
          'Security implementation',
          'Staff training and documentation'
        ]
      },
      confidence: 0.92,
      traceLinks: {
        connect: [{ id: traceLink1.id }]
      }
    },
  })

  await prisma.fieldExtraction.create({
    data: {
      tenderId: tender1.id,
      key: 'eligibility',
      value: {
        requirements: [
          'ISO 9001 certification required',
          'Minimum 5 years experience in government IT projects',
          'Financial capacity to handle $2M+ projects',
          'Security clearance for key personnel'
        ],
        restrictions: [
          'Foreign entities must partner with local firms',
          'Cannot have conflicts of interest with government'
        ],
        qualifications: [
          'Certified project managers (PMP preferred)',
          'Cybersecurity expertise and certifications',
          'Cloud platform certifications (AWS, Azure, or GCP)'
        ]
      },
      confidence: 0.88,
      traceLinks: {
        connect: [{ id: traceLink2.id }]
      }
    },
  })

  await prisma.fieldExtraction.create({
    data: {
      tenderId: tender1.id,
      key: 'deadlineSubmission',
      value: {
        date: new Date('2024-03-15T17:00:00Z'),
        time: '5:00 PM',
        timezone: 'EST',
        isExtendable: false
      },
      confidence: 0.95,
      traceLinks: {
        connect: [{ id: traceLink3.id }]
      }
    },
  })

  // Create checklist items
  await prisma.checklistItem.create({
    data: {
      tenderId: tender1.id,
      key: 'deadline_check',
      label: 'Submission deadline is in the future',
      status: ChecklistStatus.OK,
      traceLinks: {
        connect: [{ id: traceLink3.id }]
      }
    },
  })

  await prisma.checklistItem.create({
    data: {
      tenderId: tender1.id,
      key: 'tax_certificate',
      label: 'Valid tax clearance certificate',
      status: ChecklistStatus.PENDING,
    },
  })

  await prisma.checklistItem.create({
    data: {
      tenderId: tender1.id,
      key: 'iso_9001',
      label: 'ISO 9001 certification (if required)',
      status: ChecklistStatus.PENDING,
      notes: 'Required according to eligibility criteria',
      traceLinks: {
        connect: [{ id: traceLink2.id }]
      }
    },
  })

  // Create summary blocks
  await prisma.summaryBlock.create({
    data: {
      tenderId: tender1.id,
      blockKey: 'scope',
      contentMarkdown: '## Scope & Objectives\n\nThe IT Infrastructure Modernization Project aims to modernize IT infrastructure across all government departments within 18 months. Key objectives include improving system performance, enhancing cybersecurity, and enabling cloud capabilities.',
      traceLinks: {
        connect: [{ id: traceLink1.id }]
      }
    },
  })

  // Create pipeline run
  const run1 = await prisma.run.create({
    data: {
      tenderId: tender1.id,
      pipelineName: 'phase1-mvp',
      status: RunStatus.COMPLETED,
      startedAt: new Date('2024-01-20T10:00:00Z'),
      finishedAt: new Date('2024-01-20T10:15:00Z'),
      logs: [
        { timestamp: '2024-01-20T10:00:00Z', level: 'info', step: 'prepare', message: 'Starting document preparation' },
        { timestamp: '2024-01-20T10:02:00Z', level: 'info', step: 'prepare', message: 'Document parsing completed - 2 documents processed' },
        { timestamp: '2024-01-20T10:05:00Z', level: 'info', step: 'extract', message: 'Field extraction started' },
        { timestamp: '2024-01-20T10:10:00Z', level: 'info', step: 'extract', message: 'Successfully extracted 3 fields with citations' },
        { timestamp: '2024-01-20T10:12:00Z', level: 'info', step: 'checklist', message: 'Checklist generated - 8 items created' },
        { timestamp: '2024-01-20T10:14:00Z', level: 'info', step: 'summary', message: 'Summary generated successfully' },
        { timestamp: '2024-01-20T10:15:00Z', level: 'info', step: 'gate', message: 'Ready for human approval' }
      ]
    },
  })

  // Create a second tender (approved)
  const tender2 = await prisma.tender.create({
    data: {
      title: 'Healthcare System Upgrade',
      agency: 'Ministry of Health',
      status: TenderStatus.APPROVED,
      publishedAt: new Date('2024-01-10'),
      dueAt: new Date('2024-02-28'),
      sourceId: govSource.id,
    },
  })

  // Create approval for tender2
  await prisma.approval.create({
    data: {
      tenderId: tender2.id,
      status: ApprovalStatus.APPROVED,
      by: reviewerUser.id,
      comment: 'All requirements met. Field extractions have good confidence levels and all mandatory checklist items are satisfied.',
    },
  })

  // Create a third tender (currently processing)
  const tender3 = await prisma.tender.create({
    data: {
      title: 'Public Transport Enhancement',
      agency: 'Department of Transportation',
      status: TenderStatus.PROCESSING,
      publishedAt: new Date('2024-01-25'),
      dueAt: new Date('2024-04-15'),
      sourceId: govSource.id,
    },
  })

  // Create running pipeline for tender3
  await prisma.run.create({
    data: {
      tenderId: tender3.id,
      pipelineName: 'phase1-mvp',
      status: RunStatus.RUNNING,
      startedAt: new Date(Date.now() - 1000 * 60 * 5), // 5 minutes ago
      logs: [
        { timestamp: new Date(Date.now() - 1000 * 60 * 5).toISOString(), level: 'info', step: 'prepare', message: 'Pipeline started' },
        { timestamp: new Date(Date.now() - 1000 * 60 * 4).toISOString(), level: 'info', step: 'prepare', message: 'Documents parsed successfully' },
        { timestamp: new Date(Date.now() - 1000 * 60 * 2).toISOString(), level: 'info', step: 'extract', message: 'Field extraction in progress...' },
      ]
    },
  })

  // Create audit logs
  await prisma.auditLog.createMany({
    data: [
      {
        actorId: analystUser.id,
        action: 'TENDER_CREATED',
        entity: 'Tender',
        entityId: tender1.id,
        diff: {
          before: null,
          after: { title: 'IT Infrastructure Modernization Project', status: 'DRAFT' }
        }
      },
      {
        actorId: reviewerUser.id,
        action: 'TENDER_APPROVED',
        entity: 'Tender',
        entityId: tender2.id,
        diff: {
          before: { status: 'READY_FOR_REVIEW' },
          after: { status: 'APPROVED' }
        }
      },
      {
        actorId: analystUser.id,
        action: 'PIPELINE_STARTED',
        entity: 'Run',
        entityId: run1.id,
        diff: {
          before: null,
          after: { pipelineName: 'phase1-mvp', status: 'RUNNING' }
        }
      },
    ],
  })

  console.log('✅ Database seeded successfully!')
  console.log('')
  console.log('📧 Demo users created:')
  console.log('   - Admin: admin@demo.com (ADMIN)')
  console.log('   - Reviewer: reviewer@demo.com (REVIEWER)')
  console.log('   - Analyst: analyst@demo.com (ANALYST)')
  console.log('')
  console.log('📊 Data summary:')
  console.log(`   - ${await prisma.tender.count()} tenders created`)
  console.log(`   - ${await prisma.document.count()} documents created`)
  console.log(`   - ${await prisma.template.count()} templates created`)
  console.log(`   - ${await prisma.pipeline.count()} pipelines created`)
  console.log(`   - ${await prisma.source.count()} sources created`)
  console.log(`   - ${await prisma.fieldExtraction.count()} field extractions created`)
  console.log(`   - ${await prisma.checklistItem.count()} checklist items created`)
  console.log(`   - ${await prisma.traceLink.count()} trace links created`)
  console.log('')
  console.log('🎯 Ready to test the application!')
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })