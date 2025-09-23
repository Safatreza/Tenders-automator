'use client'

import {
  FileText,
  Upload,
  CheckSquare,
  Clock,
  TrendingUp,
  Users,
  Play,
  AlertCircle
} from 'lucide-react'

interface DashboardStats {
  totalTenders: number
  processingTenders: number
  readyForReview: number
  approvedTenders: number
  documentsProcessed: number
  activeRuns: number
}

export default function DashboardPage() {
  // Demo data - no API calls or authentication required
  const stats: DashboardStats = {
    totalTenders: 25,
    processingTenders: 3,
    readyForReview: 5,
    approvedTenders: 15,
    documentsProcessed: 67,
    activeRuns: 2,
  }

  const session = { user: { name: 'Demo User', email: 'demo@example.com' } }

  const statCards = [
    {
      title: 'Total Tenders',
      value: stats.totalTenders,
      icon: FileText,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      title: 'Processing',
      value: stats.processingTenders,
      icon: Clock,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
    },
    {
      title: 'Ready for Review',
      value: stats.readyForReview,
      icon: CheckSquare,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100',
    },
    {
      title: 'Approved',
      value: stats.approvedTenders,
      icon: TrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome back, {session?.user?.name || session?.user?.email}
        </h1>
        <p className="text-gray-600 mt-2">
          Here's what's happening with your tender processing pipeline
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card className="hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => alert('Upload New Tender feature - Demo UI only')}>
          <CardContent className="pt-6">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Upload className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Upload New Tender</h3>
                <p className="text-sm text-gray-600">Start processing documents</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => alert('View All Tenders feature - Demo UI only')}>
          <CardContent className="pt-6">
            <div className="flex items-center space-x-3">
              <div className="bg-green-100 p-3 rounded-lg">
                <FileText className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">View All Tenders</h3>
                <p className="text-sm text-gray-600">Manage existing tenders</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => alert('Pipeline Runs feature - Demo UI only')}>
          <CardContent className="pt-6">
            <div className="flex items-center space-x-3">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Play className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Pipeline Runs</h3>
                <p className="text-sm text-gray-600">Monitor processing status</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-yellow-600" />
              Items Requiring Attention
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stats.readyForReview > 0 && (
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                  <div>
                    <p className="font-medium text-yellow-800">
                      {stats.readyForReview} tenders ready for review
                    </p>
                    <p className="text-sm text-yellow-600">
                      These tenders have completed processing and need approval
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => alert('Review Tenders feature - Demo UI only')}
                  >
                    Review
                  </Button>
                </div>
              )}

              {stats.activeRuns > 0 && (
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div>
                    <p className="font-medium text-blue-800">
                      {stats.activeRuns} active pipeline runs
                    </p>
                    <p className="text-sm text-blue-600">
                      Monitor the progress of ongoing document processing
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => alert('Monitor Runs feature - Demo UI only')}
                  >
                    Monitor
                  </Button>
                </div>
              )}

              {stats.readyForReview === 0 && stats.activeRuns === 0 && (
                <div className="text-center py-6 text-gray-500">
                  <CheckSquare className="h-12 w-12 mx-auto mb-2 text-gray-300" />
                  <p>All caught up! No items requiring immediate attention.</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-600" />
              System Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Pipeline System</span>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  Operational
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Document Storage</span>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  Operational
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Field Extraction</span>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  Operational
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Documents Processed</span>
                <span className="text-sm text-gray-600">{stats.documentsProcessed} total</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}