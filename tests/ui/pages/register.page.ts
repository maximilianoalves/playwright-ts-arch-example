import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class RegisterPage extends BasePage {
    readonly fdName: Locator;
    readonly fdEmail: Locator;
    readonly fdPassword: Locator;
    readonly cbAdministrator: Locator;
    readonly btnRegister: Locator;

    constructor(page: Page) {
        super(page);
        this.fdName = page.getByTestId('nome');
        this.fdEmail = page.getByTestId('email');
        this.fdPassword = page.getByTestId('password');
        this.cbAdministrator = page.locator('#administrador');
        this.btnRegister = page.getByTestId('cadastrar');
    }

    async registerAnUser(name: string, email: string, password: string) {
        await this.fdName.fill(name);
        await this.fdEmail.fill(email);
        await this.fdPassword.fill(password);
        await this.btnRegister.click();
    }
}