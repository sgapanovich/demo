import { Page, Locator } from "@playwright/test";

export class ContactPage {
  readonly page: Page;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly subjectSelect: Locator;
  readonly messageInput: Locator;
  readonly sendButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = page.getByTestId("first-name");
    this.lastNameInput = page.getByTestId("last-name");
    this.emailInput = page.getByTestId("email");
    this.subjectSelect = page.getByTestId("subject");
    this.messageInput = page.getByTestId("message");
    this.sendButton = page.getByTestId("contact-submit");
  }

  async goto() {
    await this.page.goto("/contact");
  }

  async fillForm(
    firstName: string,
    lastName: string,
    email: string,
    subject: string,
    message: string
  ) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.emailInput.fill(email);
    await this.subjectSelect.selectOption(subject);
    await this.messageInput.fill(message);
  }
}
