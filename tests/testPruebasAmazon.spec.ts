import { test, expect } from '@playwright/test';
import { time } from 'console';

test('pruebaAbrirAmazon',async({page})=>{
    
    await page.goto('https://www.amazon.com/-/es/');

    await expect(page.locator('//a[@id=\'nav-logo-sprites\']')).toBeVisible();
})

test('agregarUnObjetoAlCarrito',async({page})=>{
    
    await page.goto('https://www.amazon.com/s?k=gaming+keyboard&language=es&_encoding=UTF8&content-id=amzn1.sym.8148f1e1-83ed-498f-85be-ff288b197da7&pd_rd_r=d0e96cc2-6fd4-4ef7-afae-90492f91e4f5&pd_rd_w=7Y3To&pd_rd_wg=vRcE8&pf_rd_p=8148f1e1-83ed-498f-85be-ff288b197da7&pf_rd_r=9CHKPZ30G3QJBZBJQ3MM&ref=pd_hp_d_atf_unk');

    await page.locator('//button[@class=\'a-button-text\' and contains(text(), \'Agregar al carrito\')]').first().click();

    const isVisible = await page.locator('//div[@class=\'a-changeover puis-atcb-notification\']').isVisible();

    if (isVisible) {
        console.log('El elemento es visible.');
    } else {
        console.log('El elemento tiene display: none o está oculto.');
    }
})

