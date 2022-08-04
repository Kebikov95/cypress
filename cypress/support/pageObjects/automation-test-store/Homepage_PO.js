class HomePage_PO {
    visitHomepage() {
        cy.visit(Cypress.env("automationstore_homepage"));
    }

    clickOnHairCareLink() {
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click();
    }
}

export default HomePage_PO;