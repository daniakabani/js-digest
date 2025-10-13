module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "simple-import-sort", "import"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
  ],
  env: { es2022: true, node: true },
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  rules: {
    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",
    "import/order": "off",
    "no-console": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
  },
  settings: {
    "import/resolver": {
      typescript: {}
    }
  }
};
