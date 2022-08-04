/// <reference types="Cypress" />
describe("Test Datapicker", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("webdriveruin_homepage"));
        cy.get("#datepicker").invoke("removeAttr", "target").click({ force: true });
        cy.get("#datepicker").click();
    });

    it("Test Datapicker via webdriveruni", () => {
        let date = new Date();
        date.setDate(date.getDate() + 250);
        let futureYear = date.getFullYear();
        let futureMonth = date.toLocaleString("default", { month: 'long' });
        let futureDay = date.getDate();
        cy.log(`Future year to select: ${futureYear}`);
        cy.log(`Future month to select: ${futureMonth}`);
        cy.log(`Future day to select: ${futureDay}`);

        function selectMonthAndYear() {
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                if (!currentDate.text().includes(futureYear)) {
                    cy.get('.next').first().click();
                    selectMonthAndYear();
                }
            }).then(() => {
                cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                    if (!currentDate.text().includes(futureMonth)) {
                        cy.get('.next').first().click();
                        selectMonthAndYear();
                    }
                });
            });
        }

        function selectFutureDay() {
            cy.get('[class="day"]').contains(futureDay).click();
        }

        selectMonthAndYear();
        selectFutureDay();
    });
});