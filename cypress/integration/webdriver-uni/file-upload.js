/// <reference types="Cypress" />
describe("Handling upload files via webdriveruni", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("webdriveruin_homepage"));
        cy.get("#file-upload").invoke("removeAttr", "target").click({ force: true });
    });

    it("Test file upload", () => {
        cy.fixture('laptop.png', 'base64').then(fileContent => {
            cy.get('#myFile').attachFile(
                {
                    fileContent,
                    fileName: "laptop.png",
                    mimeType: "image/png"
                },
                {
                    uploadType: "input"
                }
            );
        });
        cy.get('#submit-button').click();
        cy.on('window:alert', str => {
            expect(str).to.equal('Your file has now been uploaded!');
        });
    });

    it("Test file no upload", () => {
        cy.get('#submit-button').click();
        cy.on('window:alert', str => {
            expect(str).to.equal('You need to select a file to upload!');
        });
    });
});