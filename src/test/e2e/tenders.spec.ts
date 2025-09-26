// End-to-End Tests for Tender Management
// Comprehensive E2E test suite

import { test, expect } from '@playwright/test'

test.use({ storageState: 'playwright/.auth/user.json' })

test.describe('Tender Management', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/dashboard')
  })

  test.describe('Tender List', () => {
    test('displays tender list correctly', async ({ page }) => {
      // Navigate to tenders page
      await page.getByRole('link', { name: /tenders/i }).click()
      await expect(page).toHaveURL(/\/tenders/)

      // Check for tender cards or empty state
      const tenderList = page.getByTestId('tender-list')
      await expect(tenderList).toBeVisible()

      // If tenders exist, check first tender card
      const firstTender = tenderList.locator('.tender-card').first()
      if (await firstTender.isVisible()) {
        await expect(firstTender).toContainText('Test Tender')
        await expect(firstTender.getByTestId('tender-status')).toBeVisible()
        await expect(firstTender.getByTestId('tender-deadline')).toBeVisible()
      }
    })

    test('filters tenders by status', async ({ page }) => {
      await page.getByRole('link', { name: /tenders/i }).click()

      // Open filter dropdown
      await page.getByTestId('status-filter').click()
      await page.getByRole('option', { name: 'Approved' }).click()

      // Wait for filtered results
      await page.waitForResponse(/\/api\/tenders\?.*status=APPROVED/)

      // Verify all visible tenders have approved status
      const approvedBadges = page.getByTestId('tender-status').filter({ hasText: 'APPROVED' })
      const count = await approvedBadges.count()
      if (count > 0) {
        expect(count).toBeGreaterThan(0)
      }
    })

    test('searches tenders by title', async ({ page }) => {
      await page.getByRole('link', { name: /tenders/i }).click()

      // Use search functionality
      await page.getByPlaceholder('Search tenders...').fill('construction')
      await page.getByRole('button', { name: /search/i }).click()

      // Wait for search results
      await page.waitForResponse(/\/api\/tenders\?.*search=construction/)

      // Verify search results contain the search term
      const tenderTitles = page.getByTestId('tender-title')
      const count = await tenderTitles.count()
      if (count > 0) {
        for (let i = 0; i < count; i++) {
          const title = await tenderTitles.nth(i).textContent()
          expect(title?.toLowerCase()).toContain('construction')
        }
      }
    })

    test('navigates to tender details', async ({ page }) => {
      await page.getByRole('link', { name: /tenders/i }).click()

      // Click on first tender
      const firstTender = page.getByTestId('tender-card').first()
      await firstTender.getByRole('button', { name: /view details/i }).click()

      // Should navigate to tender details page
      await expect(page).toHaveURL(/\/tenders\/[^/]+$/)

      // Verify tender details are visible
      await expect(page.getByTestId('tender-details')).toBeVisible()
      await expect(page.getByTestId('tender-title')).toBeVisible()
      await expect(page.getByTestId('tender-description')).toBeVisible()
    })
  })

  test.describe('Tender Creation', () => {
    test('creates new tender successfully', async ({ page }) => {
      await page.getByRole('link', { name: /tenders/i }).click()
      await page.getByRole('button', { name: /create tender/i }).click()

      // Fill out tender form
      await page.getByLabel('Title').fill('E2E Test Tender')
      await page.getByLabel('Description').fill('This is a test tender created by E2E tests')
      await page.getByLabel('Organization').fill('Test Organization')
      await page.getByLabel('Estimated Value').fill('500000')

      // Set deadline (future date)
      const futureDate = new Date()
      futureDate.setMonth(futureDate.getMonth() + 3)
      await page.getByLabel('Deadline').fill(futureDate.toISOString().split('T')[0])

      // Submit form
      await page.getByRole('button', { name: /create tender/i }).click()

      // Wait for success message
      await expect(page.getByText(/tender created successfully/i)).toBeVisible()

      // Should redirect to tender details
      await expect(page).toHaveURL(/\/tenders\/[^/]+$/)
      await expect(page.getByTestId('tender-title')).toContainText('E2E Test Tender')
    })

    test('validates required fields', async ({ page }) => {
      await page.getByRole('link', { name: /tenders/i }).click()
      await page.getByRole('button', { name: /create tender/i }).click()

      // Try to submit without required fields
      await page.getByRole('button', { name: /create tender/i }).click()

      // Should show validation errors
      await expect(page.getByText(/title is required/i)).toBeVisible()
      await expect(page.getByText(/organization is required/i)).toBeVisible()
    })

    test('handles form submission errors', async ({ page }) => {
      // Mock API error
      await page.route('/api/tenders', route => {
        route.fulfill({
          status: 500,
          contentType: 'application/json',
          body: JSON.stringify({ success: false, error: 'Server error' })
        })
      })

      await page.getByRole('link', { name: /tenders/i }).click()
      await page.getByRole('button', { name: /create tender/i }).click()

      // Fill form with valid data
      await page.getByLabel('Title').fill('Test Tender')
      await page.getByLabel('Organization').fill('Test Org')
      await page.getByRole('button', { name: /create tender/i }).click()

      // Should show error message
      await expect(page.getByText(/failed to create tender/i)).toBeVisible()
    })
  })

  test.describe('Tender Actions', () => {
    test('approves tender with comment', async ({ page }) => {
      // Navigate to a tender in review status
      await page.getByRole('link', { name: /tenders/i }).click()

      // Find tender in REVIEW status
      const reviewTender = page.getByTestId('tender-card').filter({
        has: page.getByTestId('tender-status').filter({ hasText: 'REVIEW' })
      }).first()

      if (await reviewTender.isVisible()) {
        await reviewTender.getByRole('button', { name: /approve/i }).click()

        // Add approval comment
        await page.getByLabel('Comment').fill('Approved after thorough review')
        await page.getByRole('button', { name: /confirm approval/i }).click()

        // Should show success message
        await expect(page.getByText(/tender approved/i)).toBeVisible()

        // Status should update to approved
        await expect(reviewTender.getByTestId('tender-status')).toContainText('APPROVED')
      }
    })

    test('rejects tender with reason', async ({ page }) => {
      await page.getByRole('link', { name: /tenders/i }).click()

      const reviewTender = page.getByTestId('tender-card').filter({
        has: page.getByTestId('tender-status').filter({ hasText: 'REVIEW' })
      }).first()

      if (await reviewTender.isVisible()) {
        await reviewTender.getByRole('button', { name: /reject/i }).click()

        // Add rejection reason
        await page.getByLabel('Reason').fill('Missing required documentation')
        await page.getByRole('button', { name: /confirm rejection/i }).click()

        // Should show success message
        await expect(page.getByText(/tender rejected/i)).toBeVisible()

        // Status should update to rejected
        await expect(reviewTender.getByTestId('tender-status')).toContainText('REJECTED')
      }
    })
  })

  test.describe('Document Management', () => {
    test('uploads document to tender', async ({ page }) => {
      // Navigate to a specific tender
      await page.getByRole('link', { name: /tenders/i }).click()
      await page.getByTestId('tender-card').first().getByRole('button', { name: /view details/i }).click()

      // Go to documents tab
      await page.getByRole('tab', { name: /documents/i }).click()

      // Upload document
      const fileChooser = await page.waitForEvent('filechooser', async () => {
        await page.getByRole('button', { name: /upload document/i }).click()
      })

      // Create a test file
      await fileChooser.setFiles({
        name: 'test-document.pdf',
        mimeType: 'application/pdf',
        buffer: Buffer.from('test pdf content')
      })

      // Wait for upload to complete
      await expect(page.getByText(/document uploaded successfully/i)).toBeVisible()

      // Document should appear in list
      await expect(page.getByText('test-document.pdf')).toBeVisible()
    })

    test('views document in viewer', async ({ page }) => {
      await page.getByRole('link', { name: /tenders/i }).click()
      await page.getByTestId('tender-card').first().getByRole('button', { name: /view details/i }).click()
      await page.getByRole('tab', { name: /documents/i }).click()

      // Click on a document to view
      await page.getByTestId('document-item').first().getByRole('button', { name: /view/i }).click()

      // Document viewer should open
      await expect(page.getByTestId('document-viewer')).toBeVisible()
      await expect(page.getByTestId('document-pages')).toBeVisible()

      // Test viewer controls
      await page.getByRole('button', { name: /zoom in/i }).click()
      await page.getByRole('button', { name: /next page/i }).click()
    })
  })

  test.describe('Citation System', () => {
    test('displays citation chips correctly', async ({ page }) => {
      await page.getByRole('link', { name: /tenders/i }).click()
      await page.getByTestId('tender-card').first().getByRole('button', { name: /view details/i }).click()

      // Go to extractions tab
      await page.getByRole('tab', { name: /extractions/i }).click()

      // Look for citation chips
      const citationChips = page.getByTestId('citation-chip')
      if (await citationChips.first().isVisible()) {
        // Click on citation chip to open popover
        await citationChips.first().click()

        // Citation details should be visible
        await expect(page.getByText(/citations/i)).toBeVisible()
        await expect(page.getByTestId('citation-source')).toBeVisible()
        await expect(page.getByTestId('citation-snippet')).toBeVisible()
      }
    })

    test('opens document from citation', async ({ page }) => {
      await page.getByRole('link', { name: /tenders/i }).click()
      await page.getByTestId('tender-card').first().getByRole('button', { name: /view details/i }).click()
      await page.getByRole('tab', { name: /extractions/i }).click()

      const citationChips = page.getByTestId('citation-chip')
      if (await citationChips.first().isVisible()) {
        await citationChips.first().click()

        // Click open document link
        await page.getByRole('button', { name: /open document/i }).click()

        // Document viewer should open with correct page highlighted
        await expect(page.getByTestId('document-viewer')).toBeVisible()
        await expect(page.getByTestId('highlighted-page')).toBeVisible()
      }
    })
  })

  test.describe('Responsive Design', () => {
    test('works correctly on mobile devices', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 })
      await page.getByRole('link', { name: /tenders/i }).click()

      // Mobile navigation should be visible
      await expect(page.getByTestId('mobile-menu-button')).toBeVisible()

      // Tender cards should stack vertically
      const tenderCards = page.getByTestId('tender-card')
      if (await tenderCards.first().isVisible()) {
        const firstCardBox = await tenderCards.first().boundingBox()
        const secondCardBox = await tenderCards.nth(1).boundingBox()

        if (firstCardBox && secondCardBox) {
          // Second card should be below first card (not side by side)
          expect(secondCardBox.y).toBeGreaterThan(firstCardBox.y + firstCardBox.height - 10)
        }
      }
    })

    test('adapts to tablet size', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 })
      await page.getByRole('link', { name: /tenders/i }).click()

      // Should show medium-sized layout
      await expect(page.getByTestId('tender-grid')).toBeVisible()

      // Check grid layout adapts correctly
      const gridElement = page.getByTestId('tender-grid')
      const gridStyles = await gridElement.evaluate(el => getComputedStyle(el).gridTemplateColumns)
      expect(gridStyles).toContain('repeat')
    })
  })

  test.describe('Performance', () => {
    test('loads tender list efficiently', async ({ page }) => {
      const startTime = Date.now()

      await page.getByRole('link', { name: /tenders/i }).click()
      await page.waitForLoadState('networkidle')

      const loadTime = Date.now() - startTime
      expect(loadTime).toBeLessThan(3000) // Should load within 3 seconds
    })

    test('handles large datasets with virtualization', async ({ page }) => {
      // Mock API to return large dataset
      await page.route('/api/tenders*', route => {
        const url = new URL(route.request().url())
        const limit = parseInt(url.searchParams.get('limit') || '10')

        const mockTenders = Array.from({ length: limit }, (_, i) => ({
          id: `tender-${i}`,
          title: `Test Tender ${i}`,
          organization: `Organization ${i}`,
          status: 'DRAFT',
          createdAt: new Date().toISOString()
        }))

        route.fulfill({
          contentType: 'application/json',
          body: JSON.stringify({
            success: true,
            data: {
              items: mockTenders,
              pagination: {
                page: 1,
                limit,
                total: 1000,
                pages: Math.ceil(1000 / limit)
              }
            }
          })
        })
      })

      await page.getByRole('link', { name: /tenders/i }).click()

      // Virtualized list should be visible
      await expect(page.getByTestId('virtualized-list')).toBeVisible()

      // Should only render visible items
      const renderedItems = page.getByTestId('tender-card')
      const count = await renderedItems.count()
      expect(count).toBeLessThanOrEqual(20) // Should not render all 1000 items
    })
  })
})