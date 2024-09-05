describe('Test Scenarios', ()=>{   //It is similar to what we have Test Scenarios

    it('Test Case - Verify URL', ()=>{          //It is similar to individual Test Cases


        cy.visit('http://www.saucedemo.com/v1/');

        cy.get('[id="user-name"]').type('standard_user');

        cy.get('[id="password"]').type('secret_sauce', {log:false})

        cy.get('#login-button').click();

        cy.get('.product_label').should('have.text','Products');

        cy.get('.bm-burger-button > button').click();

    })
})
