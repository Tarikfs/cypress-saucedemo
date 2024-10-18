class loginPage {
  visit() {
    cy.visit('https://www.saucedemo.com/');
  }

  fillUsername(username) {
    cy.get('#user-name').clear().type(username);
  }

  fillPassword(password) {
    cy.get('#password').clear().type(password);
  }

  submit() {
    cy.get('#login-button').click();
  }

  assertLoginError(message) {
    cy.get('.error-message-container.error ').should('contain', message);
  }
}

export default new loginPage();