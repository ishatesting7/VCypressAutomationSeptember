import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor';

var user, pass;
Given('I am in login page', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});

When('I enter {string} in username field', (username) => {
    cy.get('[name="username"]').type(username);
});

When('I enter {string} in password field', (password) => {
    cy.get('[name="password"]').type(password);
});

When('I click on login button', () => {
    cy.get('[type="submit"]').click();
    cy.wait(2000);
    // if(user == 'Admin' && pass == 'admin123')
    // {
    // cy.get('.oxd-userdropdown-name').should('be.visible')
    // }
    // else
    // {
    // cy.get('.oxd-alert-content > .oxd-text').should('be.visible');
    // }

});

When('User enter username as {string} and password as {string}', (username, password) => {
    user = username;
    pass = password;
    cy.get('[name="username"]').type(username);
    cy.get('[name="password"]').type(password);
    

});

When("user navigate to job title", function () {
    cy.get(':nth-child(1) > .oxd-main-menu-item').click();

    cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').click();
    cy.get('.oxd-dropdown-menu > :nth-child(1)').click();
    cy.get('.oxd-button').click();

});

When("user enter all the job details and click on save button", function () {

    cy.get(':nth-child(2) > .oxd-input').type('Job Titles');

    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('Job Description');

    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('Add Notes');

    cy.wait(10000);
    
    cy.get('.oxd-button--secondary').click();

});










