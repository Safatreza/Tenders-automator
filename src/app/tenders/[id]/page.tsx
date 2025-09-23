'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { StatusBadge } from '@/components/tender/status-badge'
import { TraceChip } from '@/components/tender/trace-chip'
import { Badge } from '@/components/ui/badge'
import {
  FileText,
  CheckSquare,
  Eye,
  ThumbsUp,
  ThumbsDown,
  Play,
  Calendar,
  Building,
  User,
  Clock,
  Download
} from 'lucide-react'
import { format } from 'date-fns'

interface TenderDetail {
  id: string
  title: string
  agency?: string
  status: string
  publishedAt?: Date
  dueAt?: Date
  createdAt: Date
  updatedAt: Date
  summary: Array<{
    blockKey: string
    contentMarkdown: string
    traceLinks: Array<{
      id: string
      page: number
      snippet: string
      documentId: string
    }>
  }>
  checklist: Array<{
    key: string
    label: string
    status: string
    notes?: string
    traceLinks: Array<{
      id: string
      page: number
      snippet: string
      documentId: string
    }>
  }>
  documents: Array<{
    id: string
    filename: string
    pages?: number
    createdAt: Date
  }>
  runs: Array<{
    id: string
    pipelineName: string
    status: string
    startedAt: Date
    finishedAt?: Date
  }>
}

export default function TenderDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { data: session } = useSession()
  const tenderId = params.id as string

  const [tender, setTender] = useState<TenderDetail | null>(null)
  const [loading, setLoading] = useState(true)
  const [approvalComment, setApprovalComment] = useState('')

  useEffect(() => {
    fetchTenderDetail()
  }, [tenderId])

  const fetchTenderDetail = async () => {
    try {
      setLoading(true)
      const response = await fetch(`/api/tenders/${tenderId}`)
      if (response.ok) {
        const data = await response.json()
        setTender(data.data)
      } else {
        // Demo data for testing
        setTender({
          id: tenderId,
          title: 'IT Infrastructure Modernization Project',
          agency: 'Department of Technology',
          status: 'READY_FOR_REVIEW',
          publishedAt: new Date('2024-01-15'),
          dueAt: new Date('2024-03-15'),
          createdAt: new Date('2024-01-10'),
          updatedAt: new Date('2024-01-20'),
          summary: [
            {
              blockKey: 'scope',
              contentMarkdown: `## Project Scope

This tender seeks qualified vendors to modernize the IT infrastructure across all government departments. The project includes:

- Server hardware upgrade and consolidation
- Network infrastructure enhancement
- Cloud migration services
- Cybersecurity implementation

[📄 p.3](trace:trace1) The modernization must be completed within 18 months and include comprehensive training for IT staff.`,
              traceLinks: [
                {
                  id: 'trace1',
                  page: 3,
                  snippet: 'The modernization must be completed within 18 months',
                  documentId: 'doc1'
                }
              ]
            },
            {
              blockKey: 'eligibility',
              contentMarkdown: `## Eligibility Criteria

Eligible vendors must demonstrate:

- Minimum 5 years experience in government IT projects
- ISO 27001 certification for information security
- Local presence with 24/7 support capability
- Financial capacity of $10M+ annual revenue

[📄 p.7](trace:trace2) Only pre-qualified vendors from the government supplier registry may participate.`,
              traceLinks: [
                {
                  id: 'trace2',
                  page: 7,
                  snippet: 'Only pre-qualified vendors from the government supplier registry',
                  documentId: 'doc1'
                }
              ]
            }
          ],
          checklist: [
            {
              key: 'tax-certificate',
              label: 'Tax Certificate',
              status: 'OK',
              notes: 'Found mention of tax compliance in eligibility section',
              traceLinks: [
                {
                  id: 'trace3',
                  page: 8,
                  snippet: 'Valid tax clearance certificate required',
                  documentId: 'doc1'
                }
              ]
            },
            {
              key: 'iso-9001',
              label: 'ISO 9001 Certification',
              status: 'MISSING',
              notes: 'No mention of quality management certification',
              traceLinks: []
            },
            {
              key: 'technical-specifications',
              label: 'Technical Specifications',
              status: 'OK',
              notes: 'Detailed technical requirements provided',
              traceLinks: [
                {
                  id: 'trace4',
                  page: 12,
                  snippet: 'Technical specifications and system requirements',
                  documentId: 'doc1'
                }
              ]
            }
          ],
          documents: [
            {
              id: 'doc1',
              filename: 'IT_Modernization_RFP.pdf',
              pages: 45,
              createdAt: new Date('2024-01-10')
            },
            {
              id: 'doc2',
              filename: 'Technical_Requirements.docx',
              pages: 12,
              createdAt: new Date('2024-01-12')
            }
          ],
          runs: [
            {
              id: 'run1',
              pipelineName: 'phase1-mvp',
              status: 'COMPLETED',
              startedAt: new Date('2024-01-20T10:00:00'),
              finishedAt: new Date('2024-01-20T10:15:00')
            }
          ]
        })
      }
    } catch (error) {
      console.error('Error fetching tender:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleApproval = async (action: 'approve' | 'reject') => {
    try {
      const response = await fetch(`/api/tenders/${tenderId}/approve`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          status: action === 'approve' ? 'APPROVED' : 'REJECTED',
          comment: approvalComment
        })
      })

      if (response.ok) {
        await fetchTenderDetail()
        setApprovalComment('')
        alert(`Tender ${action}d successfully`)
      }
    } catch (error) {
      console.error(`Error ${action}ing tender:`, error)
    }
  }

  const canApprove = () => {
    if (!session?.user || tender?.status !== 'READY_FOR_REVIEW') return false
    return ['REVIEWER', 'ADMIN'].includes(session.user.role)
  }

  const getChecklistProgress = () => {
    if (!tender?.checklist.length) return 0
    const completed = tender.checklist.filter(item => item.status === 'OK').length
    return Math.round((completed / tender.checklist.length) * 100)
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      </div>
    )
  }

  if (!tender) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-900">Tender not found</h2>
          <p className="text-gray-600 mt-2">The requested tender could not be found.</p>
          <Button onClick={() => router.push('/tenders')} className="mt-4">
            Back to Tenders
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              onClick={() => router.push('/tenders')}
            >
              ← Back
            </Button>
            <div>
              <h1 className="text-3xl font-bold">{tender.title}</h1>
              <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                {tender.agency && (
                  <div className="flex items-center gap-1">
                    <Building className="h-4 w-4" />
                    {tender.agency}
                  </div>
                )}
                {tender.dueAt && (
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Due {format(new Date(tender.dueAt), 'MMM d, yyyy')}
                  </div>
                )}
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  Created {format(new Date(tender.createdAt), 'MMM d, yyyy')}
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <StatusBadge status={tender.status as any} />
            {tender.status === 'DRAFT' && (
              <Button>
                <Play className="h-4 w-4 mr-2" />
                Process
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Progress Overview */}
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{tender.documents.length}</div>
              <div className="text-sm text-gray-600">Documents</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{getChecklistProgress()}%</div>
              <div className="text-sm text-gray-600">Checklist Complete</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{tender.summary.length}</div>
              <div className="text-sm text-gray-600">Summary Sections</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">{tender.runs.length}</div>
              <div className="text-sm text-gray-600">Pipeline Runs</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Tabs */}
      <Tabs defaultValue="summary" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="summary" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Summary
          </TabsTrigger>
          <TabsTrigger value="checklist" className="flex items-center gap-2">
            <CheckSquare className="h-4 w-4" />
            Checklist
          </TabsTrigger>
          <TabsTrigger value="documents" className="flex items-center gap-2">
            <Eye className="h-4 w-4" />
            Documents
          </TabsTrigger>
          <TabsTrigger value="approval" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            Approval
          </TabsTrigger>
        </TabsList>

        <TabsContent value="summary">
          <div className="space-y-6">
            {tender.summary.map((section) => (
              <Card key={section.blockKey}>
                <CardContent className="pt-6">
                  <div
                    className="prose max-w-none"
                    dangerouslySetInnerHTML={{
                      __html: section.contentMarkdown
                        .replace(/\[📄 p\.(\d+)\]\(trace:([^)]+)\)/g,
                          '<span class="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800 cursor-pointer">📄 p.$1</span>')
                    }}
                  />
                  {section.traceLinks.length > 0 && (
                    <div className="mt-4 pt-4 border-t">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Citations:</h4>
                      <div className="flex flex-wrap gap-2">
                        {section.traceLinks.map((link) => (
                          <TraceChip
                            key={link.id}
                            snippet={link.snippet}
                            page={link.page}
                            documentId={link.documentId}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="checklist">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Compliance Checklist
                <Badge variant="outline">{getChecklistProgress()}% Complete</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {tender.checklist.map((item) => (
                  <div key={item.key} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{item.label}</h4>
                      <StatusBadge status={item.status as any} />
                    </div>
                    {item.notes && (
                      <p className="text-sm text-gray-600 mb-2">{item.notes}</p>
                    )}
                    {item.traceLinks.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {item.traceLinks.map((link) => (
                          <TraceChip
                            key={link.id}
                            snippet={link.snippet}
                            page={link.page}
                            documentId={link.documentId}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documents">
          <Card>
            <CardHeader>
              <CardTitle>Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {tender.documents.map((doc) => (
                  <div key={doc.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-blue-600" />
                      <div>
                        <div className="font-medium">{doc.filename}</div>
                        <div className="text-sm text-gray-500">
                          {doc.pages} pages • Uploaded {format(new Date(doc.createdAt), 'MMM d, yyyy')}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="approval">
          <div className="space-y-6">
            {/* Approval Actions */}
            {canApprove() && (
              <Card>
                <CardHeader>
                  <CardTitle>Review & Approval</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Comments (Optional)
                    </label>
                    <textarea
                      value={approvalComment}
                      onChange={(e) => setApprovalComment(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      rows={3}
                      placeholder="Add any comments or feedback..."
                    />
                  </div>
                  <div className="flex gap-3">
                    <Button
                      onClick={() => handleApproval('approve')}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      <ThumbsUp className="h-4 w-4 mr-2" />
                      Approve
                    </Button>
                    <Button
                      onClick={() => handleApproval('reject')}
                      variant="destructive"
                    >
                      <ThumbsDown className="h-4 w-4 mr-2" />
                      Reject
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Pipeline Runs */}
            <Card>
              <CardHeader>
                <CardTitle>Pipeline Runs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {tender.runs.map((run) => (
                    <div key={run.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <div className="font-medium">{run.pipelineName}</div>
                        <div className="text-sm text-gray-500">
                          Started {format(new Date(run.startedAt), 'MMM d, yyyy HH:mm')}
                          {run.finishedAt && (
                            <span> • Finished {format(new Date(run.finishedAt), 'HH:mm')}</span>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <StatusBadge status={run.status as any} />
                        <Button variant="outline" size="sm">
                          View Logs
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}