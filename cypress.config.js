const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',
  chromeWebSecurity:false,
  watchForFileChanges:false,
  viewportHeight:800,
  viewportWidth:1000,
  screenshotOnRunFailure:true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
