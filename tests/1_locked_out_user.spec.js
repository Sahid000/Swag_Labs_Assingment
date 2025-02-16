// @ts-check
import { test, expect } from '@playwright/test';


test('Swag Labs Login Page', async ({page})=>{

    await page.goto('https://www.saucedemo.com/');

    const pageUrl = page.url();
    console.log('Page URL is:', pageUrl);
    await expect(page).toHaveURL('https://www.saucedemo.com/');

    await page.waitForTimeout(2000);

    //locked_out_user Login
    await page.locator('#user-name').fill('locked_out_user')
    await page.locator('#password').fill('secret_sauce')
    await page.locator('//input[@id=\'login-button\']').click()

    //expect(locator).toHaveText  ---------- matches text
    await expect(await page.locator('//h3[contains(text(),\'Epic sadface: Sorry, this user has been locked out\')]'))
        .toContainText("Epic sadface: Sorry,")//Full

    await page.waitForTimeout(2000);

    await page.close();
})
