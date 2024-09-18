import homepage from "../../pageObject/homepage";

describe('Login', ()=>{


    it('Login', ()=>{

        cy.visit(Cypress.env('baseUrl'))

        homepage.enterValidCreds(Cypress.env('username'), Cypress.env('username'));

        homepage.clickLoginBtn();

        homepage.validateHomePageHeader();

        homepage.validateOrder();

    })
})