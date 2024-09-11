describe('Mouse Operation', ()=>{

    it('Mouse Operation', function(){

        cy.visit('https://tutorialsninja.com/demo/')
        //NEGATIVE ASSERTION
        cy.get('[href="https://tutorialsninja.com/demo/index.php?route=product/category&path=20_27"]').should('not.be.visible');

        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click();

        //POSITIVE ASSERTION
        cy.get('[href="https://tutorialsninja.com/demo/index.php?route=product/category&path=20_27"]').should('be.visible');

        cy.get('[href="https://tutorialsninja.com/demo/index.php?route=product/category&path=20_27"]').click();

    })

    it('Right Click ', ()=>{

        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')

        cy.get('.context-menu-one.btn.btn-neutral').rightclick();

        cy.get('.context-menu-icon-paste').should('be.visible');
        //cy.get('.context-menu-one.btn.btn-neutral').trigger('contextmenu')

    })

    it.only('Double Click', ()=>{

        cy.visit('https://example.cypress.io/commands/actions')
        
        cy.get('.action-div').dblclick()
        cy.get('.action-input-hidden').clear().type('Hello');
        cy.get('.action-div').should('not.be.visible')
        cy.get('.action-input-hidden').should('be.visible') 
    })
})