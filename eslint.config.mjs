import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import tseslint from "typescript-eslint";

const eslintConfig = defineConfig([
  globalIgnores(["dist/**", "dist-pages/**", "artifacts/**", "release/**"]),
  js.configs.recommended,
  ...tseslint.configs.recommended,
  reactHooks.configs.flat.recommended,
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
    rules: {
      // Chinese UI copy uses ideographic spaces (U+3000) as deliberate typography.
      "no-irregular-whitespace": ["error", { skipJSXText: true, skipStrings: true, skipTemplates: true }],
    },
  },
]);

export default eslintConfig;
