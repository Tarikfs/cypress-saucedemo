class cartPage {
    openCart() {
        cy.get('.shopping_cart_link').click();
    }

    continueShopping() {
        cy.get('#continue-shopping').click();
    }

    checkout() {
        cy.get('#checkout').click();
    }

    assertFirstProductName(expectedName) {
        cy.get('.cart_item').first().find('.cart_item_label').should('contain', expectedName);
    }

    assertFirstProductDescription(expectedDescription) {
        cy.get('.cart_item').first().find('.inventory_item_desc').should('contain', expectedDescription);
    }

    assertFirstProductPrice(expectedPrice) {
        cy.get('.cart_item').first().find('.inventory_item_price').should('contain', expectedPrice);
    }

    removeFromCartBTN() {
        cy.get('#remove-sauce-labs-backpack').click();
    }
}

export default new cartPage();