import { test, expect, Page } from '@playwright/test';

test ('Verfiy name is available and click the checkbox', async ({page})=>{
    await page.goto('https://app.thetestingacademy.com/playwright/webtable', { waitUntil: 'networkidle' });

    // Wait for the search box to be visible
    await page.getByLabel('Search employee table').waitFor({ state: 'visible', timeout: 10000 });
    
    // Now fill it
    await page.getByLabel('Search employee table').fill('Kabir');
    await page.getByRole('button', {name: 'Select Cloud QA'}).click();

    

    //validate visibility
const usernameRow= page.locator("tr[data-username='Kabir.Khan']");
await expect (usernameRow.locator('td', { hasText: 'Kabir.Khan' })).toBeVisible();

// Click the checkbox to select it
await usernameRow.locator("input[type='checkbox']").click();

// validate if checkbox is checked
await expect (usernameRow.locator("input[type='checkbox']")).toBeChecked();

//validate if selected username appears
await expect(page.locator('.selected-output')).toContainText("Kabir.Khan");
}, { timeout: 60000 });
