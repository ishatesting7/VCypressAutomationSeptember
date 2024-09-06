describe('File Upload Scenarios', ()=>{

    it('File Upload - Single File Upload', ()=>{

        cy.visit('https://the-internet.herokuapp.com/upload')

        cy.get('#file-upload').attachFile('profile.json');

        cy.get('#file-submit').click()

        cy.wait(1000)

        cy.get('h3').should('have.text', 'File Uploaded!')
    })

    it('File Upload - Rename', ()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')

        cy.get('#file-upload').attachFile({filePath: 'profile.json',fileName:'rename.json'});

        cy.get('#file-submit').click()

        cy.wait(1000)

        cy.get('h3').should('have.text', 'File Uploaded!')
    })

    it('File Upload - Drag and Drop', ()=>{

        cy.visit('https://the-internet.herokuapp.com/upload')

        cy.get('#drag-drop-upload').attachFile('profile.json',{subjectType:"drag-n-drop"});

        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').should('contain.text', 'profile.json');


    })

    it.only('File Upload - Multiple Files', ()=>{

        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')

        cy.wait(1000);

        cy.get('#filesToUpload').attachFile(["example.json", "profile.json"])

        cy.wait(2000);

        cy.get(':nth-child(6) > strong').should('contain.text','Files You Selected:');

        cy.get('#fileList > li').should('have.length', 2);
    })


})