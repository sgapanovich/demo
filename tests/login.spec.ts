import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/homePage";
import { SignInPage } from "../pages/signInPage";
import { MyAccountPage } from "../pages/account";

const username = process.env.USERNAME || "";
const password = process.env.PASSWORD || "";

test.beforeEach(async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
});

test.describe("Practice Software Testing Automation", async () => {
  test("Login with valid credentials", async ({ page }) => {
    const homePage = new HomePage(page);
    const signInPage = new SignInPage(page);

    await homePage.clickSignIn();
    await signInPage.login(username, password);

   const myAccountPage = new MyAccountPage(page);
    await expect(myAccountPage.header).toBeVisible();
  });

  test("Login with invalid credentials shows error", async ({ page }) => {
    const homePage = new HomePage(page);
    const signInPage = new SignInPage(page);

    await homePage.clickSignIn();
    await signInPage.login("invalid@example.com", "wrongpassword");

    await expect(signInPage.errorMessage).toBeVisible();
  });
});
