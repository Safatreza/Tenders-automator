'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Link, Plus, X, AlertCircle, CheckCircle, Loader } from 'lucide-react'

interface UrlInputProps {
  onUrlsChanged: (urls: string[]) => void
  maxUrls?: number
  disabled?: boolean
}

export function UrlInput({
  onUrlsChanged,
  maxUrls = 10,
  disabled = false,
}: UrlInputProps) {
  const [urls, setUrls] = useState<string[]>([])
  const [currentUrl, setCurrentUrl] = useState('')
  const [validationErrors, setValidationErrors] = useState<Record<number, string>>({})
  const [validatingUrls, setValidatingUrls] = useState<Set<number>>(new Set())

  const validateUrl = (url: string): boolean => {
    try {
      const urlObj = new URL(url)
      return ['http:', 'https:'].includes(urlObj.protocol)
    } catch {
      return false
    }
  }

  const checkUrlAccessibility = async (url: string, index: number): Promise<boolean> => {
    setValidatingUrls(prev => new Set(prev).add(index))

    try {
      // This would need to be implemented with a backend endpoint that can fetch URLs
      // For now, we'll simulate the check
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Simulate some URLs being inaccessible
      const isAccessible = !url.includes('private') && !url.includes('restricted')

      if (!isAccessible) {
        setValidationErrors(prev => ({
          ...prev,
          [index]: 'URL is not accessible or requires authentication'
        }))
      } else {
        setValidationErrors(prev => {
          const newErrors = { ...prev }
          delete newErrors[index]
          return newErrors
        })
      }

      return isAccessible
    } catch (error) {
      setValidationErrors(prev => ({
        ...prev,
        [index]: 'Failed to validate URL accessibility'
      }))
      return false
    } finally {
      setValidatingUrls(prev => {
        const newSet = new Set(prev)
        newSet.delete(index)
        return newSet
      })
    }
  }

  const addUrl = () => {
    if (!currentUrl.trim()) return

    if (!validateUrl(currentUrl)) {
      alert('Please enter a valid HTTP or HTTPS URL')
      return
    }

    if (urls.includes(currentUrl)) {
      alert('This URL has already been added')
      return
    }

    if (urls.length >= maxUrls) {
      alert(`Maximum ${maxUrls} URLs allowed`)
      return
    }

    const newUrls = [...urls, currentUrl]
    setUrls(newUrls)
    onUrlsChanged(newUrls)
    setCurrentUrl('')

    // Validate the newly added URL
    checkUrlAccessibility(currentUrl, newUrls.length - 1)
  }

  const removeUrl = (index: number) => {
    const newUrls = urls.filter((_, i) => i !== index)
    setUrls(newUrls)
    onUrlsChanged(newUrls)

    // Remove validation error for this URL
    setValidationErrors(prev => {
      const newErrors = { ...prev }
      delete newErrors[index]
      // Shift indices for remaining URLs
      const shiftedErrors: Record<number, string> = {}
      Object.entries(newErrors).forEach(([key, value]) => {
        const idx = parseInt(key)
        if (idx > index) {
          shiftedErrors[idx - 1] = value
        } else if (idx < index) {
          shiftedErrors[idx] = value
        }
      })
      return shiftedErrors
    })
  }

  const clearAll = () => {
    setUrls([])
    setValidationErrors({})
    setValidatingUrls(new Set())
    onUrlsChanged([])
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      addUrl()
    }
  }

  const getDomainFromUrl = (url: string): string => {
    try {
      return new URL(url).hostname
    } catch {
      return url
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Link className="h-5 w-5" />
          Add URLs
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Input
            type="url"
            placeholder="https://example.com/tender-document.pdf"
            value={currentUrl}
            onChange={(e) => setCurrentUrl(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={disabled || urls.length >= maxUrls}
            className="flex-1"
          />
          <Button
            onClick={addUrl}
            disabled={!currentUrl.trim() || disabled || urls.length >= maxUrls}
            size="default"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add
          </Button>
        </div>

        <p className="text-sm text-gray-500">
          Add URLs to PDF or DOCX documents. The system will download and process these files.
        </p>

        {urls.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-medium">Added URLs ({urls.length})</h4>
              <Button variant="outline" size="sm" onClick={clearAll}>
                Clear All
              </Button>
            </div>
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {urls.map((url, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <Link className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-sm truncate">{getDomainFromUrl(url)}</p>
                      <p className="text-xs text-gray-500 truncate">{url}</p>
                      {validationErrors[index] && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          {validationErrors[index]}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    {validatingUrls.has(index) ? (
                      <Loader className="h-4 w-4 text-blue-600 animate-spin" />
                    ) : validationErrors[index] ? (
                      <AlertCircle className="h-4 w-4 text-red-600" />
                    ) : (
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeUrl(index)}
                      className="h-8 w-8 p-0"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {urls.length >= maxUrls && (
          <div className="flex items-center gap-2 text-amber-600 text-sm">
            <AlertCircle className="h-4 w-4" />
            Maximum number of URLs reached ({maxUrls})
          </div>
        )}
      </CardContent>
    </Card>
  )
}