// api test file
import { expect, test } from "@playwright/test";

// get all employees api

test('Get All employees', async({request})=>{
   const response =  await request.get("http://localhost:3000/employees")
   console.log(response.status())
   expect(response.status()).toBe(200)
  
   const responsebody =  await response.json()
   console.log(responsebody[0].first_name)
  expect(responsebody[0].first_name).toBe('Jane')

     const headers =  await response.headers()
   console.log(headers)
   expect(headers['content-type']).toBe('application/json')
})
test('Get single employees', async({request})=>{
   const response =  await request.get("http://localhost:3000/employees/1")
   console.log(response.status())
   expect(response.status()).toBe(200)
  
   const responsebody =  await response.json()
   console.log(responsebody[0].first_name)
  expect(responsebody[0].first_name).toBe('Jane')

  const headers =  await response.headers()
  console.log(headers)
  expect(headers['content-type']).toBe('application/json')
})
test('Delete employees', async({request})=>{
   const response =  await request.delete("http://localhost:3000/employees/1")
   console.log(response.status())
  // expect(response.status()).toBe(200)
  expect([200,404]).toContain(response.status())
 
})
test.only('Create  employees', async({request})=>{
   const requestPayload = {
    "first_name": "testUser123",
    "last_name": "user123",
    "email": "testuser12@codingthesmartway.com"
}
   const response =  await request.post("http://localhost:3000/employees",{
      headers:{
        'Content-Type':'application/json'
      },
      data: requestPayload 
   }
   
   )
  console.log(response.status())
  const responsebody =  await response.json()
  console.log(responsebody)
 
 
})