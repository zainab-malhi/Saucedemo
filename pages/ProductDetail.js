const { test, expect } = require("@playwright/test");
exports.ProductDetail = class ProductDetail {
  constructor(page) {
    this.page = page;
    this.addToCartButton = "button[data-test='add-to-cart']";
    this.removeButton = "button[data-test='remove']";
    this.backToProducts = "button[id='back-to-products']";
  }

  async clickAddToCartButton() {
    await this.page.locator(this.addToCartButton).click();
  }

  async clickRemoveButton() {
    await this.page.locator(this.removeButton).click();
  }

  async clickBackToProducts() {
    await this.page.locator(this.backToProducts).click();
  }
};
