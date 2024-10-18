class filterPage {
  applyFilter(option) {
    cy.get('.product_sort_container').select(option);
  }
}

export default new filterPage();