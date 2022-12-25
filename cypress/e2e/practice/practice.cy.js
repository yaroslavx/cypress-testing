/// <reference types="cypress" />

describe('locator test', () => {
  beforeEach(() => {
    cy.visit('https://www.google.com/');
  });
  it('can locate button on the page', () => {
    cy.get('.gLFyf')
      .should('be.visible')
      .should('have.class', 'gLFyf')
      .type('youtube');

    cy.get('.G43f7e > :nth-child(2)').click();
  });
});
