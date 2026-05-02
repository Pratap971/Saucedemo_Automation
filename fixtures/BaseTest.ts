import { test as base, expect, Page } from '@playwright/test';
import { LoginPage } from '../PageObjects/LoginPage';

type MyFixtures = {
  loggedInPage: Page;
};

export const test = base.extend<MyFixtures>({
  loggedInPage: async ({ page }, use) => {

    const login = new LoginPage(page);

    await login.gotoLoginPage();
    await login.Login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory/);

    await use(page);
  }
});

export { expect };