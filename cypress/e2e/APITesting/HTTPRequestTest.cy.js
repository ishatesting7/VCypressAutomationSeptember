describe('HTTP Request', ()=>{

    

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
        .its('status')
        .should('equal', 200)


    })

    it('HTTP GET Call', function(){

        cy.request('GET','https://petstore.swagger.io/v2/pet/460')
        .its('status')
        .should('equal', 200)
    })

    it('UPDATE METHOD', ()=>{

       cy.request({
        method:'PUT',
        url:'https://petstore.swagger.io/v2/pet',
        body:{

            
                "id": 460,
                "category": {
                  "id": 0,
                  "name": "RanchoDog213"
                },
                "name": "doggie",
                "photoUrls": [
                  "string"
                ],
                "tags": [
                  {
                    "id": 0,
                    "name": "string"
                  }
                ],
                "status": "available"
              
        }


       })
       .its('status')
       .should('equal', 200)
    })


    it('DELETE METHOD', ()=>{

        cy.request('DELETE','https://petstore.swagger.io/v2/pet/460')
        .its('status')
        .should('equal', 200)
    })
})