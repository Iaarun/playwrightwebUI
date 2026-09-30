# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: apitests.spec.js >> Create  employees
- Location: tests\apitests.spec.js:39:6

# Error details

```
TypeError: responsebody.json is not a function
```

# Test source

```ts
  1  | // api test file
  2  | import { expect, test } from "@playwright/test";
  3  | 
  4  | // get all employees api
  5  | 
  6  | test('Get All employees', async({request})=>{
  7  |    const response =  await request.get("http://localhost:3000/employees")
  8  |    console.log(response.status())
  9  |    expect(response.status()).toBe(200)
  10 |   
  11 |    const responsebody =  await response.json()
  12 |    console.log(responsebody[0].first_name)
  13 |   expect(responsebody[0].first_name).toBe('Jane')
  14 | 
  15 |      const headers =  await response.headers()
  16 |    console.log(headers)
  17 |    expect(headers['content-type']).toBe('application/json')
  18 | })
  19 | test('Get single employees', async({request})=>{
  20 |    const response =  await request.get("http://localhost:3000/employees/1")
  21 |    console.log(response.status())
  22 |    expect(response.status()).toBe(200)
  23 |   
  24 |    const responsebody =  await response.json()
  25 |    console.log(responsebody[0].first_name)
  26 |   expect(responsebody[0].first_name).toBe('Jane')
  27 | 
  28 |   const headers =  await response.headers()
  29 |   console.log(headers)
  30 |   expect(headers['content-type']).toBe('application/json')
  31 | })
  32 | test('Delete employees', async({request})=>{
  33 |    const response =  await request.delete("http://localhost:3000/employees/1")
  34 |    console.log(response.status())
  35 |   // expect(response.status()).toBe(200)
  36 |   expect([200,404]).toContain(response.status())
  37 |  
  38 | })
  39 | test.only('Create  employees', async({request})=>{
  40 |    const requestPayload = {
  41 |     "first_name": "testUser123",
  42 |     "last_name": "user123",
  43 |     "email": "testuser12@codingthesmartway.com"
  44 | }
  45 |    const response =  await request.post("http://localhost:3000/employees",{
  46 |       headers:{
  47 |         'Content-Type':'application/json'
  48 |       },
  49 |       data: requestPayload 
  50 |    }
  51 |    
  52 |    )
  53 |   console.log(response.status())
  54 |   const responsebody =  await response.json()
> 55 |   console.log(responsebody.json())
     |                            ^ TypeError: responsebody.json is not a function
  56 |  
  57 |  
  58 | })
```