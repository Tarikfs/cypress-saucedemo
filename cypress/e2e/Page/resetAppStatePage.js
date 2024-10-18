class resetAppStatePage {

    reset() {
        cy.get('#react-burger-menu-btn').click();
        cy.get('#reset_sidebar_link').click();
    }
}

export default new resetAppStatePage();
