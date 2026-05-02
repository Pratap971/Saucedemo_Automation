import { Page, Locator, expect } from '@playwright/test';

export class InventoryPage {

  readonly page: Page;
  readonly title: Locator;
  readonly addToCartBtns: Locator;
  readonly cartIcon: Locator;
  readonly filter: Locator;
  readonly names: Locator;
  readonly prices: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('.title');
    this.addToCartBtns = page.locator('button:has-text("Add to cart")');
    this.cartIcon = page.locator('.shopping_cart_link');
    this.filter = page.locator('.product_sort_container');
    this.names = page.locator('.inventory_item_name');
    this.prices = page.locator('.inventory_item_price');
  }

  async verifyHomePage() {
    await expect(this.title).toHaveText('Products');
  }

  async addProduct(index: number) {
    await this.addToCartBtns.nth(index).click();
  }

  async goToCart() {
    await this.cartIcon.click();
  }

  async sort(option: string) {
    await this.filter.selectOption(option);
  }

  async getNames() {
    return await this.names.allTextContents();
  }

  async getPrices() {
    const p = await this.prices.allTextContents();
    return p.map(x => parseFloat(x.replace('$', '')));
  }
}