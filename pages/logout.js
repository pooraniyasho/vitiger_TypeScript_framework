import { expect } from "@playwright/test";

export class applogout{
    constructor(page){
        this.page=page;
        this.userIcon=page.locator('//img[@src="themes/softed/images/user.PNG"]');
        this.out=page.locator('//a[text()="Sign Out"]');
    }
    async signout(url){
        await this.userIcon.click();
        await this.out.click();
        await expect(this.page).toHaveURL(url);
    }
}