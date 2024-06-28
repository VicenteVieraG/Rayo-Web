import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit rayo", () => {
    cy.visit("/");
});

Then("I should see a the title", () => {
    cy.get("h1").should("be.visible");
});
