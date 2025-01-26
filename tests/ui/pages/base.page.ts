import { Page } from "@playwright/test";
import { Utils } from "../helper/utils";

export class BasePage {
    readonly page: Page;
    public utils: Utils;

    constructor(page: Page) {
        this.page = page;
        this.utils = new Utils();
    }

    async open() {
        await this.page.goto(this.utils.getFixtures().baseUrl);    
    }

}