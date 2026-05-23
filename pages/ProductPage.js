const { expect } = require('@playwright/test');

class ProductPage {
    constructor(page) {
        this.page = page;
        // Locators
        this.productHeader = page.locator('.title');
        this.sortDropdown = page.locator('[data-test="product-sort-container"]');
        this.inventoryItems = page.locator('.inventory_item_name');
    }

    // Method to verify we are on the product page
    async verifyProductHeader() {
        await expect(this.productHeader).toHaveText('Products');
    }

    // Method to sort products
    async sortProducts(optionValue) {
        // optionValue can be: 'az', 'za', 'lohi', 'hilo'
        await this.sortDropdown.selectOption(optionValue);
    }
}

module.exports = ProductPage;