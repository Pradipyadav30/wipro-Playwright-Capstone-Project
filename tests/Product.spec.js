const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const ProductPage = require('../pages/ProductPage');

test.describe('Product Catalog & Sorting Tests', () => {
    
    // This runs before every single test case below
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.gotoLoginPage();
        await loginPage.login('standard_user', 'secret_sauce');
    });

    test('Verify Product Page Header Loaded', async ({ page }) => {
        const productPage = new ProductPage(page);
        await productPage.verifyProductHeader();
    });

    test('Sort Products by Price Low to High', async ({ page }) => {
        const productPage = new ProductPage(page);
        await productPage.sortProducts('lohi');
        // Your framework naturally progresses here!
    });
});