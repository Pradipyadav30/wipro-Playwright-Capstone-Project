const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const ProductPage = require('../pages/ProductPage');

test.describe('Product Catalog & Sorting Tests', () => {
    
    // This runs before every single test case below, logging you in automatically
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.gotoLoginPage();
        await loginPage.login('standard_user', 'secret_sauce');
    });

    // Test 1: Verify Header
    test('Verify Product Page Header Loaded', async ({ page }) => {
        const productPage = new ProductPage(page);
        await productPage.verifyProductHeader();
    });

    // Test 2: Price Low to High
    test('Sort Products by Price Low to High', async ({ page }) => {
        const productPage = new ProductPage(page);
        await productPage.sortProducts('lohi');
    });

    // Test 3: Price High to Low
    test('Sort Products by Price High to Low', async ({ page }) => {
        const productPage = new ProductPage(page);
        await productPage.sortProducts('hilo');
    });

    // Test 4: Name A to Z
    test('Sort Products by Name A to Z', async ({ page }) => {
        const productPage = new ProductPage(page);
        await productPage.sortProducts('az');
    });

    // Test 5: Name Z to A
    test('Sort Products by Name Z to A', async ({ page }) => {
        const productPage = new ProductPage(page);
        await productPage.sortProducts('za');
    });
});