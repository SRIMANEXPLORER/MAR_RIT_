// import { test, expect } from '@playwright/test'


class HrmLogin{

constructor(page){

    this.page = page;

    this.userNameInput = page.locator('//input[@name="username"]');
    this.passWordInput =page.locator('*[placeholder="Password"]');
    this.login =page.locator('//button[text()=" Login "]');

}

async goto(){
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
}

async log(username, password){
    await this.userNameInput.fill(username);

    await this.passWordInput.fill(password);
    await this.login.click();
}
async closebrowser(){ await this.page.close()}
}

// module.exports = HrmLogin;
export default HrmLogin