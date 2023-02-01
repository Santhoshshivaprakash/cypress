describe('My First Test', () => {
    it('finds the content "about us"', () => {
      Cypress.config('chromeWebSecurity',false);
      cy.visit('https://sphere.aastrika.org/page/home/')
      //element.classList.contains(className);
      cy.contains('about us').click()
  
      
    })
  }) 