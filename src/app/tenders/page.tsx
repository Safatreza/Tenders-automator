'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { StatusBadge } from '@/components/tender/status-badge'
import { Badge } from '@/components/ui/badge'
import { Search, Plus, Filter, Calendar, Building, FileText, Eye, Play } from 'lucide-react'
import { format } from 'date-fns'

interface Tender {
  id: string
  title: string
  agency?: string
  status: string
  publishedAt?: Date
  dueAt?: Date
  createdAt: Date
  updatedAt: Date
  _count: {
    documents: number
    runs: number
  }
  latestRun?: {
    id: string
    status: string
    startedAt: Date
  }
}

export default function TendersPage() {
  const { data: session } = useSession()
  const router = useRouter()
  const [tenders, setTenders] = useState<Tender[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('')
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    fetchTenders()
  }, [page, searchTerm, statusFilter])

  const fetchTenders = async () => {
    try {
      setLoading(true)
      const params = new URLSearchParams({
        page: page.toString(),
        limit: '20',
        ...(searchTerm && { search: searchTerm }),
        ...(statusFilter && { status: statusFilter }),
      })

      const response = await fetch(`/api/tenders?${params}`)
      if (response.ok) {
        const data = await response.json()
        setTenders(data.data || [])
        setTotalPages(data.pagination?.totalPages || 1)
      } else {
        // Demo data for testing
        setTenders([
          {
            id: '1',
            title: 'IT Infrastructure Modernization Project',
            agency: 'Department of Technology',
            status: 'READY_FOR_REVIEW',
            publishedAt: new Date('2024-01-15'),
            dueAt: new Date('2024-03-15'),
            createdAt: new Date('2024-01-10'),
            updatedAt: new Date('2024-01-20'),
            _count: { documents: 3, runs: 2 },
            latestRun: {
              id: 'run1',
              status: 'COMPLETED',
              startedAt: new Date('2024-01-20'),
            }
          },
          {
            id: '2',
            title: 'Road Construction and Maintenance Services',
            agency: 'Public Works Department',
            status: 'PROCESSING',
            publishedAt: new Date('2024-01-20'),
            dueAt: new Date('2024-04-20'),
            createdAt: new Date('2024-01-18'),
            updatedAt: new Date('2024-01-22'),
            _count: { documents: 2, runs: 1 },
            latestRun: {
              id: 'run2',
              status: 'RUNNING',
              startedAt: new Date('2024-01-22'),
            }
          },
          {
            id: '3',
            title: 'Healthcare Equipment Procurement',
            agency: 'Ministry of Health',
            status: 'APPROVED',
            publishedAt: new Date('2024-01-05'),
            dueAt: new Date('2024-02-28'),
            createdAt: new Date('2024-01-01'),
            updatedAt: new Date('2024-01-25'),
            _count: { documents: 5, runs: 3 },
            latestRun: {
              id: 'run3',
              status: 'COMPLETED',
              startedAt: new Date('2024-01-25'),
            }
          },
        ])
      }
    } catch (error) {
      console.error('Error fetching tenders:', error)
    } finally {
      setLoading(false)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'DRAFT': return 'bg-gray-100 text-gray-800'
      case 'PROCESSING': return 'bg-blue-100 text-blue-800'
      case 'READY_FOR_REVIEW': return 'bg-yellow-100 text-yellow-800'
      case 'APPROVED': return 'bg-green-100 text-green-800'
      case 'REJECTED': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getRunStatusColor = (status: string) => {
    switch (status) {
      case 'RUNNING': return 'bg-blue-100 text-blue-800'
      case 'COMPLETED': return 'bg-green-100 text-green-800'
      case 'FAILED': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const filteredTenders = tenders.filter(tender =>
    tender.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tender.agency?.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Tenders</h1>
          <p className="text-gray-600 mt-2">
            Manage and track tender processing workflows
          </p>
        </div>
        <Button onClick={() => router.push('/ingest')} className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          New Tender
        </Button>
      </div>

      {/* Filters */}
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search tenders..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md text-sm"
              >
                <option value="">All Statuses</option>
                <option value="DRAFT">Draft</option>
                <option value="PROCESSING">Processing</option>
                <option value="READY_FOR_REVIEW">Ready for Review</option>
                <option value="APPROVED">Approved</option>
                <option value="REJECTED">Rejected</option>
              </select>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tenders Table */}
      <Card>
        <CardHeader>
          <CardTitle>Tenders ({filteredTenders.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Agency</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Documents</TableHead>
                    <TableHead>Latest Run</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTenders.map((tender) => (
                    <TableRow key={tender.id} className="hover:bg-gray-50">
                      <TableCell>
                        <div>
                          <div className="font-medium">{tender.title}</div>
                          <div className="text-sm text-gray-500">
                            Created {format(new Date(tender.createdAt), 'MMM d, yyyy')}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Building className="h-4 w-4 text-gray-400" />
                          {tender.agency || 'Not specified'}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(tender.status)}>
                          {tender.status.replace('_', ' ')}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {tender.dueAt ? (
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-gray-400" />
                            {format(new Date(tender.dueAt), 'MMM d, yyyy')}
                          </div>
                        ) : (
                          <span className="text-gray-400">Not set</span>
                        )}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-gray-400" />
                          {tender._count.documents}
                        </div>
                      </TableCell>
                      <TableCell>
                        {tender.latestRun ? (
                          <div className="flex items-center gap-2">
                            <Badge className={getRunStatusColor(tender.latestRun.status)}>
                              {tender.latestRun.status}
                            </Badge>
                            <span className="text-xs text-gray-500">
                              {format(new Date(tender.latestRun.startedAt), 'MMM d')}
                            </span>
                          </div>
                        ) : (
                          <span className="text-gray-400">No runs</span>
                        )}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => router.push(`/tenders/${tender.id}`)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          {tender.status === 'DRAFT' && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                // Start processing
                              }}
                            >
                              <Play className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              {filteredTenders.length === 0 && !loading && (
                <div className="text-center py-12">
                  <FileText className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No tenders found</h3>
                  <p className="text-gray-500 mb-4">
                    {searchTerm
                      ? `No tenders match your search for "${searchTerm}"`
                      : 'Get started by creating your first tender'}
                  </p>
                  <Button onClick={() => router.push('/ingest')}>
                    <Plus className="h-4 w-4 mr-2" />
                    Create New Tender
                  </Button>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
            >
              Previous
            </Button>
            <span className="text-sm text-gray-600">
              Page {page} of {totalPages}
            </span>
            <Button
              variant="outline"
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}