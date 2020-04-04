module.exports = {
  env: {
    browser: true,
    es6: true,
    jest/globals: true
  },
  extends: [
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', 'jsx-a11y', 'import', '@typescript-eslint', 'prettier', 'jest'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prefer-stateless-function': [2, { ignorePureComponents: true }],
    'react/forbid-prop-types': [0, { forbid: [] }],
    'import/extensions': [1, 'never'],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: false,
        optionalDependencies: false,
        peerDependencies: false,
        bundledDependencies: false,
      },
    ],
    'semi': 'off',
    '@typescript-eslint/semi': ['error', 'never']
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', 'jsx', 'ts', 'txs'],
      },
    },
    'react': {
      version: 'detect',
    },
  },
}
