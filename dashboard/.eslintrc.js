module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        "next",
        "next/core-web-vitals",
        "plugin:@typescript-eslint/recommended",
        "prettier"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
    },
    plugins: ["@typescript-eslint"],
    rules: {
        "require-jsdoc": 0,
        "react/react-in-jsx-scope": "off",
        "new-cap": ["warn", { capIsNew: false }],
        "prefer-const": "off",
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/no-explicit-any": "error"
    },
    settings: {
        react: {
            version: "latest",
        },
    },
  };