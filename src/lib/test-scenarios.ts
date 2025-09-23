// Comprehensive Test Scenarios for Tender Automator
// Production-ready test data and scenarios for full system validation

export interface TestScenario {
  id: string
  name: string
  description: string
  category: 'extraction' | 'pipeline' | 'approval' | 'integration' | 'edge-case'
  priority: 'high' | 'medium' | 'low'
  expectedOutcome: string
  testSteps: string[]
  validationCriteria: string[]
  sampleData?: any
}

export const TEST_SCENARIOS: TestScenario[] = [
  {
    id: 'extract_001',
    name: 'Basic Field Extraction - Government RFP',
    description: 'Test extraction of all 5 core fields from a typical government RFP document',
    category: 'extraction',
    priority: 'high',
    expectedOutcome: 'All fields extracted with confidence > 0.6, proper citations generated',
    testSteps: [
      'Upload sample government RFP PDF',
      'Trigger extraction pipeline',
      'Validate all 5 extractors run successfully',
      'Check confidence scores and trace links',
      'Verify citation page references are accurate'
    ],
    validationCriteria: [
      'scope field extracted with confidence > 0.6',
      'eligibility field extracted with confidence > 0.6',
      'evaluationCriteria field extracted with confidence > 0.6',
      'submissionMechanics field extracted with confidence > 0.6',
      'deadlineSubmission field extracted with confidence > 0.6',
      'At least 3 trace links per field',
      'Page references are within document bounds',
      'Snippets contain relevant text excerpts'
    ],
    sampleData: {
      documentType: 'government_rfp',
      filename: 'sample_government_rfp.pdf',
      expectedFields: ['scope', 'eligibility', 'evaluationCriteria', 'submissionMechanics', 'deadlineSubmission']
    }
  },
  {
    id: 'extract_002',
    name: 'Low Quality Document Extraction',
    description: 'Test extraction from poorly scanned or low-quality documents',
    category: 'extraction',
    priority: 'high',
    expectedOutcome: 'System gracefully handles low quality, provides appropriate confidence scores',
    testSteps: [
      'Upload low-quality scanned PDF with OCR errors',
      'Run extraction pipeline',
      'Check that system returns appropriate low confidence scores',
      'Validate error handling and fallback mechanisms',
      'Ensure partial extractions are properly flagged'
    ],
    validationCriteria: [
      'Extraction completes without errors',
      'Low confidence scores (< 0.5) for unclear fields',
      'Warning messages generated for low quality content',
      'Partial results properly marked as incomplete',
      'System doesn\'t crash on OCR errors'
    ]
  },
  {
    id: 'extract_003',
    name: 'Multi-Document Tender Package',
    description: 'Test extraction from tender with multiple supporting documents',
    category: 'extraction',
    priority: 'medium',
    expectedOutcome: 'Information correctly aggregated across multiple documents with proper citations',
    testSteps: [
      'Upload tender package with main RFP + technical specs + terms & conditions',
      'Run extraction pipeline',
      'Validate information is pulled from appropriate documents',
      'Check cross-document citations are properly linked',
      'Verify no duplicate or conflicting information'
    ],
    validationCriteria: [
      'Information sourced from most relevant document',
      'Citations reference correct document and page',
      'No duplicate extractions across documents',
      'Conflicting information properly flagged',
      'Technical details sourced from technical documents'
    ]
  },
  {
    id: 'pipeline_001',
    name: 'End-to-End Pipeline Execution',
    description: 'Complete pipeline execution from document upload to approval gate',
    category: 'pipeline',
    priority: 'high',
    expectedOutcome: 'Full pipeline completes successfully, tender reaches READY_FOR_REVIEW status',
    testSteps: [
      'Create new tender with documents',
      'Execute phase1-mvp pipeline',
      'Monitor each step completion',
      'Validate step outputs and data persistence',
      'Confirm final status and approval readiness'
    ],
    validationCriteria: [
      'All pipeline steps complete successfully',
      'Field extractions persisted to database',
      'Summary blocks generated with proper markdown',
      'Checklist items created with appropriate status',
      'Tender status updated to READY_FOR_REVIEW',
      'Audit logs capture all pipeline events',
      'Run record shows COMPLETED status'
    ]
  },
  {
    id: 'pipeline_002',
    name: 'Pipeline Failure Recovery',
    description: 'Test pipeline behavior when extraction steps fail',
    category: 'pipeline',
    priority: 'high',
    expectedOutcome: 'Pipeline fails gracefully, error details logged, system remains stable',
    testSteps: [
      'Upload document that triggers extraction failure',
      'Start pipeline execution',
      'Monitor failure at extraction step',
      'Validate error handling and logging',
      'Confirm system can recover for retry'
    ],
    validationCriteria: [
      'Pipeline stops at failed step',
      'Detailed error messages in run logs',
      'Partial results preserved where possible',
      'System remains responsive after failure',
      'Failed run marked with appropriate status',
      'Audit trail includes failure events'
    ]
  },
  {
    id: 'pipeline_003',
    name: 'Custom Pipeline Configuration',
    description: 'Test creation and execution of custom pipeline configurations',
    category: 'pipeline',
    priority: 'medium',
    expectedOutcome: 'Custom pipeline executes successfully with modified steps and parameters',
    testSteps: [
      'Create custom pipeline YAML configuration',
      'Upload and validate pipeline config',
      'Execute custom pipeline on test tender',
      'Verify custom steps and parameters applied',
      'Compare outputs with default pipeline'
    ],
    validationCriteria: [
      'Custom pipeline configuration validates successfully',
      'Modified extraction parameters applied correctly',
      'Custom template configurations used',
      'Output format matches custom specifications',
      'Performance within acceptable bounds'
    ]
  },
  {
    id: 'approval_001',
    name: 'Reviewer Approval Workflow',
    description: 'Test complete approval workflow from submission to approval',
    category: 'approval',
    priority: 'high',
    expectedOutcome: 'Reviewer can successfully approve tender with proper audit trail',
    testSteps: [
      'Complete tender processing to READY_FOR_REVIEW status',
      'Login as reviewer user',
      'Review tender summary and checklist',
      'Add approval comments',
      'Submit approval decision',
      'Validate status change and audit logging'
    ],
    validationCriteria: [
      'Tender status changes to APPROVED',
      'Approval record created with reviewer details',
      'Approval comments properly stored',
      'Audit log captures approval action',
      'Email notifications sent (if configured)',
      'Approved tender accessible to appropriate users'
    ]
  },
  {
    id: 'approval_002',
    name: 'Rejection with Change Requests',
    description: 'Test rejection workflow with specific change requests',
    category: 'approval',
    priority: 'high',
    expectedOutcome: 'Tender rejected with detailed feedback, returned to analyst',
    testSteps: [
      'Submit tender for review',
      'Login as reviewer',
      'Reject tender with specific change requests',
      'Add detailed comments on required changes',
      'Submit rejection',
      'Validate proper status change and notifications'
    ],
    validationCriteria: [
      'Tender status changes to CHANGES_REQUESTED',
      'Detailed rejection comments stored',
      'Change requests properly categorized',
      'Original analyst notified of changes needed',
      'Tender remains editable for corrections',
      'Rejection audit trail complete'
    ]
  },
  {
    id: 'integration_001',
    name: 'Document Upload and Processing',
    description: 'Test complete document upload, storage, and processing workflow',
    category: 'integration',
    priority: 'high',
    expectedOutcome: 'Documents successfully uploaded, stored, and processed with proper metadata',
    testSteps: [
      'Upload PDF document via web interface',
      'Verify file validation (size, type, etc.)',
      'Confirm storage in Vercel Blob',
      'Validate document metadata extraction',
      'Test document viewing and download'
    ],
    validationCriteria: [
      'File uploads successfully to Vercel Blob',
      'Document record created with correct metadata',
      'File hash calculated and stored',
      'Page count extracted correctly',
      'Document viewable in interface',
      'Download functionality works',
      'File size within limits'
    ]
  },
  {
    id: 'integration_002',
    name: 'Role-Based Access Control',
    description: 'Test that users can only access appropriate functions based on their role',
    category: 'integration',
    priority: 'high',
    expectedOutcome: 'Access controls properly enforced for all user roles',
    testSteps: [
      'Test ANALYST role permissions (create, edit tenders)',
      'Test REVIEWER role permissions (approve, reject)',
      'Test ADMIN role permissions (full access)',
      'Validate unauthorized access attempts blocked',
      'Test role changes and permission updates'
    ],
    validationCriteria: [
      'ANALYST can create and edit own tenders',
      'ANALYST cannot approve tenders',
      'REVIEWER can approve/reject but not create',
      'ADMIN has full system access',
      'Unauthorized actions return proper error codes',
      'Role changes take effect immediately'
    ]
  },
  {
    id: 'integration_003',
    name: 'Template System Integration',
    description: 'Test template creation, modification, and application in pipelines',
    category: 'integration',
    priority: 'medium',
    expectedOutcome: 'Custom templates successfully created and applied to generate outputs',
    testSteps: [
      'Create custom summary template',
      'Create custom checklist template',
      'Apply templates in pipeline configuration',
      'Execute pipeline with custom templates',
      'Validate output formatting and content'
    ],
    validationCriteria: [
      'Custom templates save successfully',
      'Template validation catches syntax errors',
      'Custom templates applied in pipeline',
      'Generated summaries use custom format',
      'Checklist items follow custom logic',
      'Template versioning works correctly'
    ]
  },
  {
    id: 'edge_001',
    name: 'Large Document Processing',
    description: 'Test system behavior with very large documents (100+ pages)',
    category: 'edge-case',
    priority: 'medium',
    expectedOutcome: 'System handles large documents without timeouts or memory issues',
    testSteps: [
      'Upload 100+ page tender document',
      'Monitor system resource usage',
      'Execute full extraction pipeline',
      'Validate processing time within limits',
      'Check extraction quality for large documents'
    ],
    validationCriteria: [
      'Document uploads successfully despite size',
      'Processing completes within timeout limits',
      'Memory usage remains within bounds',
      'Extraction quality maintained across document',
      'Page references accurate for large documents',
      'Performance degradation minimal'
    ]
  },
  {
    id: 'edge_002',
    name: 'Malformed Document Handling',
    description: 'Test system behavior with corrupted or malformed documents',
    category: 'edge-case',
    priority: 'medium',
    expectedOutcome: 'System gracefully handles malformed documents without crashing',
    testSteps: [
      'Upload corrupted PDF file',
      'Upload non-PDF file with PDF extension',
      'Upload empty document',
      'Trigger processing on malformed files',
      'Validate error handling and user feedback'
    ],
    validationCriteria: [
      'File validation catches malformed documents',
      'Appropriate error messages displayed',
      'System doesn\'t crash on corrupted files',
      'Processing gracefully skips unreadable content',
      'User receives clear feedback on issues',
      'Audit logs capture file processing errors'
    ]
  },
  {
    id: 'edge_003',
    name: 'Concurrent Pipeline Execution',
    description: 'Test system behavior with multiple pipelines running simultaneously',
    category: 'edge-case',
    priority: 'low',
    expectedOutcome: 'Multiple pipelines execute concurrently without interference',
    testSteps: [
      'Start pipeline for tender A',
      'Immediately start pipeline for tender B',
      'Monitor both pipelines progress',
      'Validate no cross-contamination of results',
      'Confirm both complete successfully'
    ],
    validationCriteria: [
      'Both pipelines complete successfully',
      'No cross-contamination between tender results',
      'Database consistency maintained',
      'Resource usage reasonable for concurrent execution',
      'Audit logs properly separate pipeline events',
      'Performance acceptable for concurrent loads'
    ]
  },
  {
    id: 'edge_004',
    name: 'Database Connection Failure Recovery',
    description: 'Test system behavior when database becomes temporarily unavailable',
    category: 'edge-case',
    priority: 'medium',
    expectedOutcome: 'System handles database outages gracefully with appropriate fallbacks',
    testSteps: [
      'Simulate database connection failure',
      'Attempt various system operations',
      'Monitor error handling and user feedback',
      'Restore database connection',
      'Validate system recovery and data integrity'
    ],
    validationCriteria: [
      'User-friendly error messages during outage',
      'No data corruption occurs',
      'System recovers automatically when DB restored',
      'In-progress operations resume or fail safely',
      'Critical operations can be retried',
      'Audit logging continues where possible'
    ]
  }
]

export const PERFORMANCE_BENCHMARKS = {
  documentUpload: {
    maxTime: 30000, // 30 seconds for large documents
    maxSize: 52428800, // 50MB
  },
  extraction: {
    maxTimePerPage: 2000, // 2 seconds per page
    maxConcurrentExtractions: 5,
    minConfidenceThreshold: 0.3,
  },
  pipelineExecution: {
    maxTime: 600000, // 10 minutes for complete pipeline
    maxSteps: 10,
    maxRetries: 3,
  },
  templateGeneration: {
    maxTime: 5000, // 5 seconds
    maxBlockSize: 50000, // 50KB per summary block
  },
  auditLogging: {
    maxBatchSize: 1000,
    maxRetentionDays: 365,
  }
}

export const TEST_DATA = {
  users: {
    admin: { email: 'admin@demo.com', role: 'ADMIN' },
    reviewer: { email: 'reviewer@demo.com', role: 'REVIEWER' },
    analyst: { email: 'analyst@demo.com', role: 'ANALYST' }
  },
  sampleTenders: [
    {
      title: 'Government IT Infrastructure Upgrade',
      agency: 'Department of Technology',
      type: 'government',
      complexity: 'high',
      expectedExtractions: 5,
      expectedConfidence: 0.8
    },
    {
      title: 'Healthcare System Integration',
      agency: 'Ministry of Health',
      type: 'healthcare',
      complexity: 'medium',
      expectedExtractions: 4,
      expectedConfidence: 0.7
    },
    {
      title: 'Road Infrastructure Development',
      agency: 'Department of Transportation',
      type: 'infrastructure',
      complexity: 'high',
      expectedExtractions: 5,
      expectedConfidence: 0.75
    }
  ],
  sampleDocuments: [
    {
      filename: 'sample_rfp_government.pdf',
      type: 'application/pdf',
      pages: 25,
      quality: 'high',
      language: 'english'
    },
    {
      filename: 'technical_specifications.docx',
      type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      pages: 12,
      quality: 'high',
      language: 'english'
    },
    {
      filename: 'low_quality_scan.pdf',
      type: 'application/pdf',
      pages: 30,
      quality: 'low',
      language: 'english'
    }
  ]
}