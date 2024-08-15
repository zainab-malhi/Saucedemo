const { test } = require("@playwright/test");

exports.ShippingInformation = class ShippingInformation {
  constructor(page) {
    this.page = page;
    this.cancelButton = "button[data-test='cancel']";
    this.ContinueButton = "input[data-test='continue']";
    this.firstName = "input[data-test='firstName']";
    this.lastName = "input[data-test='lastName']";
    this.postCode = "input[data-test='postalCode']";
  }

  async completeInformation(firstName, lastName, zipCode) {
    await this.page.locator(this.firstName).fill(firstName);
    await this.page.locator(this.lastName).fill(lastName);
    await this.page.locator(this.postCode).fill(zipCode);
  }

  async clickContinueButton() {
    await this.page.locator(this.ContinueButton).click();
  }

  async clickCancelButton() {
    await this.page.locator(this.cancelButton).click();
  }
};
