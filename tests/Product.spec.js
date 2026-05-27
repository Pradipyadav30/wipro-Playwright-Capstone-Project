const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const ProductPage = require('../pages/ProductPage');

test.describe('Product Catalog & Sorting Tests', () => {

    // Runs before every test
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


    // Test 6: Inventory Items Visibility
    test('Inventory Items Visibility', async ({ page }) => {

        const items = page.locator('.inventory_item');

        await expect(items.first()).toBeVisible();

    });


    // Test 7: Product Image Visibility
    test('Product Image Visibility', async ({ page }) => {

        const image = page.locator('.inventory_item_img').first();

        await expect(image).toBeVisible();

    });


    // Test 8: Product Price Visibility
    test('Product Price Visibility', async ({ page }) => {

        const price = page.locator('.inventory_item_price').first();

        await expect(price).toBeVisible();

    });


    // Test 9: Add Single Product To Cart
    test('Add Single Product To Cart', async ({ page }) => {

        await page.click('#add-to-cart-sauce-labs-backpack');

        await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

    });


    // Test 10: Remove Product From Cart
    test('Remove Product From Cart', async ({ page }) => {

        await page.click('#add-to-cart-sauce-labs-backpack');

        await page.click('#remove-sauce-labs-backpack');

        await expect(page.locator('.shopping_cart_badge')).toHaveCount(0);

    });


    // Test 11: Add Multiple Products
    test('Add Multiple Products', async ({ page }) => {

        await page.click('#add-to-cart-sauce-labs-backpack');

        await page.click('#add-to-cart-sauce-labs-bike-light');

        await expect(page.locator('.shopping_cart_badge')).toHaveText('2');

    });


    // Test 12: Cart Badge Visibility
    test('Cart Badge Visibility', async ({ page }) => {

        await page.click('#add-to-cart-sauce-labs-backpack');

        await expect(page.locator('.shopping_cart_badge')).toBeVisible();

    });


    // Test 13: Product Page URL Validation
    test('Product Page URL Validation', async ({ page }) => {

        await expect(page).toHaveURL(/inventory/);

    });


    // Test 14: Product Page Title Validation
    test('Product Page Title Validation', async ({ page }) => {

        await expect(page).toHaveTitle(/Swag Labs/);

    });


    // Test 15: Product Sort Dropdown Visibility
    test('Product Sort Dropdown Visibility', async ({ page }) => {

        await expect(page.locator('.product_sort_container')).toBeVisible();

    });

});