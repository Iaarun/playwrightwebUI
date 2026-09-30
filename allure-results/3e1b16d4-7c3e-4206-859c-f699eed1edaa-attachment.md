# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: apitests.spec.js >> Get All employees
- Location: tests\apitests.spec.js:6:5

# Error details

```
TypeError: response.status(...).toBe is not a function
```

# Test source

```ts
  1 | // api test file
  2 | import { expect, test } from "@playwright/test";
  3 | 
  4 | // get all employees api
  5 | 
  6 | test('Get All employees', async({request})=>{
  7 |    const response =  await request.get("http://localhost:3000/employees")
> 8 |    expect(response.status().toBe(200))
    |                             ^ TypeError: response.status(...).toBe is not a function
  9 | })
```