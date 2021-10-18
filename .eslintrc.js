module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    'airbnb-typescript/base',
    '@vue/typescript/recommended',
    'plugin:prettier/recommended',
    'plugin:vuejs-accessibility',
  ],
  parserOptions: {
    project: 'tsconfig.eslint.json',
  },
  rules: {
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'state', // for vuex state
          'acc', // for reduce accumulators
          'e', // for e.returnvalue
        ],
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {},
      typescript: {},
    },
  },
};
