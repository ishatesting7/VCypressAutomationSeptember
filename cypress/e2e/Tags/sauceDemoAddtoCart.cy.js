describe('Valid Credentials (smoke)', {tags:'@smoke'}, ()=>{

beforeEach(()=>{

    cy.visit('https://www.saucedemo.com/v1/')

})

it('Add to Cart functionality', ()=>{

    cy.get('[id="user-name"]').type('standard_user');
    cy.get('[id="password"]').type('secret_sauce');
    cy.get('#login-button').click({force:true});
    cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
    cy.get('.fa-layers-counter').click();
    cy.get('.btn_action').click();
    cy.get('[data-test="firstName"]').type('ajay')
    cy.get('[data-test="lastName"]').type('shah')
    cy.get('[data-test="postalCode"]').type('383922')
    cy.get('.btn_primary').click();
    cy.contains('FINISH').click();
    cy.get('.complete-header').should('have.text','THANK YOU FOR YOUR ORDER');

    
})
    
})