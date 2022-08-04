/// <reference types="cypress"/>

describe("Test iframe", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("webdriveruin_homepage"));
        cy.get('a[href="IFrame/index.html"]').invoke('removeAttr', 'target').click();
    });

    it('Handle webdriveruni iframe and modal', () => {
        cy.get('#frame').then($iframe => {
            const body = $iframe.contents().find('body');
            cy.wrap(body).as('iframe');
        });
        cy.get('@iframe').find('#button-find-out-more').click();
        cy.get('@iframe').find('#myModal').as('modal');
        cy.get('@modal').should($expctedText => {
            const text = $expctedText.text();
            expect(text).to.include('Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as laptops, game consoles, cameras...');
        });
        cy.get('@modal').contains('Close').click();
    });
});
