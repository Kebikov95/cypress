/// <reference types="cypress" />

describe("JSON Object", () => {
    it("JSON Object Example", () => {
        const exampleObject = {"key1": "Tim", "key2": "Jones"};
        const exampleArray = ["Sophie", "Rose", "Howard"];
        const users = {
            "firstName": "Joe",
            "lastName": "Blogs",
            "age": 30,
            "students": [
                {
                    "firstName": "Jim",
                    "lastName": "Fox"
                },
                {
                    "firstName": "Sarah",
                    "lastName": "Parker"
                }
            ]
        };
        const jsonArray = [{"key": "Luke"}, {"key": "Skywalker"}];

        // json
        cy.log(exampleObject["key1"]);
        cy.log(exampleObject["key2"]);
        cy.log(exampleObject.key2);

        // array
        cy.log(exampleArray[0]);
        cy.log(exampleArray[1]);
        cy.log(exampleArray[2]);

        // users json
        cy.log(users.lastName);
        cy.log(users.students[0].lastName);
        cy.log(users.students[1].lastName);

        // json array
        cy.log(jsonArray[0].key);
        cy.log(jsonArray[1].key);
    });
});