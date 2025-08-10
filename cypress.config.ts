import { defineConfig } from "cypress";
import PluginEvents = Cypress.PluginEvents;
import PluginConfigOptions = Cypress.PluginConfigOptions;

export default defineConfig({
    e2e: {
        specPattern: "ui-tests/tests/**/*.cy.ts",
        supportFile: "ui-tests/support/e2e.ts",
        baseUrl: "https://www.amazon.com/",
        viewportWidth: 1920,
        viewportHeight: 1080,
        retries: {
            runMode: 2,
            openMode: 0,
        },
        defaultCommandTimeout: 8000,

        setupNodeEvents(on: PluginEvents, config: PluginConfigOptions) {
            config.env.ELECTRON_EXTRA_LAUNCH_ARGS = '--disable-gpu';
            return config;
        },
    },
});
