import{test as base} from '@playwright/test';
import {LoginPage} from  '../pages/login.js';
import data from '../test-data/login.json';

export let test= base.extend({
    loginPage: async({page},use)=>{
        const sign= new LoginPage(page);
        await sign.launch(data.url);
        
        await sign.logindetail(data.userName, data.passWord);
        await use(page)
        await sign.signout(data.url)
    }
}
);