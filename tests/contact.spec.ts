import { test, expect } from "@playwright/test";
import { ContactPage } from "../pages/contactPage";

test.describe("Contact page", () => {
  let contactPage: ContactPage;

  test.beforeEach(async ({ page }) => {
    contactPage = new ContactPage(page);
    await contactPage.goto();
  });

  test("Contact form fields are visible", async () => {
    await expect(contactPage.firstNameInput).toBeVisible();
    await expect(contactPage.lastNameInput).toBeVisible();
    await expect(contactPage.emailInput).toBeVisible();
    await expect(contactPage.subjectSelect).toBeVisible();
    await expect(contactPage.messageTextarea).toBeVisible();
    await expect(contactPage.attachmentInput).toBeAttached();
    await expect(contactPage.sendButton).toBeVisible();
  });

  test("Submit contact form with valid data", async () => {
    await contactPage.fillForm({
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      subject: "Customer service",
      message: "This is a test message for the contact form.",
    });

    await contactPage.send();

    await expect(contactPage.successAlert).toBeVisible();
  });

  test("Send button is visible and enabled", async () => {
    await expect(contactPage.sendButton).toBeVisible();
    await expect(contactPage.sendButton).toBeEnabled();
  });

  test("Attachment input accepts file upload", async () => {
    await contactPage.attachmentInput.setInputFiles({
      name: "test-attachment.txt",
      mimeType: "text/plain",
      buffer: Buffer.from("test file content"),
    });

    await expect(contactPage.attachmentInput).toBeAttached();
  });
});
