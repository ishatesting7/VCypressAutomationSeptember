describe('Test Scenarios', ()=>{   //It is similar to what we have Test Scenarios

    it('Test Case - Verify URL', ()=>{          //It is similar to individual Test Cases


        cy.visit('https://www.saucedemo.com/v1/');

        cy.url().should('eq','https://www.sauceemo.com/v1/');
        //getCurrentURL()
    })

    it('Test Case - Verify Title', ()=>{          //It is similar to individual Test Cases


        cy.visit('https://www.saucedemo.com/v1/');

        cy.title().should('eq','Swag Labs');

    })



})