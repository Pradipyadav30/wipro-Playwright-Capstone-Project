const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');

test.describe('Checkout Module Tests', () => {

    // Login Before Every Test
    test.beforeEach(async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.gotoLoginPage();

        await loginPage.login('standard_user', 'secret_sauce');

        await page.click('#add-to-cart-sauce-labs-backpack');

        await page.click('.shopping_cart_link');

        await page.click('#checkout');

    });

    
    // Test 1
test('Successful Checkout Information', async ({ page }) => {

    await page.fill('#first-name', 'Pradip');

    await page.fill('#last-name', 'Yadav');

    await page.fill('#postal-code', '700001');

    await page.click('#continue');

    await expect(page).toHaveURL(/checkout-step-two/);

});


// Test 2
test('Empty First Name Validation', async ({ page }) => {

    await page.fill('#last-name', 'Yadav');

    await page.fill('#postal-code', '700001');

    await page.click('#continue');

    await expect(page.locator('[data-test="error"]')).toBeVisible();

});


// Test 3
test('Empty Last Name Validation', async ({ page }) => {

    await page.fill('#first-name', 'Pradip');

    await page.fill('#postal-code', '700001');

    await page.click('#continue');

    await expect(page.locator('[data-test="error"]')).toBeVisible();

});


// Test 4
test('Empty Postal Code Validation', async ({ page }) => {

    await page.fill('#first-name', 'Pradip');

    await page.fill('#last-name', 'Yadav');

    await page.click('#continue');

    await expect(page.locator('[data-test="error"]')).toBeVisible();

});


// Test 5
test('Cancel Checkout', async ({ page }) => {

    await page.click('#cancel');

    await expect(page).toHaveURL(/cart/);

});


// Test 6
test('Continue Button Visibility', async ({ page }) => {

    await expect(page.locator('#continue')).toBeVisible();

});


// Test 7
test('Cancel Button Visibility', async ({ page }) => {

    await expect(page.locator('#cancel')).toBeVisible();

});


// Test 8
test('Checkout Page Title Validation', async ({ page }) => {

    await expect(page.locator('.title')).toContainText('Checkout');

});


// Test 9
test('First Name Field Visibility', async ({ page }) => {

    await expect(page.locator('#first-name')).toBeVisible();

});


// Test 10
test('Last Name Field Visibility', async ({ page }) => {

    await expect(page.locator('#last-name')).toBeVisible();

});


// Test 11
test('Postal Code Field Visibility', async ({ page }) => {

    await expect(page.locator('#postal-code')).toBeVisible();

});


// Test 12
test('Checkout URL Validation', async ({ page }) => {

    await expect(page).toHaveURL(/checkout-step-one/);

});


// Test 13
test('Checkout Form Fill Validation', async ({ page }) => {

    await page.fill('#first-name', 'Pradip');

    await page.fill('#last-name', 'Yadav');

    await page.fill('#postal-code', '700001');

    await expect(page.locator('#first-name')).toHaveValue('Pradip');

});


// Test 14
test('Error Message Visibility', async ({ page }) => {

    await page.click('#continue');

    await expect(page.locator('[data-test="error"]')).toBeVisible();

});


// Test 15
test('Checkout Step One URL Validation', async ({ page }) => {

    await expect(page).toHaveURL(/checkout-step-one/);

});


// Test 16
test('Continue Button Click Validation', async ({ page }) => {

    await page.fill('#first-name', 'Pradip');

    await page.fill('#last-name', 'Yadav');

    await page.fill('#postal-code', '700001');

    await page.click('#continue');

    await expect(page).toHaveURL(/checkout-step-two/);

});


// Test 17
test('Checkout Overview Page Title', async ({ page }) => {

    await page.fill('#first-name', 'Pradip');

    await page.fill('#last-name', 'Yadav');

    await page.fill('#postal-code', '700001');

    await page.click('#continue');

    await expect(page.locator('.title')).toContainText('Checkout');

});


// Test 18
test('Finish Button Visibility', async ({ page }) => {

    await page.fill('#first-name', 'Pradip');

    await page.fill('#last-name', 'Yadav');

    await page.fill('#postal-code', '700001');

    await page.click('#continue');

    await expect(page.locator('#finish')).toBeVisible();

});


// Test 19
test('Cancel Button On Overview Page', async ({ page }) => {

    await page.fill('#first-name', 'Pradip');

    await page.fill('#last-name', 'Yadav');

    await page.fill('#postal-code', '700001');

    await page.click('#continue');

    await expect(page.locator('#cancel')).toBeVisible();

});


// Test 20
test('Successful Order Completion', async ({ page }) => {

    await page.fill('#first-name', 'Pradip');

    await page.fill('#last-name', 'Yadav');

    await page.fill('#postal-code', '700001');

    await page.click('#continue');

    await page.click('#finish');

    await expect(page.locator('.complete-header')).toBeVisible();

});

});