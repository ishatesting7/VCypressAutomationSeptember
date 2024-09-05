describe('Hooks Demo', ()=>{

        before(()=>{

            cy.log('I am in before');

        })

        beforeEach(()=>{

            cy.log('I am in before Each');
        })

        after(()=>{

            cy.log('I am in after');
        })

        afterEach(()=>{
            cy.log('I am in after Each');
        })

        it('Before and After Demo', ()=>{

            cy.visit({
                url: 'http://google.com',
              })
        })

        it('Before and After Demo', ()=>{

            cy.visit({
                url: 'https://example.cypress.io/   ',
              })
        })

})