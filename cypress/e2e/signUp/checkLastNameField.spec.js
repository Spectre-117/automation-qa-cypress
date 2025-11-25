import signUpInvalidLastNamesList from "../../fixtures/signUpData/LastNameData/signUpInvalidLastNamesList.json";
import signUpValidLastNamesList from "../../fixtures/signUpData/LastNameData/signUpValidLastNamesList.json";

describe('Last Name field validation', () => {


    beforeEach( ()=> {
        cy.visit('/');
    })

    for (const {title, input, expected} of signUpValidLastNamesList) {
        it(title,()=>{
            cy.get('.btn-primary').click();
            cy.get('.modal-content').within(() => {
                cy.get('#signupLastName').type(input.name).blur();
                cy.get('#signupLastName').should('have.css', 'border-color', expected.borderColor);
            })
        })
    }

    it('Name is required',()=>{
        cy.get('.btn-primary').click();
        cy.get('.modal-content').within(() => {
            cy.get('#signupLastName').focus().blur();
            cy.get('.invalid-feedback').should('have.text','Last name required');
            cy.get('#signupLastName').should('have.css', 'border-color', signUpInvalidLastNamesList[0].expected.borderColor);
        })
    })


    for (const {title, input, expected} of signUpInvalidLastNamesList) {
        it(title,()=>{
            cy.get('.btn-primary').click();
            cy.get('.modal-content').within(() => {
                cy.get('#signupLastName').type(input.name).blur();
                cy.get('.invalid-feedback').should('have.text',expected.message);
                cy.get('#signupLastName').should('have.css', 'border-color', expected.borderColor);
            })
        })
    }


})