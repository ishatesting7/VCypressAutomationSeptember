
Cypress Introduction 
--------------------





Cypress Installation - https://www.cypress.io/
----------------------------------------------

Pre-requsite -

1. Node JS - https://nodejs.org/en/download/prebuilt-installer
2. Visual Studio Code - https://code.visualstudio.com/download


VS Code
-------

Step 1
- Create a folder and open the same using VS Code
- Go to Terminal Section and run the command (node package module) - npm init 

Step 2
- Trigger the - npm install cypress --save-dev 

Step 3
- Open Cypress Runner 


Cypress Folder Structure
------------------------
cypress
	e2e
		Payment
			TC_Pay_001
			TC_Pay_002
			TC_Pay_003

		Merchant
			TC_Mer_001
			TC_Mer_002
			TC_Mer_003	

		Verify
			TC_Ver_001
			TC_Ver_002
			TC_Ver_003
	fixture
		TestData
			JSON - Direct Support - JSONPATHFINDER
			CSV - npmjs.com - Need to download the plugin
			TXT
			XLS
			XLSX
		Images
			PDF
			.mp3
			.mp4
			jpeg
			png
	support
		e2e.js
			import {cypress-iframe}
			import {cypress-xpath}
			import 'cypress-file-upload';
		command.js
			same purpose
			Customized Commands
			Overwrite Commands
		util.js
		logutil.js
cypress.config.js
		task command
		configuration changes
package.json
		download



Command to Run all the Test Cases under e2e - 
-------------------------------------------

headless mode - 

Command 1 - To Open your cypress runner and select the browsers - npx cypress open 
Command 2 - npx cypress run 
Command 3 - To Run specific spec file - npx cypress run --spec cypress/e2e/JavaScriptBasics/CommandsTest.cy.js
Command 4 - To Run specific spec file in specific Browser - npx cypress run --spec cypress/e2e/JavaScriptBasics/CommandsTest.cy.js --browser chrome 

HEADLESS - Browser will not open 
HEADED - Browser will open


Cypress Locators - CSS Selector
-------------------------------

<input type="text" class="form_input" data-test="username" id="user-name" name="user-name" placeholder="Username" autocorrect="off" autocapitalize="none" value="">

tagname - input
attribute - type, class, data-test, id, name, placeholder
value - 

	- CSS (By Default)	
		- tagname[attribute=value] -- input[id='user-name']
		- [attribute=value] -- [id='user-name']
		- if you are aware about id - then css selector - #id
		- if you are aware about classname - then css selector - .classname (remove empty space and put .)
		- Using Cypree Runner

	- XPath (By Plugin)

Assertions
----------

Impicit Assertion and Explicit Assertion


Implict Assertion - Should()


Explicit Assertion - expect --BDD 
				   - assert --TDD



DropDown
--------


https://www.zoho.com/commerce/free-demo.html



File Upload -
-----------

Plugin - https://www.npmjs.com/package/cypress-file-upload

Command - npm install --save-dev cypress-file-upload

Pre-requisite - File to be uploaded should be present in the fixture folder.


Iframes - 
-------

Plugin - npm install -D cypress-iframe


Custom Commands In Cypress
-------------------------

All the custom command need to be in command.js

Alerts
------


GIT - GITHUB - GITLAB - AZURE - CIRCLE CI - BITBUCKET
-----------------------------------------------------

https://confluence.atlassian.com/bitbucketserver/basic-git-commands-776639767.html

A - Cloning the Repo(main) + Update his changes (2 Test Cases)
A - Merge my code with main branch + Notification to XY + Update with Review Comments
A - Merge the code with main branch

B - Cloning the Repo(main) + Update his changes (3 Test Cases)

XY - Project Manager - he will check the request. He will provide review comments

XY will merge the code and push the changes to the main branch



Windows and Tabs 
----------------

https://the-internet.herokuapp.com/windows


Mochawesome Report Plugin 

1. https://github.com/LironEr/cypress-mochawesome-reporter
2. Run the Command - npm i --save-dev cypress-mochawesome-reporter
3. Make some changes to cypress.config.js

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});

3. Add in e2e.js - 

import 'cypress-mochawesome-reporter/register';

4. run using - npx cypress run

--------------------------------
To take the input from USER - 

npm install prompt-sync

const prompt=require("prompt-sync")({sigint:true}); - Add this in JS file at the top



API Testing 
-----------
JSON - Java Single Object Notation
GraphQL - Graph Query language
XML 
Raw Text


API METHODS - Application Programming Interface
-----------
GET
POST
PUT
PATCH
DELETE

Customer ---> Waiter ---> Cooks

Frontend ---> APIs ---> Backend

Status Code - 1XX, 2XX, 3XX, 4XX, 5XX 
Request Payload - JSON, XML
Response Payload - JSON, XML


API - Postman, Swagger

POST - Creating a new Record in the DB
Status Code - 201 Created

		Server Side Errors
			- 500 Internal Server Error
			- 501 Not Implemented
			- 504 Gateway Timeout


		Client Side Errors
			- 401 Unauthorized
			- 405 Method Not Supported
			- 403 Forbidden
			- 404 Not Found


GET - Retrive the Data

Tags
----
To Install - npm i @cypress/grep

https://www.npmjs.com/package/@cypress/grep

npx cypress run --spec cypress/e2e/Tags/*.js --env grep="smoke" 

2 Open Issues 
- Cypress Running All the Test Cases if we are running via FOLDER
- Cypress-grep is not working as expected (Running all the Test Cases )

-----------------------------------------------------------------
Cypress BDD Cucumber -
====================
BDD Cucumber + PageObjectModel

(Extension - .feature)
Feature - BDD - Gherkin Language - 

	Feature: Validate the login functionality

Background:

	Given
	When
	Then

	Scenario Describe your scenario

		Given User open the chrome browser
		When User navigate to the URL
		Then User enter the credentials
		And User click on Login button
		And User navigate to home page

	Scenario outline: Validate the login functionality with some values

		Given User open the chrome browser
		When User navigate to the URL
		Then User enter the credentials <login> and <password>
		And User click on Login button
		And User navigate to home page

		Examples:
		|login            | password|
		|user1@gmail.com  | test123 |
		|xyz1  			  | pqr |
		|user12@gmail.com | test123 |
		|xyz12  	      | pqr |

StepDef (.js)

	@Given("User open the chrome browser", ()=>{
		//implement over here
	})

Plugin - tidyGherkin


Runner


============================

Step 1 - 
Install - npm install @badeball/cypress-cucumber-preprocessor

Step 2 - 
Install - npm install --save-dev @faker-js/faker

Step 3 - 
Install - npm i -D cypress @bahmutov/cypress-esbuild-preprocessor esbuild

Step 4 - 

Update package.json --

 "cypress-cucumber-preprocessor": {
    "stepDefinitions": "cypress/support/step_definitions/*.js",
    "nonGlobalStepDefinitions": false
  }

  