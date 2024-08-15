const { test, expect } = require("@playwright/test");
import { Login } from "../pages/login";
import { Footer } from "../pages/Footer";

test("Clicking facebook logo takes to sauce demo facebook page", async ({
  page,
}) => {
  await page.goto("https://www.saucedemo.com/");
  let loginPage = new Login(page);
  await loginPage.login("standard_user", "secret_sauce");
  await loginPage.clickLoginButton();

  let footerPage = new Footer(page);
  await footerPage.clickFacebookLink();
  console.log(await page.title());
});
