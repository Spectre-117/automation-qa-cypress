class AddCarForm {

    fillForm() {
        cy.get('.modal-content').within(() => {
            cy.get('#addCarBrand').select('1: 2');
            cy.get('#addCarMileage').click().type('1300').blur()
        })
    }

    get addButton() {
        return cy.get('.btn-primary').contains('Add')
    }

    addNewCar() {
        this.fillForm()
        cy.get('.modal-content').within(() => {
            this.addButton.click()
        })
    }
}

export default new AddCarForm();