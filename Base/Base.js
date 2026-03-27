const { request } = require("@playwright/test");

class BasePage {

    constructor(page) {
        this.page = page;
    }

    // ---------- Navigation ----------
    async navigateTo(url) { await this.page.goto(url); }
    async refresh() { await this.page.reload(); }
    async goBack() { await this.page.goBack(); }
    async goForward() { await this.page.goForward(); }
    async getTitle() { return await this.page.title(); }
    async getURL() { return this.page.url(); }

    // ---------- Basic Actions ----------
    async click(locator) { await this.page.locator(locator).click(); }
    async dblClick(locator) { await this.page.locator(locator).dblclick(); }
    async rightClick(locator) { await this.page.locator(locator).click({ button: 'right' }); }
    async fill(locator, value) { await this.page.locator(locator).fill(value); }
    async type(locator, value) { await this.page.locator(locator).type(value); }
    async clear(locator) { await this.page.locator(locator).fill(''); }
    async pressKey(locator, key) { await this.page.locator(locator).press(key); }
    async hover(locator) { await this.page.locator(locator).hover(); }
    async focus(locator) { await this.page.locator(locator).focus(); }
    async dragAndDrop(source, target) { await this.page.dragAndDrop(source, target); }

    // ---------- Waits ----------
    async waitForVisible(locator) { await this.page.locator(locator).waitFor({ state: 'visible' }); }
    async waitForHidden(locator) { await this.page.locator(locator).waitFor({ state: 'hidden' }); }
    async waitForAttached(locator) { await this.page.locator(locator).waitFor({ state: 'attached' }); }
    async waitForTimeout(ms) { await this.page.waitForTimeout(ms); }
    async waitForLoadState(state = 'load') { await this.page.waitForLoadState(state); }

    // ---------- Dropdown ----------
    async selectByValue(locator, value) { await this.page.locator(locator).selectOption({ value }); }
    async selectByLabel(locator, label) { await this.page.locator(locator).selectOption({ label }); }
    async selectByIndex(locator, index) { await this.page.locator(locator).selectOption({ index }); }

    // ---------- Checkbox ----------
    async check(locator) { await this.page.locator(locator).check(); }
    async uncheck(locator) { await this.page.locator(locator).uncheck(); }
    async isChecked(locator) { return await this.page.locator(locator).isChecked(); }

    // ---------- Get Methods ----------
    async getText(locator) { return await this.page.locator(locator).textContent(); }
    async getInnerText(locator) { return await this.page.locator(locator).innerText(); }
    async getAttribute(locator, attr) { return await this.page.locator(locator).getAttribute(attr); }
    async getInputValue(locator) { return await this.page.locator(locator).inputValue(); }
    async getElementCount(locator) { return await this.page.locator(locator).count(); }

    // ---------- Visibility ----------
    async isVisible(locator) { return await this.page.locator(locator).isVisible(); }
    async isHidden(locator) { return await this.page.locator(locator).isHidden(); }
    async isEnabled(locator) { return await this.page.locator(locator).isEnabled(); }
    async isDisabled(locator) { return await this.page.locator(locator).isDisabled(); }

    // ---------- Scroll ----------
    async scrollIntoView(locator) { await this.page.locator(locator).scrollIntoViewIfNeeded(); }
    async scrollToBottom() { await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight)); }
    async scrollToTop() { await this.page.evaluate(() => window.scrollTo(0, 0)); }

    // ---------- Alert Handling ----------
    async acceptAlert() {
        this.page.once('dialog', async dialog => await dialog.accept());
    }
    async dismissAlert() {
        this.page.once('dialog', async dialog => await dialog.dismiss());
    }
    async getAlertText() {
        this.page.once('dialog', async dialog => console.log(dialog.message()));
    }

    // ---------- Frames ----------
    async switchToFrame(frameLocator) {
        return await this.page.frameLocator(frameLocator);
    }

    // ---------- Screenshot ----------
    async takeScreenshot(path) { await this.page.screenshot({ path }); }
    async elementScreenshot(locator, path) {
        await this.page.locator(locator).screenshot({ path });
    }

    // ---------- Upload ----------
    async uploadFile(locator, filePath) {
        await this.page.locator(locator).setInputFiles(filePath);
    }

    // ---------- Keyboard ----------
    async pressGlobalKey(key) { await this.page.keyboard.press(key); }
    async typeGlobal(text) { await this.page.keyboard.type(text); }

    // ---------- Mouse ----------
    async mouseClick(x, y) { await this.page.mouse.click(x, y); }
    async mouseMove(x, y) { await this.page.mouse.move(x, y); }

    // ---------- Network ----------
    async waitForResponse(urlPart) {
        await this.page.waitForResponse(response =>
            response.url().includes(urlPart) && response.status() === 200
        );
    }

    // ---------- Window Handling ----------
    async waitForNewPage() {
        const newPage = await this.page.context().waitForEvent('page');
        await newPage.waitForLoadState();
        return newPage;
    }

}

module.exports = BasePage;