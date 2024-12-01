const { chromium } = require('playwright');

(async () => {
  // Launch a Chromium browser
  const browser = await chromium.launch({ headless: false }); // Set to 'true' for headless mode
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    // Open Google
    await page.goto('https://www.google.com');
    console.log('Opened Google');

    // Find the search box element by name attribute and enter a search query
    await page.fill('input[name="q"]', 'Selenium Python');
    await page.keyboard.press('Enter');
    console.log('Search executed');

    // Wait for results to load
    await page.waitForTimeout(2000); // Wait for 2 seconds

    // Get the first search result
    const firstResult = await page.locator('h3').first();
    const firstResultTitle = await firstResult.textContent();
    console.log('First result title:', firstResultTitle);

    // Optionally click the first result
    await firstResult.click();
    console.log('Clicked on the first result');

    // Pause to observe (optional)
    await page.waitForTimeout(5000); // Wait for 5 seconds
  } finally {
    // Close the browser
    await browser.close();
    console.log('Browser closed');
  }
})();
