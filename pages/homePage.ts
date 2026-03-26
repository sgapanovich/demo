import { Page, Locator } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly homeButton: Locator;
  readonly signInLink: Locator;
  readonly categoriesDropdown: Locator;
  readonly rentalsCategory: Locator;
  readonly excavator: Locator;
  readonly itemTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.homeButton = page.getByTestId("nav-home");
    this.signInLink = page.getByTestId("nav-sign-in");

    this.categoriesDropdown = page.getByTestId("nav-categories");
    this.rentalsCategory = page.getByTestId("nav-rentals");
    this.excavator = page.getByAltText("Excavator");

    this.itemTitle = page.getByTestId("product-name")
  }

  async goto() {
    await this.page.goto("https://practicesoftwaretesting.com");
  }

  async clickSignIn() {
    await this.signInLink.click();
  }
}
