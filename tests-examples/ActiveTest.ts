import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');
});


test.describe('New Todo', () => {
  test('should allow me to click on Ative', async ({ page }) => {
    // Create 1st todo.
    await page.locator('.selected').click;
  });
});
