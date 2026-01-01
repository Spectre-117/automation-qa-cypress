class SignInForm {

    fillForm(email,password) {
        cy.get('.modal-content').within(() => {
            cy.get('#signinEmail').type(email)
            cy.get('#signinPassword').type(password)
        })
    }

    get loginButton(){
        return cy.get('.btn-primary').contains('Login')
    }

    clickLogin(email,password) {
        this.fillForm(email,password)
        this.loginButton.click();
    }

}

export default new SignInForm();