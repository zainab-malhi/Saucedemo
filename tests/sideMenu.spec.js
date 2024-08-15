const { test, expect } = require("@playwright/test");
import { Login } from "../pages/login";
import { sideMenu } from "../pages/sideMenu";

test("Clicking Side Menu open the side bar", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  let loginPage = new Login(page);
  await loginPage.login("standard_user", "secret_sauce");
  await loginPage.clickLoginButton();

  //let sideMenu = new sideMenu(page);
  await page.locator("button[id='react-burger-menu-btn']").click();
});
