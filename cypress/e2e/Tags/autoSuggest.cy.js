describe('Demo Auto Suggestion', ()=>{

    it('Autosuggestion', ()=>{

        cy.visit('https://www.google.com/');
        cy.get('#APjFqb').type('Shop lululemon {enter}')
        cy.contains('technical apparel + athletic shoes | lululemon').click();

        cy.get(':nth-child(2) > .integrated-hero-links_heroLink__Ml82k').click();

        cy.wait(5000);

       // cy.get('[aria-label="Close"]').first().click();

        cy.get(':nth-child(1) > [data-testid="product-tile"] > .product-tile__details > .product-tile__product-attributes > .product-tile__product-attributes__title-and-price > .product-tile__product-name > .link').first().click();
        
        cy.reload();

        cy.wait(10000);

        cy.reload();
        cy.url().then(url => cy.visit(url));


        //cy.visit('https://shop.lululemon.com/')

    })
})