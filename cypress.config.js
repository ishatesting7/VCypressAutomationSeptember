const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity:false,
  watchForFileChanges:false,
  viewportHeight:800,
  viewportWidth:1000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
