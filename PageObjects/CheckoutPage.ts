import { Page, Locator, expect } from '@playwright/test';

export class CheckoutPage {

  readonly page: Page;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly zip: Locator;
  readonly continueBtn: Locator;
  readonly finishBtn: Locator;
  readonly success: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstName = page.locator('#first-name');
    this.lastName = page.locator('#last-name');
    this.zip = page.locator('#postal-code');
    this.continueBtn = page.locator('#continue');
    this.finishBtn = page.locator('#finish');
    this.success = page.locator('.complete-header');
  }

  async fillDetails() {
    await this.firstName.fill('Pratap');
    await this.lastName.fill('Yadav');
    await this.zip.fill('201001');
  }

  async finishOrder() {
    await this.continueBtn.click();
    await this.finishBtn.click();
  }

  async verifySuccess() {
    await expect(this.success).toHaveText('Thank you for your order!');
  }
}