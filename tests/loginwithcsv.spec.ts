import { test, expect } from '@playwright/test';
import { LoginPage } from '../PageObjects/LoginPage';
import { readCSV } from '../utils/csvReader';

const loginData = readCSV('./test-Data/LoginData.csv');

loginData.forEach((data: any) => {

    if (data.run !== 'true') return;

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


