import { faker } from '@faker-js/faker';

describe('Check custom command for sign in', () => {

    const userData = {
        "userFirstName": faker.person.firstName(),
        "userLastName": faker.person.lastName(),
        "userPassword" : `Password*${faker.number.int({min: 10, max: 1000})}`,
        "userEmail" : faker.internet.email()
    }
    beforeEach( ()=> {

        cy.visit('/');
        cy.get('.btn-primary').click();
        cy.get('.modal-content').within(() => {
            //const userPassword = `Password*${faker.number.int({min:10, max:1000})}`;
            cy.get('#signupName').type(userData.userFirstName)
            cy.get('#signupLastName').type(userData.userLastName)
            cy.get('#signupEmail').type(userData.userEmail)
            cy.get('#signupPassword').type(userData.userPassword)
            cy.get('#signupRepeatPassword').type(userData.userPassword)
            cy.get('.btn-primary').click();
        })
        cy.get('.sidebar_btn').contains(' Log out ').click();
    })

    it('Should be able to sign in', () => {
        cy.signIn(userData.userEmail,userData.userPassword);
        cy.location().its('pathname').should("eq", "/panel/garage");
        cy.get('.panel-page_heading').within(() => {
            cy.get('.btn-primary').contains('Add car').should("be.visible");
            cy.get('.btn-primary').contains('Add car').should("be.enabled");
        });
    })
})