import { test, expect } from "@playwright/test";

test("two users interact", async ({ browser }) => {
    // We used browser directly, so we have to create contexts and pages manually

    let adminContext = await browser.newContext();
    let adminPage = await adminContext.newPage();

    let guestContext = await browser.newContext();
    let guestPage = await guestContext.newPage();

    await adminPage.goto("https://app.vwo.com/#login");
    await guestPage.goto("https://app.vwo.com/#dashboard/home");
    console.log("Admin URL:", adminPage.url());
    console.log("Guest URL:", guestPage.url());
    await adminContext.close();
    await guestContext.close();

});

// Execute in Terminal -> npx playwright test tests/02_First_Tests/216_Manual_Context.spec.ts --headed
//Admin URL: https://app.vwo.com/#/login
//Guest URL: https://app.vwo.com/#/login