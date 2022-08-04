class ContactUs_PO {
    submitContactForm(firstName, lastName, email, comment, $selector, textToLocate) {
        cy.get('[name="first_name"]').type(firstName);
        cy.get('[name="last_name"]').type(lastName);
        cy.get('[name="email"]').type(email);
        cy.get('textarea').type(comment);
        cy.get('[type="submit"]').click();
        cy.get($selector).contains(textToLocate, {timeout: 10000});
        cy.screenshot();
        cy.screenshot('Seccess form');
    }
}

export default ContactUs_PO;