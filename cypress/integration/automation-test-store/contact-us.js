/// <reference types='Cypress' />

describe('Test Contact Us form via https://www.automationteststore.com/', () => {
    before(() => {
        // cy.viewport(550, 750);
        cy.fixture('userDetails').as('user');
    });

    beforeEach(() => {
        cy.visit(Cypress.env("automationstore_homepage"));
        cy.document().its('contentType').should('eq', 'text/html');
        cy.document().its('charset').should('eq', 'UTF-8');
        cy.xpath('//a[contains(@href, "contact")]').click().then(linkText => {
            cy.log("Clicked on link using text: " + linkText.text());
        });
    });

    afterEach('After test step', () => {
        cy.log('The test has been completed!');
    });

    it('Should be able to submit a successful submission via contact us form', {
        retries: {
            runMode: 2,
            openMode: 2
        }
    }, () => {
        cy.get('@user').then(user => {
            cy.get('[name="first_name"]').type(user.first_name);
            cy.get('[name="email"]:nth-child(1)').type(user.email);
        });
        cy.get('[name="email"]:nth-child(1)').should('have.attr', 'name', 'email');
        cy.get('[name="enquiry"]').type('comment');
        cy.get('[title="Submit"]').click();
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!');
    });
});