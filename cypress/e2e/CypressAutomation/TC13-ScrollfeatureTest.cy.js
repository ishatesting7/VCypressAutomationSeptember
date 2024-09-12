describe("ScrollTo and Scroll Into View", ()=>{

    it('Scroll and ScrollTo', ()=>{


        cy.visit('https://example.cypress.io/commands/actions');

        cy.get('#scroll-horizontal button')
        .should('not.be.visible')

        // scroll the button into view, as if the user had scrolled
        cy.get('#scroll-horizontal button').scrollIntoView()
        cy.get('#scroll-horizontal button')
            .should('be.visible')

        cy.get('#scroll-vertical button')
  .should('not.be.visible')

// Cypress handles the scroll direction needed
        cy.get('#scroll-vertical button').scrollIntoView()
cy.get('#scroll-vertical button')
  .should('be.visible')

cy.get('#scroll-both button')
  .should('not.be.visible')
    })

    it.only('ScrollTo', ()=>{

        cy.visit('https://scroll.in/')
        //cy.wait(2000);
        cy.get(':nth-child(5) > .row-stories > ul > :nth-child(9) > a > figure > img').scrollIntoView({duration:5000});

        //cy.get(':nth-child(5) > .row-stories > ul > :nth-child(9) > a > figure > img').scrollIntoView();
    })
})