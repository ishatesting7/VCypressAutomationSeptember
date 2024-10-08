const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  chromeWebSecurity:false,
  watchForFileChanges:false,
  viewportHeight:800,
  viewportWidth:1000,
  screenshotOnRunFailure:true,
  projectId:"63zzmi",

  env:{
    baseUrl:'https://demo3x.opencartreports.com/admin/',
    username:'demo',
    password:'demo'
  },
  e2e: {
    setupNodeEvents(on, config) {

      on("file:preprocessor",
      
      createBundler({
        plugins:[createEsbuildPlugin.default(config)]
      }));
      preprocessor.addCucumberPreprocessorPlugin(on, config);
      return config;
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      require('@cypress/grep/src/plugin')(config);
      return config;
    },
   

  },
});
