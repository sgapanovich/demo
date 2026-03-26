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

  test("Login with valid credentials", async ({ page }) => {
    const homePage = new HomePage(page);
    const signInPage = new SignInPage(page);

    await homePage.clickSignIn();
    await signInPage.login("customer@practicesoftwaretesting.com", "welcome01");

    await expect(page.getByTestId("nav-menu")).toBeVisible();
  });

  test("Login with invalid credentials shows error", async ({ page }) => {
    const homePage = new HomePage(page);
    const signInPage = new SignInPage(page);

    await homePage.clickSignIn();
    await signInPage.login("invalid@example.com", "wrongpassword");

    await expect(signInPage.errorMessage).toBeVisible();
  });
});
