import { faker } from '@faker-js/faker';

describe.skip('Check custom command for sign in', () => {

    const userData = {
        // run with cypress.config.user1.js
        // "userFirstName": "Serhii",
        // "userLastName": "Lialiuk",
        // "userEmail" : "slia1@test.com",
        // "userPassword" : "Password1"

        // run with cypress.config.user2.js
        "userFirstName": "Serhii",
        "userLastName": "Lialiuk",
        "userEmail" : "slia2@test.com",
        "userPassword" : "Password1"
    }
    beforeEach( ()=> {
        cy.visit('/');
    })

    it('Should be able to sign up',()=>{
        cy.signUp(userData.userFirstName,userData.userLastName,userData.userEmail,userData.userPassword)
        cy.get('.sidebar_btn').contains(' Log out ');
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