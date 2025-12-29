import AddCarForm from "./components/AddCarForm.js";
import CarCard from "./components/CarCard.js";
import AddExpenseForm from "./components/AddExpenseForm.js";

class GaragePage {

    get addCarButton(){
        return cy.get('.btn-primary').contains('Add car')
    }

    addNewCar(){
        this.addCarButton.click();
        AddCarForm.addNewCar();

    }

    addCarExpense(){
        CarCard.clickAddFuelExpenseButton()
        AddExpenseForm.addCarExpense()
    }



}

export default new GaragePage();