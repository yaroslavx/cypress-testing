const { GoogleSocialLogin } = require('cypress-social-logins').plugins;
const { defineConfig } = require('cypress');
require('dotenv').config();

module.exports = {
  ...(on, config) => {
    on('task', {
      GoogleSocialLogin: GoogleSocialLogin,
    });
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  pageLoadTimeout: 200000,
  chromeWebSecurity: false,
};
