 import { expect } from '@playwright/test'
 import {test,auth} from '../fixtures/auth.js'
//Hooks
test.beforeAll(async()=>{
    console.log("Before all test")
})

test.afterAll(async()=>{
    console.log("After all test")
})

test.beforeEach(async()=>{
    console.log("Before each test")
})

test.afterEach(async()=>{
    console.log("After each test")
})


test("login test on saucedemo", async({auth})=>{
    await expect(auth.page).toHaveURL("https://www.saucedemo.com/inventory.html")
})

test("add to cart test on saucedemo", async({auth})=>{
    await auth.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    await auth.page.locator('.shopping_cart_link').click()
    await expect(auth.page).toHaveURL("https://www.saucedemo.com/cart.html")
})