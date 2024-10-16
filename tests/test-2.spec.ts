import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  //.s-result-list .puis-card-container 

  await page.goto('https://www.amazon.com/s?i=specialty-aps&bbn=16225007011&rh=n%3A16225007011%2Cn%3A172456&language=es&ref=nav_em__nav_desktop_sa_intl_computer_accessories_and_peripherals_0_2_6_2');
  //await page.getByLabel('Abrir menú de todas las').click();
  //await page.pause();
  //await page.getByRole('link', { name: 'Computadoras' }).click();
  //await page.getByRole('link', { name: 'Accesorios y periféricos para computadoras' }).click();
  const firstItemPrice= await page.locator('.puis-card-container .a-price').first().innerText;
  await page.locator('#a-autoid-1-announce').click();
  await page.getByRole('link', { name: 'Ir al Carrito' }).click();
  const priceItemActual= await page.locator('.sc-list-item .sc-price').innerText();
  expect(firstItemPrice).toEqual(firstItemPrice);
}); 