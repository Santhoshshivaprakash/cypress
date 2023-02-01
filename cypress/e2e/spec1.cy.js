describe('My First Test', () => {
  it('finds the content "shorts"', () => {
    //Cypress.config('chromeWebSecurity',false);
    cy.visit('https://youtube.com')
    //element.classList.contains(className);
    cy.contains('shorts').click()

    
  })
}) 
