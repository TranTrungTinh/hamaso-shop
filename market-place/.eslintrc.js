module.exports = {
  ignorePatterns: [
    "**/public/**",
    "**/.cache/**",
    "**/static/**",
    "**/content/**",
  ],
  extends: [
    "react-app",
  ],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx"],
      },
    },
  },
  rules: {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "jest/no-hooks": "off",
  },
  overrides: [
    {
      files: ["**/*.js", "**/*.jsx"],
      env: {
        browser: true,
        es6: true
      },
      extends: ["prettier"],
      rules: {},
      plugins: [],
    }
  ],
};
