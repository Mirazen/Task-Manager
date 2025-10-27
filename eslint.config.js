// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import reactPlugin from "eslint-plugin-react";

export default [
  js.configs.recommended,

  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2022,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // ← обязательно!
        },
      },
    },
    plugins: {
      react: reactPlugin,
    },
    rules: {
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",

      // 🔑 Это правило говорит: "JSX-теги используют переменные"
      "react/jsx-uses-vars": "error",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];