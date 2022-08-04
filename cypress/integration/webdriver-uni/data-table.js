/// <reference types="Cypress" />
describe("Handling data via webdriveruni", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("webdriveruin_homepage"));
        cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
    });

    it("Calculate and assert the total age of all user", () => {
        let userDetails = [];
        let sumOfAges = 0;
        cy.get('#thumbnail-1 td').each(($el, index, $list) => {
            userDetails[index] = $el.text();
        }).then(() => {
            for (const key in userDetails) {
                if (Number(userDetails[key])) {
                    sumOfAges += Number(userDetails[key]);
                }
            }
            cy.log(`Found sum of ages: ${sumOfAges}`);
            expect(sumOfAges).to.eq(322);
        });
    });

    it('Calculate and assert the age of a given user based on last name', () => {
        cy.get('#thumbnail-1 tr td:nth-child(2)').each(($el, index, $list) => {
            if ($el.text() === 'Woods') {
                cy.get('#thumbnail-1 tr td:nth-child(2)').eq(index).next().then(age => {
                    expect(age.text()).to.eq('80');
                });
            }
        });
    });
});