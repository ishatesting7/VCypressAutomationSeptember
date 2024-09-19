describe('Nested JSON Data', ()=>{

    it('Nested JSON Data', ()=>{

        cy.fixture('nesteddata').then((data)=>{

            const uname = data.user.username;
            const ema = data.user.email;

            // var -- const, var and let

            var add = data.user.address[0].street;

            expect(uname).to.equal('Bret');

            expect(add).to.equal('213 Avenue Apt');
        })
    })
})