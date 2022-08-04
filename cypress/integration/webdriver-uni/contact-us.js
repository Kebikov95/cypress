import Homepage_PO from '../../support/pageObjects/webdriver-uni/Homepage_PO'
import ContactUs_PO from '../../support/pageObjects/webdriver-uni/ContactUs_PO';
/// <reference types='Cypress' />

describe('Test Contact Us form via http://www.webdriveruniversity.com', () => {
    Cypress.config('defaultCommandTimeout', 20000);
    const homepage_PO = new Homepage_PO();
    const contactus_PO = new ContactUs_PO();

    beforeEach(() => {
        homepage_PO.visitHomepage();
        homepage_PO.clickOnContactUsButton();

        cy.document().its('contentType').should('eq', 'text/html')
        cy.document().its('charset').should('eq', 'UTF-8')
        cy.title().should('include', 'WebDriver | Contact Us');
        cy.url().should('include', 'contactus');

        cy.fixture('example').then(data => {
            // this.data = data;
            globalThis.data = data;
        });
    });

    it('Should be able to submit a successful submission via contact us form', () => {
        contactus_PO.submitContactForm(data.first_name, data.last_name, data.email, data.body, 'body', data.message);
    });

    it('Should not be able to submission via contact us from as all fields are required', () => {
        cy.fillContactForm(data.first_name, data.last_name, Cypress.env("email"), data.body, 'body', data.message_error);
    });
});
