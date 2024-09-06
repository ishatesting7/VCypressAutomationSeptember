describe('Drag and Drop', ()=>{

    it('Drag and Drop', ()=>{

        const dataTransfer = new DataTransfer();

        //cy.visit('https://www.aspsnippets.com/demos/742/')

        cy.visit('https://www.globalsqa.com/demo-site/draganddrop/');
        //cy.get('img[src="../SampleImages/Penguins.jpg"]').trigger('dragstart',{dataTransfer})
    
       // cy.frameLoaded();

        cy.wait(2000);

       // cy.get('img[src="images/high_tatras_min.jpg"]').trigger('dragstart',{dataTransfer})

        cy.iframe('.demo-frame.lazyloaded').find('img[src="images/high_tatras_min.jpg"]').trigger('dragstart',{dataTransfer})
        
        cy.wait(2000);
       // cy.get('#dvDest').trigger('drop', {dataTransfer})
        
       //cy.get('#trash').trigger('drop',{dataTransfer})

       cy.iframe('.demo-frame.lazyloaded').find('#trash').trigger('drop',{dataTransfer})

        cy.wait(2000);
    })
})