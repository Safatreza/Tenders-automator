#!/usr/bin/env tsx

// System Validation Script - Tests core functionality without database
// Validates that all major components are properly configured

import { existsSync, readFileSync } from 'fs'
import { join } from 'path'

interface ValidationResult {
  category: string
  test: string
  passed: boolean
  details: string
}

class SystemValidator {
  private results: ValidationResult[] = []

  async validateAll(): Promise<void> {
    console.log('🔍 Validating Tender Automator System')
    console.log('==========================================')
    console.log('')

    await this.validateProjectStructure()
    await this.validateDependencies()
    await this.validateConfiguration()
    await this.validateComponents()
    await this.validateTemplates()
    await this.validatePipeline()
    await this.validateExtractors()

    this.generateReport()
  }

  private async validateProjectStructure(): Promise<void> {
    console.log('📁 Validating Project Structure...')

    const requiredFiles = [
      'package.json',
      'tsconfig.json',
      'next.config.ts',
      'tailwind.config.ts',
      'components.json',
      'prisma/schema.prisma',
      'src/app/layout.tsx',
      'src/app/page.tsx',
      'src/lib/prisma.ts'
    ]

    for (const file of requiredFiles) {
      const exists = existsSync(join(process.cwd(), file))
      this.results.push({
        category: 'Structure',
        test: `File exists: ${file}`,
        passed: exists,
        details: exists ? 'Found' : 'Missing'
      })
    }

    // Check key directories
    const requiredDirs = [
      'src/app',
      'src/lib',
      'src/components',
      'prisma',
      'public'
    ]

    for (const dir of requiredDirs) {
      const exists = existsSync(join(process.cwd(), dir))
      this.results.push({
        category: 'Structure',
        test: `Directory exists: ${dir}`,
        passed: exists,
        details: exists ? 'Found' : 'Missing'
      })
    }
  }

  private async validateDependencies(): Promise<void> {
    console.log('📦 Validating Dependencies...')

    try {
      const packageJson = JSON.parse(readFileSync(join(process.cwd(), 'package.json'), 'utf-8'))
      const deps = { ...packageJson.dependencies, ...packageJson.devDependencies }

      const requiredDeps = [
        '@prisma/client',
        '@vercel/blob',
        'next',
        'react',
        'typescript',
        'tailwindcss',
        'handlebars',
        'yaml'
      ]

      for (const dep of requiredDeps) {
        const exists = deps[dep] !== undefined
        this.results.push({
          category: 'Dependencies',
          test: `Package installed: ${dep}`,
          passed: exists,
          details: exists ? `v${deps[dep]}` : 'Missing'
        })
      }

      // Check for old AWS dependencies (should be removed)
      const removedDeps = ['@aws-sdk/client-s3', '@aws-sdk/s3-request-presigner']
      for (const dep of removedDeps) {
        const exists = deps[dep] !== undefined
        this.results.push({
          category: 'Dependencies',
          test: `AWS dependency removed: ${dep}`,
          passed: !exists,
          details: exists ? 'Still present - should be removed' : 'Properly removed'
        })
      }

    } catch (error) {
      this.results.push({
        category: 'Dependencies',
        test: 'package.json parsing',
        passed: false,
        details: 'Could not read package.json'
      })
    }
  }

  private async validateConfiguration(): Promise<void> {
    console.log('⚙️  Validating Configuration...')

    // Check environment example file
    const envExampleExists = existsSync(join(process.cwd(), '.env.example'))
    this.results.push({
      category: 'Configuration',
      test: 'Environment example file',
      passed: envExampleExists,
      details: envExampleExists ? 'Found .env.example' : 'Missing .env.example'
    })

    if (envExampleExists) {
      const envContent = readFileSync(join(process.cwd(), '.env.example'), 'utf-8')

      // Check for Vercel Blob config
      const hasVercelBlob = envContent.includes('BLOB_READ_WRITE_TOKEN')
      this.results.push({
        category: 'Configuration',
        test: 'Vercel Blob configuration',
        passed: hasVercelBlob,
        details: hasVercelBlob ? 'Configured' : 'Missing BLOB_READ_WRITE_TOKEN'
      })

      // Check for removed S3 config
      const hasS3Config = envContent.includes('AWS_ACCESS_KEY') || envContent.includes('S3_BUCKET')
      this.results.push({
        category: 'Configuration',
        test: 'AWS S3 config removed',
        passed: !hasS3Config,
        details: hasS3Config ? 'Still has S3 config' : 'S3 config properly removed'
      })

      // Check for NextAuth config
      const hasNextAuth = envContent.includes('NEXTAUTH_URL') && envContent.includes('NEXTAUTH_SECRET')
      this.results.push({
        category: 'Configuration',
        test: 'NextAuth configuration',
        passed: hasNextAuth,
        details: hasNextAuth ? 'Configured' : 'Missing NextAuth config'
      })
    }

    // Check Vercel deployment config
    const vercelConfigExists = existsSync(join(process.cwd(), 'vercel.json'))
    this.results.push({
      category: 'Configuration',
      test: 'Vercel deployment config',
      passed: vercelConfigExists,
      details: vercelConfigExists ? 'Found vercel.json' : 'Missing vercel.json'
    })
  }

  private async validateComponents(): Promise<void> {
    console.log('🧱 Validating Components...')

    try {
      // Test core components exist
      const coreComponents = [
        'src/components/ui/button.tsx',
        'src/components/ui/card.tsx',
        'src/components/ui/input.tsx',
        'src/components/ui/progress.tsx',
        'src/components/ui/tabs.tsx',
        'src/components/ui/alert.tsx'
      ]

      for (const component of coreComponents) {
        const exists = existsSync(join(process.cwd(), component))
        this.results.push({
          category: 'Components',
          test: `UI Component: ${component.split('/').pop()}`,
          passed: exists,
          details: exists ? 'Found' : 'Missing'
        })
      }

      // Test custom components
      const customComponents = [
        'src/components/TraceChip.tsx',
        'src/components/FileUpload.tsx',
        'src/components/TenderCard.tsx'
      ]

      for (const component of customComponents) {
        const exists = existsSync(join(process.cwd(), component))
        this.results.push({
          category: 'Components',
          test: `Custom Component: ${component.split('/').pop()}`,
          passed: exists,
          details: exists ? 'Found' : 'Missing'
        })
      }

    } catch (error) {
      this.results.push({
        category: 'Components',
        test: 'Component validation',
        passed: false,
        details: 'Error validating components'
      })
    }
  }

  private async validateTemplates(): Promise<void> {
    console.log('📄 Validating Templates...')

    try {
      // Check template engine exists
      const templateEngine = await import('../src/lib/templates')
      this.results.push({
        category: 'Templates',
        test: 'Template engine module',
        passed: !!templateEngine,
        details: 'Template engine imports successfully'
      })

      // Check template constants
      const templateConstants = await import('../src/lib/templates/constants')
      const hasDefaultTemplate = !!templateConstants.DEFAULT_SUMMARY_TEMPLATE
      const hasDefaultChecklist = !!templateConstants.DEFAULT_CHECKLIST_SCHEMA

      this.results.push({
        category: 'Templates',
        test: 'Default summary template',
        passed: hasDefaultTemplate,
        details: hasDefaultTemplate ? 'Found' : 'Missing'
      })

      this.results.push({
        category: 'Templates',
        test: 'Default checklist schema',
        passed: hasDefaultChecklist,
        details: hasDefaultChecklist ? 'Found' : 'Missing'
      })

    } catch (error) {
      this.results.push({
        category: 'Templates',
        test: 'Template system import',
        passed: false,
        details: `Import error: ${error instanceof Error ? error.message : 'Unknown'}`
      })
    }
  }

  private async validatePipeline(): Promise<void> {
    console.log('⚡ Validating Pipeline System...')

    try {
      // Check pipeline engine
      const pipelineModule = await import('../src/lib/pipeline')
      const hasPipelineEngine = !!(pipelineModule.default || pipelineModule.pipelineEngine)

      this.results.push({
        category: 'Pipeline',
        test: 'Pipeline engine import',
        passed: hasPipelineEngine,
        details: hasPipelineEngine ? 'Successfully imported' : 'Import failed'
      })

      if (hasPipelineEngine) {
        const engine = pipelineModule.default || pipelineModule.pipelineEngine
        const hasExecuteMethod = typeof engine.executePipeline === 'function'
        const hasLoadMethod = typeof engine.loadPipelineConfig === 'function'

        this.results.push({
          category: 'Pipeline',
          test: 'Execute pipeline method',
          passed: hasExecuteMethod,
          details: hasExecuteMethod ? 'Method exists' : 'Missing method'
        })

        this.results.push({
          category: 'Pipeline',
          test: 'Load config method',
          passed: hasLoadMethod,
          details: hasLoadMethod ? 'Method exists' : 'Missing method'
        })
      }

      // Check step executors
      const stepExecutors = ['PrepareStepExecutor', 'ExtractStepExecutor', 'TemplateStepExecutor', 'ValidateStepExecutor', 'GateStepExecutor']
      for (const executor of stepExecutors) {
        const hasExecutor = pipelineModule[executor] !== undefined
        this.results.push({
          category: 'Pipeline',
          test: `Step executor: ${executor}`,
          passed: hasExecutor,
          details: hasExecutor ? 'Found' : 'Missing'
        })
      }

    } catch (error) {
      this.results.push({
        category: 'Pipeline',
        test: 'Pipeline system import',
        passed: false,
        details: `Import error: ${error instanceof Error ? error.message : 'Unknown'}`
      })
    }
  }

  private async validateExtractors(): Promise<void> {
    console.log('🔍 Validating Field Extractors...')

    try {
      // Check extractors module
      const extractorsModule = await import('../src/lib/extractors')
      const extractors = extractorsModule.default || extractorsModule.FIELD_EXTRACTORS
      const hasFieldExtractors = Array.isArray(extractors)

      this.results.push({
        category: 'Extractors',
        test: 'Field extractors array',
        passed: hasFieldExtractors,
        details: hasFieldExtractors ? `Found ${extractors.length} extractors` : 'Missing or invalid'
      })

      if (hasFieldExtractors) {
        const requiredExtractors = ['scope', 'eligibility', 'evaluationCriteria', 'submissionMechanics', 'deadlineSubmission']
        // extractors already defined above

        for (const extractorKey of requiredExtractors) {
          const extractor = extractors.find((e: any) => e.key === extractorKey)
          this.results.push({
            category: 'Extractors',
            test: `Extractor: ${extractorKey}`,
            passed: !!extractor,
            details: extractor ? 'Found' : 'Missing'
          })

          // Check extractor has required methods
          if (extractor && typeof extractor.extract === 'function') {
            this.results.push({
              category: 'Extractors',
              test: `${extractorKey} extract method`,
              passed: true,
              details: 'Extract method exists'
            })
          }
        }
      }

    } catch (error) {
      this.results.push({
        category: 'Extractors',
        test: 'Extractors system import',
        passed: false,
        details: `Import error: ${error instanceof Error ? error.message : 'Unknown'}`
      })
    }
  }

  private generateReport(): void {
    console.log('')
    console.log('📊 VALIDATION RESULTS')
    console.log('=====================')

    const categories = [...new Set(this.results.map(r => r.category))]
    let totalPassed = 0
    let totalTests = this.results.length

    for (const category of categories) {
      const categoryResults = this.results.filter(r => r.category === category)
      const categoryPassed = categoryResults.filter(r => r.passed).length

      console.log('')
      console.log(`${category.toUpperCase()}:`)
      console.log(`  Passed: ${categoryPassed}/${categoryResults.length}`)

      categoryResults.forEach(result => {
        const status = result.passed ? '✅' : '❌'
        console.log(`    ${status} ${result.test}: ${result.details}`)
      })

      totalPassed += categoryPassed
    }

    console.log('')
    console.log('SUMMARY:')
    console.log(`  Total Tests: ${totalTests}`)
    console.log(`  Passed: ${totalPassed}`)
    console.log(`  Failed: ${totalTests - totalPassed}`)
    console.log(`  Success Rate: ${((totalPassed / totalTests) * 100).toFixed(1)}%`)

    const criticalFailures = this.results.filter(r =>
      !r.passed && (
        r.test.includes('package.json') ||
        r.test.includes('schema.prisma') ||
        r.test.includes('Template engine') ||
        r.test.includes('Pipeline engine') ||
        r.test.includes('Field extractors')
      )
    )

    if (criticalFailures.length > 0) {
      console.log('')
      console.log('🚨 CRITICAL ISSUES:')
      criticalFailures.forEach(failure => {
        console.log(`  - ${failure.category}: ${failure.test}`)
      })
    }

    console.log('')
    if (totalPassed === totalTests) {
      console.log('🎉 SYSTEM VALIDATION PASSED - Ready for deployment!')
    } else if (criticalFailures.length === 0) {
      console.log('⚠️  Some non-critical tests failed, but system should be functional')
    } else {
      console.log('❌ Critical issues found - system may not function properly')
    }
  }
}

// Run validation if called directly
if (require.main === module) {
  const validator = new SystemValidator()
  validator.validateAll()
    .then(() => {
      console.log('✅ Validation completed')
    })
    .catch((error) => {
      console.error('❌ Validation failed:', error)
      process.exit(1)
    })
}

export { SystemValidator }