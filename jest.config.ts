export default {
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.tsx?$": ["ts-jest", { isolatedModules: true }]
    },
    moduleNameMapper: {
        "\\.(gif|ttf|eot|svg|png|jpg)$": "<rootDir>/test/__mocks__/fileMock.js",
        "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    },
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
}