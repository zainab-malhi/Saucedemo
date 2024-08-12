const { test } = require("@playwright/test");

exports.ProductsList = class ProductsList {
  constructor(page) {
    this.product1AddtoCartButton =
      "button[data-test='add-to-cart-sauce-labs-backpack']";
    this.product2AddtoCartButton =
      "button[data-test='add-to-cart-sauce-labs-bike-light']";
    this.product3AddtoCartButton =
      "button[data-test='add-to-cart-sauce-labs-bolt-t-shirt']";
    this.product4AddtoCartButton =
      "button[data-test='add-to-cart-sauce-labs-fleece-jacket']";
    this.product5AddtoCartButton =
      "button[data-test='add-to-cart-sauce-labs-onesie']";
    this.product6AddtoCartButton =
      "button[data-test='add-to-cart-test.allthethings()-t-shirt-(red)']";
  }

  async addToCart(number) {
    switch (number) {
      case 1:
        await page.locator(this.product1AddtoCartButton).click();
      case 2:
        await page.locator(this.product1AddtoCartButton).click();
      case 3:
        await page.locator(this.product1AddtoCartButton).click();
      case 4:
        await page.locator(this.product1AddtoCartButton).click();
      case 5:
        await page.locator(this.product1AddtoCartButton).click();
      case 6:
        await page.locator(this.product1AddtoCartButton).click();
    }
  }
};
