describe('Login module', () => {
  it('Login vithout credentioals', () => {
    cy.visit('https://app-stage.vivifyscrum.com/login')
    cy.get('[type="submit"]').click()
    cy.get('.el-form-item__error')
      .eq(0)
      .should('contain', 'The email field is required.')
    cy.get('.el-form-item__error')
      .eq(1)
      .should('contain', 'The password field is required.')
  })

  it('Login with invalid email and without password', () => {
    cy.reload()
    cy.get('[type="email"]').type('invalid#email.com')
    cy.get('.el-form-item__error')
      .eq(0)
      .should('contain', 'The email field must be a valid email.')
    cy.get('[type="submit"]').should('have.class', 'vs-c-btn--disabled')
  })

  it('Login with valid credentials', () => {
    cy.reload()
    cy.get('[type="email"]').type('organizationuser@gmail.com')
    cy.get('[type="password"]').type('123456789')
    cy.get('[type="submit"]').click()
    cy.get('iframe').should('be.visible')
  })
})
