import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  { files: ["**/*.{js,jsx}"] },
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: { document: true, window: true }
    },
    plugins: { react: pluginReact },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "react/jsx-uses-vars": "error",
      "no-unused-vars": ["warn", { varsIgnorePattern: "React" }]
    },
    settings: {
      react: { version: "detect" }
    }
  },
  pluginJs.configs.recommended
]
