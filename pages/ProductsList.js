const { test } = require("@playwright/test");

exports.ProductsList = class ProductsList {
  constructor(page) {
    this.page = page;
    this.product_list = "div[class='pricebar'] > button ";
    this.cartIcon = "span[class='shopping_cart_badge']";

    this.prices_list = "div[class='inventory_item_price']";
    this.dropdown = ".product_sort_container";

    this.individualProduct = "a[id='item_4_title_link'] >div";
  }

  async clickCartIcon() {
    await this.page.locator(this.cartIcon).click();
  }

  async addToCart(number) {
    if (number >= 0 && number <= 6) {
      const product = await this.page.locator(this.product_list);
      //for (let i = 0; i < (await product.count()); i++) {
      await product.nth(number).click();
      console.log("Item " + number);
    }
  }

  async sortAscending() {
    await this.page.locator(this.dropdown).selectOption({ value: "lohi" });
  }

  async price() {
    const prices = await this.page.locator(this.prices_list);

    let sorted_prices = [];
    for (let i = 0; i < (await prices.count()); i++) {
      console.log("Price is " + (await prices.nth(i).textContent()));
      sorted_prices.push(await prices.nth(i).textContent());
      sorted_prices[i] = Number(sorted_prices[i].slice(1));
      console.log(typeof sorted_prices[i]);
    }

    console.log(sorted_prices);
    //console.log(sorted_prices.sort());
  }

  async clickProduct() {
    await this.page.locator(this.individualProduct).click();
  }
};
