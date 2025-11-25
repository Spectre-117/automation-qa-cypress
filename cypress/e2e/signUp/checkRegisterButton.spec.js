import signUpInvalidReEnterPassword
    from "../../fixtures/signUpData/ReEnterPasswordData/signUpInvalidReEnterPasswordsList.json";
import signUpValidReEnterPassword
    from "../../fixtures/signUpData/ReEnterPasswordData/signUpValidReEnterPasswordsList.json";

import {faker} from '@faker-js/faker';

describe('Register button validation', () => {

        const userData = {
            "userFirstName": faker.person.firstName(),
            "userLastName": faker.person.lastName(),
            "userPassword": `Password*${faker.number.int({min: 10, max: 1000})}`,
            "userEmail": faker.internet.email()
        }

        beforeEach(() => {
            cy.visit('/');
        })

        it("Register button is enabled if input data is correct", () => {
            cy.get('.btn-primary').click();
            cy.get('.modal-content').within(() => {
                cy.get('#signupName').type(userData.userFirstName)
                cy.get('#signupLastName').type(userData.userLastName)
                cy.get('#signupEmail').type(userData.userEmail)
                cy.get('#signupPassword').type(userData.userPassword,{ sensitive: true })
                cy.get('#signupRepeatPassword').type(userData.userPassword,{ sensitive: true })
                cy.get('.btn-primary').contains("Register").should("be.enabled");
            })
        })

        it("User can be registered with valid data", () => {
            cy.get('.btn-primary').click();
            cy.get('.modal-content').within(() => {
                cy.get('#signupName').type(userData.userFirstName)
                cy.get('#signupLastName').type(userData.userLastName)
                cy.get('#signupEmail').type(userData.userEmail)
                cy.get('#signupPassword').type(userData.userPassword,{ sensitive: true })
                cy.get('#signupRepeatPassword').type(userData.userPassword,{ sensitive: true })
                cy.get('.btn-primary').click();
            })
            cy.get('.btn-primary').contains('Add car').should("be.enabled");
        })

        it("Register button is disabled if input data is incorrect", () => {
            cy.get('.btn-primary').click();
            cy.get('.modal-content').within(() => {
                cy.get('#signupName').type("Name4")
                cy.get('#signupLastName').type(userData.userLastName)
                cy.get('#signupEmail').type(userData.userEmail)
                cy.get('#signupPassword').type(userData.userPassword,{ sensitive: true })
                cy.get('#signupRepeatPassword').type(userData.userPassword,{ sensitive: true })
                cy.get('.btn-primary').contains("Register").should("be.disabled");
            })
        })

        it("Register button is disabled if input data is missed", () => {
            cy.get('.btn-primary').click();
            cy.get('.modal-content').within(() => {
                cy.get('#signupName').focus().blur()
                cy.get('#signupLastName').type(userData.userLastName)
                cy.get('#signupEmail').type(userData.userEmail)
                cy.get('#signupPassword').type(userData.userPassword,{ sensitive: true })
                cy.get('#signupRepeatPassword').type(userData.userPassword,{ sensitive: true })
                cy.get('.btn-primary').contains("Register").should("be.disabled");
            })
        })

        it("Register button is disabled if input data in Name field is out of bounds (lees than 2 characters)", () => {
            cy.get('.btn-primary').click();
            cy.get('.modal-content').within(() => {
                cy.get('#signupName').type("N")
                cy.get('#signupLastName').type(userData.userLastName)
                cy.get('#signupEmail').type(userData.userEmail)
                cy.get('#signupPassword').type(userData.userPassword,{ sensitive: true })
                cy.get('#signupRepeatPassword').type(userData.userPassword,{ sensitive: true })
                cy.get('.btn-primary').contains("Register").should("be.disabled");
            })
        })

        it("Register button is disabled if input data in Name field is out of bounds (more than 20 characters)", () => {
            cy.get('.btn-primary').click();
            cy.get('.modal-content').within(() => {
                cy.get('#signupName').type("NameNameNameNameNameN")
                cy.get('#signupLastName').type(userData.userLastName)
                cy.get('#signupEmail').type(userData.userEmail)
                cy.get('#signupPassword').type(userData.userPassword,{ sensitive: true })
                cy.get('#signupRepeatPassword').type(userData.userPassword,{ sensitive: true })
                cy.get('.btn-primary').contains("Register").should("be.disabled");
            })
        })

        // Negative checking for other fields combined with Register button checking in registration form can be added further

    }
)