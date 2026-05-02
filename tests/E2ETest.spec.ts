import { test, expect } from '../fixtures/BaseTest';
import { InventoryPage } from '../PageObjects/InventoryPage';
import { CartPage } from '../PageObjects/CartPage';
import { CheckoutPage } from '../PageObjects/CheckoutPage';

test.describe('SauceDemo E2E', () => {

  test('@smoke Home Page', async ({ loggedInPage }) => {
    const inv = new InventoryPage(loggedInPage);
    await inv.verifyHomePage();
  });

  test('@regression Add to Cart', async ({ loggedInPage }) => {
    const inv = new InventoryPage(loggedInPage);
    const cart = new CartPage(loggedInPage);

    await inv.addProduct(0);
    await inv.goToCart();

    await cart.verifyItems(1);
  });

  test('@regression Filter A-Z', async ({ loggedInPage }) => {
    const inv = new InventoryPage(loggedInPage);

    await inv.sort('az');
    const names = await inv.getNames();

    expect(names).toEqual([...names].sort());
  });

  test('@regression Price Low-High', async ({ loggedInPage }) => {
    const inv = new InventoryPage(loggedInPage);

    await inv.sort('lohi');
    const prices = await inv.getPrices();

    expect(prices).toEqual([...prices].sort((a,b)=>a-b));
  });

  test('@smoke Checkout Flow', async ({ loggedInPage }) => {
    const inv = new InventoryPage(loggedInPage);
    const cart = new CartPage(loggedInPage);
    const check = new CheckoutPage(loggedInPage);

    await inv.addProduct(0);
    await inv.goToCart();

    await cart.checkout();

    await check.fillDetails();
    await check.finishOrder();

    await check.verifySuccess();
  });

});