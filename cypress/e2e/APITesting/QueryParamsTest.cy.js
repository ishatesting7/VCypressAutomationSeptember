// Query Parameter - www.reqres.in/?value=asn&?value2=asd
// form-data

// www.reqres.in/er/34
//Path Parameter

describe('Query Param Demo', ()=>{

    const queryParam = {page:2};

    it('Query Param Demo', ()=>{

        cy.request({
            url:'https://reqres.in/api/users',
            method:'GET',
            qs:queryParam
        })
        .then((response)=>{
            expect(response.status).to.be.eq(200);
            var resBody = JSON.stringify(response);
           // cy.log(resBody);    
            expect(response.body.page).to.eq(2);
            expect(response.body.total_pages).to.eq(2);
            expect(response.body.per_page).to.eq(6);
            expect(response.body.data[0].last_name).to.equal('Lawson')
            expect(response.body.data[0]).have.property('id',7);
            expect(response.body.data[0]).has.property('first_name','Michael');

        })

    })
})