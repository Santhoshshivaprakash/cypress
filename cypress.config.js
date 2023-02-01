const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    setupNodeEvents(on, config) {
      config.chromeWebSecurity = false
      // implement node event listeners here
    },
  },
});
