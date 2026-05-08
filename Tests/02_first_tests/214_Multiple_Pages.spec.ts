import { chromium, Browser, BrowserContext } from "playwright";
async function multiTabTest() {
    let browser: Browser = await chromium.launch({ headless: false });
    let context: BrowserContext = await browser.newContext();

    // Tab 1
    let page1 = await context.newPage();
    await page1.goto("https://app.vwo.com/#login");
    console.log("Tab 1: Login");

    // Tab 2 — same context, shares cookies with Tab 1
    let page2 = await context.newPage();
    await page2.goto("https://app.vwo.com/#dashboard");
    console.log("Tab 2: Dashboard");

    await page1.close();
    console.log("Tab 1 Closed");
    await page2.close();
    console.log("Tab 2 Closed");
    await context.close();
    console.log("Context Closed");
    await browser.close();
    console.log("Browser Closed");

}
multiTabTest();