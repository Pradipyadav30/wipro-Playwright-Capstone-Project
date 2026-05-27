const { expect } = require('@playwright/test');

class ProductPage {

    constructor(page) {

        this.page = page;

        // Locators
        this.productHeader = page.locator('.title');

        this.sortDropdown = page.locator('[data-test="product-sort-container"]');

        this.inventoryItems = page.locator('.inventory_item_name');

        this.addToCartButton = page.locator('#add-to-cart-sauce-labs-backpack');

        this.removeButton = page.locator('#remove-sauce-labs-backpack');
    }


    // Verify Product Header
    async verifyProductHeader() {

        await expect(this.productHeader).toHaveText('Products');
    }


    // Sort Products
    async sortProducts(optionValue) {

        await this.sortDropdown.selectOption(optionValue);
    }


    // Add Product To Cart
    async addProductToCart() {

        await this.addToCartButton.click();
    }


    // Remove Product From Cart
    async removeProductFromCart() {

        await this.removeButton.click();
    }

}

module.exports = ProductPage;