
let urldemo = 'https://postman-echo.com/basic-auth';

describe('Authentication', ()=>{

    it('Authentication - Basic Auth', ()=>{

        cy.request({

            method:'GET',
            url:urldemo,
            auth:{

                user:'postman',
                pass:'password'
            
            }
        })
        .then((response)=>{

            expect(response.status).to.be.equal(200);
            expect(response.body.authenticated).to.be.eq(true);
        })
    })

    it('Digest Authentication', ()=>{

        cy.request({

            method:'GET',
            url:urldemo,
            auth:{

                user:'postman',
                pass:'password',
                method:'digest'
            
            }
        })
        .then((response)=>{

            expect(response.status).to.be.equal(200);
            expect(response.body.authenticated).to.be.eq(true);
        })
        
    })
})