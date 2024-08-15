const { test, expect } = require("@playwright/test");
exports.CheckoutOverview = class CheckoutOverview {
  constructor(page) {
    this.page = page;
    this.cancelButton = "button[data-test='cancel']";
    this.FinishButton = "button[data-test='finish']";
    this.title = "span[data-test='title']";
    this.backToHome = "button#back-to-products";
  }

  async clickFinishButton() {
    await this.page.locator(this.FinishButton).click();
  }

  async clickCancelButton() {
    await this.page.locator(this.cancelButton).click();
  }

  async getTitleText() {
    return await this.page.locator(this.title).textContent();
  }
};
