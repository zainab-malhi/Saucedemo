const { test, expect } = require("@playwright/test");
import exp from "constants";
import { Login } from "../pages/login";
import { ProductDetail } from "../pages/ProductDetail";
import { ProductsList } from "../pages/ProductsList";

test("Add to cart button adds item to cart", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  //Login App
  let loginPage = new Login(page);
  await loginPage.login("standard_user", "secret_sauce");
  await loginPage.clickLoginButton();

  //Click on a Product
  let productListPage = new ProductsList(page);
  await productListPage.clickProduct();

  //Adding item to cart
  let productDetailPage = new ProductDetail(page);
  await productDetailPage.clickAddToCartButton();

  await expect(page.locator(productDetailPage.removeButton)).toBeVisible();
});

test("Remove button removes item from cart", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  //Login App
  let loginPage = new Login(page);
  await loginPage.login("standard_user", "secret_sauce");
  await loginPage.clickLoginButton();

  //Click on a Product
  let productListPage = new ProductsList(page);
  await productListPage.clickProduct();

  //Adding item to cart and then removing it
  let productDetailPage = new ProductDetail(page);
  await productDetailPage.clickAddToCartButton();
  await productDetailPage.clickRemoveButton();

  await expect(page.locator(productDetailPage.addToCartButton)).toBeVisible();
});

test("Back to products links should take to product list page", async ({
  page,
}) => {
  await page.goto("https://www.saucedemo.com/");

  //Login App
  let loginPage = new Login(page);
  await loginPage.login("standard_user", "secret_sauce");
  await loginPage.clickLoginButton();

  //Click on a Product
  let productListPage = new ProductsList(page);
  await productListPage.clickProduct();

  //Click Back to Products Button
  let productDetailPage = new ProductDetail(page);
  await productDetailPage.clickBackToProducts();

  await expect(await page.locator("span[class='title']").textContent()).toEqual(
    "Products"
  );
});
