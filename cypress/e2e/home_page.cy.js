/*
describe('login rabble app', () => {
  beforeEach(() => {var delayInMilliseconds = 10000;
    //1 second

setTimeout(function() {
 //your code to be executed after 1 second
}, delayInMilliseconds);
      cy.visit('https://youtube.com/')
  })

  it('check login details', () => {
      //cy.get('input[name="login_client_button"]').click();
      /* cy.get('input[name="password"]').type('test123')
       cy.get('button').click()

  });
}) 
*/
cy.request({
  method: 'GET',
  url: 'http://api.example.com/data',
  headers: {
      'Access-Control-Allow-Origin': '*'
  }
}).then((response) => {
  expect(response.status).to.eq(200)
})