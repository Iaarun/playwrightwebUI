const {test, chromium, firefox,  expect} = require('@playwright/test')

test('handle dropdown', async({page})=>{
     await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html")
     const dropdown= await page.locator("select[name='my-select']")
     //get all the available option in dropdown
     const allavailableoption= await dropdown.locator('option').allInnerTexts()
     console.log(allavailableoption)

     // get the default selected data

     const selctedValue =  await dropdown.inputValue();
     console.log("Selected Value is: "+selctedValue)
     

     // select the value inside the dropdown by label

      dropdown.selectOption({label: 'Three'})

      await page.waitForTimeout(2000)
      dropdown.selectOption({index: 1})
       await page.waitForTimeout(2000)

    await  expect(dropdown).toHaveValue('Three')


   })