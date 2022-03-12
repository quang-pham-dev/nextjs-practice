describe('Home page', () => {
  it('should test h1', () => {
    cy.visit('http://localhost:3000')
    cy.get('h1').contains('Welcome QuangPN to Nextjs-Practice!')
  })
})
