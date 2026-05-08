import { chromium } from 'playwright';

async function multiUserTest() {

    let browser = await chromium.launch({ headless: false });

    // Admin User
    let adminContext = await browser.newContext();
    let adminPage = await adminContext.newPage();
    await adminPage.goto('https://app.vwo.com');
    console.log('Admin User - Title of the page is: ', await adminPage.title());


    // Viewer User
    let viewerContext = await browser.newContext();
    let viewerPage = await viewerContext.newPage();
    await viewerPage.goto('https://app.vwo.com');
    console.log('Viewer User - Title of the page is: ', await viewerPage.title());

    await adminPage.close();
    console.log('Admin Page Closed');
    await viewerPage.close();
    console.log('Viewer Page Closed');
    await adminContext.close();
    console.log('Admin Context Closed');
    await viewerContext.close();
    console.log('Viewer Context Closed');
    await browser.close();
    console.log('Browser Closed');

}

multiUserTest();