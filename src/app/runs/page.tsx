'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { StatusBadge } from '@/components/tender/status-badge'
import {
  Play,
  Pause,
  Clock,
  CheckCircle,
  XCircle,
  RefreshCw,
  Eye,
  FileText,
  Filter,
  Calendar
} from 'lucide-react'
import { format, formatDistanceToNow } from 'date-fns'

interface Run {
  id: string
  tenderId: string
  tenderTitle: string
  pipelineName: string
  status: 'PENDING' | 'RUNNING' | 'COMPLETED' | 'FAILED' | 'CANCELLED'
  startedAt: Date
  finishedAt?: Date
  progress?: number
  currentStep?: string
  errorMessage?: string
  logs: Array<{
    timestamp: Date
    level: 'INFO' | 'WARN' | 'ERROR'
    message: string
    step?: string
  }>
}

export default function RunsPage() {
  const { data: session } = useSession()
  const router = useRouter()
  const [runs, setRuns] = useState<Run[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<'all' | 'active' | 'completed' | 'failed'>('all')

  useEffect(() => {
    fetchRuns()
    // Set up polling for active runs
    const interval = setInterval(() => {
      if (runs.some(run => ['PENDING', 'RUNNING'].includes(run.status))) {
        fetchRuns()
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const fetchRuns = async () => {
    try {
      const response = await fetch('/api/runs')
      if (response.ok) {
        const data = await response.json()
        setRuns(data.data)
      } else {
        // Demo data for testing
        setRuns([
          {
            id: 'run-1',
            tenderId: 'tender-1',
            tenderTitle: 'IT Infrastructure Modernization Project',
            pipelineName: 'phase1-mvp',
            status: 'RUNNING',
            startedAt: new Date(Date.now() - 1000 * 60 * 5), // 5 minutes ago
            progress: 65,
            currentStep: 'field-extraction',
            logs: [
              {
                timestamp: new Date(Date.now() - 1000 * 60 * 5),
                level: 'INFO',
                message: 'Pipeline started',
                step: 'init'
              },
              {
                timestamp: new Date(Date.now() - 1000 * 60 * 4),
                level: 'INFO',
                message: 'Documents parsed successfully',
                step: 'document-parsing'
              },
              {
                timestamp: new Date(Date.now() - 1000 * 60 * 2),
                level: 'INFO',
                message: 'Extracting scope information',
                step: 'field-extraction'
              },
              {
                timestamp: new Date(Date.now() - 1000 * 30),
                level: 'WARN',
                message: 'Some eligibility criteria may be incomplete',
                step: 'field-extraction'
              }
            ]
          },
          {
            id: 'run-2',
            tenderId: 'tender-2',
            tenderTitle: 'Healthcare System Upgrade',
            pipelineName: 'phase1-mvp',
            status: 'COMPLETED',
            startedAt: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
            finishedAt: new Date(Date.now() - 1000 * 60 * 60 * 1.5), // 1.5 hours ago
            progress: 100,
            logs: [
              {
                timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
                level: 'INFO',
                message: 'Pipeline started',
                step: 'init'
              },
              {
                timestamp: new Date(Date.now() - 1000 * 60 * 60 * 1.8),
                level: 'INFO',
                message: 'Documents parsed successfully',
                step: 'document-parsing'
              },
              {
                timestamp: new Date(Date.now() - 1000 * 60 * 60 * 1.6),
                level: 'INFO',
                message: 'Field extraction completed',
                step: 'field-extraction'
              },
              {
                timestamp: new Date(Date.now() - 1000 * 60 * 60 * 1.5),
                level: 'INFO',
                message: 'Pipeline completed successfully',
                step: 'finalization'
              }
            ]
          },
          {
            id: 'run-3',
            tenderId: 'tender-3',
            tenderTitle: 'Public Transport Enhancement',
            pipelineName: 'phase1-mvp',
            status: 'FAILED',
            startedAt: new Date(Date.now() - 1000 * 60 * 60 * 6), // 6 hours ago
            finishedAt: new Date(Date.now() - 1000 * 60 * 60 * 5.5), // 5.5 hours ago
            progress: 45,
            currentStep: 'field-extraction',
            errorMessage: 'Failed to extract eligibility criteria - insufficient citation matches',
            logs: [
              {
                timestamp: new Date(Date.now() - 1000 * 60 * 60 * 6),
                level: 'INFO',
                message: 'Pipeline started',
                step: 'init'
              },
              {
                timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5.8),
                level: 'INFO',
                message: 'Documents parsed successfully',
                step: 'document-parsing'
              },
              {
                timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5.5),
                level: 'ERROR',
                message: 'Failed to extract eligibility criteria - insufficient citation matches',
                step: 'field-extraction'
              }
            ]
          },
          {
            id: 'run-4',
            tenderId: 'tender-4',
            tenderTitle: 'Environmental Monitoring System',
            pipelineName: 'phase1-mvp',
            status: 'PENDING',
            startedAt: new Date(),
            logs: [
              {
                timestamp: new Date(),
                level: 'INFO',
                message: 'Run queued for processing',
                step: 'init'
              }
            ]
          }
        ])
      }
    } catch (error) {
      console.error('Error fetching runs:', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredRuns = runs.filter(run => {
    switch (filter) {
      case 'active':
        return ['PENDING', 'RUNNING'].includes(run.status)
      case 'completed':
        return run.status === 'COMPLETED'
      case 'failed':
        return run.status === 'FAILED'
      default:
        return true
    }
  })

  const getRunIcon = (status: Run['status']) => {
    switch (status) {
      case 'PENDING':
        return <Clock className="h-4 w-4 text-orange-500" />
      case 'RUNNING':
        return <Play className="h-4 w-4 text-blue-500" />
      case 'COMPLETED':
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case 'FAILED':
        return <XCircle className="h-4 w-4 text-red-500" />
      case 'CANCELLED':
        return <Pause className="h-4 w-4 text-gray-500" />
      default:
        return <Clock className="h-4 w-4 text-gray-500" />
    }
  }

  const getDuration = (run: Run) => {
    if (run.finishedAt) {
      return formatDistanceToNow(new Date(run.finishedAt), { addSuffix: false })
    } else if (run.status === 'RUNNING') {
      return formatDistanceToNow(new Date(run.startedAt), { addSuffix: false })
    }
    return '-'
  }

  const getFilterCounts = () => {
    return {
      all: runs.length,
      active: runs.filter(r => ['PENDING', 'RUNNING'].includes(r.status)).length,
      completed: runs.filter(r => r.status === 'COMPLETED').length,
      failed: runs.filter(r => r.status === 'FAILED').length
    }
  }

  const counts = getFilterCounts()

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Pipeline Runs</h1>
            <p className="text-gray-600 mt-2">
              Monitor the progress of document processing pipelines
            </p>
          </div>
          <Button onClick={() => fetchRuns()}>
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Runs</p>
                <p className="text-3xl font-bold text-gray-900">{counts.all}</p>
              </div>
              <Play className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active</p>
                <p className="text-3xl font-bold text-orange-600">{counts.active}</p>
              </div>
              <Clock className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Completed</p>
                <p className="text-3xl font-bold text-green-600">{counts.completed}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Failed</p>
                <p className="text-3xl font-bold text-red-600">{counts.failed}</p>
              </div>
              <XCircle className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-2 mb-6">
        <Filter className="h-4 w-4 text-gray-500" />
        <span className="text-sm font-medium text-gray-700">Filter:</span>
        {(['all', 'active', 'completed', 'failed'] as const).map((f) => (
          <Button
            key={f}
            variant={filter === f ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter(f)}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
            <Badge variant="secondary" className="ml-2">
              {counts[f]}
            </Badge>
          </Button>
        ))}
      </div>

      {/* Runs List */}
      <div className="space-y-4">
        {filteredRuns.map((run) => (
          <Card key={run.id} className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  {getRunIcon(run.status)}
                  <div>
                    <h3 className="font-semibold text-gray-900">{run.tenderTitle}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>Pipeline: {run.pipelineName}</span>
                      <span>•</span>
                      <span>Started {format(new Date(run.startedAt), 'MMM d, yyyy HH:mm')}</span>
                      {run.finishedAt && (
                        <>
                          <span>•</span>
                          <span>Duration: {getDuration(run)}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <StatusBadge status={run.status as any} />
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => router.push(`/tenders/${run.tenderId}`)}
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    View Tender
                  </Button>
                </div>
              </div>

              {/* Progress Bar */}
              {run.progress !== undefined && (
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      Progress {run.currentStep && `(${run.currentStep})`}
                    </span>
                    <span className="text-sm text-gray-600">{run.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${run.progress}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {run.errorMessage && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center gap-2">
                    <XCircle className="h-4 w-4 text-red-600" />
                    <span className="text-sm font-medium text-red-800">Error</span>
                  </div>
                  <p className="text-sm text-red-700 mt-1">{run.errorMessage}</p>
                </div>
              )}

              {/* Recent Logs */}
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-2">Recent Activity</h4>
                <div className="space-y-1 max-h-32 overflow-y-auto">
                  {run.logs.slice(-5).reverse().map((log, index) => (
                    <div key={index} className="flex items-start gap-2 text-xs">
                      <span className="text-gray-500 font-mono">
                        {format(new Date(log.timestamp), 'HH:mm:ss')}
                      </span>
                      <Badge
                        variant={log.level === 'ERROR' ? 'destructive' :
                               log.level === 'WARN' ? 'secondary' : 'outline'}
                        className="text-xs"
                      >
                        {log.level}
                      </Badge>
                      {log.step && (
                        <span className="text-gray-500">[{log.step}]</span>
                      )}
                      <span className="text-gray-700">{log.message}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {filteredRuns.length === 0 && (
          <Card>
            <CardContent className="py-12 text-center">
              <Play className="h-12 w-12 mx-auto mb-4 text-gray-300" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No runs found
              </h3>
              <p className="text-gray-600">
                {filter === 'all'
                  ? 'No pipeline runs have been started yet.'
                  : `No ${filter} runs found.`
                }
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}