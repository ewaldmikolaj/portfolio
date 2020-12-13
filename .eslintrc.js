/* eslint-disable */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    eqeqeq: 'off',
    semi: 'off',
    'prefer-const': 'off',
    'brace-style': 0,
    'vue/no-v-html': 0
  }
}