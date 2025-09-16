import { test, expect } from '@playwright/test';
import { describe } from 'node:test';

describe("Login form", () => {
    test('has title', async ({ page }) => {
        await page.goto('http://localhost:3016/');
        await expect(page.getByRole("heading", { name: /Welcome/ })).toBeVisible();
    });

    test('has login form', async ({ page }) => {
        await page.goto('http://localhost:3016/');

        const name_input = page.getByRole("textbox", { name: "username" });
        const password_input = page.getByRole("textbox", { name: "username" });

        await expect(page.getByTestId("login-form")).toBeVisible();
        await expect(name_input).toBeVisible();
        await expect(password_input).toBeVisible();
    });

    test("log in form displays error if credentials are wrogn", async ({ page }) => {
        await page.goto('http://localhost:3016/');
        await page.getByRole("textbox", { name: "username" }).fill("Test_User");
        await page.getByRole("textbox", { name: "password" }).fill("Test_Passwd");

        const button_element = page.getByRole("button", { name: /Log-in/ })
        button_element.click();

        await expect(page.getByText(/^Wrong credentials.*$/)).toBeVisible();
    })

    test("log in redirects to another page if credentials are correct", async ({ page }) => {
        await page.goto('http://localhost:3016/');
        await page.getByRole("textbox", { name: "username" }).fill("dqnid");
        await page.getByRole("textbox", { name: "password" }).fill("1234");

        const button_element = page.getByRole("button", { name: /Log-in/ })
        button_element.click();

        await expect(page.getByAltText("Main logo")).toBeVisible();
    })
});
