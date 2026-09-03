import {test as base} from '@playwright/test'
//fixture
export const test= base.extend({
    auth:async({page},use)=>{
        await page.goto("https://www.saucedemo.com/")
        await page.locator('[data-test="username"]').fill('standard_user')
        await page.locator('[data-test="password"]').fill('secret_sauce')
        await page.locator('[data-test="login-button"]').click()
        await use({page})
    },
});