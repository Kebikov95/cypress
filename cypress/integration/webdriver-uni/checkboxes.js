/// <reference types="cypress"/>

describe("Verify checkboxes via webdriveruni", () => {
    beforeEach(() => {
        cy.navigateToWebdrivrUniHomePage();
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click();
    });

    it('Check checkbox value', () => {
        cy.get('#checkboxes input').eq(0).should('not.be.checked');
        cy.get('#checkboxes input').eq(0).check();
        cy.get('#checkboxes input').eq(0).should('be.checked');
    });

    it('Uncheck checkbox value', () => {
        cy.get('#checkboxes input').eq(1).as('option-2');
        cy.get('@option-2').check();
        cy.get('@option-2').uncheck();
        cy.get('@option-2').should('not.be.checked');
    });

    it('Check multiple checkboxes', () => {
        cy.get('#checkboxes input').check(["option-1", "option-2", "option-3", "option-4"]);
        cy.get('#checkboxes input').should('be.checked');
    });
});
