import { Page, Locator } from "@playwright/test";

export class ContactPage {
  readonly page: Page;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly subjectSelect: Locator;
  readonly messageTextarea: Locator;
  readonly attachmentInput: Locator;
  readonly sendButton: Locator;
  readonly successAlert: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = page.getByTestId("first-name");
    this.lastNameInput = page.getByTestId("last-name");
    this.emailInput = page.getByTestId("email");
    this.subjectSelect = page.getByTestId("subject");
    this.messageTextarea = page.getByTestId("message");
    this.attachmentInput = page.locator('input[type="file"]');
    this.sendButton = page.getByTestId("send-message");
    this.successAlert = page.getByTestId("contact-us-success");
  }

  async goto() {
    await this.page.goto("/contact");
  }

  async fillForm({
    firstName,
    lastName,
    email,
    subject,
    message,
  }: {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    message: string;
  }) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.emailInput.fill(email);
    await this.subjectSelect.selectOption(subject);
    await this.messageTextarea.fill(message);
  }

  async send() {
    await this.sendButton.click();
  }
}
