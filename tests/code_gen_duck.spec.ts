import { test, expect } from '@playwright/test';
test('duckduckgo', async ({ page }) => {
  // Go to https://duckduckgo.com/
  await page.goto('https://duckduckgo.com/');
  // Click [placeholder="Search without being tracked"]
  await page.locator('[placeholder="Search without being tracked"]').click();
  // Click [placeholder="Search without being tracked"]
  await page.locator('[placeholder="Search without being tracked"]').click();
  // Fill [placeholder="Search without being tracked"]
  await page.locator('[placeholder="Search without being tracked"]').fill('Duck');
  // Press Enter
  await page.locator('[placeholder="Search without being tracked"]').press('Enter');
  await expect(page).toHaveURL('https://duckduckgo.com/?va=j&t=hc&q=Duck');
});