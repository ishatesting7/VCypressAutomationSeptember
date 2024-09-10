describe('Capture Screenshot and Videos', ()=>[

    it('Capture Screenshot', ()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        cy.wait(1000);

        cy.screenshot();

       // cy.get('#Username').should('be.visible');
    })
])