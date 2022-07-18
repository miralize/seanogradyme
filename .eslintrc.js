module.exports = {
  root: true,
  extends: [
    'airbnb-typescript/base',
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    project: 'tsconfig.eslint.json',
  },
  rules: {
    // 'import/extensions': [
    //   'error',
    //   'always',
    //   {
    //     js: 'never',
    //     mjs: 'never',
    //     jsx: 'never',
    //     ts: 'never',
    //     tsx: 'never',
    //   },
    // ],
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
    // 'import/resolver': {
    //   typescript: {},
    // },
  },
};
