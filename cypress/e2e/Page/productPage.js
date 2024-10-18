class productPage {
  assertProductDisplayed(productName) {
    cy.contains(productName).should('be.visible');
  }

  assertFirstProductName(expectedName) {
    cy.get('.inventory_item').first().find('.inventory_item_name').should('contain', expectedName);
  }

  assertFirstProductDescription(expectedDescription) {
    cy.get('.inventory_item').first().find('.inventory_item_desc').should('contain', expectedDescription);
  }

  assertFirstProductPrice(expectedPrice) {
    cy.get('.inventory_item').first().find('.inventory_item_price').should('contain', expectedPrice);
  }

  addToCartBTN() {
    cy.get('#add-to-cart-sauce-labs-backpack').click();
  }

  removeFromCartBTN() {
    cy.get('.inventory_item').first().find('#remove-sauce-labs-backpack').click();
  }
}

export default new productPage();