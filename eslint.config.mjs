import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "prettier"],
    rules: {
      "no-unused-vars": "off",
      // "no-use-before-define": "off",
      // "no-undef": "off",
    },
  }),
  {
    ignores: ["**/node_modules/", ".git/", ".vscode/", ".next/", "public/"],
  },
];

export default eslintConfig;
