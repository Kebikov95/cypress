import Homepage_PO from '../../support/pageObjects/automation-test-store/Homepage_PO'
import HairCare_PO from '../../support/pageObjects/automation-test-store/HairCare_PO'
/// <reference types='Cypress' />

describe('Add multiple items to basket in https://www.automationteststore.com/', () => {
    const homepage_PO = new Homepage_PO();
    const hairCare_PO = new HairCare_PO();

    before(() => {
        cy.fixture('product').then(data => {
            globalThis.data = data;
        });
    });

    beforeEach(() => {
        cy.clearLocalStorage();
        cy.clearCookies();
        homepage_PO.visitHomepage();
        homepage_PO.clickOnHairCareLink();
    });

    it.only('Add specific item to basket', () => {
        hairCare_PO.addProductsToBasket();
    });
});
