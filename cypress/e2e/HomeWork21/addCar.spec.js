import MainPage from "./pageObjects/MainPage.js";
import GaragePage from "./pageObjects/GaragePage.js";

describe('Check Garage page with POM', () => {

    beforeEach(() => {
        MainPage.open();
    })

    it("expense for car can be added", () => {

        MainPage.logIn(Cypress.env("userEmail"), Cypress.env("userPassword"));
        cy.location().its('pathname').should("eq", "/panel/garage");

        GaragePage.addNewCar();
        cy.get('.global-layout').should('be.visible')
        cy.contains("You have been successfully logged in").should('exist');

        GaragePage.addCarExpense()
        cy.get('.modal-content').should('be.visible')
        cy.get('.modal-content').contains('Add an expense').should("be.visible");

        cy.location().its('pathname').should("eq", "/panel/expenses");
    });
});