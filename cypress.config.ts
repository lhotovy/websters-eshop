import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "s6mjto",
  e2e: {
    baseUrl: "http://localhost:3000",
    defaultCommandTimeout: 15000,
    viewportHeight: 800,
    viewportWidth: 1300,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
