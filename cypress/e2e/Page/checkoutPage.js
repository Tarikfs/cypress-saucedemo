class checkoutPage {

    checkoutTitle(checkoutTitle) {
        cy.contains(checkoutTitle).should('be.visible');
    }

    fillFirstName(firstname) {
        cy.get('#first-name').clear().type(firstname);
    }

    fillLastName(lastname) {
        cy.get('#last-name').clear().type(lastname);
    }

    fillZipPostalCode(zip) {
        cy.get('#postal-code').clear().type(zip);
    }

    continue() {
        cy.get('#continue').click();
    }

    finish() {
        cy.get('#finish').click();
    }

    assertYourInfoError(message) {
        cy.get('.error-message-container.error ').should('contain', message);
    }

    cancel() {
        cy.get('#cancel').click();
    }
}

export default new checkoutPage();
