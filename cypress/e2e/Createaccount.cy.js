  describe('Create account for aastrika', () => {
  beforeEach(() => {
    cy.visit('https://sphere.aastrika.org/public/home')
    cy.wait(4000)
    cy.get('#create-account-btn').click()
  })

  it('check create account details', () => {
    cy.get('#firstname-field').type('Santhosh')
    cy.get('#lastname-field').type('Shivaprakash')
    cy.get('#email-field').type('creatortest2022@yopmail.com')
    cy.get('#password-field').type('Sunbird@123')
    cy.get('#confpassword-field').type('Sunbird@123')
    cy.get('#next-btn').click()

  });
})