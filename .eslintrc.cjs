module.exports = {
  root: true,
  env: {
    es2023: true,
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2023,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "jsx-a11y", "simple-import-sort"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:astro/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {},
    },
    {
      files: ["**/*.{ts,tsx,js,jsx}"],
      rules: {
        "simple-import-sort/imports": "warn",
        "simple-import-sort/exports": "warn",
      },
    },
  ],
};
