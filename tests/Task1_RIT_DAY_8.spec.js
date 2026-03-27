import { test, expect } from '@playwright/test'

/*Task1
fb 
refresh
amazon
goback
goforward
*/

test('Task1Navigation',async({page}) => {

    await page.goto('https://www.facebook.com/')

    await page.waitForTimeout(3000);

    await page.reload();

    await page.goto('https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_5szpgfto9i_e&adgrpid=155259813593&hvpone=&hvptwo=&hvadid=674893540034&hvpos=&hvnetw=g&hvrand=8475879617044417980&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007809&hvtargid=kwd-64107830&hydadcr=14452_2316413&gad_source=1')

    await page.waitForTimeout(3000);
    await page.goBack();

    await page.waitForTimeout(3000);

    await page.goForward
})


/*
Task2
darganddrop
src
deg
*/

test('Task2drag',async({page}) => {

    await page.goto('https://demo.guru99.com/test/drag_drop.html');

    await page.waitForTimeout(3000);

    const src1 = await page.locator('//a[text() =" 5000 "]')

    const drop1 = await page.locator('(//li[@class="placeholder"])[2]');

    await src1.dragTo(drop1);
    await page.waitForTimeout(3000);

    const src2 = await page.locator('//a[text() =" 5000"]')

    const drop2 = await page.locator('(//li[@class="placeholder"])[3]')

    await src2.dragTo(drop2);

    await page.waitForTimeout(3000);


})

/*
Task3
Hover in green website
*/

test('Task3hover',async({page}) => {

    await page.goto('https://www.greenstechnologys.com/')

    await page.locator('//a[text()="COURSES"]').hover();

    await page.locator('//*[text()="Oracle Training"]').hover();

    // await page.waitForTimeout(3000);

    await page.locator('//*[text()="SQL Certification"]').click();

})
/*
tASK4
Multidrag
*/

test('Task4Multicheck',async({page}) => {

    await page.goto('https://practice.expandtesting.com/checkboxes')

    await page.locator('#checkbox1').check();
    await page.locator('#checkbox2').uncheck();
})

/*
Task4
naukri
login the page
*/
