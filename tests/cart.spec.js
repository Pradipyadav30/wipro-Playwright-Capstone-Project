const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');

const ProductPage = require('../pages/ProductPage');

test.describe('Cart Module Tests', () => {

    // Login Before Every Test
    test.beforeEach(async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.gotoLoginPage();

        await loginPage.login('standard_user', 'secret_sauce');

    });


    // Test 1: Add Product To Cart
    test('Add Product To Cart', async ({ page }) => {

        await page.click('#add-to-cart-sauce-labs-backpack');

        await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

    });


    // Test 2: Remove Product From Cart
    test('Remove Product From Cart', async ({ page }) => {

        await page.click('#add-to-cart-sauce-labs-backpack');

        await page.click('#remove-sauce-labs-backpack');

        await expect(page.locator('.shopping_cart_badge')).toHaveCount(0);

    });


    // Test 3: Open Cart Page
    test('Open Cart Page', async ({ page }) => {

        await page.click('.shopping_cart_link');

        await expect(page).toHaveURL(/cart/);

    });


    // Test 4: Continue Shopping Button
    test('Continue Shopping Button', async ({ page }) => {

        await page.click('#add-to-cart-sauce-labs-backpack');

        await page.click('.shopping_cart_link');

        await page.click('#continue-shopping');

        await expect(page).toHaveURL(/inventory/);

    });


    // Test 5: Cart Page Title Validation
    test('Cart Page Title Validation', async ({ page }) => {

        await page.click('.shopping_cart_link');

        await expect(page.locator('.title')).toContainText('Your Cart');

    });


    // Test 6: Cart Badge Visibility
    test('Cart Badge Visibility', async ({ page }) => {

        await page.click('#add-to-cart-sauce-labs-backpack');

        await expect(page.locator('.shopping_cart_badge')).toBeVisible();

    });


    // Test 7: Add Multiple Products To Cart
    test('Add Multiple Products To Cart', async ({ page }) => {

        await page.click('#add-to-cart-sauce-labs-backpack');

        await page.click('#add-to-cart-sauce-labs-bike-light');

        await expect(page.locator('.shopping_cart_badge')).toHaveText('2');

    });


    // Test 8: Cart URL Validation
    test('Cart URL Validation', async ({ page }) => {

        await page.click('.shopping_cart_link');

        await expect(page).toHaveURL(/cart/);

    });


    // Test 9: Checkout Button Visibility
    test('Checkout Button Visibility', async ({ page }) => {

        await page.click('.shopping_cart_link');

        await expect(page.locator('#checkout')).toBeVisible();

    });


    // Test 10: Continue Shopping Button Visibility
    test('Continue Shopping Button Visibility', async ({ page }) => {

        await page.click('.shopping_cart_link');

        await expect(page.locator('#continue-shopping')).toBeVisible();

    });


    // Test 11: Cart Item Visibility
    test('Cart Item Visibility', async ({ page }) => {

        await page.click('#add-to-cart-sauce-labs-backpack');

        await page.click('.shopping_cart_link');

        await expect(page.locator('.cart_item')).toBeVisible();

    });


    // Test 12: Remove Button Visibility
    test('Remove Button Visibility', async ({ page }) => {

        await page.click('#add-to-cart-sauce-labs-backpack');

        await page.click('.shopping_cart_link');

        await expect(page.locator('#remove-sauce-labs-backpack')).toBeVisible();

    });


    // Test 13: Cart Quantity Visibility
    test('Cart Quantity Visibility', async ({ page }) => {

        await page.click('#add-to-cart-sauce-labs-backpack');

        await page.click('.shopping_cart_link');

        await expect(page.locator('.cart_quantity')).toBeVisible();

    });


    // Test 14: Cart Description Visibility
    test('Cart Description Visibility', async ({ page }) => {

        await page.click('#add-to-cart-sauce-labs-backpack');

        await page.click('.shopping_cart_link');

        await expect(page.locator('.inventory_item_name')).toBeVisible();

    });


    // Test 15: Shopping Cart Icon Visibility
    test('Shopping Cart Icon Visibility', async ({ page }) => {

        await expect(page.locator('.shopping_cart_link')).toBeVisible();

    });

});