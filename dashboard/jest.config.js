module.exports = {
    "testEnvironment": "node",
    "setupFilesAfterEnv": ["<rootDir>/jest.setup.ts"],
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js",
      "jsx",
      "json",
      "node"
    ],
    "testPathIgnorePatterns": ["<rootDir>/.next/", "<rootDir>/node_modules/"],
    moduleNameMapper: {
      "\\.(scss|sass|css)$": "identity-obj-proxy",
    },
}