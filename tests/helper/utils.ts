import { readFileSync } from "fs";

export class Utils {

    getEnv() {
        const argEnv: string = process.env.ENV || 'production';
        return argEnv;
    }

    getFixtures() {
        const json = JSON.parse(readFileSync(`./tests/fixtures/${this.getEnv()}.json`, 'utf-8'))
        return json;
    }

}