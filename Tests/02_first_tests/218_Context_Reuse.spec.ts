// Reuse context Across Tests

import { test } from "@playwright/test";
t
test.describe("Shared Context Test", () => {
    // Context is same for all tests in this describe block
    test.use({
        viewport: { width: 1280, height: 720 },
        locale: 'en-US',
    });

    test("test 1", async ({ page }) => {
        await page.goto("https://app.vwo.com/#login");
        console.log("Test 1 URL:", page.url());
    });

    test("test 2", async ({ page }) => {
        await page.goto("https://app.vwo.com/#dashboard/home");
        console.log("Test 2 URL:", page.url());
    });

    // Execute in Terminal -> npx playwright test tests/02_First_Tests/218_Context_Reuse.spec.ts --headed
    // Both tests will run in the same context, sharing the viewport and locale settings. The first test will navigate to the login page, and the second test will navigate to the dashboard home page, demonstrating that they are using the same context and can share state if needed.
    // Test 1 URL: https://app.vwo.com/#/login
    // Test 2 URL: https://app.vwo.com/#/dashboard/home
});