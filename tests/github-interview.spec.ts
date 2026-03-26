import { test, expect } from "@playwright/test";

/**
 * GitHub Job Interview Agent
 *
 * This test suite simulates a mock interview for a job at GitHub by exploring
 * key areas of GitHub.com that a candidate would be expected to know and discuss.
 */

const GITHUB_BASE_URL = "https://github.com";

test.describe("GitHub Job Interview", () => {
  test("Introduction – GitHub homepage loads and key navigation is present", async ({
    page,
  }) => {
    await page.goto(GITHUB_BASE_URL);

    // Verify the page title matches the expected GitHub homepage title pattern
    await expect(page).toHaveTitle(/GitHub[:\s·]/);

    // Confirm the sign-in link is visible (core UX element)
    const signInLink = page.getByRole("link", { name: /sign in/i });
    await expect(signInLink).toBeVisible();
  });

  test("Question 1 – What is GitHub used for? (Explore features page)", async ({
    page,
  }) => {
    await page.goto(`${GITHUB_BASE_URL}/features`);

    // Candidate should know GitHub's core features
    await expect(page).toHaveTitle(/GitHub/);
    await expect(page.getByRole("main")).toBeVisible();
  });

  test("Question 2 – How does GitHub support open-source? (Explore page)", async ({
    page,
  }) => {
    await page.goto(`${GITHUB_BASE_URL}/explore`);

    await expect(page).toHaveTitle(/Explore/i);
    await expect(page.getByRole("main")).toBeVisible();
  });

  test("Question 3 – What is GitHub Copilot? (Copilot page)", async ({
    page,
  }) => {
    await page.goto(`${GITHUB_BASE_URL}/features/copilot`);

    await expect(page).toHaveTitle(/Copilot/i);
    await expect(page.getByRole("main")).toBeVisible();
  });

  test("Question 4 – How does GitHub handle security? (Security page)", async ({
    page,
  }) => {
    await page.goto(`${GITHUB_BASE_URL}/security`);

    await expect(page).toHaveTitle(/Security/i);
    await expect(page.getByRole("main")).toBeVisible();
  });

  test("Closing – GitHub careers page is accessible", async ({ page }) => {
    await page.goto(`${GITHUB_BASE_URL}/about/careers`);

    // Confirm careers page loads for the candidate to submit their application
    await expect(page).toHaveTitle(/Careers|Jobs|GitHub/i);
    await expect(page.getByRole("main")).toBeVisible();
  });
});
