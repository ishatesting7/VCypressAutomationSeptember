describe('Navigation Test', function(){


    it('Navigation Test', ()=>{

        cy.visit('https://tutorialsninja.com/demo/')
        cy.title().should('eq', 'Your Store');

        cy.xpath("//a[@title='Shopping Cart']").click();
        cy.title().should('eq','Shopping Cart');

        cy.go('back');
        cy.title().should('eq', 'Your Store');

        cy.go('forward');
        cy.title().should('eq','Shopping Cart');

        cy.go(-1); // Backward
        cy.title().should('eq', 'Your Store');

        cy.go(1) // Forward
        cy.title().should('eq','Shopping Cart');

        cy.reload();
    })
})