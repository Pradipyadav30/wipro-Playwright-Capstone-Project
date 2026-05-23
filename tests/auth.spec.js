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

// 4. Empty Username Test
test('Empty Username Test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login('', 'secret_sauce');
    await expect(page.locator('[data-test="error"]')).toBeVisible();
});

// 5. Empty Password Test
test('Empty Password Test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login('standard_user', '');
    await expect(page.locator('[data-test="error"]')).toBeVisible();
});

// 6. Empty Credentials Test
test('Empty Credentials Test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login('', '');
    await expect(page.locator('[data-test="error"]')).toBeVisible();
});