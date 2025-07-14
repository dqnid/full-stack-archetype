import type { Config } from "jest";
import nextJest from "next/jest.js";

const config: Config = {
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageProvider: "v8",
    modulePaths: ["<rootDir>"],
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    testEnvironment: "jsdom",
    testPathIgnorePatterns: ["<rootDir>/node_modules/"],
    modulePathIgnorePatterns: ["<rootDir>/.blueprints"],
};

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: "./",
});

export default createJestConfig(config);
