import { Page, Locator } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly homeButton: Locator;
  readonly signInLink: Locator;
  readonly categoriesDropdown: Locator;
  readonly rentalsCategory: Locator;

  constructor(page: Page) {
    this.page = page;
    this.homeButton = page.getByTestId("nav-home");
    this.signInLink = page.getByTestId("nav-sign-in");
    this.categoriesDropdown = page.getByTestId("nav-categories");
    this.rentalsCategory = page.getByTestId("nav-rentals");
  }

  async goto() {
    await this.page.goto("/");
  }

  async clickSignIn() {
    await this.signInLink.click();
  }
}
