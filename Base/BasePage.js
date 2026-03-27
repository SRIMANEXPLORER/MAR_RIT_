/*const{ test, expect} = require('@playwright/test')

class BasePage{

    constructor(){

        this.page=page;

    }

    // 1.launch Url

    async goto(Url){
        await this.page.goto(Url);
        
    }

    // 2.get Title

    async title(){
        await this.page.title();
        console.log(title)
    }

    // 3.get url

    async currentUrl(){
        await this.page.url();
        console.log(currentUrlUrl)
    }

    // 4.waitForTimeout

    async wait(time){
        await this.page.waitForTimeout(time);
    }

    // 5.To close Brower

    async closeBrowser(){
        await this.page.close();
    }

    // 6.To pass the value

    async fill(webelement,value){
        await this.page.fill(webelement,value);
    }

    // 7.click()

    async btnClick(){
        await this.page.click();
    }

    // 8.Refresh

    async referesh(){
        await this.page.reload();
    }

    // 9.backward

    async backward(){
        await this.page.goBack();
    }

    // 10.forward

    async forward(){
        await this.page.goForward();
    }

    // 11.Hover
    async hover(locateElememt){
        await this.page.locator(locateElememt).hover();
    }

    // 12.doubleclick

    async doubleClick(locateElememt){
        await this.page.locator(locateElememt).dblclick();
    }

    // 13.isVisible()
    async visible(){
        await this.page.isVisible();
        console.log(visible)
    }

    // 14.isEnable
    async enable(){
        await this.page.isEnable();
        console.log(enable)
    }

    // 15.isDisable
    async disable(){
        await this.page.isDisable();
        console.log(disable)
    }

    // 16.hidden
    async hidden(){
        await this.page.isHidden();
        console.log(hidden)
    }

    // 17.rightClick
    async rightClick(webelement) { 
        await this.page.locator(webelement).click({ button: 'right' }); 
    }

    // 18.clear
    async clear(webelement) { 
        await this.page.locator(webelement).clear(); 
    }

    // 19.selectOption
    async selectOption(webelement, value) { 
        await this.page.selectOption(webelement, value); 
    }

    // 20. Take a screenshot 
    async captureScreenshot(fileName) {
        await this.page.screenshot({ path: `screenshots/${fileName}.png` });
    }
    // 21. Press a keyboard key
    async pressKey(key) {
        await this.page.keyboard.press(key);
    }
    // 22. Get text from an element
    async getElementText(webelement) {
        return await this.page.locator(webelement).innerText();
    }
    // 23.ischecked
    async check(){
        await this.page.isChecked();
    }
    // 24.waitForHidden
    async hidden(){
        await this.page.waitForHidden();
    }
    // 25.iseditable
    async edit(){
        await this.page.isEditable();
        console.log(edit);
    }
    // 26.scrollintoview
    async scroll(){
        await this.page.viewIntoScroll();
    }
    // 27.getattribute
    async attribute(){
        await this.page.getattribute();
    }





}

module.export = BasePage;
*/