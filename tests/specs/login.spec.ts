import test from "@playwright/test";
import { BasePage } from "../pages/base.page";

test.describe('Login', () => {
    test('Try to login with success', { tag: ['@login'] }, async ({page}) => {
        const basePage = new BasePage(page);

        await basePage.open();
    });
});