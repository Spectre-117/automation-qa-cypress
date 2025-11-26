import signUpInvalidNamesList from "../../fixtures/signUpData/NameData/signUpInvalidNamesList.json";
import signUpValidNamesList from "../../fixtures/signUpData/NameData/signUpValidNamesList.json";

describe('Name field validation', () => {


    beforeEach( ()=> {
        cy.visit('/');
    })

    for (const {title, input, expected} of signUpValidNamesList) {
        it(title,()=>{
            cy.get('.btn-primary').click();
            cy.get('.modal-content').within(() => {
                cy.get('#signupName').type(input.name).blur();
                cy.get('#signupName').should('have.css', 'border-color', expected.borderColor);
            })
        })
    }

    it('Name is required',()=>{
        cy.get('.btn-primary').click();
        cy.get('.modal-content').within(() => {
            cy.get('#signupName').focus().blur();
            cy.get('.invalid-feedback').should('have.text','Name required');
            cy.get('#signupName').should('have.css', 'border-color', signUpInvalidNamesList[0].expected.borderColor);
        })
    })


    for (const {title, input, expected} of signUpInvalidNamesList) {
        it(title,()=>{
            cy.get('.btn-primary').click();
            cy.get('.modal-content').within(() => {
                cy.get('#signupName').type(input.name).blur();
                cy.get('.invalid-feedback').should('have.text',expected.message);
                cy.get('#signupName').should('have.css', 'border-color', expected.borderColor);
            })
        })
    }


})