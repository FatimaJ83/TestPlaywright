import { test, expect } from '@playwright/test';

test('context with options', async ({ browser }) => {
    const context = await browser.newContext({
        viewport: { width: 1920, height: 1080 },
        locale: 'fr-FR',
        timezoneId: 'Europe/Paris',
        geolocation: { latitude: 48.8566, longitude: 2.3522 },
        permissions: ['geolocation'],
    });

    const page = await context.newPage();
    await page.goto('https://app.vwo.com/#login');

    await context.close();
});

// Execute in Terminal -> npx playwright test tests/02_First_Tests/217_Manual_Context_withOptions.spec.ts --headed
// This test will open the login page in a context with the following options:
// - Viewport: 1920x1080
// - Locale: French (France)
// - Timezone: Europe/Paris
// - Geolocation: Latitude 48.8566, Longitude 2.3522 (Paris)
// - Permissions: Geolocation allowed

test('mobile context', async ({ browser }) => {
    const iPhone = {
        viewport: { width: 375, height: 667 },
        userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X)',
        deviceScaleFactor: 2,
        isMobile: true,
        hasTouch: true,
    };

    const context = await browser.newContext(iPhone);
    const page = await context.newPage();

    await page.goto('https://app.vwo.com/#login');

    await context.close();
});

// Execute in Terminal -> npx playwright test tests/02_First_Tests/217_Manual_Context_withOptions.spec.ts --headed
// This test will open the Playwright website in a context that simulates an iPhone with the specified viewport, user agent, device scale factor, and touch capabilities.

// Scenario 1: Context with HTTP Credentials
test('context with HTTP auth', async ({ browser }) => {
    const context = await browser.newContext();

    const page = await context.newPage();
    await page.goto('https://admin:admin@the-internet.herokuapp.com/basic_auth');
    // Will auto-authenticate for HTTP Basic Auth with the provided credentials
    //https://the-internet.herokuapp.com/basic_auth is a test page that requires HTTP Basic Authentication. With the provided credentials username and password as 'admin', the test will successfully authenticate and access the page.

    await context.close();
});

test('fresh context like incognito', async ({ browser }) => {
    // Each newContext() is like incognito
    // No shared cookies, localStorage, etc.

    const context1 = await browser.newContext();
    const context2 = await browser.newContext();

    // These are completely isolated
    const page1 = await context1.newPage();
    const page2 = await context2.newPage();

    await context1.close();
    await context2.close();
});

// Context Events we will be using rarely in real tests, but good to know they exist
test('context events', async ({ browser }) => {
    const context = await browser.newContext();

    // Listen for new pages
    context.on('page', page => {
        console.log('New page opened:', page.url());
    });

    const page = await context.newPage();
    await page.goto('https://playwright.dev');

    await context.close();
});