const {test, chromium, firefox,  expect} = require('@playwright/test')
/*
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

  //  await  expect(dropdown).toHaveValue('Three')

   })

   test('handle datalist', async({page})=>{
     await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html")
     const datalist= await page.locator("//input[@placeholder='Type to search...']").evaluateAll(list=> list.map(el=>el.value))
     console.log(datalist)
      await page.locator("//input[@placeholder='Type to search...']").fill("Sending data to datalist")
      await page.waitForTimeout(2000)
  
   })


    test('fileupload', async({page})=>{
     await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html")
     const fileupload= await page.locator("input[name='my-file']")
     // single file upload  
     await fileupload.setInputFiles("E:\\PlayWrightJavaScriptJul26\\jsfiles\\iterateexample.js")
     // if application supports multiple file upload
    // await fileupload.setInputFiles(["E:\\PlayWrightJavaScriptJul26\\jsfiles\\iterateexample.js","E:\\PlayWrightJavaScriptJul26\\jsfiles\\sample.json"])
      await page.waitForTimeout(2000)
  
   })
      

   test('handle drag and drop', async({page})=>{
     await page.goto("https://bonigarcia.dev/selenium-webdriver-java/drag-and-drop.html")
     const draggable= await page.locator("#draggable")
     const droppable= await page.locator("#target")
     await draggable.dragTo(droppable)
     await page.waitForTimeout(2000)
  
   })
     
   test('slider  in range ', async({page})=>{
     await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html")
     const slider= await page.locator("input[name='my-range']")
     const target = 8
     await slider.click()
     for(let i=1; i<target; i++){
        await slider.press("ArrowRight")
        await page.waitForTimeout(2000)
     }
    await page.waitForTimeout(2000)
   })
    

   test('handle frames',async({page})=>{
     await page.goto('https://jqueryui.com/slider/')
     // navigate in the frame
      const demoframe = await page.frameLocator(".demo-frame")
     const slider = await demoframe.locator("#slider")
     await expect(slider).toBeVisible()
     const img=  await page.locator("//a[@href='/']") 
     await expect(img).toBeVisible()
     // working with nested frame
     // page.framelocator("").framelocator("").locator()
     // to navigate back to main page
     // page.locator()

   })
     */
    test("nested frames ", async({page})=>{
        await page.goto("https://demoqa.com/nestedframes")
        const frame1 = await page.frameLocator("#frame1")
        const text= await frame1.locator("//body").textContent()
        console.log(text)
        const frame2 = await frame1.frameLocator("iframe[srcdoc='<p>Child Iframe</p>']")
        const text2 = await frame2.locator("(//p[normalize-space()='Child Iframe'])[1]").textContent()
        console.log(text2)
        
       const text3=  await page.locator("//div[@id='framesWrapper']/h1").textContent()
       console.log(text3)
    })






