describe('API Chaining', ()=>{

    it('API Chaining Demo', ()=>{

        cy.request({
                method:'GET',
                url:'https://jsonplaceholder.typicode.com/posts'
            }).then((response)=>{

                expect(response.status).to.eq(200);

                const postId = response.body[0].id;

                return postId
            })
            .then((postId)=>{

                cy.request({
                    method:'GET',
                    url:`https://jsonplaceholder.typicode.com/comments?postId=${postId}`
                })
                .then((response)=>{

                    expect(response.status).to.be.eq(200);
                    var res = JSON.stringify(response);
                  //  cy.log(res);
                    expect(response.body).to.have.length(5);
                    expect(response.body[2].name).to.be.eq('asdjasn');

                })
            })

        
    })
})