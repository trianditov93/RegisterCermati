describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('https://www.cermati.com/gabung')
  })
  it('displays mobile number field', () => {
    cy.get('#mobilePhone').type('6285231788786')
    cy.get('#mobilePhone').should('have.value','6285231788786')
    cy.get('#email').type('testing@email.com')
    cy.get('#email').should('have.value', 'testing@email.com')
    cy.get('#firstName').type('testtt')
    cy.get('#firstName').should('have.value', 'testtt')
    cy.get('#lastName').type('ting')
    cy.get('#lastName').should('have.value', 'ting')
    cy.get('.btn-track').focus().wait(5000)
    cy.get('.btn-track').click()
  })
  })