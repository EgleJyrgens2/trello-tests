const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  defaultCommandTimeout: 15_000,
  chromeWebSecurity: false,
  env: {
    apiKey: 'Paste your api key here',
    apiToken: 'Paste you token here',
    email: 'trelloworkshop2023@gmail.com',
    password: '!Trelloworkshop2023',
  }
});