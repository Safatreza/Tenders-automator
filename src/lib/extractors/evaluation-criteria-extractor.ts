// Evaluation Criteria Extractor - Extract how submissions are evaluated
// Identifies scoring criteria, weights, and evaluation methodology

import { FieldExtractor, ExtractionResult, ExtractorContext, ExtractionUtils } from './index'

export class EvaluationCriteriaExtractor implements FieldExtractor {
  key = 'evaluationCriteria'
  name = 'Evaluation Criteria'
  description = 'Extracts evaluation criteria, scoring methodology, and selection criteria'

  async extract(context: ExtractorContext): Promise<ExtractionResult> {
    const { document } = context
    const content = document.content.toLowerCase()

    // Keywords and patterns for evaluation criteria identification
    const evaluationKeywords = [
      'evaluation criteria', 'evaluation', 'scoring', 'assessment',
      'selection criteria', 'award criteria', 'evaluation methodology',
      'scoring criteria', 'evaluation process', 'evaluation factors',
      'weighting', 'weights', 'points', 'scores', 'rating',
      'technical evaluation', 'commercial evaluation', 'price evaluation',
      'technical proposal', 'financial proposal', 'cost evaluation',
      'best value', 'lowest cost', 'technically acceptable',
      'qualification based selection', 'two-stage evaluation'
    ]

    const strongEvaluationPatterns = [
      /evaluation\s+criteria[:\s]/gi,
      /selection\s+criteria[:\s]/gi,
      /award\s+criteria[:\s]/gi,
      /scoring\s+(?:criteria|methodology)[:\s]/gi,
      /evaluation\s+(?:methodology|process)[:\s]/gi,
      /evaluation\s+factors[:\s]/gi,
      /weighting[:\s]/gi,
      /(?:technical|commercial|price)\s+evaluation[:\s]/gi,
    ]

    const scoringPatterns = [
      /(\d+)\s*%\s*(?:weight|weighting|points?)/gi,
      /(\d+)\s*points?\s*(?:out\s+of\s+(\d+))?/gi,
      /(?:weight|weighting)[:\s]*(\d+)\s*%/gi,
      /(\d+)\s*\/\s*(\d+)\s*points?/gi,
      /maximum\s+(?:of\s+)?(\d+)\s*points?/gi,
    ]

    const criteriaPatterns = [
      /technical\s+(?:proposal|evaluation|criteria|competence)/gi,
      /commercial\s+(?:proposal|evaluation|criteria)/gi,
      /price\s+(?:proposal|evaluation|criteria)/gi,
      /financial\s+(?:proposal|evaluation|criteria)/gi,
      /experience\s+(?:evaluation|criteria)/gi,
      /past\s+performance/gi,
      /methodology\s+(?:evaluation|criteria)/gi,
      /timeline\s+(?:evaluation|criteria)/gi,
    ]

    // Find all relevant patterns and trace links
    const allPatterns = [
      ...strongEvaluationPatterns,
      ...scoringPatterns,
      ...criteriaPatterns,
    ]

    const traceLinks = ExtractionUtils.findPatterns(
      document.content,
      allPatterns,
      document.id,
      document.pages
    )

    // Count matches for confidence calculation
    let matches = 0
    let strongMatches = 0

    for (const keyword of evaluationKeywords) {
      const regex = new RegExp(keyword.replace(/\s+/g, '\\s+'), 'gi')
      const keywordMatches = content.match(regex) || []
      matches += keywordMatches.length

      if (['evaluation criteria', 'scoring', 'selection criteria', 'evaluation'].includes(keyword)) {
        strongMatches += keywordMatches.length
      }
    }

    // Extract evaluation criteria and scoring
    const criteria = this.extractEvaluationCriteria(document.content)
    const scoring = this.extractScoringInformation(document.content)
    const methodology = this.extractEvaluationMethodology(document.content)

    // Calculate confidence
    const confidence = ExtractionUtils.calculateConfidence(
      matches,
      strongMatches,
      document.content.length
    )

    return {
      value: {
        criteria,
        scoring,
        methodology,
        summary: this.generateSummary(criteria, scoring, methodology),
        matchCount: matches,
      },
      confidence,
      traceLinks,
    }
  }

  private extractEvaluationCriteria(content: string): Array<{
    criterion: string
    weight?: number
    points?: number
    description?: string
    category?: string
  }> {
    const criteria: Array<{
      criterion: string
      weight?: number
      points?: number
      description?: string
      category?: string
    }> = []

    // Extract criteria from sections with headers
    const sectionPattern = /(?:evaluation\s+criteria|selection\s+criteria|award\s+criteria|scoring\s+criteria)[:\s]*\n?((?:[^\n]+\n?)*?)(?=\n\s*(?:section|chapter|\d+\.|[A-Z][A-Z\s]+:)|\n\s*$)/gim
    let match = sectionPattern.exec(content)
    if (match) {
      const sectionContent = match[1]

      // Extract individual criteria from lists
      const listItems = sectionContent.split(/\n\s*(?:[-•*]|\d+[\.\)])\s*/).filter(item => item.trim().length > 0)
      for (const item of listItems) {
        const cleanItem = item.trim()
        if (cleanItem.length > 10) {
          const criterion = this.parseCriterionItem(cleanItem)
          if (criterion) {
            criteria.push(criterion)
          }
        }
      }
    }

    // Extract criteria with specific patterns
    const criteriaPatterns = [
      // Technical criteria
      /technical\s+(?:proposal|evaluation|competence|capability)[:\s]*([^\n]+)/gi,
      // Commercial criteria
      /(?:commercial|price|financial)\s+(?:proposal|evaluation)[:\s]*([^\n]+)/gi,
      // Experience criteria
      /(?:experience|past\s+performance)[:\s]*([^\n]+)/gi,
      // Methodology criteria
      /methodology[:\s]*([^\n]+)/gi,
    ]

    for (const pattern of criteriaPatterns) {
      let criterionMatch
      while ((criterionMatch = pattern.exec(content)) !== null) {
        const criterion = this.parseCriterionItem(criterionMatch[0])
        if (criterion) {
          criteria.push(criterion)
        }
      }
    }

    // Extract criteria from tables (simplified table detection)
    const tablePattern = /(?:criterion|criteria|factor)\s*[||\t]\s*(?:weight|weighting|points?)\s*(?:\n[^\n]*[||\t][^\n]*)+/gi
    while ((match = tablePattern.exec(content)) !== null) {
      const tableContent = match[0]
      const rows = tableContent.split('\n').slice(1) // Skip header

      for (const row of rows) {
        const cells = row.split(/[||\t]/).map(cell => cell.trim())
        if (cells.length >= 2) {
          const criterion = this.parseCriterionItem(`${cells[0]} - ${cells[1]}`)
          if (criterion) {
            criteria.push(criterion)
          }
        }
      }
    }

    return criteria
  }

  private parseCriterionItem(item: string): {
    criterion: string
    weight?: number
    points?: number
    description?: string
    category?: string
  } | null {
    if (item.length < 10) return null

    const criterion: {
      criterion: string
      weight?: number
      points?: number
      description?: string
      category?: string
    } = {
      criterion: item,
    }

    // Extract weight percentage
    const weightMatch = item.match(/(\d+)\s*%/)
    if (weightMatch) {
      criterion.weight = parseInt(weightMatch[1])
    }

    // Extract points
    const pointsMatch = item.match(/(\d+)\s*points?/) || item.match(/(\d+)\s*\/\s*\d+/)
    if (pointsMatch) {
      criterion.points = parseInt(pointsMatch[1])
    }

    // Determine category
    const itemLower = item.toLowerCase()
    if (itemLower.includes('technical') || itemLower.includes('methodology') || itemLower.includes('approach')) {
      criterion.category = 'technical'
    } else if (itemLower.includes('commercial') || itemLower.includes('price') || itemLower.includes('cost') || itemLower.includes('financial')) {
      criterion.category = 'commercial'
    } else if (itemLower.includes('experience') || itemLower.includes('past performance') || itemLower.includes('track record')) {
      criterion.category = 'experience'
    } else if (itemLower.includes('timeline') || itemLower.includes('schedule') || itemLower.includes('delivery')) {
      criterion.category = 'schedule'
    } else {
      criterion.category = 'general'
    }

    return criterion
  }

  private extractScoringInformation(content: string): {
    totalPoints?: number
    weightDistribution?: {[category: string]: number}
    scoringMethod?: string
  } {
    const scoring: {
      totalPoints?: number
      weightDistribution?: {[category: string]: number}
      scoringMethod?: string
    } = {}

    // Extract total points
    const totalPointsMatch = content.match(/total\s+(?:of\s+)?(\d+)\s*points?/i) ||
                           content.match(/maximum\s+(?:of\s+)?(\d+)\s*points?/i) ||
                           content.match(/(\d+)\s*points?\s+total/i)
    if (totalPointsMatch) {
      scoring.totalPoints = parseInt(totalPointsMatch[1])
    }

    // Extract weight distribution
    const weightMatches = content.matchAll(/(?:technical|commercial|price|financial|experience)[:\s]*(\d+)\s*%/gi)
    const weights: {[key: string]: number} = {}
    for (const match of weightMatches) {
      const category = match[0].split(':')[0].trim().toLowerCase()
      weights[category] = parseInt(match[1])
    }
    if (Object.keys(weights).length > 0) {
      scoring.weightDistribution = weights
    }

    // Determine scoring method
    const methodKeywords = [
      'lowest cost',
      'best value',
      'technically acceptable',
      'qualification based selection',
      'two-stage evaluation',
      'single stage',
      'multi-stage'
    ]

    for (const method of methodKeywords) {
      if (content.toLowerCase().includes(method)) {
        scoring.scoringMethod = method
        break
      }
    }

    return scoring
  }

  private extractEvaluationMethodology(content: string): Array<{
    stage: string
    description: string
    order?: number
  }> {
    const methodology: Array<{
      stage: string
      description: string
      order?: number
    }> = []

    // Extract evaluation stages/phases
    const stagePatterns = [
      /(?:stage|phase|step)\s+(\d+)[:\s]*([^\n]+)/gi,
      /(?:first|second|third|initial|final)\s+(?:stage|phase|step)[:\s]*([^\n]+)/gi,
      /technical\s+evaluation[:\s]*([^\n]+)/gi,
      /commercial\s+evaluation[:\s]*([^\n]+)/gi,
      /price\s+evaluation[:\s]*([^\n]+)/gi,
    ]

    for (const pattern of stagePatterns) {
      let match
      while ((match = pattern.exec(content)) !== null) {
        const stageInfo: {
          stage: string
          description: string
          order?: number
        } = {
          stage: match[0].split(':')[0].trim(),
          description: match[match.length - 1].trim(),
        }

        const orderMatch = match[1] && match[1].match(/\d+/)
        if (orderMatch) {
          stageInfo.order = parseInt(orderMatch[0])
        }

        methodology.push(stageInfo)
      }
    }

    return methodology
  }

  private generateSummary(
    criteria: Array<{criterion: string, weight?: number, points?: number, category?: string}>,
    scoring: {totalPoints?: number, weightDistribution?: {[category: string]: number}, scoringMethod?: string},
    methodology: Array<{stage: string, description: string, order?: number}>
  ): string {
    const summaryParts: string[] = []

    // Scoring method
    if (scoring.scoringMethod) {
      summaryParts.push(`Evaluation Method: ${scoring.scoringMethod}`)
    }

    // Weight distribution
    if (scoring.weightDistribution && Object.keys(scoring.weightDistribution).length > 0) {
      const weights = Object.entries(scoring.weightDistribution)
        .map(([category, weight]) => `${category}: ${weight}%`)
        .join(', ')
      summaryParts.push(`Weight Distribution: ${weights}`)
    }

    // Total points
    if (scoring.totalPoints) {
      summaryParts.push(`Total Points: ${scoring.totalPoints}`)
    }

    // Key criteria by category
    const categorizedCriteria = criteria.reduce((acc, criterion) => {
      const category = criterion.category || 'general'
      if (!acc[category]) acc[category] = []
      acc[category].push(criterion)
      return acc
    }, {} as {[key: string]: typeof criteria})

    for (const [category, catCriteria] of Object.entries(categorizedCriteria)) {
      if (catCriteria.length > 0) {
        const criteriaList = catCriteria.slice(0, 2)
          .map(c => `${c.criterion}${c.weight ? ` (${c.weight}%)` : ''}${c.points ? ` (${c.points} pts)` : ''}`)
          .join('; ')
        summaryParts.push(`${category.charAt(0).toUpperCase() + category.slice(1)}: ${criteriaList}`)
      }
    }

    // Methodology stages
    if (methodology.length > 0) {
      const stages = methodology
        .sort((a, b) => (a.order || 0) - (b.order || 0))
        .slice(0, 3)
        .map(stage => stage.stage)
        .join(' → ')
      summaryParts.push(`Evaluation Process: ${stages}`)
    }

    return summaryParts.join('\n\n') || 'Evaluation criteria found but require manual review.'
  }
}