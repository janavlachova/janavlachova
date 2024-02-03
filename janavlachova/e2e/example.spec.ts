import { test, expect } from "@playwright/test";

test("should load the home page", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("h1")).toBeTruthy();
});
