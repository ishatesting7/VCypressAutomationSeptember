//Impicit Assertion and Explicit Assertion

describe('TC01 - Assertion', ()=>{

    const url = 'https://demo3x.opencartreports.com/admin/'
    it('Implicit Assertion', function(){

        cy.visit(url)  // 302 - Permanant URl 

        cy.url().should('include', 'admin')
        .and('equal','https://demo3x.opencartreports.com/admin/')
        .and('contain', 'demo3')
        .and('not.contain', 'orange')

        cy.get('img').should('be.visible')
        .and('exist')
    })

    it('Explicit Assertion', function(){

        cy.visit(url);
        cy.get('#input-username').type('demo');
        cy.get('#input-password').type('demo');
        cy.wait(1000);
        cy.pause();
        cy.get('.btn.btn-primary').click();


        let expValue = 'Demo User';
        cy.get('.dropdown > .dropdown-toggle').then(($use) =>{

            // let, var and const
            const area = 25;
            let actValue = $use.text().trim();
           
            expect(actValue).to.eq(expValue);

            assert.equal(actValue,expValue);

        })

    })

})