/// <reference types='Cypress' />

describe('Verifying variables, cypress commands and jQuery https://www.automationteststore.com/', () => {
    beforeEach(() => {
        cy.visit(Cypress.env("automationstore_homepage"));
    });

    it('Navigating to specific product pages', () => {
        const makeupLink = cy.xpath("//*[@id='categorymenu']").contains('Makeup');
        makeupLink.click();
        const skincareLink = cy.xpath("//*[@id='categorymenu']").contains('Skincare');
        skincareLink.click();
    });

    it('Navigating to makeup page', () => {
        cy.xpath("//*[@id='categorymenu']").contains('Makeup').click();

        // Fallowing code will fall
        // const header = cy.get('h1 .maintext');
        // cy.log(header.text());

        cy.get('h1 .maintext').then(($headerText) => {
            const headerText = $headerText.text();
            cy.log("Found header text: " + headerText);
            expect(headerText).is.eq('Makeup');
        });
    });

    it("Validate properties of the Contact Us page", () => {
        cy.get("a[href$='contact']").contains('Contact Us').click();

        // #1 Uses Cypress commands and chaining
        cy.contains('#ContactUsFrm', 'Contact Us Form')
            .find('#field_11').should('contain', 'First name:');

        // #2 jQuery approach
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
            const firstNameText = text.find('#field_11').text();
            expect(firstNameText).to.contain('First name');
            
            // #3 Embedded commands (Closure)
            cy.get('#field_11').then(fnText => {
                cy.log(fnText.text());
                cy.log(fnText);
            });
        });
    });

    it("Environment variable", () => {
        const envValue = Cypress.env("foo");
        expect(envValue).to.eq("bar");
    });
});
