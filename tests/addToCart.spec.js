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

  //const product = await page.locator("div[data-test='inventory-item']");

  await page
    .locator("button[data-test='add-to-cart-sauce-labs-backpack']")
    .click();

  await page
    .locator("button[data-test='add-to-cart-sauce-labs-bike-light']")
    .click();
  await page
    .locator("button[data-test='add-to-cart-sauce-labs-bolt-t-shirt']")
    .click();
  await page
    .locator("button[data-test='add-to-cart-sauce-labs-fleece-jacket']")
    .click();
  await page
    .locator("button[data-test='add-to-cart-sauce-labs-onesie']")
    .click();
  await page
    .locator(
      "button[data-test='add-to-cart-test.allthethings()-t-shirt-(red)']"
    )
    .click();

  //cart button
  await page.locator("div#shopping_cart_container > a").click();

  // check out button
  await page.locator("button[data-test='checkout']").click();

  //First name
  await page.locator("input[data-test='firstName']").fill("John");

  //Last name
  await page.locator("input[data-test='lastName']").fill("Mark");

  //Postal Code
  await page.locator("input[data-test='postalCode']").fill("H3422A");

  await page.locator("input[data-test='continue']").click();

  //Finish Button
  await page.locator("button[data-test='finish']").click();
  //assertion
});
