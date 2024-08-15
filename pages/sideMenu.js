const { test, expect } = require("@playwright/test");
exports.sideMenu = class sideMenu {
  constructor(page) {
    this.page = page;
    this.sideMenuLink = "button[id='react-burger-menu-btn']";
  }

  async clickSideMenu() {
    await this.page.locator(this.sideMenuLink).click();
  }
};
