 import { test } from '@playwright/test'

 test.only("handle calender ",async({page})=>{
      await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html")
      const nextyear= new Date().getFullYear()+1
      console.log(nextyear)
      const targetyear = nextyear.toString()
      const targetMonth = 'February'
      const targetDate = '10'
      await page.locator("//input[@name='my-date']").click()
      let datedata =  await page.locator("//div[@class='datepicker-days']/table[1]/thead/tr[2]/th[2]")
      await page.locator(".datepicker-days").screenshot({ path: 'calenderscreenshot.png' })
      await datedata.textContent()
      await page.screenshot({ path: 'screenshot.png' , fullPage: true });
      let date= datedata.split(" ")
      let month = date[0].trim()
      let year = date[1].trim().toString()
      console.log("MOnth: "+month+" Year: "+year)

      while(true){
        if((year == targetyear) && (month== targetMonth)){
          break;
        }
      await page.locator("div[class='datepicker-days'] th[class='next']").click()
      datedata =  await page.locator("//div[@class='datepicker-days']/table[1]/thead/tr[2]/th[2]").textContent()
      date= datedata.split(" ")
      month = date[0].trim()
      year = date[1].trim().toString()
       await page.waitForTimeout(200)
      }

      await page.locator("//td[@class='day'][normalize-space()=" + targetDate + "]").click()

      await page.waitForTimeout(3000)
    })

 test("handle calender with typing date",async({page})=>{
      await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html")
      // const datepicker=  await page.locator("input[name='my-date']")
      // await datepicker.fill("08/15/2026")
        await page.locator("input[name='my-date']").click()
        await page.keyboard.type("08/15/2026")
        await page.keyboard.press("Enter")
      await page.waitForTimeout(3000)
    });

  test('test codegen script', async ({ page }) => {
    await page.goto('https://bonigarcia.dev/selenium-webdriver-java/web-form.html');
    await expect(page.locator('h5')).toContainText('Practice site');
    await expect(page.getByLabel('Dropdown (select) Open this')).toHaveValue('Open this select menu');
    await expect(page.getByRole('textbox', { name: 'Readonly input' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Text input' }).click();
    await page.getByRole('textbox', { name: 'Text input' }).fill('Test Data');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Test Password');
    await page.getByRole('textbox', { name: 'Textarea' }).click();
    await page.getByRole('textbox', { name: 'Textarea' }).fill('Test area');
    await page.getByRole('checkbox', { name: 'Default checkbox' }).check();
    await page.getByRole('slider', { name: 'Example range' }).fill('1');
    await page.getByRole('textbox', { name: 'Date picker' }).click();
    await page.getByRole('cell', { name: '25' }).click();
});