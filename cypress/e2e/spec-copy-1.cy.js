describe('My First Test', () => {
  it('clicking "contains" navigates to a new url', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('contains').click()

    // Should be on a new URL which
    // includes '/commands/actions'
    cy.url().should('include', '/commands/querying')
    cy.get('.query-list')
  .contains('bananas').should('have.class', 'third')

// we can pass a regexp to `.contains()`
cy.get('.query-list')
  .contains(/^b\w+/).should('have.class', 'third')

cy.get('.query-list')
  .contains('apples').should('have.class', 'first')

// passing a selector to contains will
// yield the selector containing the text
cy.get('#querying')
  .contains('ul', 'oranges')
  .should('have.class', 'query-list')

cy.get('.query-button')
  .contains('Save Form')
  .should('have.class', 'btn')
  })
})