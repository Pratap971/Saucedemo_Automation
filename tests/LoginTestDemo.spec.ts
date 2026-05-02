import {test} from '@playwright/test'
import { LoginPage } from '../PageObjects/LoginPage'

test('login test', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();
    await loginPage.Login('standard_user', 'secret_sauce');
    await loginPage.verifyLoginSuccess();

});