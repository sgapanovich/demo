import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/homePage";
import { SignInPage } from "../pages/signInPage";

test.beforeEach(async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
});

test.describe("Practice Software Testing Automation", async () => {
  test("Home button", async ({ page }) => {
    const homePage = new HomePage(page);
    await expect(homePage.homeButton).toBeVisible();
  });
});