describe('Web Tables', function(){


    beforeEach('Web Tables', ()=>{

        cy.visit('https://demo3x.opencartreports.com/admin/index.php')
        cy.get('#input-username').type('demo')
        cy.get('#input-password').type('demo')
        cy.get('[type="submit"]').click();
        cy.wait(1000);
        cy.get('#menu-customer > a').click();
        cy.get('#menu-customer > ul >li:first-child').click();
    })

    it('Count Number of Rows and Columns', ()=>{

        cy.get('table[class="table table-bordered table-hover"]>tbody>tr').should('have.length', 7)
        cy.get('table[class="table table-bordered table-hover"]>thead>tr>td').should('have.length', 10)
        cy.get('.table > tbody > :nth-child(2) > :nth-child(3)').contains('ChristineHSwanson@teleworm.com');

    })

it('Read all the value', ()=>{

    cy.get('table[class="table table-bordered table-hover"]>tbody>tr').each(($row, index, $rows) =>{


        cy.wrap($row).within(()=>{

            cy.get('td').each(($col, index, $cols)=>{

                cy.log($col.text())
            })
            
        })

    })

    

})
    

})