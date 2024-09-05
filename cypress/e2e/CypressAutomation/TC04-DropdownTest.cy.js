
describe('Dropdown', ()=>{


    it.only('Dropdown Demo - With Select', ()=>{

        cy.visit('https://www.zoho.com/commerce/free-demo.html')
        cy.xpath('//select[@id="zcf_address_country"]')
        .select('Argentina')
        .should('have.value','Argentina')
    })

    it('Dropdown Demo - Without Select', ()=>{

        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        cy.xpath('//span[@id="select2-billing_country-container"]').click()

        cy.get('.select2-search__field').type('Argentina').type('{enter}');

        cy.xpath('//span[@id="select2-billing_country-container"]')
        .should('have.text','Argentina');

    })

    it('Dropdown Demo - AutoSuggestion', ()=>{

        cy.visit('https://www.google.com/')
        cy.get('.gLFyf').type('Cypress Automation')

        cy.wait(1000);

        cy.get('div.wM6W7d > span').should('have.length', 13)

        // cy.get('div.wM6W7d > span').each(($el, index, $list) =>{

        //         if($el.text()=='cypress automation jobs')
        //         {
        //             cy.wrap($el).click();
        //             //div.wM6W7d > span [5] .click()
        //         }
        //         else
        //          

    
        //
        // })

        cy.get('div.wM6W7d > span').contains('cypress automation tool').click();

        cy.contains('Language').click();

        cy.get('.V3FYCf > .NFQFxe > .HwtpBd > .Z0LcW > .IZ6rdc').should('contain','JavaScript');


    })


})