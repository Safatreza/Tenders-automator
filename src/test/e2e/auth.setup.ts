// Playwright Authentication Setup
// Global authentication setup for E2E tests

import { test as setup, expect } from '@playwright/test'

const authFile = 'playwright/.auth/user.json'

setup('authenticate', async ({ page }) => {
  // Go to login page
  await page.goto('/auth/signin')

  // Check if we're already logged in (redirect to dashboard)
  if (page.url().includes('/dashboard')) {
    await page.context().storageState({ path: authFile })
    return
  }

  // Wait for email input and login form
  await expect(page.getByLabel('Email')).toBeVisible()

  // Fill in test credentials
  await page.getByLabel('Email').fill(process.env.TEST_USER_EMAIL || 'test@example.com')

  // Click sign in button
  await page.getByRole('button', { name: /sign in/i }).click()

  // In a real app, you might need to:
  // 1. Check email for magic link
  // 2. Handle OAuth flow
  // 3. Wait for session to be established

  // For testing, we'll mock the success state
  // Wait for successful login redirect
  await expect(page).toHaveURL(/\/dashboard/)

  // Ensure user is properly authenticated
  await expect(page.getByTestId('user-menu')).toBeVisible()

  // Save authentication state
  await page.context().storageState({ path: authFile })
})