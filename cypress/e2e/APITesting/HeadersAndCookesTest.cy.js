describe('API Testing', ()=>{

    let authToken = null;

    before('Creating an Order - Generate access token', ()=>{

        cy.request({

            method:'POST',
            url:'https://simple-books-api.glitch.me/api-clients/',
            headers:{
                'Content-Type':'application/json'
            },
            body:
            {
                clientName:'ABCXYX',
                clientEmail: Math.random().toString(5).substring(2)+'@gmail.com'
            }
        })
        .then((response)=>{

            authToken = response.body.accessToken;
            cy.log(authToken);
        })

    })
    it('Order Book', ()=>{
        cy.request({

            method:'POST',
            url:'https://simple-books-api.glitch.me/orders',
            headers:{
                'Content-Type':'application/json',
                'Authorization': 'Bearer ' + authToken
            },
            body:
            {
                "bookId":3,
                "customerName": "AXBSC"
            }
        })
        .then((response)=>{

            let m = JSON.stringify(response.body);
            cy.log(m);
        })
        

    })

})