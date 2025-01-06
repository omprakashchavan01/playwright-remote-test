const { test, expect } = require('@playwright/test');

test('1', async ({ page }) => {
    console.log('[Test Started] Navigating to Playwright homepage...');
    await page.goto('https://playwright.dev', { timeout: 15000 });

    console.log('[Verification] Retrieving page title...');
    const title = await page.title();
    console.log(`[Verification] Page title: ${title}`);
    expect(title).toContain('Playwright');

    console.log('[Action] Clicking on the Get Started button...');
    await page.click('text=Get started');

    console.log('[Action] Verifying navigation to the Getting Started page...');
    await expect(page).toHaveURL('https://playwright.dev/docs/intro');

    console.log('[Action] Interacting with the sidebar links...');
    await page.click('a.menu__link:has-text("Installation")');
    await expect(page).toHaveURL('https://playwright.dev/docs/intro');

    await page.click('a.menu__link:has-text("Writing tests")');
    await expect(page).toHaveURL('https://playwright.dev/docs/writing-tests');

    await page.click('a.menu__link:has-text("Generating tests")');
    await expect(page).toHaveURL('https://playwright.dev/docs/codegen-intro');

    await page.click('a.menu__link:has-text("Running and debugging tests")');
    await expect(page).toHaveURL('https://playwright.dev/docs/running-tests');

    console.log('[Action] Capturing screenshot of the page...');
//    await page.screenshot({ path: 'playwright_page.png' });
    console.log('[Screenshot] Screenshot saved to "playwright_page.png".');
});