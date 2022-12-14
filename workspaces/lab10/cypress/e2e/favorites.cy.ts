describe('Favorites', () => {
  it('should only display a list of favorites', () => {
    cy.visit('/favorites')
    cy.get('.card ').should('have.length', 1)
  })
})
