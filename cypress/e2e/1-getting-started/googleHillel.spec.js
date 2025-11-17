describe("Hillel main site access",()=>{

    beforeEach(()=>{
        cy.visit('https://www.google.com/');
        //cy.log(`The base URL is: ${Cypress.config('baseUrl')}`);
    })

    it("Open Hillel",()=>{
        cy.get('[name=\"q\"]').type("Hillel{enter}");
        cy.title().should('include', 'Hillel');
    })
})