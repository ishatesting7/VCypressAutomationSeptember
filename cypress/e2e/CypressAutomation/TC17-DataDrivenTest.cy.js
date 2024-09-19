describe('DataDriven Test', ()=>{


    it('DataDriven', ()=>{

        cy.fixture('orange2').then((data)=>{

            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

            data.forEach((userdata)=>{

                cy.get('[name="username"]').type(userdata.username);
                cy.get('[name="password"]').type(userdata.password);
                cy.get('[type="submit"]').click();
                if(userdata.username == 'Admin' && userdata.password=='admin123')
                {
                    cy.get('.oxd-userdropdown-tab').click();
                    cy.contains('Logout').click();
                }

            })

        })
    })
})