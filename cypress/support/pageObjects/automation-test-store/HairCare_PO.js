class HairCare_PO {
    addProductsToBasket() {
        data.productName.forEach(name => {
            cy.addProductToChart(name).then(() => {
                debugger
            });
        });
        cy.get('a.dropdown-toggle').eq(1).click().debug();
        cy.get('td.align_left a').each(($el, index, $list) => {
            expect($el).to.contain(data.productName[index]);
        });
    }
}

export default HairCare_PO;