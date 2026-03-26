import { expect, test } from "@playwright/test";
import { HomePage } from "../pages/homePage";

test.describe("Practice Software Testing Automation", async () => {
    test("Go to rentals (excavator)", async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.goto();

        await homePage.categoriesDropdown.click()
        await homePage.rentalsCategory.click()
        await homePage.excavator.click()

        await expect(homePage.itemTitle).toHaveText("Excavator")
    });
});