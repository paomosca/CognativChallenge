module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["react-native", "prettier"],
  extends: ["plugin:@typescript-eslint/recommended", "plugin:react-native/all"],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
  },
  rules: {
    "no-multi-spaces": ["error"],
    "no-multiple-empty-lines": ["error", { max: 1 }],
    "object-curly-spacing": [
      "error",
      "always",
      { arraysInObjects: false, objectsInObjects: false },
    ],
    "no-use-before-define": ["off"],
    "no-console": ["error", { allow: ["warn", "error"]}],
    "@typescript-eslint/no-use-before-define": ["off"],
      "@typescript-eslint/naming-convention": [
        "error",
        {
          "selector": "interface",
          "format": ["PascalCase"],
          "custom": {
            "regex": "^I[A-Z]",
            "match": false,
          },
        },
      ],
      "@typescript-eslint/naming-convention": [
        "error",
        {
          "selector": ["variable", "function"],
          "format": ["camelCase"],
          "leadingUnderscore": "allow",
        },
      ],
    "@typescript-eslint/no-var-requires": ["warn"],
    "@typescript-eslint/no-empty-function": ["warn"],
    "@typescript-eslint/no-empty-interface": ["warn"],
    "react-native/no-inline-styles": ["error"],
    "react-native/no-raw-text": ["warn"],
    "react-native/split-platform-components": ["warn"],
    "react-native/sort-styles": ["warn", "asc"],
    "react-native/no-color-literals": ["warn"],
    "react-native/no-unused-styles": ["warn"],
    "comma-dangle": ["error", "always-multiline"],
    quotes: ["error", "double", { allowTemplateLiterals: true }],
  },
  env: {
    es6: true,
    jest: true,
  },
  ignorePatterns: [
    "**/android/**",
    "**/ios/**",
    "**/.jest/**",
    "**/node_modules/**",
    "**/dist/**",
  ],
};
