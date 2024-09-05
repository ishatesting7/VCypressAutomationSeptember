describe('Radio Button and Checkboxes', ()=>{

    it.only('Radio Button and Checkboxes', function(){


        cy.visit('https://testautomationpractice.blogspot.com/');

        //Before Check
        cy.get('#male').should('not.be.checked')
        
        //After Check
        cy.get('#male').check().should('be.checked');

        cy.get('#female').check();

        cy.get('#male').should('not.be.checked')

    })

    it('Checkbox Demo', ()=>{

        //Checkbox

        cy.visit('https://testautomationpractice.blogspot.com/')

        cy.get('#sunday').should('be.visible').should('not.be.checked')

        cy.get('#sunday').check().should('be.checked')

        cy.get('[type="checkbox"]').check()

        cy.get('#sunday').check()

        cy.get('[type="checkbox"]').uncheck()

        cy.get('[type="checkbox"]').first().check();

        cy.get('[type="checkbox"]').last().check();

        cy.get('[type="checkbox"]').eq(18).check(); // Tuesday


    })
})