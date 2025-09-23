'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Alert, AlertDescription } from '@/components/ui/alert'
import FileUpload from '@/components/file-upload'
import { Play, AlertCircle, CheckCircle2, Clock } from 'lucide-react'
import { toast } from 'sonner'

interface UploadedFile {
  id: string
  name: string
  size: number
  type: string
  status: 'uploading' | 'success' | 'error'
  url?: string
}

interface Source {
  id: string
  name: string
  description?: string
}

interface Pipeline {
  id: string
  name: string
  description?: string
  active: boolean
}

export default function IngestPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  const [tenderTitle, setTenderTitle] = useState('')
  const [tenderAgency, setTenderAgency] = useState('')
  const [selectedSource, setSelectedSource] = useState<string>('')
  const [selectedPipeline, setSelectedPipeline] = useState<string>('phase1-mvp')
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])
  const [isProcessing, setIsProcessing] = useState(false)
  const [processingStep, setProcessingStep] = useState('')
  const [processingProgress, setProcessingProgress] = useState(0)

  // Mock data - in real app, this would come from API
  const sources: Source[] = [
    { id: '1', name: 'Government Procurement Portal', description: 'Official government tenders' },
    { id: '2', name: 'Private Sector RFPs', description: 'Corporate procurement requests' },
    { id: '3', name: 'International Organizations', description: 'UN, World Bank, etc.' },
    { id: '4', name: 'Manual Upload', description: 'Direct file upload' },
  ]

  const pipelines: Pipeline[] = [
    { id: 'phase1-mvp', name: 'Phase 1 MVP', description: 'Basic field extraction and checklist', active: true },
    { id: 'full-analysis', name: 'Full Analysis', description: 'Complete tender analysis', active: false },
    { id: 'quick-scan', name: 'Quick Scan', description: 'Fast overview processing', active: true },
  ]

  const handleFilesUploaded = (files: UploadedFile[]) => {
    setUploadedFiles(prev => [...prev, ...files])
  }

  const handleStartProcessing = async () => {
    if (!tenderTitle.trim()) {
      toast.error('Please enter a tender title')
      return
    }

    if (uploadedFiles.length === 0) {
      toast.error('Please upload at least one document')
      return
    }

    if (!selectedPipeline) {
      toast.error('Please select a pipeline')
      return
    }

    setIsProcessing(true)
    setProcessingProgress(0)

    try {
      // Step 1: Create tender
      setProcessingStep('Creating tender record...')
      setProcessingProgress(10)

      const tenderResponse = await fetch('/api/tenders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: tenderTitle,
          agency: tenderAgency || undefined,
          sourceId: selectedSource || undefined,
        }),
      })

      if (!tenderResponse.ok) {
        throw new Error('Failed to create tender')
      }

      const tender = await tenderResponse.json()
      setProcessingProgress(25)

      // Step 2: Associate documents
      setProcessingStep('Processing documents...')

      for (let i = 0; i < uploadedFiles.length; i++) {
        const file = uploadedFiles[i]

        const docResponse = await fetch('/api/documents', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            tenderId: tender.id,
            filename: file.name,
            mime: file.type,
            size: file.size,
            url: file.url,
          }),
        })

        if (!docResponse.ok) {
          console.error(`Failed to associate document: ${file.name}`)
        }

        setProcessingProgress(25 + (i + 1) * 25 / uploadedFiles.length)
      }

      // Step 3: Start pipeline run
      setProcessingStep('Starting pipeline execution...')
      setProcessingProgress(60)

      const runResponse = await fetch('/api/runs/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tenderId: tender.id,
          pipelineName: selectedPipeline,
        }),
      })

      if (!runResponse.ok) {
        throw new Error('Failed to start pipeline')
      }

      const run = await runResponse.json()
      setProcessingProgress(80)

      // Step 4: Monitor progress (simplified)
      setProcessingStep('Pipeline running...')

      // Simulate pipeline execution
      await new Promise(resolve => setTimeout(resolve, 2000))
      setProcessingProgress(100)

      toast.success('Tender processing started successfully!')

      // Redirect to tender detail page
      router.push(`/tenders/${tender.id}`)

    } catch (error) {
      console.error('Processing failed:', error)
      toast.error(error instanceof Error ? error.message : 'Processing failed')
    } finally {
      setIsProcessing(false)
      setProcessingStep('')
      setProcessingProgress(0)
    }
  }

  if (status === 'loading') {
    return <div className="flex justify-center p-8">Loading...</div>
  }

  if (!session) {
    router.push('/auth/signin')
    return null
  }

  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold">Document Ingestion</h1>
          <p className="text-gray-600 mt-2">
            Upload tender documents and start the automated processing pipeline
          </p>
        </div>

        {/* Progress Indicator */}
        {isProcessing && (
          <Alert>
            <Clock className="h-4 w-4" />
            <AlertDescription>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span>{processingStep}</span>
                  <span className="text-sm text-gray-500">{processingProgress}%</span>
                </div>
                <Progress value={processingProgress} className="w-full" />
              </div>
            </AlertDescription>
          </Alert>
        )}

        {/* Basic Information */}
        <Card>
          <CardHeader>
            <CardTitle>Tender Information</CardTitle>
            <CardDescription>
              Provide basic details about the tender
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Tender Title *</Label>
              <Input
                id="title"
                placeholder="e.g., IT Infrastructure Upgrade Project"
                value={tenderTitle}
                onChange={(e) => setTenderTitle(e.target.value)}
                disabled={isProcessing}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="agency">Issuing Agency</Label>
              <Input
                id="agency"
                placeholder="e.g., Ministry of Education"
                value={tenderAgency}
                onChange={(e) => setTenderAgency(e.target.value)}
                disabled={isProcessing}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="source">Source</Label>
              <Select value={selectedSource} onValueChange={setSelectedSource} disabled={isProcessing}>
                <SelectTrigger>
                  <SelectValue placeholder="Select tender source" />
                </SelectTrigger>
                <SelectContent>
                  {sources.map((source) => (
                    <SelectItem key={source.id} value={source.id}>
                      <div>
                        <div className="font-medium">{source.name}</div>
                        {source.description && (
                          <div className="text-sm text-gray-500">{source.description}</div>
                        )}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Document Upload */}
        <Card>
          <CardHeader>
            <CardTitle>Documents</CardTitle>
            <CardDescription>
              Upload tender documents (PDF, DOCX, DOC, TXT) or provide URLs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FileUpload
              onFilesUploaded={handleFilesUploaded}
              maxFiles={10}
              maxSizeMB={50}
              disabled={isProcessing}
            />
          </CardContent>
        </Card>

        {/* Pipeline Selection */}
        <Card>
          <CardHeader>
            <CardTitle>Processing Pipeline</CardTitle>
            <CardDescription>
              Choose the analysis pipeline to run on your documents
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              {pipelines.map((pipeline) => (
                <div
                  key={pipeline.id}
                  className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                    selectedPipeline === pipeline.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  } ${!pipeline.active ? 'opacity-50 cursor-not-allowed' : ''}`}
                  onClick={() => {
                    if (pipeline.active && !isProcessing) {
                      setSelectedPipeline(pipeline.id)
                    }
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">{pipeline.name}</span>
                        {!pipeline.active && (
                          <Badge variant="secondary">Coming Soon</Badge>
                        )}
                        {pipeline.id === 'phase1-mvp' && (
                          <Badge variant="default">Recommended</Badge>
                        )}
                      </div>
                      {pipeline.description && (
                        <p className="text-sm text-gray-600 mt-1">{pipeline.description}</p>
                      )}
                    </div>
                    {selectedPipeline === pipeline.id && (
                      <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <Button
            size="lg"
            onClick={handleStartProcessing}
            disabled={isProcessing || !tenderTitle.trim() || uploadedFiles.length === 0}
            className="flex-1"
          >
            <Play className="w-4 h-4 mr-2" />
            {isProcessing ? 'Processing...' : 'Start Processing'}
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={() => router.push('/tenders')}
            disabled={isProcessing}
          >
            Cancel
          </Button>
        </div>

        {/* Requirements Checklist */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Requirements Checklist</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                {tenderTitle.trim() ? (
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-gray-400" />
                )}
                <span className={tenderTitle.trim() ? 'text-green-600' : 'text-gray-600'}>
                  Tender title provided
                </span>
              </div>

              <div className="flex items-center space-x-2">
                {uploadedFiles.length > 0 ? (
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-gray-400" />
                )}
                <span className={uploadedFiles.length > 0 ? 'text-green-600' : 'text-gray-600'}>
                  Documents uploaded ({uploadedFiles.length})
                </span>
              </div>

              <div className="flex items-center space-x-2">
                {selectedPipeline ? (
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-gray-400" />
                )}
                <span className={selectedPipeline ? 'text-green-600' : 'text-gray-600'}>
                  Pipeline selected
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}