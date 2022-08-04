/// <reference types="Cypress"/>

describe('Item investigation tests using chain of commands', () => {
    beforeEach(() => {
        cy.visit(Cypress.env("automationstore_homepage"));
    });

    it('Click on the first item using item header', () => {
        cy.get('a[title="Skinsheen Bronzer Stick"]').click();
    });

    it.only('Click on the first item using contains() method and item text', () => {
        cy.get('.prdocutname')
            .contains('Skinsheen Bronzer Stick')
            .click()
            .then(itemHeaderText => console.log('Selected the following item: ' + itemHeaderText.text()));
    });

    it('Click on the first item using index', () => {
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click();
    });
});