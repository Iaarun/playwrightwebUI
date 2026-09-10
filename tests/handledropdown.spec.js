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

   test('slider in withouth target range ', async({page})=>{
     await page.goto("https://jqueryui.com/slider/")
     const framelocator=  await page.frameLocator(".demo-frame")
     const sliderknob = await framelocator.locator("//div[@id='slider']/span")
     await page.waitForTimeout(2000)
     await sliderknob.dragTo(sliderknob, {
       targetPosition: { x:1000, y:0},
       force: true
     })
     console.log("End location: "+ sliderknob.getAttribute('style'))
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
     
    test("nested frames ", async({page})=>{
        await page.goto("https://demoqa.com/nestedframes")
        const frame1 = await page.frameLocator("#frame1")
        const text= await frame1.locator("//body").textContent()
        console.log(text)
        const frame2 = await frame1.frameLocator("iframe[srcdoc='<p>Child Iframe</p>']")
        const text2 = await frame2.locator("(//p[normalize-space()='Child Iframe'])[1]").textContent()
        console.log(text2)
        const text3=  await page.locator("//div[@id='framesWrapper']/h1").textContent()
    }) 

    test("scroll till a specific element ", async({page})=>{
        await page.goto("https://demowebshop.tricentis.com/")
      const featuredproducts =   await page.locator("//img[@title='Show details for Build your own computer']")
      await featuredproducts.scrollIntoViewIfNeeded()
      await page.waitForTimeout(2000)
    })
    
    test("scroll till bottom of the page", async({page})=>{
        await page.goto("https://demowebshop.tricentis.com/")
      await page.evaluate(()=>window.scrollTo(0,document.body.scrollHeight))
      await page.waitForTimeout(2000)
    }) 

    test("scroll using mouse wheel", async({page})=>{
        await page.goto("https://demowebshop.tricentis.com/")
     await page.mouse.wheel(0,400)
      await page.waitForTimeout(2000)
    })

    test("infinite scroll ", async({page})=>{
      await page.goto("https://bonigarcia.dev/selenium-webdriver-java/infinite-scroll.html")
      let previousHeight=0
      let currentHeight = await page.evaluate(()=> document.body.scrollHeight)
      let maxScroll=5
      let scroll=0
      while(previousHeight<currentHeight && scroll<maxScroll){
         previousHeight = currentHeight
        await page.evaluate(()=>window.scrollTo(0,document.body.scrollHeight))
        await page.waitForTimeout(1000)
        currentHeight = await page.evaluate(()=> document.body.scrollHeight)
        scroll++
} })

     test("alert dialog ", async({page})=>{
      await page.goto("https://bonigarcia.dev/selenium-webdriver-java/dialog-boxes.html")
      const launchalert= await page.locator("#my-alert")
      // accept the alert box
      await page.on('dialog', async dialog=>{
        const text = await dialog.message()
        console.log(text)
        await dialog.accept()

      })
      await launchalert.click()
      await page.waitForTimeout(1500)
      
    })

     test("confirmation dialog ", async({page})=>{
      await page.goto("https://bonigarcia.dev/selenium-webdriver-java/dialog-boxes.html")
      const launchalert= await page.locator("#my-confirm")
      // accept the alert box
        await page.on('dialog', async dialog=>{
        const text = await dialog.message()
        console.log(text)
        await dialog.dismiss()

      })
      await launchalert.click()
      const confirmationmessage= await page.locator("//p[@id='confirm-text']").textContent()
      console.log(confirmationmessage)
      await page.waitForTimeout(1500)
      
    })

     test("prompt dialog ", async({page})=>{
      await page.goto("https://bonigarcia.dev/selenium-webdriver-java/dialog-boxes.html")
      const launchalert= await page.locator("#my-prompt")
      // accept the alert box
      await page.on('dialog', async dialog=>{
        const text = await dialog.message()
        console.log(text)
        await dialog.accept("This is test data in the prompt")

      })
      await launchalert.click()
      const confirmationmessage= await page.locator("#prompt-text").textContent()
      console.log(confirmationmessage)
      await page.waitForTimeout(1500)
      
    }) 

    test("submit button",async({page})=>{
      await page.goto("https://bonigarcia.dev/selenium-webdriver-java/login-form.html")
      const username= await page.locator("//input[@id='username']")
      await username.fill("Test user")
      await page.waitForTimeout(1500)
      const password= await page.locator("//input[@id='password']")
      await password.fill("Test user")
      await page.waitForTimeout(1500)
       await page.locator("//button[normalize-space()='Submit']").click()
       await page.waitForTimeout(1500)
    })

    test("error message test",async({page})=>{
      await page.goto("https://bonigarcia.dev/selenium-webdriver-java/login-form.html")
      const username= await page.locator("//input[@id='username']")
      await username.fill("Test user")
      await page.waitForTimeout(1500)
      const password= await page.locator("//input[@id='password']")
      await password.fill("Test user")
      await page.waitForTimeout(1500)
      await page.locator("//button[normalize-space()='Submit']").click()

      await expect(page.locator("#invalid")).toBeVisible({ timeout: 10_000 })
      const message = await  page.locator("#invalid").textContent()
     // expect(message).toContain("Invalid credentials!")
      expect(message).not.toContain("Invalid credentials!")
      await page.waitForTimeout(1500)
    })

    test("navigation commands",async({page})=>{
      await page.goto("https://bonigarcia.dev/selenium-webdriver-java/index.html")
      var homepageurl= await page.url()
      console.log(homepageurl)

     const webform= await page.locator("//a[normalize-space()='Web form']")
     await webform.click()
     var webformurl= await page.url()
     console.log(webformurl)
     await page.goBack()
    var homepageurl= await page.url()
      console.log(homepageurl)
     await page.goForward()
    var webformurl= await page.url()
     console.log(webformurl)
      await page.waitForTimeout(1500)
    })

    test("multiple tabs",async({page, context})=>{
      await page.goto("https://bonigarcia.dev/selenium-webdriver-java/index.html")
     const webform= await page.locator("//a[normalize-space()='Web form']")
     const[newpage]=  await Promise.all([
        context.waitForEvent('page'),
        webform.click({modifiers:['Control']})
      ])
     await newpage.waitForLoadState()
     console.log(await page.url())
      await page.waitForTimeout(3000)
     const input =  await newpage.locator('#my-text-id')
     await input.fill("Test Data in new tab")
      await newpage.waitForTimeout(3000)
      newpage.close()
      await page.waitForTimeout(3000)
    })
    
    test.only("handle calender ",async({page})=>{
      await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html")
      const nextyear= new Date().getFullYear()+1
      console.log(nextyear)
      const targetyear = nextyear.toString()
      const targetMonth = 'February'
      const targetDate = '10'
      await page.waitForTimeout(3000)
    })

   






  

   


