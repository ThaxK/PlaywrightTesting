import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.com/-/es/ref=nav_logo');
  await page.getByLabel('Teclados').click();
  await page.locator('#a-autoid-1-announce').click();
  await page.getByRole('link', { name: 'Ir al Carrito' }).click();
});