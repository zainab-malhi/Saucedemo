// @ts-check
const { test, expect } = require("@playwright/test");
import exp from "constants";
import { Login } from "../pages/login";

test("user can login with valid Username and valid Password", async ({
  page,
}) => {
  await page.goto("https://www.saucedemo.com/");
  let loginPage = new Login(page);
  loginPage.login("standard_user", "secret_sauce");

  await expect(await page.locator("span[class='title']").textContent()).toEqual(
    "Products"
  );
});

test("user can not login with valid Username and in-valid Password", async ({
  page,
}) => {
  await page.goto("https://www.saucedemo.com/");
  let loginPage = new Login(page);
  loginPage.login("standard_user", "secret");

  await expect(
    await page
      .locator("div[class='error-message-container error'] >h3")
      .textContent()
  ).toEqual(
    "Epic sadface: Username and password do not match any user in this service"
  );
});

test("user can not login with in-valid Username and valid Password", async ({
  page,
}) => {
  await page.goto("https://www.saucedemo.com/");
  let loginPage = new Login(page);
  loginPage.login("standard", "secret_sauce");

  await expect(
    await page
      .locator("div[class='error-message-container error'] >h3")
      .textContent()
  ).toEqual(
    "Epic sadface: Username and password do not match any user in this service"
  );
});

test("user can not login with in-valid Username and in-valid Password", async ({
  page,
}) => {
  await page.goto("https://www.saucedemo.com/");
  let loginPage = new Login(page);
  loginPage.login("standard", "secret");

  await expect(
    await page
      .locator("div[class='error-message-container error'] >h3")
      .textContent()
  ).toEqual(
    "Epic sadface: Username and password do not match any user in this service"
  );
});

test("user can not login with invalid-Username and empty Password", async ({
  page,
}) => {
  await page.goto("https://www.saucedemo.com/");
  let loginPage = new Login(page);
  loginPage.login("sdfsfddsfsf", "");

  await expect(
    await page
      .locator("div[class='error-message-container error'] >h3")
      .textContent()
  ).toEqual("Epic sadface: Password is required");
});

test("user can not login with empty Username and empty Password", async ({
  page,
}) => {
  await page.goto("https://www.saucedemo.com/");
  let loginPage = new Login(page);
  loginPage.login("", "");

  await expect(
    await page
      .locator("div[class='error-message-container error'] >h3")
      .textContent()
  ).toEqual("Epic sadface: Username is required");
});
