/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
    clearMocks: true,
    collectCoverageFrom: ["<rootDir>/src/**/*.js"],
    coverageProvider: "v8",
    roots: ["<rootDir>/tests"],
};

module.exports = config;
