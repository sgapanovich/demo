import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/homePage";

test.describe("Rentals check", async () => {
    test("Navigate to rentals category", async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.goto();

        // click on categories dropdown
        await homePage.categoriesDropdown.click();

        // click on rentals category
        await homePage.rentalsCategory.click();

        // verify that rentals page is displayed
        await expect(page).toHaveURL(/.*\/rentals/);
    });
});
