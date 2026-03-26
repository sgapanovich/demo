import { test, expect } from "@playwright/test";
import { ContactPage } from "../pages/contactPage";

test.beforeEach(async ({ page }) => {
  const contactPage = new ContactPage(page);
  await contactPage.goto();
});

test.describe("Contact page checks", async () => {
  test("Contact form fields are visible", async ({ page }) => {
    const contactPage = new ContactPage(page);

    await expect(contactPage.firstNameInput).toBeVisible();
    await expect(contactPage.lastNameInput).toBeVisible();
    await expect(contactPage.emailInput).toBeVisible();
    await expect(contactPage.subjectSelect).toBeVisible();
    await expect(contactPage.messageInput).toBeVisible();
    await expect(contactPage.sendButton).toBeVisible();
  });

  test("Submit contact form with valid data", async ({ page }) => {
    const contactPage = new ContactPage(page);

    await contactPage.fillForm(
      "John",
      "Doe",
      "john.doe@example.com",
      "webmaster",
      "This is a test message for the contact form."
    );

    await contactPage.sendButton.click();

    await expect(page.getByText("Thanks for your message")).toBeVisible();
  });
});
