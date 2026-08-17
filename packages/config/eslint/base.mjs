// Shared ESLint flat-config rules for any TypeScript package in the
// monorepo — the frontend today, a future backend app tomorrow. Framework
// specific rules (e.g. Next.js's `eslint-config-next`) are layered on top
// by each consuming app, since those plugins resolve relative to the app
// that actually has the framework installed.
import js from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import("eslint").Linter.Config[]} */
export const baseConfig = [
  {
    ignores: [
      "**/dist/**",
      "**/.next/**",
      "**/.turbo/**",
      "**/node_modules/**",
      "**/build/**",
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  },
];

export default baseConfig;
