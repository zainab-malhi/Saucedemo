// @ts-check
const { test, expect } = require("@playwright/test");
const exp = require("constants");

test("has title", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  const username = await page.locator("input[id='user-name']");
  const password = await page.locator("input[id='password']");

  await username.fill("standard_user");
  await password.fill("secret_sauce");

  await page.locator("input[id='login-button']").click();

  //assertion
});
