import { chromium, Browser, BrowserContext, Page } from 'playwright';

async function run() {
    // Level 1: Launch the browser - heaviest operation, do it once
    let browser: Browser = await chromium.launch({ headless: false });
    console.log('Browser Launched');

    // Level 2: Create a new browser context - fresh session, isolated cookies, cache, etc.
    let context: BrowserContext = await browser.newContext();
    console.log('Context Created');

    // Level 3: Open page — a tab inside the context
    let page: Page = await context.newPage();
    console.log('Page Created');

    await page.goto('https://app.vwo.com');
    console.log('Title of the page is: ', await page.title());

    // CleanUp - reverse order of creation
    await page.close();
    console.log('Page Closed');
    await context.close();
    console.log('Context Closed');
    await browser.close();
    console.log('Browser Closed');
}

run();

// Brower Launched
// Context Created
// Page Created
// Title of the page is:  Login - VWO
// Page Closed
// Context Closed
// Browser Closed