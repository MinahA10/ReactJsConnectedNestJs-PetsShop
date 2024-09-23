import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { ecmaVersion: "latest", globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintPluginPrettierRecommended,
  {
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "react/jsx-no-undef": "error",
      "react/display-name": "error",
      "react/no-unescaped-entities": "error",
      "react/prop-types": "error",
      "prettier/prettier": "error",
    },
  },
];
