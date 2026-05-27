const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');


// 1. Valid Login Test
test('Valid Login Test', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();

    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory/);

});


// 2. Invalid Login Test
test('Invalid Login Test', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();

    await loginPage.login('standard_user', 'wrong_password');

    await expect(page.locator('[data-test="error"]')).toBeVisible();

});


// 3. Locked User Login Test
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


// 7. Performance User Login Test
test('Performance User Login Test', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();

    await loginPage.login('performance_glitch_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory/);

});

// 8. Error Message Validation
test('Error Message Validation', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();

    await loginPage.login('standard_user', 'wrong_password');

    await expect(page.locator('[data-test="error"]'))
        .toContainText('Username and password do not match');

});


// 9. Login Button Visibility
test('Login Button Visibility Test', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();

    await expect(page.locator('#login-button')).toBeVisible();

});


// 10. Username Field Visibility
test('Username Field Visibility Test', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();

    await expect(page.locator('#user-name')).toBeVisible();

});


// 11. Password Field Visibility
test('Password Field Visibility Test', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();

    await expect(page.locator('#password')).toBeVisible();

});


// 12. Login Page Title Validation
test('Login Page Title Validation', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();

    await expect(page).toHaveTitle(/Swag Labs/);

});


// 13. Login Page URL Validation
test('Login Page URL Validation', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();

    await expect(page).toHaveURL('https://www.saucedemo.com/');

});


// 14. Password Field Is Masked
test('Password Field Is Masked Test', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();

    const type = await page.locator('#password').getAttribute('type');

    expect(type).toBe('password');

});


// 15. Login Using Enter Key
test('Login Using Enter Key Test', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.fill('#user-name', 'standard_user');

    await page.fill('#password', 'secret_sauce');

    await page.keyboard.press('Enter');

    await expect(page).toHaveURL(/inventory/);

});