class AddExpenseForm {

    get addFuelExpenseButton() {
        return cy.get('.btn-primary').contains('Add')
    }

    fillExpenseForm() {
        cy.get('.modal-content').within(() => {

            // add a date value to sey into Expense in order to prevent problem with time zone
            // const today = new Date();
            // today.setDate(today.getDate() - 1);
            // const formattedWithSlashes = today.toLocaleDateString('en-GB');
            // const formattedWithDots = formattedWithSlashes.replace(/\//g, '.');

            cy.get('#addExpenseMileage').click().clear().type('1600')
            cy.get('#addExpenseTotalCost').type('3300');
            cy.get('#addExpenseLiters').click().blur()
            cy.contains("Liters required");
            cy.get('#addExpenseLiters').click().clear().type('30')
        })
    }

    addCarExpense() {
        this.fillExpenseForm()
        cy.get('.modal-content').within(() => {
            this.addFuelExpenseButton.click()
        })
    }


}

export default new AddExpenseForm();
