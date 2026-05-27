const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');

const ProductPage = require('../pages/ProductPage');


// Add Product To Cart
test('Add Product To Cart', async ({ page }) => {

    const loginPage = new LoginPage(page);

    const productPage = new ProductPage(page);

    await loginPage.gotoLoginPage();

    await loginPage.login('standard_user', 'secret_sauce');

    await productPage.addProductToCart();

    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

});


// Remove Product From Cart
test('Remove Product From Cart', async ({ page }) => {

    const loginPage = new LoginPage(page);

    const productPage = new ProductPage(page);

    await loginPage.gotoLoginPage();

    await loginPage.login('standard_user', 'secret_sauce');

    await productPage.addProductToCart();

    await productPage.removeProductFromCart();

    await expect(page.locator('.shopping_cart_badge')).toHaveCount(0);

});


// Open Cart Page
test('Open Cart Page', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();

    await loginPage.login('standard_user', 'secret_sauce');

    await page.click('.shopping_cart_link');

    await expect(page).toHaveURL(/cart/);

});


// Continue Shopping Button
test('Continue Shopping Button', async ({ page }) => {

    const loginPage = new LoginPage(page);

    const productPage = new ProductPage(page);

    await loginPage.gotoLoginPage();

    await loginPage.login('standard_user', 'secret_sauce');

    await productPage.addProductToCart();

    await page.click('.shopping_cart_link');

    await page.click('#continue-shopping');

    await expect(page).toHaveURL(/inventory/);

});


// Cart Page Title Validation
test('Cart Page Title Validation', async ({ page }) => {

    const loginPage = new LoginPage(page);

    const productPage = new ProductPage(page);

    await loginPage.gotoLoginPage();

    await loginPage.login('standard_user', 'secret_sauce');

    await productPage.addProductToCart();

    await page.click('.shopping_cart_link');

    await expect(page.locator('.title')).toContainText('Your Cart');

});