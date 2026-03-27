
class naukriLogin{

constructor(page){

    this.page = page;

    this.userNameInput = page.locator('//*[@id="usernameField"]');
    this.passWordInput =page.locator('*[type="password"]');
    this.login =page.locator('//button[text()="Login"]');

    // clicklogin
    this.clickLogin = page.locator('//*[text()="Login"]');

    // clickprofile
    this.profile = page.locator('//div[@class="nI-gNb-drawer__icon"]');

    // view and updateprofile
    this.updateprofile = page.locator('//a[text()="View & Update Profile"]');

    //add resume headline
    this.reshead  = page.locator('//span[contains(text(),"Add resume ")]');

    //add keyskill
    this.key = page.locator('//span[contains(text(),"Add k")]');
    this.keyedit = page.locator('//*[@placeholder="Add skills"]');
    this.keyskillsave = page.locator('//button[text()="Save"]');
    

    //employment
    this.emp = page.locator('//span[contains(text(),"Add em")]');

    //education
    this.edu = page.locator('//span[contains(text(),"Add ed")]')

    //IT skills
    this.ITskill = page.locator('//span[contains(text(),"Add d")]')

    //projects
    this.projects = page.locator('//span[contains(text(),"Add proj")]')

    //profilesummary
    this.profilesum = page.locator('//span[contains(text(),"Add prof")]')

    //career profile
    this.career = page.locator('(//span[contains(text(),"editOneTheme")])[1]')

    //personal details
    this.personal = page.locator('(//span[contains(text(),"editOneTheme")])[2]')
}

async go(){
this.page.goto('https://www.naukri.com/registration/createAccount?othersrcp=23531&wExp=N&utm_source=google&utm_medium=cpc&utm_campaign=Brand_Login_Register&gclsrc=aw.ds&gad_source=1&gad_campaignid=19863995494&gbraid=0AAAAADLp3cFFLBUjqk84HiQuUAwEa9KxO&gclid=CjwKCAiAqprNBhB6EiwAMe3yhj6jF3orEEUrozqPgIbsYl81fNSiOkdRaCturS-u9Mc6LqwT_MsFjRoC_lUQAvD_BwE')
}

async time(){
    await this.page.waitForTimeout(1000);
}

async clicklog(){
     this.clickLogin.click();
}
async logpage(userName, Password){
     this.userNameInput.fill(userName);
     this.passWordInput.fill(Password);
     this.login.click();
}
async proFile(){ 
    await this.profile.click();
    await this.updateprofile.click();}
async profileedit(value){ 
    // await this.reshead.click();
    await this.key.click();
    await this.keyedit.fill(value);
    await this.keyedit.press('ArrowDown')
    await this.keyedit.press('Enter')
    await this.keyskillsave.click();
}
async employment(){ this.emp.click();}
async education(){ this.edu.click();}
async itSkills(){ this.ITskill.click();}
async Project(){ this.projects.click();}
async profilesummary(){ this.profilesum.click();}
async careerprofile(){ this.career.click();}
async personaldetails(){ this.personal.click();}

}
module.exports = naukriLogin;