# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: testlogin.spec.js >> add to cart test on saucedemo
- Location: tests\testlogin.spec.js:25:6

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://www.saucedemo.com/cart.html1"
Received: "https://www.saucedemo.com/cart.html"
Timeout:  10000ms

Call log:
  - Expect "toHaveURL" with timeout 10000ms
    23 × locator resolved to <html lang="en">…</html>
       - unexpected value "https://www.saucedemo.com/cart.html"

```

```yaml
- banner:
  - button "Open Menu"
  - img "Open Menu"
  - text: Swag Labs
  - button "Cart, 1 items": "1"
  - text: Your Cart
- main:
  - text: QTY Description 1
  - button "View details for Sauce Labs Backpack": Sauce Labs Backpack
  - text: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection. $29.99
  - button "Remove"
  - button "Continue Shopping"
  - button "Checkout"
- contentinfo:
  - list:
    - listitem:
      - link "X":
        - /url: https://x.com/saucelabs
    - listitem:
      - link "Facebook":
        - /url: https://www.facebook.com/saucelabs
    - listitem:
      - link "LinkedIn":
        - /url: https://www.linkedin.com/company/sauce-labs/
  - text: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
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
  25 | test.only("add to cart test on saucedemo", async({auth})=>{
  26 |     await auth.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click()
  27 |     await auth.page.locator('.shopping_cart_link').click()
> 28 |     await expect(auth.page).toHaveURL("https://www.saucedemo.com/cart.html1")
     |                             ^ Error: expect(page).toHaveURL(expected) failed
  29 | })
```