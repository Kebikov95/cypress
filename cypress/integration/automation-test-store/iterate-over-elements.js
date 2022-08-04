/// <reference types='Cypress' />

describe('Iterateover elements on https://www.automationteststore.com/', () => {
    beforeEach(() => {
        cy.visit(Cypress.env("automationstore_homepage"));
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click();
    });

    it('Log information of all hair care products', () => {
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            cy.log(`Index ${index}: ${$el.text()}`);
        });
    });
    it('Add specific product to basket', () => {
        // Before using Cypress.Command
        // cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
        //     if ($el.text().includes('Curls to straight Shampoo')) {
        //         cy.wrap($el).click();
        //     }
        // });

        cy.selectProduct('Curls to straight Shampoo');
    });

    it('Check another specific product', () => {
        cy.selectProduct('Pantene Pro-V Conditioner, Classic Care');
    });
});
