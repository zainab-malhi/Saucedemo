const { test, expect } = require("@playwright/test");
exports.Footer = class Footer {
  constructor(page) {
    this.page = page;
    this.facebookLink = "a[data-test='social-facebook']";
    this.twitterLink = "a[data-test='social-twitter']";
    this.linkedinLink = "a[data-test='social-linkedin']";
  }

  async clickFacebookLink() {
    await this.page.locator(this.facebookLink).click();
  }
};
