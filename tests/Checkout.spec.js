const { test, expect } = require("@playwright/test");
const { Login } = require("../pages/login");
const { ProductsList } = require("../pages/ProductsList");
const { ShippingInformation } = require("../pages/ShippingInformation");
const { Cart } = require("../pages/Cart");
const { CheckoutOverview } = require("../pages/CheckoutOverview");
const exp = require("constants");

test("Complete checkout and shipping process", async ({ page }) => {
  //Navigating to the url
  await page.goto("https://www.saucedemo.com/");

  //Login
  let loginPage = new Login(page);
  await loginPage.login("standard_user", "secret_sauce");
  await loginPage.clickLoginButton();

  //Add items to cart
  let productsListPage = new ProductsList(page);
  await productsListPage.addToCart(1);
  await productsListPage.addToCart(2);

  //Click Cart
  await productsListPage.clickCartIcon();

  // Going to Cart page and click on Check out button
  let cartPage = new Cart(page);
  await cartPage.clickCheckOutButton();

  //Completing Shipping Information
  let shippingInformationPage = new ShippingInformation(page);
  await shippingInformationPage.completeInformation("Peter", "Mark", "H23W13");
  await shippingInformationPage.clickContinueButton();

  // Click Finish Button on
  let CheckoutOverviewPage = new CheckoutOverview(page);
  await CheckoutOverviewPage.clickFinishButton();

  await expect(await CheckoutOverviewPage.getTitleText()).toEqual(
    "Checkout: Complete!"
  );

  await page.locator(CheckoutOverviewPage.backToHome).click();
});

test("Clicking Continue Shopping Button on Cart Page should take user to Product list page", async ({
  page,
}) => {
  //Navigating to the url
  await page.goto("https://www.saucedemo.com/");

  //Login
  let loginPage = new Login(page);
  await loginPage.login("standard_user", "secret_sauce");
  await loginPage.clickLoginButton();

  //Add items to cart
  let productsListPage = new ProductsList(page);
  await productsListPage.addToCart(1);

  //Click Cart Icon
  await productsListPage.clickCartIcon();

  //Click Continue Shopping Button
  let cartPage = new Cart(page);
  await cartPage.clickConitnueShoppingButton();

  // Make sure we are at products page
  await expect(await page.locator("span[class='title']").textContent()).toEqual(
    "Products"
  );
});

test("Clicking Cancel Button on Shipping Information should to take to Cart Page", async ({
  page,
}) => {
  //Navigating to the url
  await page.goto("https://www.saucedemo.com/");

  //Login
  let loginPage = new Login(page);
  await loginPage.login("standard_user", "secret_sauce");
  await loginPage.clickLoginButton();

  //Add items to cart
  let productsListPage = new ProductsList(page);
  await productsListPage.addToCart(1);

  //Click Cart Icon
  await productsListPage.clickCartIcon();

  //Click Continue Shopping Button
  let cartPage = new Cart(page);
  await cartPage.clickCheckOutButton();

  //Completing Shipping Information
  let shippingInformationPage = new ShippingInformation(page);
  await shippingInformationPage.clickCancelButton();

  // Make sure we are at products page
  await expect(
    await page.locator("span[data-test='title']").textContent()
  ).toEqual("Your Cart");
});

test("Clicking Remove button should remove item from cart", async ({
  page,
}) => {});
