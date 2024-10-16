import { test, expect } from '@playwright/test';


test('pruebaAbrirPagina', async ({page}) =>{
  await page.goto('https://www.mercadolibre.com.co/');

  await page.locator('input[id=\'cb1-edit\']').fill('samsung');

  await page.keyboard.press('Enter');

  await expect(page.locator('//ol[contains(@class, \'ui-search-layout\')]')).toBeVisible();

  const titulos = await page.locator('//ol[contains(@class, \'ui-search-layout\')]//li//h2').allInnerTexts();

  console.log("La cantidad de titulos encontrados es:", titulos.length);

  for(let titulo of titulos){
    console.log("El titulo es:",titulo);
  }
});
