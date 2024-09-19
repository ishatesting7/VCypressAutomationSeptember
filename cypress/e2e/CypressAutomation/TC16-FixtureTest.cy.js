describe('Read Data', ()=>{

    it('Read Data', ()=>{


        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.fixture('orange').then((data)=>{

            cy.get('[name="username"]').type(data.username);
            
            cy.get('[name="password"]').type(data.password);

            cy.get('[type="submit"]').click();

        })
    })
})