import { expect, Page, Locator } from "@playwright/test";
import { switchToPopup } from '../utilities/popup.js'

export class ContactPage {
    page: Page;
    contactLink:Locator;
    createContactButton:Locator;
    salutationType:Locator;
    firstName:Locator;
    lastName:Locator;
    saveButton:Locator;
    contactInfo:Locator;
    organizationNameIcon:Locator;
    qspiderLink:string
    saveButton2:Locator;
    firstNameInfo:Locator;
    pageHeading:Locator;
    contactLink2:Locator;
    createContactButton2:Locator;
    
    constructor(page: Page) {
        this.page = page,
            this.contactLink = page.locator('//a[@href="index.php?module=Contacts&action=index"]'),
            this.createContactButton = page.locator('//img[@title="Create Contact..."]'),
            this.salutationType = page.locator('//select[@name="salutationtype"]'),
            this.firstName = page.locator('//input[@name="firstname"]'),
            this.lastName = page.locator('//input[@name="lastname"]'),
            this.saveButton = page.locator('//input[@title="Save [Alt+S]"]').nth(0),
            this.contactInfo = page.locator('//span[@class="dvHeaderText"]'),
            this.organizationNameIcon = page.locator('//td[text()="Organization Name 			"]/parent::tr/descendant::img'),
            this.qspiderLink = '(//a[text()="qspider"])',
            this.saveButton2 = page.locator('//input[@accesskey="S"]'),
            this.firstNameInfo = page.locator('//span[@id="dtlview_First Name"]'),
            this.pageHeading = page.locator('//span[@class="lvtHeaderText"]'),
            this.contactLink2= page.locator('//a[text()="Contacts"]'),
            this.createContactButton2 = page.locator('//img[@alt="Create Contact..."]')
    }
    async createContact(firstname:string, lastname:string, salutationtype:string) {
        await this.contactLink.click();

        await this.createContactButton.click();
        await expect(this.pageHeading).toBeVisible();
        await this.salutationType.selectOption({ value: salutationtype });
        await expect(this.salutationType).toHaveValue(salutationtype);
        await this.firstName.fill(firstname);
        await expect(this.firstName).toHaveValue(firstname);
        await this.lastName.fill(lastname);
        await expect(this.lastName).toHaveValue(lastname)

        let popup = await switchToPopup(this.page, () => {
            this.organizationNameIcon.click()
        });
        await popup.locator(this.qspiderLink).click();
        await this.saveButton.nth(0).click();
    }
    async verifycontact(firstname:string) {
        let cont = await this.firstNameInfo.textContent();
        await expect(this.firstNameInfo).toContainText(firstname);
        console.log(cont);
    }
}
