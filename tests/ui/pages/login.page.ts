import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class LoginPage extends BasePage {
    readonly email: Locator;
    readonly password: Locator;
    readonly btnEntrar: Locator;
    readonly btnCadastrar: Locator;

    constructor(page: Page) {
        super(page);
        this.email = page.locator('#email');
        this.password = page.locator('#password');
        this.btnEntrar = page.getByTestId('entrar');
        this.btnCadastrar = page.getByTestId('cadastrar')
    }

    async login(email: string, password: string) {
        await this.email.fill(email);
        await this.password.fill(password);
        await this.btnEntrar.click();
    }

    async clickBtnCadastrar() {
        await this.btnCadastrar.click();
    }

}