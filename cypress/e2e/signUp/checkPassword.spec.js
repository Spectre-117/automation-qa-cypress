import signUpInvalidPassword from "../../fixtures/signUpData/PasswordData/signUpInvalidPasswordsList.json";
import signUpValidPassword from "../../fixtures/signUpData/PasswordData/signUpValidPasswordsList.json";

describe('Password field validation', () => {


    beforeEach(() => {
        cy.visit('/');
    })

    for (const {title, input, expected} of signUpValidPassword) {
        it(title, () => {
            cy.get('.btn-primary').click();
            cy.get('.modal-content').within(() => {
                cy.get('#signupPassword').type(input.password).blur();
                cy.get('#signupPassword').should('have.css', 'border-color', expected.borderColor);
            })
        })
    }

    it('Password is required', () => {
        cy.get('.btn-primary').click();
        cy.get('.modal-content').within(() => {
            cy.get('#signupPassword').focus().blur();
            cy.get('.invalid-feedback').should('have.text', 'Password required');
            cy.get('#signupPassword').should('have.css', 'border-color', signUpInvalidPassword[0].expected.borderColor);
        })
    })

    for (const {title, input, expected} of signUpInvalidPassword) {
        it(title, () => {
            cy.get('.btn-primary').click();
            cy.get('.modal-content').within(() => {
                cy.get('#signupPassword').type(input.password).blur();
                cy.get('.invalid-feedback').should('have.text', expected.message);
                cy.get('#signupPassword').should('have.css', 'border-color', expected.borderColor);
            })
        })
    }


})