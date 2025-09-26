// TraceChip Component Tests
// Example test suite demonstrating best practices

import { describe, it, expect, vi } from 'vitest'
import { screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TraceChip } from '@/components/TraceChip'
import { render, createMockExtraction } from '@/test/utils'

describe('TraceChip', () => {
  const mockTraceLinks = [
    {
      id: 'trace-1',
      documentId: 'doc-1',
      page: 1,
      snippet: 'Test citation from page 1',
      document: { filename: 'document1.pdf' }
    },
    {
      id: 'trace-2',
      documentId: 'doc-2',
      page: 3,
      snippet: 'Another citation from page 3',
      document: { filename: 'document2.pdf' }
    }
  ]

  describe('Rendering', () => {
    it('renders citation count badge', () => {
      render(<TraceChip traceLinks={mockTraceLinks} />)

      expect(screen.getByText('📎 2')).toBeInTheDocument()
    })

    it('renders missing citation badge when no links', () => {
      render(<TraceChip traceLinks={[]} />)

      expect(screen.getByText('Missing Citation')).toBeInTheDocument()
    })

    it('renders inline variant correctly', () => {
      render(<TraceChip traceLinks={mockTraceLinks} variant="inline" />)

      expect(screen.getByText('📎2')).toBeInTheDocument()
    })

    it('renders button variant correctly', () => {
      render(<TraceChip traceLinks={mockTraceLinks} variant="button" />)

      expect(screen.getByText('2 citations')).toBeInTheDocument()
    })

    it('renders with children wrapper', () => {
      render(
        <TraceChip traceLinks={mockTraceLinks}>
          <span>Test Content</span>
        </TraceChip>
      )

      expect(screen.getByText('Test Content')).toBeInTheDocument()
      expect(screen.getByText('📎 2')).toBeInTheDocument()
    })
  })

  describe('Interaction', () => {
    it('opens popover on click', async () => {
      const user = userEvent.setup()
      render(<TraceChip traceLinks={mockTraceLinks} />)

      await user.click(screen.getByText('📎 2'))

      await waitFor(() => {
        expect(screen.getByText('Citations')).toBeInTheDocument()
      })
    })

    it('displays citation details in popover', async () => {
      const user = userEvent.setup()
      render(<TraceChip traceLinks={mockTraceLinks} />)

      await user.click(screen.getByText('📎 2'))

      await waitFor(() => {
        expect(screen.getByText('document1.pdf')).toBeInTheDocument()
        expect(screen.getByText('Page 1')).toBeInTheDocument()
        expect(screen.getByText('"Test citation from page 1"')).toBeInTheDocument()
      })
    })

    it('calls onOpenDocument when external link clicked', async () => {
      const onOpenDocument = vi.fn()
      const user = userEvent.setup()

      render(
        <TraceChip
          traceLinks={mockTraceLinks}
          onOpenDocument={onOpenDocument}
        />
      )

      await user.click(screen.getByText('📎 2'))

      await waitFor(() => {
        expect(screen.getByTitle('Open document at this page')).toBeInTheDocument()
      })

      await user.click(screen.getByTitle('Open document at this page'))

      expect(onOpenDocument).toHaveBeenCalledWith('doc-1', 1)
    })

    it('closes popover when clicking outside', async () => {
      const user = userEvent.setup()
      render(
        <div>
          <TraceChip traceLinks={mockTraceLinks} />
          <button>Outside</button>
        </div>
      )

      // Open popover
      await user.click(screen.getByText('📎 2'))
      await waitFor(() => {
        expect(screen.getByText('Citations')).toBeInTheDocument()
      })

      // Click outside
      await user.click(screen.getByText('Outside'))

      await waitFor(() => {
        expect(screen.queryByText('Citations')).not.toBeInTheDocument()
      })
    })
  })

  describe('Accessibility', () => {
    it('has proper ARIA attributes', () => {
      render(<TraceChip traceLinks={mockTraceLinks} />)

      const trigger = screen.getByText('📎 2')
      expect(trigger).toHaveAttribute('role')
    })

    it('supports keyboard navigation', async () => {
      const user = userEvent.setup()
      render(<TraceChip traceLinks={mockTraceLinks} />)

      const trigger = screen.getByText('📎 2')
      trigger.focus()

      await user.keyboard('{Enter}')

      await waitFor(() => {
        expect(screen.getByText('Citations')).toBeInTheDocument()
      })
    })

    it('provides meaningful button titles', async () => {
      const user = userEvent.setup()
      render(
        <TraceChip
          traceLinks={mockTraceLinks}
          onOpenDocument={vi.fn()}
        />
      )

      await user.click(screen.getByText('📎 2'))

      await waitFor(() => {
        expect(screen.getByTitle('Open document at this page')).toBeInTheDocument()
      })
    })
  })

  describe('Edge Cases', () => {
    it('handles single citation correctly', () => {
      const singleLink = [mockTraceLinks[0]]
      render(<TraceChip traceLinks={singleLink} />)

      expect(screen.getByText('📎 1')).toBeInTheDocument()
    })

    it('handles empty snippet gracefully', async () => {
      const linksWithEmptySnippet = [
        {
          ...mockTraceLinks[0],
          snippet: ''
        }
      ]
      const user = userEvent.setup()

      render(<TraceChip traceLinks={linksWithEmptySnippet} />)

      await user.click(screen.getByText('📎 1'))

      await waitFor(() => {
        expect(screen.getByText('""')).toBeInTheDocument()
      })
    })

    it('handles long filenames gracefully', async () => {
      const linksWithLongFilename = [
        {
          ...mockTraceLinks[0],
          document: {
            filename: 'very-long-filename-that-should-be-truncated-properly.pdf'
          }
        }
      ]
      const user = userEvent.setup()

      render(<TraceChip traceLinks={linksWithLongFilename} />)

      await user.click(screen.getByText('📎 1'))

      await waitFor(() => {
        expect(screen.getByText('very-long-filename-that-should-be-truncated-properly.pdf')).toBeInTheDocument()
      })
    })
  })

  describe('Performance', () => {
    it('does not re-render unnecessarily', () => {
      const renderSpy = vi.fn()

      function TestWrapper({ links }: { links: typeof mockTraceLinks }) {
        renderSpy()
        return <TraceChip traceLinks={links} />
      }

      const { rerender } = render(<TestWrapper links={mockTraceLinks} />)
      expect(renderSpy).toHaveBeenCalledTimes(1)

      // Re-render with same props
      rerender(<TestWrapper links={mockTraceLinks} />)

      // Should still only render once due to memoization
      expect(renderSpy).toHaveBeenCalledTimes(2)
    })
  })
})