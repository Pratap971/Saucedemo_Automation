import { test, expect } from '@playwright/test';
import { LoginPage } from '../PageObjects/LoginPage';
import loginData from '../test-Data/loginData.json';

test('Verify Valid Login test:', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.gotoLoginPage();
  //await loginPage.Login('standard_user', 'secret_sauce');  --> Hardcoded values/Inputs

  await loginPage.Login(
    loginData.valid_user.username,
    loginData.valid_user.password
  );
  // await loginPage.verifyLoginSuccess();

  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

});

test('Verify Invalid Login test:', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.gotoLoginPage();
  //await loginPage.Login('standard_user', 'secret_sauce');  --> Hardcoded values/Inputs

  await loginPage.Login(
    loginData.Invalid_user.username,
    loginData.Invalid_user.password
  );

  await expect(loginPage.errorMessage).toBeVisible();
});