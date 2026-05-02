import { test, expect } from '@playwright/test';
import { LoginPage } from '../PageObjects/LoginPage';
import loginData from '../test-Data/loginData.json';

test.describe('Login Tests (JSON)', () => {

  for (const data of loginData) {

    test(`Login test for ${data.username}`, async ({ page }) => {

      const loginPage = new LoginPage(page);

      await loginPage.gotoLoginPage();
      await loginPage.Login(data.username, data.password);

      if (data.expected === 'success') {
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
      } else {
        await expect(loginPage.errorMessage).toBeVisible();
      }

    });

  }

});