import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor';

var user, pass;
Given('I am in login page', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/auth/login');
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
    if(user == 'Admin' && pass == 'admin123')
    {
    cy.get('.oxd-userdropdown-name').should('be.visible')
    }
    else
    {
    cy.get('.oxd-alert-content > .oxd-text').should('be.visible');
    }

});

When('User enter username as {string} and password as {string}', (username, password) => {
    user = username;
    pass = password;
    cy.get('[name="username"]').type(username);
    cy.get('[name="password"]').type(password);
    

});











