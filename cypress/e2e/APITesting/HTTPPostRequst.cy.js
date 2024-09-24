describe('POST Call', function(){

    it('HTTP POST Call', function(){

        cy.request({
            method:'POST',
            url:'https://petstore.swagger.io/v2/pet',
            body:
                {
                    "name": "Essie Abbott",
                    "photoUrls": [
                      "Demo PhotoUrls 1",
                      "Demo PhotoUrls 2"
                    ],
                    "id": 460,
                    "category": {
                      "id": "12",
                      "name": "Category Name"
                    },
                    "tags": [
                      {
                        "id": "123",
                        "name": "Tags 1"
                      },
                      {
                        "id": "234",
                        "name": "Tags 2"
                      }
                    ],
                    "status": "pending"
                  }
        })
        .then((response)=>{
          //  cy.log(JSON.stringify(response));
            expect(response.status).to.be.equal(200)
            expect(response.body.status).to.be.equal('pending')
            const m = response.body.id;
            cy.log(m);   
            expect(response.body.tags[0].id).to.be.equal(123)
            expect(response.duration).to.be.greaterThan(200)
        })

    })

    it.only('POST Request Using Fixture', ()=>{
        
        cy.fixture('petStore').then((dataValue)=>{
           const reqbody = dataValue;
        cy.request({
            method:'POST',
            url:'https://petstore.swagger.io/v2/pet',
            body: reqbody
        })
        .then((response)=>{
          //  cy.log(JSON.stringify(response));
            expect(response.status).to.be.equal(200)
            expect(response.body.status).to.be.equal('pending')
            const m = response.body.id;
            cy.log(m);   
            expect(response.body.tags[0].id).to.be.equal(123)
            expect(response.duration).to.be.greaterThan(200)
        })
    })
    })
})