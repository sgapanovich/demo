import { Page, Locator } from "@playwright/test";

export class SignInPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.passwordInput = page.getByTestId("password");
    this.loginButton = page.getByTestId("login-submit");
    this.errorMessage = page.getByTestId("login-error");




    this.emailInput = page.getByTestId("email")
    this.emailInput = page.locator(".form-control .ng-untouched .ng-pristine .ng-invalid")
    this.emailInput = page.locator('placeholder="Your email"')
    this.emailInput = page.locator("#email")
    this.emailInput = page.locator('formcontrolname="email"')
    this.emailInput = page.locator('type="email"')
    this.emailInput = page.locator('.mb-3').locator("input")




    this.emailInput = page.getByTestId("email")
    this.emailInput = page.locator("#email")
    this.emailInput = page.getByPlaceholder("You email")
    this.emailInput = page.getByLabel("email")
    this.emailInput = page.locator('type="email"')
    this.emailInput = page.locator('formcontrolname="email"')
    this.emailInput = page.locator("input").nth(0)
    this.emailInput = page.getByTestId("login-form").locator("input").first()


    this.emailInput = page.locator("input")
    this.emailInput = page.locator("#input")
    this.emailInput = page.locator(".input")
    this.emailInput = page.locator("type='input'")

    this.emailInput = page.locator("price-section")






  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
