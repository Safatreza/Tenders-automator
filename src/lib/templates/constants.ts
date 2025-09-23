// Template Constants for Seeding
// Default templates used in the seeding process

export const DEFAULT_SUMMARY_TEMPLATE = `# Tender Summary

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

export const DEFAULT_CHECKLIST_SCHEMA = {
  type: 'checklist',
  version: '1.0',
  items: [
    {
      key: 'project-scope-clear',
      label: 'Project scope is clearly defined',
      condition: 'extractions.scope && extractions.scope.confidence > 0.5',
      traceLinks: 'extractions.scope.traceLinks'
    },
    {
      key: 'eligibility-requirements',
      label: 'Eligibility requirements are specified',
      condition: 'extractions.eligibility && extractions.eligibility.confidence > 0.5',
      traceLinks: 'extractions.eligibility.traceLinks'
    },
    {
      key: 'evaluation-criteria-defined',
      label: 'Evaluation criteria are defined',
      condition: 'extractions.evaluationCriteria && extractions.evaluationCriteria.confidence > 0.5',
      traceLinks: 'extractions.evaluationCriteria.traceLinks'
    },
    {
      key: 'submission-format-specified',
      label: 'Submission format is specified',
      condition: 'extractions.submissionMechanics && extractions.submissionMechanics.confidence > 0.5',
      traceLinks: 'extractions.submissionMechanics.traceLinks'
    },
    {
      key: 'deadline-identified',
      label: 'Submission deadline is identified',
      condition: 'extractions.deadlineSubmission && extractions.deadlineSubmission.confidence > 0.5',
      traceLinks: 'extractions.deadlineSubmission.traceLinks'
    },
    {
      key: 'deadline-future',
      label: 'Submission deadline is in the future',
      condition: 'extractions.deadlineSubmission && extractions.deadlineSubmission.value.primaryDeadline && extractions.deadlineSubmission.value.primaryDeadline.isFuture',
      traceLinks: 'extractions.deadlineSubmission.traceLinks'
    },
    {
      key: 'high-confidence-extractions',
      label: 'All key fields extracted with high confidence',
      condition: 'Object.values(extractions).every(e => e.confidence > 0.7)',
      traceLinks: '[]'
    }
  ]
}