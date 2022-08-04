/// <reference types='Cypress' />

describe('Test Contact Us form via http://www.webdriveruniversity.com', () => {
    beforeEach(() => {
        cy.visit(Cypress.env("webdriveruin_homepage"));
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force: true});
        cy.url().should('include', 'contactus');
    });

    it('Confirm links redirect to the correct pages', () => {
        cy.go('back');
        cy.reload();
        // without using cache
        // cy.reload(true); 
        cy.url().should('eq', Cypress.env("webdriveruin_homepage"));
        cy.go('forward');
        cy.url().should('include', 'contactus');

        cy.go('back');
        cy.get('#login-portal').invoke('removeAttr', 'target').click({force: true});
        cy.url().should('include', 'Login-Portal');

        cy.go('back');
        cy.get('#to-do-list').invoke('removeAttr', 'target').click({force: true});
        cy.url().should('include', 'To-Do-List');
    });
});
