'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Building, Search, Plus } from 'lucide-react'

interface Source {
  id: string
  name: string
  description?: string
  baseUrl?: string
  keywords: string[]
  active: boolean
}

interface SourceSelectorProps {
  onSourceSelected: (sourceId: string | null) => void
  selectedSourceId?: string | null
  disabled?: boolean
}

export function SourceSelector({
  onSourceSelected,
  selectedSourceId,
  disabled = false,
}: SourceSelectorProps) {
  const [sources, setSources] = useState<Source[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [showCreateForm, setShowCreateForm] = useState(false)

  useEffect(() => {
    fetchSources()
  }, [])

  const fetchSources = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/sources')
      if (response.ok) {
        const data = await response.json()
        setSources(data.data || [])
      }
    } catch (error) {
      console.error('Error fetching sources:', error)
      // Fallback to default sources
      setSources([
        {
          id: 'govt-tenders',
          name: 'Government Tenders',
          description: 'Official government tender portal',
          baseUrl: 'https://govt-tenders.com',
          keywords: ['government', 'public', 'municipal'],
          active: true,
        },
        {
          id: 'private-sector',
          name: 'Private Sector',
          description: 'Private company tenders and RFPs',
          keywords: ['private', 'corporate', 'rfp'],
          active: true,
        },
        {
          id: 'international',
          name: 'International Tenders',
          description: 'International and multilateral organization tenders',
          keywords: ['international', 'un', 'world bank'],
          active: true,
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  const filteredSources = sources.filter(source =>
    source.active &&
    (source.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     source.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
     source.keywords.some(keyword =>
       keyword.toLowerCase().includes(searchTerm.toLowerCase())
     ))
  )

  const handleSourceSelect = (sourceId: string) => {
    const newSelectedId = selectedSourceId === sourceId ? null : sourceId
    onSourceSelected(newSelectedId)
  }

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building className="h-5 w-5" />
            Select Source
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Building className="h-5 w-5" />
          Select Source
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search sources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
              disabled={disabled}
            />
          </div>
          <Button
            variant="outline"
            onClick={() => setShowCreateForm(!showCreateForm)}
            disabled={disabled}
          >
            <Plus className="h-4 w-4 mr-2" />
            New
          </Button>
        </div>

        {showCreateForm && (
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="pt-4">
              <p className="text-sm text-blue-700 mb-2">
                To create a new source, please go to Settings → Sources
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowCreateForm(false)}
              >
                Close
              </Button>
            </CardContent>
          </Card>
        )}

        <div className="space-y-2">
          <div
            className={`
              p-3 border rounded-lg cursor-pointer transition-colors
              ${selectedSourceId === null
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-gray-300'
              }
              ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
            `}
            onClick={() => !disabled && handleSourceSelect('')}
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">No Source Specified</h4>
                <p className="text-sm text-gray-500">
                  Upload documents without associating them with a specific tender source
                </p>
              </div>
              {selectedSourceId === null && (
                <Badge variant="default">Selected</Badge>
              )}
            </div>
          </div>

          {filteredSources.map((source) => (
            <div
              key={source.id}
              className={`
                p-3 border rounded-lg cursor-pointer transition-colors
                ${selectedSourceId === source.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
                }
                ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
              `}
              onClick={() => !disabled && handleSourceSelect(source.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium">{source.name}</h4>
                    {selectedSourceId === source.id && (
                      <Badge variant="default">Selected</Badge>
                    )}
                  </div>
                  {source.description && (
                    <p className="text-sm text-gray-500 mt-1">{source.description}</p>
                  )}
                  {source.baseUrl && (
                    <p className="text-xs text-blue-600 mt-1">{source.baseUrl}</p>
                  )}
                  {source.keywords.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {source.keywords.slice(0, 3).map((keyword) => (
                        <Badge key={keyword} variant="secondary" className="text-xs">
                          {keyword}
                        </Badge>
                      ))}
                      {source.keywords.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{source.keywords.length - 3} more
                        </Badge>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredSources.length === 0 && searchTerm && (
          <div className="text-center py-8 text-gray-500">
            <Building className="h-12 w-12 mx-auto mb-2 text-gray-300" />
            <p>No sources found matching "{searchTerm}"</p>
            <p className="text-sm mt-1">Try a different search term or create a new source</p>
          </div>
        )}

        {sources.length === 0 && !loading && (
          <div className="text-center py-8 text-gray-500">
            <Building className="h-12 w-12 mx-auto mb-2 text-gray-300" />
            <p>No sources available</p>
            <p className="text-sm mt-1">Contact your administrator to set up tender sources</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}