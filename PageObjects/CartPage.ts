import { Page, Locator, expect } from '@playwright/test';

export class CartPage {

  readonly page: Page;
  readonly items: Locator;
  readonly checkoutBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.items = page.locator('.cart_item');
    this.checkoutBtn = page.locator('#checkout');
  }

  async verifyItems(count: number) {
    await expect(this.items).toHaveCount(count);
  }

  async checkout() {
    await this.checkoutBtn.click();
  }
}