import test from "@playwright/test";
import { faker } from '@faker-js/faker/locale/pt_BR';
import { BasePage } from "../pages/base.page";
import { LoginPage } from "../pages/login.page";
import { HomePage } from "../pages/home.page";
import { UserRequest } from "../../api/requests/users/users.request";

test.describe('Login', { tag: ['@ui'] }, () => {
    const name = faker.person.firstName();
    const email = `${faker.internet.userName({firstName: name})}@testecompany.com`;

    test.beforeAll('Create User', () => {
        const userRequest = new UserRequest();
        userRequest.addUser(name, email);
    });

    test('Try to login with success', { tag: ['@login'] }, async ({page}) => {
        const basePage = new BasePage(page);
        const loginPage = new LoginPage(page);
        const homePage = new HomePage(page);

        await basePage.open();
        await loginPage.login(email, 'teste');
        await homePage.checkHome();
    });
});