export default {
  preset: "ts-jest/presets/default-esm",
  transform: {
    "^.+\\.(ts|tsx|js|jsx)?$": [
      "ts-jest",
      { tsconfig: "tsconfig.test.json",  useESM: true},
    ],
  },
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png|jpg)$": "<rootDir>/test/__mocks__/fileMock.js",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  transformIgnorePatterns: ["node_modules/(?!firebase/)", "node_modules/(?!@firebase/)"],
};
