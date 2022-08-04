/// <reference types="cypress"/>

describe("Verify autocomplete dropdown list via webdriveruni", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("webdriveruin_homepage"));
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click();
    });

    it('Select specific product from autocomplete drodown list', () => {
        cy.get('#myInput').type('A');
        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
            const prodductName = $el.text();
            const productToSelect = 'Avacado';
            if (prodductName === productToSelect) {
                $el.click();
                cy.get('#submit-button').click();
                cy.url().should('include', prodductName);
            }
        }).then(() => {
            cy.get('#myInput').type('G');
            cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
                const prodductName = $el.text();
                const productToSelect = 'Grapes';
                if (prodductName === productToSelect) {
                    $el.trigger('click')
                    cy.get('#submit-button').click();
                    cy.url().should('include', prodductName);
                }
            });
        });
    });
});
