const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false,
    testIsolation: false
  },
  browser: {
    name: 'chrome',
    args: [
      '--disable-infobars', // Desativa infobars
      '--disable-notifications', // Desativa notificações
      '--disable-extensions', // Desativa extensões
      '--disable-popup-blocking', // Desativa bloqueio de popups
      '--user-data-dir=/tmp/chrome-test-profile', // Diretório de perfil temporário
    ],
  },
});
