import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class HomePage extends BasePage {
    readonly title: Locator;

    constructor(page: Page) {
        super(page);
        this.title = page.getByText('Serverest Store');
    }

    async checkHome() {
       await expect(this.title).toBeVisible(); 
    }
}