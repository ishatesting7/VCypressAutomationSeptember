describe('Java Script Alerts', ()=>{

    it('Javascript Alert', ()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

        cy.get('[onclick="jsAlert()"]').click();

        cy.on('window:alert', (t)=>{

            expect(t).to.contains('I am a JS Alert');

        })

        cy.get('#result').should('have.text', 'You successfully clicked an alert');

    })

    it('JS Confirm - Alert - Cancel', ()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

        cy.get('[onclick="jsConfirm()"]').click();

        cy.on('window:confirm', (t)=>{

            expect(t).to.contains('I am a JS Confirm');

        })

        cy.on('window:confirm', ()=>false);

        cy.get('#result').should('have.text', 'You clicked: Cancel')
    })

    it('JS Prompt - Enter Text', ()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');


        cy.window().then((wind)=>{

            cy.stub(wind,'prompt').returns('Welcome to Cypress');
        })

        cy.get('[onclick="jsPrompt()"]').click(); 

    })

    it.only('Authenticated URLs', ()=>{

        cy.visit('https://the-internet.herokuapp.com/basic_auth',{
            auth:
            {
                username:'admin',
                password:'admin'
            }
        })

        //cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
    })
})