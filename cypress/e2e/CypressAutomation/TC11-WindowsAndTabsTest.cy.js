describe('Windows and Tab', ()=>{


    it('Windows', ()=>{

        cy.visit('https://the-internet.herokuapp.com/windows');

        cy.get('.example > a').invoke('removeAttr','target').click();

        cy.get('.example > h3').should('be.visible');

        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
    })

    it('Approach 2', ()=>{

        cy.visit('https://the-internet.herokuapp.com/windows');

        cy.get('.example > a').then((ele)=>{

            // //input[@tag = 'Name']/[2]
            // .classname > a
            let url = ele.prop('href');

            cy.log(url);
            console.log(url);
            
            cy.visit(url);
        })

        
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')

    })
})