describe('Custom Commands', ()=>{


    it('Custom Command - Demo 1', ()=>{


        cy.visit('https://tutorialsninja.com/demo/')

        cy.wait(1000);

        cy.clickLink('MacBook');

        cy.go('back');

        cy.clickLink('iPhone');

        
    })

    it.only('Custom Command - Demo 2', ()=>{

        cy.loginApp('Admin', 'admin123');
        cy.contains('PIM').click();
        cy.get(':nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()

        cy.contains('Support Specialist').click();
        cy.contains('Search').click();

        cy.get('.orangehrm-horizontal-padding').should('have.text', 'No Records Found');

    })
})