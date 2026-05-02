import { test, expect } from '@playwright/test';
import { LoginPage } from '../PageObjects/LoginPage';

test('@smoke Valid Login', async ({ page }) => {
  const login = new LoginPage(page);

  await login.gotoLoginPage();
  await login.Login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory/);
});

test('@regression Invalid Login', async ({ page }) => {
  const login = new LoginPage(page);

  await login.gotoLoginPage();
  await login.Login('locked_out_user', 'secret_sauce');

  await expect(login.errorMessage).toBeVisible();
});