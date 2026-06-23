import { expect, Locator, Page } from "@playwright/test";

export class Login{
    page:Page;
    username:Locator;
    password:Locator;
    loginButton:Locator;
    homePage:Locator;
    userIcon:Locator;
    signOut:Locator;
    invalidErrorMessage:Locator;
    constructor(page:Page){
        this.page=page,
        this.username=page.locator('//input[@name="user_name"]'),
        this.password=page.locator('//input[@name="user_password"]'),
        this.loginButton=page.getByRole('button',{name:"Login"}),
        this.homePage=page.locator('//a[@href="index.php?action=index&module=Home"]'),
        this.userIcon=page.locator('//img[@src="themes/softed/images/user.PNG"]'),
        this.signOut=page.locator('//a[text()="Sign Out"]'),
        this.invalidErrorMessage=page.locator('//div[@class="errorMessage"]')
    }
    async launch(url:string){
        await this.page.goto(url);
        await expect(this.page).toHaveURL(url)
    }
    async logindetail(username:string,password:string){
        await this.username.fill(username);
        await expect(this.username).toHaveValue(username)
        await this.password.fill(password);
        await expect(this.password).toHaveValue(password)
        await this.loginButton.click();
    }
    async verifyHomePage(homeurl:string){
        await expect(this.page).toHaveURL(homeurl);
        await expect(this.homePage).toBeVisible();
    }
    async signout(url:string){
        await this.userIcon.click();
        await this.signOut.click();
        await expect(this.page).toHaveURL(url);
    }

}

