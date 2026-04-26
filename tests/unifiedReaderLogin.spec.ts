import { test, expect } from '@playwright/test';
import { LoginPage } from '../PageObjects/LoginPage';
import { readData } from '../utils/unfieddataReader';

//const testData = readData('./test-Data/LoginData.xlsx');
// const testData = readData('./test-Data/LoginData.csv');
 const testData = readData('./test-Data/loginData.json');

//const testData: LoginData[] = readExcel('./test-Data/LoginData.xlsx', 'Sheet1');

test.describe("Login Tests-Excel ", () => {

    for (const data of testData) {

        // if (data.run !== 'yes') continue;

        test(`Login test for - ${data.username}`, async ({ page }) => {

            test.skip(data.run !== 'yes', 'Run Flag=NO')

            const loginPage = new LoginPage(page);

            await test.step('Go to Login Page: ', async () => {

                await loginPage.gotoLoginPage();

            });

            await test.step('Perform Login Action: ', async () => {

                await loginPage.Login(data.username, data.password);

            });

            await test.step('Validate Results: ', async () => {
                if (data.expected === 'success') {
                    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
                }
                else {
                    await expect(loginPage.errorMessage).toBeVisible();
                }

            });

        })
    }

});