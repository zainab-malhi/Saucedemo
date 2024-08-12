const { test, expect } = require("@playwright/test");

exports.Login = class Login {
  // all locators on the page
  constructor(page) {
    this.page = page;
    this.username = "input[id='user-name']";
    this.password = "input[id='password']";
    this.loginButton = "input[id='login-button']";
  }

  async login(username, password) {
    await this.page.locator(this.username).fill(username);
    await this.page.locator(this.password).fill(password);
    await this.page.locator(this.loginButton).click();
  }
};
