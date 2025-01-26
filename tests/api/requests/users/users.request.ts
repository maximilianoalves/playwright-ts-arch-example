import { BasePage } from "./base.request";

export class UserRequest extends BasePage {

    constructor() {
        super();
    }

    async getUsers() {
        return await this.get('usuarios')
    }

    async addUser(name: string, email: string) {

        const body =  {
            "nome": name,
            "email": email,
            "password": "teste",
            "administrador": 'false'
        }

        return await this.post('usuarios', body)
    }

}