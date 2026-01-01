import SignInForm from "./components/SignInForm.js";

class MainPage {

    get signInButton(){
        return cy.get('.header_right').contains('Sign In')
    }

    open(){
        cy.visit('/');
    }

    logIn(email,password){
        this.signInButton.click();
        SignInForm.clickLogin(email,password);
    }
}
export default new MainPage();