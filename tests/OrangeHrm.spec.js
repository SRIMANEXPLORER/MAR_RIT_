import { test, expect } from '@playwright/test'

import HrmLogin from 'C:/Users/sriman/Desktop/MARRIT/Pages/orangeHrmLoginPage.js';

test('Hrm Login',async({page}) => {

   const loginPage = new HrmLogin(page);
   await loginPage.goto();
   await page.waitForTimeout(3000);
   await loginPage.log('Admin', 'admin123');
   await page.waitForTimeout(3000);
   await expect(page).toHaveURL(/.*dashboard/);
    await loginPage.closebrowser();


})