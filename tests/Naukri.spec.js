import {test} from '@playwright/test'

import naukriLogin from '../Pages/naukri.js'
test ('nakurisite', async({page})=> {

    const nakuri = new naukriLogin(page);
    await nakuri.go();
    await nakuri.clicklog();
   
     await nakuri.time();
    
    await nakuri.logpage("@gmail.com", "@");
    await nakuri.proFile();
    await nakuri.profileedit("automation testing");


});