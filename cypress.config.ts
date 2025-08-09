import { defineConfig } from "cypress";

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
    },
});
