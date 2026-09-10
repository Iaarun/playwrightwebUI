# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: testlogin.spec.js >> add to cart test on saucedemo
- Location: tests\testlogin.spec.js:25:5

# Error details

```
Test timeout of 15000ms exceeded.
```

```
Error: locator.click: Test timeout of 15000ms exceeded.
Call log:
  - waiting for locator('[data-test="add-to-cart-sauce-labs-backpack1"]')

```

# Test source

```ts
  1  |  import { expect } from '@playwright/test'
  2  |  import {test,auth} from '../fixtures/auth.js'
  3  | //Hooks
  4  | test.beforeAll(async()=>{
  5  |     console.log("Before all test")
  6  | })
  7  | 
  8  | test.afterAll(async()=>{
  9  |     console.log("After all test")
  10 | })
  11 | 
  12 | test.beforeEach(async()=>{
  13 |     console.log("Before each test")
  14 | })
  15 | 
  16 | test.afterEach(async()=>{
  17 |     console.log("After each test")
  18 | })
  19 | 
  20 | 
  21 | test("login test on saucedemo", async({auth})=>{
  22 |     await expect(auth.page).toHaveURL("https://www.saucedemo.com/inventory.html")
  23 | })
  24 | 
  25 | test("add to cart test on saucedemo", async({auth})=>{
> 26 |     await auth.page.locator('[data-test="add-to-cart-sauce-labs-backpack1"]').click()
     |                                                                               ^ Error: locator.click: Test timeout of 15000ms exceeded.
  27 |     await auth.page.locator('.shopping_cart_link').click()
  28 |     await expect(auth.page).toHaveURL("https://www.saucedemo.com/cart.html")
  29 | })
```