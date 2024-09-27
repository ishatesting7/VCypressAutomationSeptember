describe("Parsing JSON", ()=>{


    it('Parsing JSON', ()=>{

        cy.request({
            method:'GET',
            url:'https://fakestoreapi.com/products',
            qs:{limit:10}
        })
        .then((response)=>{

            let res = JSON.stringify(response);
            //cy.log(res);
            let total_Price=0;
            response.body.forEach(ele =>{
                total_Price = total_Price + ele.price
            })

            response.body.forEach(ele =>{

                let title1 = ele.title
                if( title1=='Mens Casual Premium Slim Fit T-Shirts ')
                {
                    cy.log('FOUND');
                }
                else
                {
                    cy.log("NOT FOUND");
                }
            })
            //cy.log(total_Price);
            expect(total_Price).to.be.eq(1261.21);
        })
    })
})