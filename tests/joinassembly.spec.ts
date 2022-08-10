import { test, expect } from '@playwright/test';

test('joinAssemblyLogin', async ({ page }) => {

  // Go to https://www.joinassembly.com/
  await page.goto('https://www.joinassembly.com/');

  // Click #login-header-button
  await page.locator('xpath=//a[@id="login-header-button"]').click();
  await expect(page).toHaveURL('https://my.joinassembly.com/signin');

  // Fill [placeholder="name\@workemail\.com"]
  await page.locator('xpath=//input[@placeholder="name@workemail.com"]').fill('jayashreesm1994@gmail.com');

  // Click [placeholder="name\@workemail\.com"]
  await page.locator('xpath=//button[@type="submit"]').click();

  // Fill [aria-label="password"]
  await page.locator('xpath=//input[@id="password"]').fill('Avinash@123');

  // Click [data-testid="undefined-button"]
  await page.locator('xpath=//button[@type="submit"]').click();
  await expect(page).toHaveURL('https://my.joinassembly.com/home');

});