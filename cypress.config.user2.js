import {defineConfig} from "cypress";

export default defineConfig({
    defaultBrowser: 'chrome',
    retries: {
        runMode: 2,
        openMode: 0
    },
    reporter: 'mochawesome',
    reporterOptions: {
        reportDir: 'cypress/results',
        overwrite: false,
        html: false,
        json: true,
    },
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 7000,
    e2e: {
        watchForFileChanges: false,
        baseUrl: 'https://qauto2.forstudy.space/',
        fixturesFolder: "cypress/fixtures",
        specPattern: 'cypress/e2e/**/*.{spec,test}.{js,jsx,ts,tsx}',
        experimentalRunAllSpecs: true,
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        env: {
            userEmail: "slia2@test.com",
            userPassword: "Password1"
        }
    },
});
