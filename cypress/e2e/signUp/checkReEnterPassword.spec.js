import signUpInvalidReEnterPassword from "../../fixtures/signUpData/ReEnterPasswordData/signUpInvalidReEnterPasswordsList.json";
import signUpValidReEnterPassword from "../../fixtures/signUpData/ReEnterPasswordData/signUpValidReEnterPasswordsList.json";

describe('Repeat password field validation', () => {


    beforeEach(() => {
        cy.visit('/');
    })

    for (const {title, input, expected} of signUpValidReEnterPassword) {
        it(title, () => {
            cy.get('.btn-primary').click();
            cy.get('.modal-content').within(() => {
                cy.get('#signupPassword').type(input.password).blur();
                cy.get('#signupRepeatPassword').type(input.repeatPassword).blur();
                cy.get('#signupRepeatPassword').should('have.css', 'border-color', expected.borderColor);
            })
        })
    }

    it('Re-enter password is required', () => {
        cy.get('.btn-primary').click();
        cy.get('.modal-content').within(() => {
            cy.get('#signupPassword').type(signUpValidReEnterPassword[0].input.password).blur();
            cy.get('#signupRepeatPassword').focus().blur();
            cy.get('.invalid-feedback').should('have.text', 'Re-enter password required');
            cy.get('#signupRepeatPassword').should('have.css', 'border-color', signUpInvalidReEnterPassword[0].expected.borderColor);
        })
    })

    for (const {title, input, expected} of signUpInvalidReEnterPassword) {
        it(title, () => {
            cy.get('.btn-primary').click();
            cy.get('.modal-content').within(() => {
                cy.get('#signupPassword').type(input.password).blur();
                cy.get('#signupRepeatPassword').type(input.repeatPassword).blur();
                cy.get('.invalid-feedback').should('have.text', expected.message);
                cy.get('#signupRepeatPassword').should('have.css', 'border-color', expected.borderColor);
            })
        })
    }
})