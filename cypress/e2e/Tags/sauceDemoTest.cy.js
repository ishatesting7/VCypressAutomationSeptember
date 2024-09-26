describe('Valid Credentials (regression, sanity)', {tags:['@regression', '@sanity']}, ()=>{

beforeEach(()=>{

    cy.visit('https://www.saucedemo.com/v1/')

})

it('Validate Product Text', ()=>{

    cy.get('[id="user-name"]').type('standard_user');
    cy.get('[id="password"]').type('secret_sauce');
    cy.get('#login-button').click({force:true});
    cy.get('.product_label').should('have.text', 'Products');
})

it('Validate Sort', ()=>{

    cy.get('[id="user-name"]').type('standard_user');
    cy.get('[id="password"]').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('.product_sort_container').should('be.visible');
})
    
})