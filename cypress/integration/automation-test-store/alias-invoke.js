/// <reference types='Cypress' />

describe('Alias and invoke on https://www.automationteststore.com/', () => {
    beforeEach(() => {
        cy.visit(Cypress.env("automationstore_homepage"));
    });

    it('Validate a specific hair care product', () => {
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click();
        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productThumbnail');
        cy.get('@productThumbnail').its('length').should('be.gt', 5);
        cy.get('@productThumbnail').should('include', 'Seaweed Conditioner');
    });

    it('Count how many products exists on page', () => {
        cy.get('.thumbnail').as('productThumbnail');
        cy.get('@productThumbnail').should('have.length', 16);
        cy.get('@productThumbnail').find('.productcart')
            .invoke('attr', 'title').should('include', 'Add to Cart');
    });
    
    it.only('Calculate total of normal and sale products', () => {
        // each() method
        // cy.get('.thumbnail').as('productThumbnail');
        // cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) => {
        //     cy.log($el.text());
        // });

        // alies
        let itemTotal = 0;

        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice');
        cy.get('@itemPrice').then($linkText => {
            let itemPrice = $linkText.split('$');
            let priceWithoutDiscont = 0;
            for (let i = 0; i < itemPrice.length; i++) {
                priceWithoutDiscont += Number(itemPrice[i]);
            }
            cy.log(`Sum prices without discont: ${priceWithoutDiscont}$`);
            itemTotal += priceWithoutDiscont;
        });

        cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice');
        cy.get('@saleItemPrice').then($linkText => {
            let saleItemPrice = $linkText.split('$');
            let priceWithDiscount = 0;
            for (let i = 0; i < saleItemPrice.length; i++) {
                priceWithDiscount += Number(saleItemPrice[i]);
            }
            cy.log(`Sum prices with discont: ${priceWithDiscount}$`);
            itemTotal += priceWithDiscount;
        }).then(() => {
            cy.log(`The total sum: ${itemTotal}$`);
            expect(itemTotal).to.eq(648.5);
        });
    });
});
