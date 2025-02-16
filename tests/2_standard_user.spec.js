// @ts-check
import { test, expect } from '@playwright/test';


test('Dashboard Page', async ({page})=>{

    await page.goto('https://www.saucedemo.com/');

    await page.waitForTimeout(2000);

    //standard_user Login
    await page.locator('#user-name').fill('standard_user')
    await page.locator('#password').fill('secret_sauce')
    await page.locator('//input[@id=\'login-button\']').click()

    //expect(locator).toHaveText  ---------- matches text
    await expect(await page.locator('.app_logo')).toHaveText("Swag Labs")
    await page.waitForTimeout(3000);

    //Hamburger_menu
    await page.locator('//button[@id=\'react-burger-menu-btn\']').click()
    //Reset_App_State
    await page.locator('//a[@id=\'reset_sidebar_link\']').click()
    await page.waitForTimeout(2000);
    //Close_Hamburger_menu
    await page.locator('//button[@id=\'react-burger-cross-btn\']').click()

    await page.waitForTimeout(2000);

    //Add three items to the cart
    await page.locator('//button[@id=\'add-to-cart-sauce-labs-backpack\']').click()
    await page.locator('//button[@id=\'add-to-cart-sauce-labs-bolt-t-shirt\']').click()
    await page.locator('//button[@id=\'add-to-cart-sauce-labs-onesie\']').click()

    //Page_scroll_up
    await page.evaluate(() => {
        window.scrollBy(0, -2450);
    });

    await page.waitForTimeout(3000);

    //checkout page
    await page.locator('//a[@class=\'shopping_cart_link\']').click()
    await page.waitForTimeout(3000);
    await page.locator('//button[@id=\'checkout\']').click()

    await page.waitForTimeout(3000);

    //Checkout:Information
    await page.locator('#first-name').fill('Shahid')
    await page.locator('#last-name').fill('Hossain')
    await page.locator('#postal-code').fill('1203')
    await page.locator('//input[@id=\'continue\']').click()
    await page.waitForTimeout(2000);
    await page.locator('//button[@id=\'finish\']').click()

    await page.waitForTimeout(2000);

    //expect(locator).toHaveText  ---------- matches text
    await expect(await page.locator('.complete-header'))
        .toHaveText("Thank you for your order!")

    //Click_Hamburger_menu
    await page.locator('//button[@id=\'react-burger-menu-btn\']').click()
    //Click_Reset_App_State
    await page.locator('//a[@id=\'reset_sidebar_link\']').click()
    //Click_Logout_menu
    await page.locator('//a[@id=\'logout_sidebar_link\']').click()

    await page.close();

})
