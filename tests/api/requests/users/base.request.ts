import {request } from "@playwright/test";
import { Utils } from "../../helper/utils";

export class BasePage {
    public utils: Utils;
    public context;

    constructor() {
        this.utils = new Utils();
    }

    async requestContext() {
        return await request.newContext({
            baseURL: this.utils.getFixtures().baseUrl
        })
    }

    async get(path: string, headers?: { [key: string]: string; } ) {
        return await (await this.requestContext()).get(path, headers);
    }

    async post(path: string, data?: object) {
        return await (await this.requestContext()).post(path, {data});
    }

    async put(path: string, headers?: { [key: string]: string; }, data?: string|Buffer) {
        return await (await this.requestContext()).put(path, {headers, data});
    }

    async delete(path: string, headers?: { [key: string]: string; }, data?: string|Buffer) {
        return await (await this.requestContext()).delete(path, {headers, data});
    }

}