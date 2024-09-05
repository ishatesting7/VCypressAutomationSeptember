
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











