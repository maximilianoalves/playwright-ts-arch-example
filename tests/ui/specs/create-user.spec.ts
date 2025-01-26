import test from "@playwright/test";
import { faker } from '@faker-js/faker/locale/pt_BR';
import { BasePage } from "../pages/base.page";
import { LoginPage } from "../pages/login.page";
import { HomePage } from "../pages/home.page";
import { RegisterPage } from "../pages/register.page";

test.describe('Create an user', () => {
    test('Try to create an user with success', { tag: ['@register'] }, async ({page}) => {
        const basePage = new BasePage(page);
        const loginPage = new LoginPage(page);
        const registerPage = new RegisterPage(page);
        const homePage = new HomePage(page);

        const name = faker.person.firstName();
        const email = `${faker.internet.userName({firstName: name})}@testecompany.com`;
        const password = 'testeteste';

        await basePage.open();
        await loginPage.clickBtnCadastrar();
        await registerPage.registerAnUser(name, email, password);
        await homePage.checkHome();
    });
});