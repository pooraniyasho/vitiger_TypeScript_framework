import{test as base, Page} from '@playwright/test';
import {Login} from  '../pages/login.ts';
import data from '../test-data/login.json';
type MyFixtures = {
  loginPage: Page,
};
export let test= base.extend<MyFixtures>({
    loginPage: async({page},use)=>{
        const sign= new Login(page);
        await sign.launch(data.url);
        await sign.logindetail(data.userName, data.passWord);
        await use(page);
        await sign.signout(data.url);
    }
}
);