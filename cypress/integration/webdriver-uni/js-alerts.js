/// <reference types='Cypress' />

describe('Handle JS-alerts http://www.webdriveruniversity.com', () => {
    beforeEach(() => {
        cy.visit(Cypress.env("webdriveruin_homepage"));
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force: true});
    });

    it('Confirm js alerts contains the corret text in Alert', () => {
        cy.get('#button1').click();
        cy.on('window:alert', str => {
            expect(str).to.equal('I am an alert box!');
        });
    });

    it('Validate js Confirm alert box works correctly when clicking ok button', () => {
        cy.get('#button4').click();
        cy.on('window:alert', str => {
            return true;
        });
        cy.get('#confirm-alert-text').should('include', 'You pressed OK!');
    });

    it('Validate js Confirm alert box works correctly when clicking cancel button', () => {
        cy.get('#button4').click();
        cy.on('window:confirm', str => {
            return false;
        });
        cy.get('#confirm-alert-text').should('include', 'You pressed Cancel!');
    });

    it.only('Validate js confirm alert box using stubs', () => {
        const stub = cy.stub();
        cy.on('window:confirm', stub);
        cy.get('#button4').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Press a button!');
        }).then(() => {
            return true;
        }).then(() => {
            cy.get('#confirm-alert-text').contains('You pressed OK!');
        });
    });
});
