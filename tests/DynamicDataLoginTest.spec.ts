import { test, expect } from '@playwright/test';
import { LoginPage } from '../PageObjects/LoginPage';
import loginData from '../test-Data/DynamictestData.json';    // import json as an array

loginData.forEach((data) => {

    if (!data.run) return;

    test(`Login test ${data.username}`, async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.gotoLoginPage();
        await loginPage.Login(data.username, data.password);

        if (data.expected === 'success') {
            await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
        }
        else {
            await expect(loginPage.errorMessage).toBeVisible();
        }

    });


});


