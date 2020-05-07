module.exports = {
  rules: {
    'prefer-destructuring': 'warn',
    'class-methods-use-this': 'off',
    'global-require': 'off',
    'func-names': 'off',
    'import/prefer-default-export': 'off',
    'no-console': 'off',
    'no-magic-numbers': [
      'off',
      {
        ignore: [0, 1080, 1920],
        ignoreArrayIndexes: true,
        enforceConst: true,
      },
    ],
  },
  env: {
    mocha: true,
  },
  extends: ['airbnb-base', 'prettier'],
};
