/// <reference types="cypress"/>

describe("Verify radiobutton via webdriveruni", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("webdriveruin_homepage"));
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click();
    });

    it('Check radiobutton value', () => {
        cy.get('#radio-buttons').find('input').first().check();
        cy.get('#radio-buttons').find('input').eq(1).check();
    });

    it('Validate the states of specific radio buttons', () => {
        cy.get('[value="lettuce"]').should('not.be.checked');
        cy.get('[value="pumpkin"]').should('be.checked');

        cy.get('[value="lettuce"]').click();
        cy.get('[value="lettuce"]').should('be.checked');
        cy.get('[value="pumpkin"]').should('not.be.checked');

        cy.get('[value="cabbage"]').should('be.disabled');
    });
});
