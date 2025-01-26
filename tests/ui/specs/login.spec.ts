import test from "@playwright/test";
import { BasePage } from "../pages/base.page";
import { LoginPage } from "../pages/login.page";
import { HomePage } from "../pages/home.page";

test.describe('Login', () => {
    test('Try to login with success', { tag: ['@login'] }, async ({page}) => {
        const basePage = new BasePage(page);
        const loginPage = new LoginPage(page);
        const homePage = new HomePage(page);

        await basePage.open();
        await loginPage.login(basePage.utils.getFixtures().users.admin.email, basePage.utils.getFixtures().users.admin.password);
        await homePage.checkHome();
    });
});