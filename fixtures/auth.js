import {test as base} from '@playwright/test'
import dotenv from 'dotenv';
dotenv.config();
//const baseurl = process.env.SAUCELAB_URL
const {SAUCELAB_URL,SAUCELAB_USERNAME,SAUCELAB_PASSWORD} = process.env
//fixture
export const test= base.extend({
    auth:async({page},use)=>{
        await page.goto(SAUCELAB_URL)
        await page.locator('[data-test="username"]').fill(SAUCELAB_USERNAME)
        await page.locator('[data-test="password"]').fill(SAUCELAB_PASSWORD)
        await page.locator('[data-test="login-button"]').click()
        await use({page})
    },
});