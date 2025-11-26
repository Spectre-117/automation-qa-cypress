import signUpInvalidEmail from "../../fixtures/signUpData/EmailData/signUpInvalidEmail.json";
import signUpValidEmail from "../../fixtures/signUpData/EmailData/signUpValidEmail.json";


describe('Email field validation', () => {


    beforeEach(() => {
        cy.visit('/');
    })

    it(signUpValidEmail.title, () => {
        cy.get('.btn-primary').click();
        cy.get('.modal-content').within(() => {
            cy.get('#signupEmail').type(signUpValidEmail.input.email).blur();
            cy.get('#signupEmail').should('have.css', 'border-color', signUpValidEmail.expected.borderColor);
        })
    })


    it('Email is required', () => {
        cy.get('.btn-primary').click();
        cy.get('.modal-content').within(() => {
            cy.get('#signupEmail').focus().blur();
            cy.get('.invalid-feedback').should('have.text', 'Email required');
            cy.get('#signupEmail').should('have.css', 'border-color', signUpInvalidEmail.expected.borderColor);
        })
    })

    it(signUpInvalidEmail.title, () => {
        cy.get('.btn-primary').click();
        cy.get('.modal-content').within(() => {
            cy.get('#signupEmail').type(signUpInvalidEmail.input.email).blur();
            cy.get('.invalid-feedback').should('have.text', signUpInvalidEmail.expected.message);
            cy.get('#signupEmail').should('have.css', 'border-color', signUpInvalidEmail.expected.borderColor);
        })
    })


})