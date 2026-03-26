import { Page, Locator } from "@playwright/test";

export class MyAccountPage {
  readonly page: Page;
  readonly header: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = page.getByTestId("page-title");
  }
}
