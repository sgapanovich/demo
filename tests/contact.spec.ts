import { test, expect } from "@playwright/test";
import { ContactPage } from "../pages/contactPage";

test.describe("Contact page checks", async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/contact");
  });

  test("Contact form fields are visible", async ({ page }) => {
    const contactPage = new ContactPage(page);

    await expect(contactPage.firstNameInput).toBeVisible();
    await expect(contactPage.lastNameInput).toBeVisible();
    await expect(contactPage.emailInput).toBeVisible();
    await expect(contactPage.subjectSelect).toBeVisible();
    await expect(contactPage.messageInput).toBeVisible();
    await expect(contactPage.sendButton).toBeVisible();
  });

  test("Submitting contact form with valid data shows success message", async ({
    page,
  }) => {
    const contactPage = new ContactPage(page);

    await contactPage.fillForm(
      "John",
      "Doe",
      "john.doe@example.com",
      "webmaster",
      "This is a test message for the contact form."
    );
    await contactPage.sendButton.click();

    await expect(contactPage.successMessage).toBeVisible();
  });
});
