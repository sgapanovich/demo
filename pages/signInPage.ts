import { Page } from "@playwright/test";

export class SignInPage {
  constructor(private readonly page: Page) { }

  readonly emailInput = this.page.getByTestId("email");
  readonly passwordInput = this.page.getByTestId("password");
  readonly loginButton = this.page.getByTestId("login-submit");
  readonly errorMessage = this.page.getByTestId("login-error");

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async goto() {
    await this.page.goto("/auth/login");
  }
}
