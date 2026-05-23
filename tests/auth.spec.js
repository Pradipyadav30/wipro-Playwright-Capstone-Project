const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');

//valid login test
test('Valid Login Test', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();

    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory/);

});


// Invalid Login Test
test('Invalid Login Test', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();

    await loginPage.login('standard_user', 'wrong_password');

    await expect(page.locator('[data-test="error"]')).toBeVisible();

});


// Locked User Test
test('Locked User Login Test', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();

    await loginPage.login('locked_out_user', 'secret_sauce');

    await expect(page.locator('[data-test="error"]')).toBeVisible();
    
});    