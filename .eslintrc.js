// This isn't a typescript file, but eslint is treating it like one
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'import',
  ],
  rules: {
    // allows tsx files to use jsx syntax
    'react/jsx-filename-extension': [1, {
      extensions: ['.jsx', '.tsx'],
      allow: 'as-needed',
    }],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    // standard no-use-before-define doesn't always work right; use the typescript one
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'warn',
    // allow prop spreading in JSX for now; reevaluate later
    'react/jsx-props-no-spreading': 'off',
    // current implementation of this rule is problematic. Check on it later when formatting
    // problems might be resolved
    'react/jsx-one-expression-per-line': 'off',
    // AirBnB default rules don't include .ts extension
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.stories.ts',
          '**/*.stories.tsx',
          '**/*.test.ts',
          '**/*.test.tsx',
          '**/rollup.config.js'
        ],
      },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
  },
  globals: {
    // prevents error with JSX being reported as non defined
    JSX: true,
  },
  settings: {
    'import/resolver': {
      'eslint-import-resolver-lerna': {
        packages: [path.resolve(__dirname, '../')],
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
