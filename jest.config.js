const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    ...tsJestTransformCfg,
  },
  testPathIgnorePatterns: [ // This way Jest only runs the actual test files
    "/dist/", // ignore compiled JS output
    "\\.d\\.ts$",] // Ignore TypeScript declaration files
};