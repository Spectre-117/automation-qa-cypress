import {defineConfig} from "cypress";

export default defineConfig({
    defaultBrowser: 'chrome',
    retries: {
        runMode: 2,
        openMode: 0
    },
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 7000,
    e2e: {
        watchForFileChanges: false,
        baseUrl: 'https://qauto.forstudy.space',
        fixturesFolder: "cypress/fixtures",
        specPattern: 'cypress/e2e/**/*.{spec,test}.{js,jsx,ts,tsx}',
        experimentalRunAllSpecs: true,
        screenshotsFolder: "cypress/screenshots",
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});
