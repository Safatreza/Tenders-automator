'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import {
  Settings,
  FileText,
  GitBranch,
  Database,
  Users,
  Shield,
  Save,
  Plus,
  Edit,
  Trash2
} from 'lucide-react'

interface Template {
  id: string
  name: string
  type: 'summary' | 'checklist'
  isDefault: boolean
  createdAt: Date
  updatedAt: Date
}

interface Pipeline {
  id: string
  name: string
  isDefault: boolean
  steps: string[]
  createdAt: Date
}

export default function SettingsPage() {
  const { data: session } = useSession()
  const [activeTab, setActiveTab] = useState('templates')

  // Demo data
  const [templates] = useState<Template[]>([
    {
      id: 'template-1',
      name: 'Standard Summary Template',
      type: 'summary',
      isDefault: true,
      createdAt: new Date('2024-01-01'),
      updatedAt: new Date('2024-01-15')
    },
    {
      id: 'template-2',
      name: 'IT Projects Summary',
      type: 'summary',
      isDefault: false,
      createdAt: new Date('2024-01-10'),
      updatedAt: new Date('2024-01-20')
    },
    {
      id: 'template-3',
      name: 'Compliance Checklist',
      type: 'checklist',
      isDefault: true,
      createdAt: new Date('2024-01-01'),
      updatedAt: new Date('2024-01-15')
    }
  ])

  const [pipelines] = useState<Pipeline[]>([
    {
      id: 'pipeline-1',
      name: 'phase1-mvp',
      isDefault: true,
      steps: ['document-parsing', 'field-extraction', 'summary-generation', 'checklist-validation'],
      createdAt: new Date('2024-01-01')
    },
    {
      id: 'pipeline-2',
      name: 'full-analysis',
      isDefault: false,
      steps: ['document-parsing', 'field-extraction', 'advanced-analysis', 'summary-generation', 'checklist-validation', 'quality-review'],
      createdAt: new Date('2024-01-10')
    }
  ])

  const isAdmin = session?.user?.role === 'ADMIN'

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
          <Settings className="h-8 w-8" />
          Settings
        </h1>
        <p className="text-gray-600 mt-2">
          Configure templates, pipelines, and system settings
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="templates" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Templates
          </TabsTrigger>
          <TabsTrigger value="pipelines" className="flex items-center gap-2">
            <GitBranch className="h-4 w-4" />
            Pipelines
          </TabsTrigger>
          <TabsTrigger value="storage" className="flex items-center gap-2">
            <Database className="h-4 w-4" />
            Storage
          </TabsTrigger>
          <TabsTrigger value="users" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Users
          </TabsTrigger>
        </TabsList>

        <TabsContent value="templates">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Summary & Checklist Templates</CardTitle>
                  {isAdmin && (
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      New Template
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {templates.map((template) => (
                    <div key={template.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <FileText className="h-5 w-5 text-blue-600" />
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{template.name}</span>
                            {template.isDefault && (
                              <Badge variant="secondary">Default</Badge>
                            )}
                          </div>
                          <div className="text-sm text-gray-500">
                            Type: {template.type} • Updated {template.updatedAt.toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                      {isAdmin && (
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4 mr-2" />
                            Edit
                          </Button>
                          {!template.isDefault && (
                            <Button variant="outline" size="sm">
                              <Trash2 className="h-4 w-4 mr-2" />
                              Delete
                            </Button>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="pipelines">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Processing Pipelines</CardTitle>
                  {isAdmin && (
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      New Pipeline
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pipelines.map((pipeline) => (
                    <div key={pipeline.id} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <GitBranch className="h-5 w-5 text-purple-600" />
                          <span className="font-medium">{pipeline.name}</span>
                          {pipeline.isDefault && (
                            <Badge variant="secondary">Default</Badge>
                          )}
                        </div>
                        {isAdmin && (
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm">
                              <Edit className="h-4 w-4 mr-2" />
                              Edit
                            </Button>
                            {!pipeline.isDefault && (
                              <Button variant="outline" size="sm">
                                <Trash2 className="h-4 w-4 mr-2" />
                                Delete
                              </Button>
                            )}
                          </div>
                        )}
                      </div>
                      <div className="text-sm text-gray-600 mb-2">
                        Created {pipeline.createdAt.toLocaleDateString()}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {pipeline.steps.map((step, index) => (
                          <div key={step} className="flex items-center">
                            <Badge variant="outline" className="text-xs">
                              {index + 1}. {step.replace('-', ' ')}
                            </Badge>
                            {index < pipeline.steps.length - 1 && (
                              <span className="mx-2 text-gray-400">→</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="storage">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Storage Configuration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-medium mb-4">Vercel Blob Storage</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center gap-2 text-green-800">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="font-medium">Connected to Vercel Blob</span>
                      </div>
                      <p className="text-sm text-green-600 mt-1">
                        File storage is automatically configured for Vercel deployment
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Max File Size</label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          defaultValue="50MB"
                          disabled={!isAdmin}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Allowed File Types</label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          defaultValue="PDF, DOCX, DOC, TXT"
                          disabled={!isAdmin}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-4">Database Settings</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Host</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        defaultValue="localhost"
                        disabled={!isAdmin}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Port</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        defaultValue="5432"
                        disabled={!isAdmin}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Database</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        defaultValue="tender_automator"
                        disabled={!isAdmin}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">SSL Mode</label>
                      <select
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        disabled={!isAdmin}
                      >
                        <option>prefer</option>
                        <option>require</option>
                        <option>disable</option>
                      </select>
                    </div>
                  </div>
                </div>

                {isAdmin && (
                  <div className="pt-4 border-t">
                    <Button>
                      <Save className="h-4 w-4 mr-2" />
                      Save Configuration
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="users">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>User Management</CardTitle>
                  {isAdmin && (
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Invite User
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Users className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium">{session?.user?.name || session?.user?.email}</div>
                        <div className="text-sm text-gray-500">
                          {session?.user?.email} • {session?.user?.role || 'ANALYST'}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{session?.user?.role || 'ANALYST'}</Badge>
                      <Badge variant="outline">Current User</Badge>
                    </div>
                  </div>

                  {/* Demo users */}
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <Shield className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <div className="font-medium">Admin User</div>
                        <div className="text-sm text-gray-500">admin@example.com • ADMIN</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">ADMIN</Badge>
                      {isAdmin && (
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </Button>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <Users className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <div className="font-medium">Reviewer User</div>
                        <div className="text-sm text-gray-500">reviewer@example.com • REVIEWER</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">REVIEWER</Badge>
                      {isAdmin && (
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {!isAdmin && (
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center text-gray-500">
                    <Shield className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Admin Access Required
                    </h3>
                    <p>You need administrator privileges to manage users and system settings.</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}