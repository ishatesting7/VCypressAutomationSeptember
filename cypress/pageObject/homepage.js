class homepage
{
    //pageElement
    elements = {
        openCartUsername:()=>{return cy.get('#input-username')},
        openCartPassword:()=>{return cy.get('#input-password')},
        openLoginBtn:()=>{return cy.get('[type="submit"]')},
        userProfileDetails:()=>{return cy.get('#user-profile')},
        validateOrder:()=>{return cy.get(':nth-child(1) > .tile > .tile-body > .pull-right')}
    }

    //pageAction
    enterValidCreds(username, password)
    {
        this.elements.openCartUsername().type(username);
        this.elements.openCartPassword().type(password);
    }
    clickLoginBtn()
    {
        this.elements.openLoginBtn().click();
    }
    validateHomePageHeader()
    {
        this.elements.userProfileDetails().should('be.visible');
    }
    validateOrder()
    {
        this.elements.validateOrder().should('have.text', 25)
    }

}

//export default homepage;

module.exports = new homepage();