import {chromium} from 'playwright'
import assert from 'assert'

import HrmLogin from 'file:///C:/Users/sriman/Desktop/MARRIT/Pages/orangeHrmLoginPage.js';

describe("OrangeHrm", function(){

    // this.timeout(30000)
    let browser;
    let page;
    let loginPage;


    before("load",async function(){
        console.log("1. Before - open Browser")
        browser = await chromium.launch({ headless: false });
        page = await browser.newPage();
        loginPage = new HrmLogin(page);
    })
    after(async function () {
        console.log("2. After - Close Browser");
        await browser.close();
    });

    it("loginPage",async function(){
        await loginPage.goto()
        await loginPage.log("Admin", "admin123")
        // await loginPage.closebrowser()      
    })
    afterEach("asset",async function () {
        // await page.waitForURL('**/dashboard/**');
        const title = await page.title();
        assert.equal(title.includes("OrangeHRM"),true);
        // assert.ok(url.includes('dashboard'), `URL was ${url}, expected it to include 'dashboard'`);

 });
})