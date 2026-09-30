# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: handledropdown.spec.js >> alert dialog 
- Location: tests\handledropdown.spec.js:141:6

# Error details

```
Error: page.waitForTimeout: Test ended.
```

# Test source

```ts
  52  |      await page.waitForTimeout(2000)
  53  |   
  54  |    })
  55  |      
  56  |    test('slider  in range ', async({page})=>{
  57  |      await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html")
  58  |      const slider= await page.locator("input[name='my-range']")
  59  |      const target = 8
  60  |      await slider.click()
  61  |      for(let i=1; i<target; i++){
  62  |         await slider.press("ArrowRight")
  63  |         await page.waitForTimeout(2000)
  64  |      }
  65  |     await page.waitForTimeout(2000)
  66  |    }) 
  67  | 
  68  |    test('slider in withouth target range ', async({page})=>{
  69  |      await page.goto("https://jqueryui.com/slider/")
  70  |      const framelocator=  await page.frameLocator(".demo-frame")
  71  |      const sliderknob = await framelocator.locator("//div[@id='slider']/span")
  72  |      await page.waitForTimeout(2000)
  73  |      await sliderknob.dragTo(sliderknob, {
  74  |        targetPosition: { x:1000, y:0},
  75  |        force: true
  76  |      })
  77  |      console.log("End location: "+ sliderknob.getAttribute('style'))
  78  |      await page.waitForTimeout(2000)
  79  |    })
  80  |     
  81  | 
  82  |    test('handle frames',async({page})=>{
  83  |      await page.goto('https://jqueryui.com/slider/')
  84  |      // navigate in the frame
  85  |       const demoframe = await page.frameLocator(".demo-frame")
  86  |      const slider = await demoframe.locator("#slider")
  87  |      await expect(slider).toBeVisible()
  88  |      const img=  await page.locator("//a[@href='/']") 
  89  |      await expect(img).toBeVisible()
  90  |      // working with nested frame
  91  |      // page.framelocator("").framelocator("").locator()
  92  |      // to navigate back to main page
  93  |      // page.locator()
  94  |  
  95  |    })
  96  |      
  97  |     test("nested frames ", async({page})=>{
  98  |         await page.goto("https://demoqa.com/nestedframes")
  99  |         const frame1 = await page.frameLocator("#frame1")
  100 |         const text= await frame1.locator("//body").textContent()
  101 |         console.log(text)
  102 |         const frame2 = await frame1.frameLocator("iframe[srcdoc='<p>Child Iframe</p>']")
  103 |         const text2 = await frame2.locator("(//p[normalize-space()='Child Iframe'])[1]").textContent()
  104 |         console.log(text2)
  105 |         const text3=  await page.locator("//div[@id='framesWrapper']/h1").textContent()
  106 |     }) 
  107 | 
  108 |     test("scroll till a specific element ", async({page})=>{
  109 |         await page.goto("https://demowebshop.tricentis.com/")
  110 |       const featuredproducts =   await page.locator("//img[@title='Show details for Build your own computer']")
  111 |       await featuredproducts.scrollIntoViewIfNeeded()
  112 |       await page.waitForTimeout(2000)
  113 |     })
  114 |     
  115 |     test("scroll till bottom of the page", async({page})=>{
  116 |         await page.goto("https://demowebshop.tricentis.com/")
  117 |       await page.evaluate(()=>window.scrollTo(0,document.body.scrollHeight))
  118 |       await page.waitForTimeout(2000)
  119 |     }) 
  120 | 
  121 |     test("scroll using mouse wheel", async({page})=>{
  122 |         await page.goto("https://demowebshop.tricentis.com/")
  123 |      await page.mouse.wheel(0,400)
  124 |       await page.waitForTimeout(2000)
  125 |     })
  126 | 
  127 |     test("infinite scroll ", async({page})=>{
  128 |       await page.goto("https://bonigarcia.dev/selenium-webdriver-java/infinite-scroll.html")
  129 |       let previousHeight=0
  130 |       let currentHeight = await page.evaluate(()=> document.body.scrollHeight)
  131 |       let maxScroll=5
  132 |       let scroll=0
  133 |       while(previousHeight<currentHeight && scroll<maxScroll){
  134 |          previousHeight = currentHeight
  135 |         await page.evaluate(()=>window.scrollTo(0,document.body.scrollHeight))
  136 |         await page.waitForTimeout(1000)
  137 |         currentHeight = await page.evaluate(()=> document.body.scrollHeight)
  138 |         scroll++
  139 | } })
  140 | 
  141 |      test("alert dialog ", async({page})=>{
  142 |       await page.goto("https://bonigarcia.dev/selenium-webdriver-java/dialog-boxes.html")
  143 |       const launchalert= await page.locator("#my-alert")
  144 |       // accept the alert box
  145 |       await page.on('dialog', async dialog=>{
  146 |         const text = await dialog.message()
  147 |         console.log(text)
  148 |         await dialog.accept()
  149 | 
  150 |       })
  151 |       await launchalert.click()
> 152 |       await page.waitForTimeout(1500)
      |                  ^ Error: page.waitForTimeout: Test ended.
  153 |       
  154 |     })
  155 | 
  156 |      test("confirmation dialog ", async({page})=>{
  157 |       await page.goto("https://bonigarcia.dev/selenium-webdriver-java/dialog-boxes.html")
  158 |       const launchalert= await page.locator("#my-confirm")
  159 |       // accept the alert box
  160 |         await page.on('dialog', async dialog=>{
  161 |         const text = await dialog.message()
  162 |         console.log(text)
  163 |         await dialog.dismiss()
  164 | 
  165 |       })
  166 |       await launchalert.click()
  167 |       const confirmationmessage= await page.locator("//p[@id='confirm-text']").textContent()
  168 |       console.log(confirmationmessage)
  169 |       await page.waitForTimeout(1500)
  170 |       
  171 |     })
  172 | 
  173 |      test("prompt dialog ", async({page})=>{
  174 |       await page.goto("https://bonigarcia.dev/selenium-webdriver-java/dialog-boxes.html")
  175 |       const launchalert= await page.locator("#my-prompt")
  176 |       // accept the alert box
  177 |       await page.on('dialog', async dialog=>{
  178 |         const text = await dialog.message()
  179 |         console.log(text)
  180 |         await dialog.accept("This is test data in the prompt")
  181 | 
  182 |       })
  183 |       await launchalert.click()
  184 |       const confirmationmessage= await page.locator("#prompt-text").textContent()
  185 |       console.log(confirmationmessage)
  186 |       await page.waitForTimeout(1500)
  187 |       
  188 |     }) 
  189 | 
  190 |     test("submit button",async({page})=>{
  191 |       await page.goto("https://bonigarcia.dev/selenium-webdriver-java/login-form.html")
  192 |       const username= await page.locator("//input[@id='username']")
  193 |       await username.fill("Test user")
  194 |       await page.waitForTimeout(1500)
  195 |       const password= await page.locator("//input[@id='password']")
  196 |       await password.fill("Test user")
  197 |       await page.waitForTimeout(1500)
  198 |        await page.locator("//button[normalize-space()='Submit']").click()
  199 |        await page.waitForTimeout(1500)
  200 |     })
  201 | 
  202 |     test("error message test",async({page})=>{
  203 |       await page.goto("https://bonigarcia.dev/selenium-webdriver-java/login-form.html")
  204 |       const username= await page.locator("//input[@id='username']")
  205 |       await username.fill("Test user")
  206 |       await page.waitForTimeout(1500)
  207 |       const password= await page.locator("//input[@id='password']")
  208 |       await password.fill("Test user")
  209 |       await page.waitForTimeout(1500)
  210 |       await page.locator("//button[normalize-space()='Submit']").click()
  211 | 
  212 |       await expect(page.locator("#invalid")).toBeVisible({ timeout: 10_000 })
  213 |       const message = await  page.locator("#invalid").textContent()
  214 |      // expect(message).toContain("Invalid credentials!")
  215 |       expect(message).not.toContain("Invalid credentials!")
  216 |       await page.waitForTimeout(1500)
  217 |     })
  218 | 
  219 |     test("navigation commands",async({page})=>{
  220 |       await page.goto("https://bonigarcia.dev/selenium-webdriver-java/index.html")
  221 |       var homepageurl= await page.url()
  222 |       console.log(homepageurl)
  223 | 
  224 |      const webform= await page.locator("//a[normalize-space()='Web form']")
  225 |      await webform.click()
  226 |      var webformurl= await page.url()
  227 |      console.log(webformurl)
  228 |      await page.goBack()
  229 |     var homepageurl= await page.url()
  230 |       console.log(homepageurl)
  231 |      await page.goForward()
  232 |     var webformurl= await page.url()
  233 |      console.log(webformurl)
  234 |       await page.waitForTimeout(1500)
  235 |     })
  236 | 
  237 |     test("multiple tabs",async({page, context})=>{
  238 |       await page.goto("https://bonigarcia.dev/selenium-webdriver-java/index.html")
  239 |      const webform= await page.locator("//a[normalize-space()='Web form']")
  240 |      const[newpage]=  await Promise.all([
  241 |         context.waitForEvent('page'),
  242 |         webform.click({modifiers:['Control']})
  243 |       ])
  244 |      await newpage.waitForLoadState()
  245 |      console.log(await page.url())
  246 |       await page.waitForTimeout(3000)
  247 |      const input =  await newpage.locator('#my-text-id')
  248 |      await input.fill("Test Data in new tab")
  249 |       await newpage.waitForTimeout(3000)
  250 |       newpage.close()
  251 |       await page.waitForTimeout(3000)
  252 |     })
```