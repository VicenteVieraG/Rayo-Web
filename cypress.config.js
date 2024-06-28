import { defineConfig } from "cypress";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";

const setupNodeEvents = async (on, config) => {
    await addCucumberPreprocessorPlugin(on, config);

    on(
        "file:preprocessor",
        createBundler({
            plugins: [createEsbuildPlugin(config)]
        })
    );

    return config;
};

export default defineConfig({
    e2e: {
        supportFile: false,
        baseUrl: "http://localhost:4321",
        specPattern: "**/*.feature",
        setupNodeEvents
    },
    video: true,
    trashAssetsBeforeRuns: true
});
