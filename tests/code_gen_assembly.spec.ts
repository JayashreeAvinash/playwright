import { test, expect } from '@playwright/test';

test('joinAssembly', async ({ page }) => {

  // Go to https://www.joinassembly.com/
  await page.goto('https://www.joinassembly.com/');

  // Click #login-header-button
  await page.locator('#login-header-button').click();
  await expect(page).toHaveURL('https://my.joinassembly.com/signin');

  // Fill [placeholder="name\@workemail\.com"]
  await page.locator('[placeholder="name\\@workemail\\.com"]').fill('jayashreesm1994@gmail.com');

  // Click [placeholder="name\@workemail\.com"]
  await page.locator('[placeholder="name\\@workemail\\.com"]').click();

  // Click [data-testid="undefined-button"]
  await page.locator('[data-testid="undefined-button"]').click();

  // Fill [aria-label="password"]
  await page.locator('[aria-label="password"]').fill('Avinash@123');

  // Click [data-testid="undefined-button"]
  await page.locator('[data-testid="undefined-button"]').click();
  await expect(page).toHaveURL('https://my.joinassembly.com/home');

});