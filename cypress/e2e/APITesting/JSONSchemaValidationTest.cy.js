const Ajv = require("ajv");

const avj = new Ajv();
describe('Schema Validation', ()=>{

    it('Schema Validation', ()=>{

        cy.request({

            method:'GET',
            url:'https://fakestoreapi.com/products'
        })
        .then((response)=>{

            var schema = {
                "$schema": "http://json-schema.org/draft-07/schema#",
                "type": "array",
                "items": [
                  {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "integer"
                      },
                      "title": {
                        "type": "string"
                      },
                      "price": {
                        "type": "number"
                      },
                      "description": {
                        "type": "string"
                      },
                      "category": {
                        "type": "string"
                      },
                      "image": {
                        "type": "string"
                      },
                      "rating": {
                        "type": "object",
                        "properties": {
                          "rate": {
                            "type": "number"
                          },
                          "count": {
                            "type": "integer"
                          }
                        },
                        "required": [
                          "rate",
                          "count"
                        ]
                      }
                    },
                    "required": [
                      "id",
                      "title",
                      "price",
                      "description",
                      "category",
                      "image",
                      "rating"
                    ]
                  }
                ]
              }

            const validate = avj.compile(schema)

            const isValid = validate(response.body);

            expect(isValid).to.be.true

        })
    })
})