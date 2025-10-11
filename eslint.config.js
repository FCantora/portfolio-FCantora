// Flat ESLint config for ESLint v9+
import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import astro from "eslint-plugin-astro";
import * as tseslint from "typescript-eslint";

export default [
  {
    ignores: [
      "**/.astro/**",
      "**/*.d.ts",
      "**/dist/**",
      "**/.vercel/**",
      "**/node_modules/**",
      ".eslintrc.*",
      ".prettierrc.*",
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,
  {
    files: ["public/sw.js"],
    languageOptions: {
      globals: {
        self: "readonly",
        caches: "readonly",
        URL: "readonly",
        fetch: "readonly",
      },
    },
    rules: {},
  },
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: astro.parser,
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: [".astro"],
      },
    },
    rules: {},
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      // loaded dynamically to work in ESM flat config
      "simple-import-sort": (await import("eslint-plugin-simple-import-sort")).default,
      "jsx-a11y": (await import("eslint-plugin-jsx-a11y")).default,
    },
    rules: {
      "simple-import-sort/imports": "warn",
      "simple-import-sort/exports": "warn",
    },
  },
  prettier,
];
