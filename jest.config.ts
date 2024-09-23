import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect",
    "jest-extended",
    "<rootDir>/src/jest.setup.ts",
  ],
  globals: {
    Uint8Array: Uint8Array,
  },
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/mocks/fileMock.ts",
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  transformIgnorePatterns: ["/node_modules/(?!(axios)/)"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};

export default config;
