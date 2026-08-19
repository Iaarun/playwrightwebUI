const {test, chromium, firefox,  expect} = require('@playwright/test')

// test('first playwright test to launch url',async ({browser})=>{
//     const context= await browser.newContext()
//     const page=  await context.newPage();
//     await page.goto("https://www.google.com/")
// })

/*
test('first playwright test to launch url using page ',async ({page})=>{
    // const context= await browser.newContext()
    // const page=  await context.newPage();
    await page.goto("https://www.google.com/")
    await page.waitForTimeout(2000)
})

*/


test('page title test',async ({page})=>{
    await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html")
    const title =   await page.title() // Actual result
    console.log("Page title: "+title)
    expect(title).toContain('Selenium')
  // expect(title).toBe("Hands-On Selenium WebDriver with Java")
    const url=  await page.url()
    console.log("Page URL is: "+url)
  // locate element and send data
//    const textInput= await page.getByTestId('my-text-id')
//   await textInput.fill("Test input data")
   //await page.getByTestId('my-text-id').fill("Test Input data")
   await page.locator("#my-text-id").fill("Test input data")
   
//handle checkbox
/*
   const checkbox2= await page.locator('#my-check-2')
   await checkbox2.click()
   */

   // select all the checkboxes

   const allcheckbox= await page.locator("input[name='my-check']").all()
       for (const checkbox of allcheckbox){
         const isselected=   await checkbox.isChecked();
         if(!isselected){
          await  checkbox.click()
         }
       }

       //check if the element is enable

     const disbaledInput=  await page.locator("input[name=my-disabled]")
     console.log(await disbaledInput.isDisabled)  //true
     await expect(disbaledInput).toBeDisabled();
     await page.waitForTimeout(4000)
   });
   



   

 