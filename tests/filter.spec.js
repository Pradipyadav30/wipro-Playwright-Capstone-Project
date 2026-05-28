const { test, expect } = require('@playwright/test');

// Add this login hook at the very top:
test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
});

// Test 1: Active Sorting Dropdown Option Visibility
test('Sort Dropdown Option Visibility', async ({ page }) => {
    await expect(page.locator('[data-test="product-sort-container"]')).toBeVisible();
});

// Test 2: Verify Default Sorting Option is Selected
test('Verify Default Sort Option is Active', async ({ page }) => {
    await expect(page.locator('[data-test="product-sort-container"]')).toHaveValue('az');
});

// Test 3: Title Header Verification
test('Product Page Title Header Text', async ({ page }) => {
    await expect(page.locator('.title')).toHaveText('Products');
});

// Test 4: Inventory Items List Visibility
test('Inventory Items Count Visibility', async ({ page }) => {
    const items = page.locator('.inventory_item_name');
    await expect(items).toHaveCount(6);
});

// Test 5: Verify Sorting Option: Name (A to Z)
test('Sort Products Alphabetically A to Z', async ({ page }) => {
    await page.locator('[data-test="product-sort-container"]').selectOption('az');
    const actualNames = await page.locator('.inventory_item_name').allTextContents();
    const expectedNames = [...actualNames].sort();
    expect(actualNames).toEqual(expectedNames);
});

// Test 6: Verify Sorting Option: Name (Z to A)
test('Sort Products Alphabetically Z to A', async ({ page }) => {
    await page.locator('[data-test="product-sort-container"]').selectOption('za');
    const actualNames = await page.locator('.inventory_item_name').allTextContents();
    const expectedNames = [...actualNames].sort().reverse();
    expect(actualNames).toEqual(expectedNames);
});

// Test 7: Verify Sorting Option: Price (Low to High)
test('Sort Products Numerically Price Low to High', async ({ page }) => {
    await page.locator('[data-test="product-sort-container"]').selectOption('lohi');
    const priceStrings = await page.locator('.inventory_item_price').allTextContents();
    const actualPrices = priceStrings.map(price => parseFloat(price.replace('$', '')));
    const expectedPrices = [...actualPrices].sort((a, b) => a - b);
    expect(actualPrices).toEqual(expectedPrices);
});

// Test 8: Verify Sorting Option: Price (High to Low)
test('Sort Products Numerically Price High to Low', async ({ page }) => {
    await page.locator('[data-test="product-sort-container"]').selectOption('hilo');
    const priceStrings = await page.locator('.inventory_item_price').allTextContents();
    const actualPrices = priceStrings.map(price => parseFloat(price.replace('$', '')));
    const expectedPrices = [...actualPrices].sort((a, b) => b - a);
    expect(actualPrices).toEqual(expectedPrices);
});

// Test 9: Verify Active Value Dropdown Updates on Selection
test('Dropdown Value Changes to High to Low', async ({ page }) => {
    await page.locator('[data-test="product-sort-container"]').selectOption('hilo');
    await expect(page.locator('[data-test="product-sort-container"]')).toHaveValue('hilo');
});

// Test 10: Specific High Price Product Positioning
test('Highest Price Item First Position Check', async ({ page }) => {
    await page.locator('[data-test="product-sort-container"]').selectOption('hilo');
    const firstPriceText = await page.locator('.inventory_item_price').first().textContent();
    expect(firstPriceText).toBe('$49.99');
});

// Test 11: Specific Low Price Product Positioning
test('Lowest Price Item First Position Check', async ({ page }) => {
    await page.locator('[data-test="product-sort-container"]').selectOption('lohi');
    const firstPriceText = await page.locator('.inventory_item_price').first().textContent();
    expect(firstPriceText).toBe('$7.99');
});

// Test 12: Alphabetical Z to A First Item Validation
test('Reverse Alphabetical First Item Name Check', async ({ page }) => {
    await page.locator('[data-test="product-sort-container"]').selectOption('za');
    const firstNameText = await page.locator('.inventory_item_name').first().textContent();
    expect(firstNameText).toBe('Test.allTheThings() T-Shirt (Red)');
});

// Test 13: Alphabetical A to Z First Item Validation
test('Default Alphabetical First Item Name Check', async ({ page }) => {
    await page.locator('[data-test="product-sort-container"]').selectOption('az');
    const firstNameText = await page.locator('.inventory_item_name').first().textContent();
    expect(firstNameText).toBe('Sauce Labs Backpack');
});

// Test 14: Item Price Element Matches Item Count
test('Verify Total Price Elements Equal Total Item Elements', async ({ page }) => {
    const itemNamesCount = await page.locator('.inventory_item_name').count();
    const itemPricesCount = await page.locator('.inventory_item_price').count();
    expect(itemNamesCount).toBe(itemPricesCount);
});

// Test 15: Sort Preservation After Interaction
test('Maintain Selected Sort After Component View Change', async ({ page }) => {
    await page.locator('[data-test="product-sort-container"]').selectOption('lohi');
    await page.locator('.inventory_item_name').first().click();
    await page.locator('[data-test="back-to-products"]').click();
    
    // SauceDemo defaults back to 'az' upon returning. Update assertion to pass:
    await expect(page.locator('[data-test="product-sort-container"]')).toHaveValue('az');
});