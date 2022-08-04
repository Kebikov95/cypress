// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
Cypress.Commands.add("navigateToWebdrivrUniHomePage", () => {
    cy.visit("/");
});


Cypress.Commands.add('selectProduct', productName => {
    cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
        if ($el.text().includes(productName)) {
            cy.wrap($el).click();
            cy.get('h1 > span').should('contain', productName);
        }
    });
});

Cypress.Commands.add('addProductToChart', productName => {
    cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
        if ($el.text().includes(productName)) {
            cy.get('.productcart').eq(index).click();
        }
    });
});

Cypress.Commands.add('fillContactForm', (firstName, lastName, email, comment, $selector, textToLocate) => {
    cy.get('[name="first_name"]').type(firstName);
    cy.get('[name="last_name"]').type(lastName);
    cy.get('[name="email"]').type(email);
    cy.get('textarea').type(comment);
    cy.get('[type="submit"]').click();
    cy.get($selector).should('contain', textToLocate);
});

// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';