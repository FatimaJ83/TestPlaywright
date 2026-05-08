// Creating the first running test in Playwright

// Test Structure
// Basic Assertions
// Navigation
// Element Interactions

import { test, expect } from '@playwright/test';

// Test Structure
test('Verify our First Running Test', async ({ page }) => {

    // Navigate to the URL
    await page.goto('https://app.vwo.com');
    // Verify the title of the page
    
    await expect(page).toHaveTitle('Login - VWO');
    // Element Interactions
    const img_vwo = page.locator('img[alt="VWO"]');
    // Image to be visible
    await expect(img_vwo).toBeVisible();

    // For elemment interactions, we will be using
    // page.locator()
    // page.get....
});