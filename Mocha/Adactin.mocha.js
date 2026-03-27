import {chromium} from 'playwright'

describe("Atain",function(){
    let browser;
    let page;
    before("load",async function(){
        console.log("1. Before - open Browser")
        browser = await chromium.launch({ headless: false });
        page = await browser.newPage();
    })
    after(async function () {
        console.log("6. After - Close Browser");
        await browser.close();
    });

    it("1.loginPage",async function(){
        await page.goto('https://adactinhotelapp.com/')
        await page.locator('input[name="username"]').fill('GoodFellas')
        await page.locator('input[name="password"]').fill('2KM1JW')
        await page.click('[id="login"]')
        console.log("loginPage")
    })

    it("2.Search Hotel",async function(){
        await page.locator('//select[@name="location"]').selectOption('Sydney')
        await page.locator('//select[@name="hotels"]').selectOption('Hotel Creek')
        await page.locator('//select[@id="room_type"]').selectOption('Double')
        await page.locator('//select[@id="room_nos"]').selectOption('2 - Two')
        await page.locator('//select[@name="location"]').selectOption('Sydney')
        await page.locator('#datepick_in').fill('25/03/2026')
        await page.locator('#datepick_out').fill('30/03/2026')
        await page.locator('#adult_room').selectOption('1 - One')
        await page.locator('#child_room').selectOption('0 - None')
        await page.locator('#Submit').click()
        
    })


    it("3.Search Hotel confirmation",async function(){
       await page.locator('input#radiobutton_0').click();
       await page.locator('*[name="continue"]').click();
    })
    
    it("4.Book a Hotel",async function(){
        await page.locator('#first_name').fill('sriman')
        await page.locator('#last_name').fill('M')
        await page.locator('#address').fill('no.12,dominos pizza,africa')
        await page.locator('#cc_num').fill('98753425162534251')
        await page.locator('#cc_type').selectOption('American Express')
        await page.locator('#cc_exp_month').selectOption('April')
        await page.locator('#cc_exp_year').selectOption('2028')
        await page.locator('#cc_cvv').fill('345')
        await page.locator('#book_now').click();
    
    })

    it("5.Booking confirmation",async function(){

        const orderNo = await page.getAttribute('#order_no', 'value')
        console.log("Order No is " + orderNo)

    })
 });