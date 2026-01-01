class CarCard{
    get addFuelExpenseButton(){
        return cy.get('.btn-success').eq(0)
    }

    clickAddFuelExpenseButton(){
        this.addFuelExpenseButton.click()
    }
}
export default new CarCard();