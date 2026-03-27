const { test , expect }= require('@playwright/test')
import HrmLogin from '../Pages/orangeHrmLoginPage.js'
const {readFromExcel} = require('../utils/ExcelUtils')

const readData =readFromExcel('../MARRIT/test_data/MAR_RIT_DATA.xlsx','Login')

test.describe('Excel Data Driven Login Test',() =>{
    readData.forEach((data)=>{

        test(`Login test for ${data.username}`, async ({ page }) => {

            const hrm = new HrmLogin(page);

             await hrm.goto();
            //  await hrm.log("Admin","admin123");
            await hrm.log(data.username, data.password);

    //   if (data.expected === 'success') {
    //     await expect(page).toHaveURL(/inventory.html/);
    //   } else {
    //     await expect(page.locator(loginPage.errorMsg)).toBeVisible();
    //   }

    });
  });
})