import test, { expect } from "@playwright/test";
import { faker } from '@faker-js/faker/locale/pt_BR';
import { UserRequest } from "../requests/users/users.request";

test.describe('Users API', { tag: ['@api'] }, () => {
    test.describe('GET users', () => {
        test('Try to return all users with success', { tag: ['@users'] }, async () => {
            const userRequest = new UserRequest();
    
            const getUsers = await userRequest.getUsers();
    
            expect(getUsers.ok()).toBeTruthy()
        });
    })

    test.describe('POST users', () => {
        test('Try to add an users with success', { tag: ['@users'] }, async () => {
            const userRequest = new UserRequest();
            const name = faker.person.firstName();
            const email = `${faker.internet.userName({firstName: name})}@testecompany.com`;
    
            const getUsers = await userRequest.addUser(name, email);
    
            expect(getUsers.status()).toEqual(201);
        });
    })
    
});