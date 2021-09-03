module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2020,
    parser: 'babel-eslint',
    extraFileExtensions: ['.vue'],
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },

  extends: [
    'plugin:vue/vue3-recommended'
  ],

  rules: {
    'vue/no-v-html': 'off',
    'vue/valid-v-slot': 'off',
    'vue/valid-template-root': 'off',
    'vue/attributes-order': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/component-definition-name-casing': 'off',
    'vue/require-default-prop': 'off',
    'vue/component-tags-order': 'off',
    'vue/no-use-v-if-with-v-for': 'off',
    'vue/one-component-per-file': 'off',
    'vue/no-unused-components': 'warn',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/order-in-components': 'off',
    'vue/html-self-closing': ["error", {
      "html": {
        "void": "never",
        "normal": "any",
        "component": "any"
      },
      "svg": "always",
      "math": "always"
    }],
    'vue/max-attributes-per-line': ['warn', {
      singleline: 4,
      multiline: {
        max: 1,
        allowFirstLine: true
      }
    }],
    'no-unused-expressions': 'off',
    'import/no-named-as-default-member': 'off',
    'unicorn/prefer-text-content': 'off',
    'import/order': 'off',
    'indent': 'off',
    'space-before-function-paren': 'off',
    'arrow-parens': 'off',
    'quotes': 'off',
    'no-console': 'off',
    'valid-jsdoc': 'off',
    'func-style': 'off',
  }
}
