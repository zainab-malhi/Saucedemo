const { test, expect } = require("@playwright/test");
exports.Cart = class Cart {
  constructor(page) {
    this.page = page;
    this.continueShoppingButton = "button[data-test='continue-shopping']";
    this.checkoutButton = "button[data-test='checkout']";
  }

  async clickCheckOutButton() {
    await this.page.locator(this.checkoutButton).click();
  }

  async clickConitnueShoppingButton() {
    await this.page.locator(this.continueShoppingButton).click();
  }
};
