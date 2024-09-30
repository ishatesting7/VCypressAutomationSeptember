describe('DEMO', ()=>{

    it('Demo', ()=>{

        cy.visit('https://camcevi-corp.stage.asentechdev1.com/resources-support/' , {auth:{
        username : 'acord',
        password : 'R*no@23!.'}}) 
        cy.get('#yes-cookies').click({timeout: 10000})   // popup yes-no
        cy.get('.modal-close-button').first().click({ timeout: 10000 })     // form

        cy.get('#spms-popup-modal > .modal-dialog > .modal-content > .modal-body > .pop-content > .close-button').click({force: true} )  //registr
       
        cy.wait(10000);
        cy.get('.close-button.close').last().click();
        //cy.get('.close-button-close').click()
    })
})