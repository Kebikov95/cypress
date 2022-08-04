/// <reference types="cypress"/>

describe("Verify dropdown list via webdriveruni", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("webdriveruin_homepage"));
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click();
    });

    it('Check drodown list', () => {
        cy.get('#dropdowm-menu-1').select('c#');
        cy.get('#dropdowm-menu-2').select('TestNG').should('have.value', 'testng');
        cy.get('#dropdowm-menu-3').select('javascript').contains('JQuery');
    });
});
