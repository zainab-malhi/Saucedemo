// @ts-check
const { test, expect } = require("@playwright/test");
const exp = require("constants");
const { Login } = require("../pages/login");
import { ProductsList } from "../pages/ProductsList";

test("products should be added in cart", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  let loginPage = new Login(page);
  await loginPage.login("standard_user", "secret_sauce");
  await loginPage.clickLoginButton();

  let productsListPage = new ProductsList(page);
  await productsListPage.addToCart(0);
  await productsListPage.addToCart(1);
  await productsListPage.addToCart(2);
  await productsListPage.addToCart(3);
  await productsListPage.addToCart(4);
  await productsListPage.addToCart(5);

  await expect(
    await page.locator("span[data-test='shopping-cart-badge']").textContent()
  ).toEqual("6");
});

// test("products are sorted A-Z", async ({ page }) => {
//   await page.goto("https://www.saucedemo.com/");
//   let loginPage = new Login(page);
//   loginPage.login("standard_user", "secret_sauce");

//   await expect(await page.locator("span[class='title']").textContent()).toEqual(
//     "Products"
//   );

//   const products = await page.locator("div[data-test='inventory-item-price']");

//   for (let i = 0; i < (await products.count()); i++) {
//     console.log(await products.nth(i));
//   }
// });

// test("products are sorted Z-A", async ({ page }) => {});

test("products are sorted price Low to High", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  let loginPage = new Login(page);
  await loginPage.login("standard_user", "secret_sauce");
  await loginPage.clickLoginButton();

  let productsListPage = new ProductsList(page);
  await productsListPage.sortAscending();
  await productsListPage.price();
});

// test("products are sorted price High to Low", async ({ page }) => {});
