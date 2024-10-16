import { test, expect } from '@playwright/test';
import exp from 'constants';
import { LoginPage } from './pageObjects/loginSauceDemo';

test('test', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    //await page.getByRole('textbox',{name:'Username'}).fill('standard_user');
    //await page.getByRole('textbox',{name:'Password'}).fill('secret_sauce');
    //await page.getByRole('button',{name:'Login'}).click();

    const loginpage = new LoginPage(page);

    //await page.pause()

    await loginpage.fillUsername();
    await loginpage.fillPassword();
    await loginpage.clickButton();

    //await page.pause()

    const items =  await page.locator('#inventory_container .inventory_item').all();

    const randomIndex= Math.floor(Math.random()) * items.length;

    const randomItem= items[randomIndex];

    const descripcionEsperada= await randomItem.locator('.inventory_item_desc').innerText();
    const nombreEsperado= await randomItem.locator('.inventory_item_name').innerText();
    const precioEsperado= await randomItem.locator('.inventory_item_price').innerText();

    await randomItem.getByRole('button', {name: 'Add to cart'}).click();

    await page.locator('.shopping_cart_link').click();

    const nombreActual= await page.locator('.inventory_item_name').innerText();
    const descripcionActual= await page.locator('.inventory_item_desc').innerText();
    const precioActual= await page.locator('.inventory_item_price').innerText();

    expect(nombreActual).toEqual(nombreEsperado);
    expect(descripcionActual).toEqual(descripcionEsperada);
    expect(precioActual).toEqual(precioEsperado);

    if(descripcionActual == descripcionEsperada && nombreActual == nombreEsperado && precioActual == precioEsperado){
        console.log('El objeto se agrego correctamente');
    }

    await page.getByRole('button', {name: 'Checkout'}).click();

    await page.getByRole('textbox', {name: 'First Name'}).fill('Juan');
    await page.getByRole('textbox', {name: 'Last Name'}).fill('Serna');
    await page.getByRole('textbox', {name: 'Zip/Postal Code'}).fill('280001');

    await page.getByRole('button', {name: 'Continue'}).click();

    await page.getByRole('button', {name: 'Finish'}).click();

    expect(await page.locator('.complete-header')).toBeVisible();

    const compra= await page.locator('.complete-header').innerText();

    expect(compra).toEqual('Thank you for your order!');

    console.log('Se realizo correctamente la compra!');
  });