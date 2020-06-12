const OFF = 0
const WARN = 1
const ERROR = 2

module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-typescript',
    "plugin:jsx-a11y/recommended",
    "plugin:testing-library/recommended"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // project: ['./tsconfig.json', 'babel.config.js', 'jest.config.js'],
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
  rules: {
    'react/jsx-props-no-spreading': OFF,
    'react/require-default-props': OFF,
    'react/prop-types': OFF,
    'import/prefer-default-export': OFF,
    semi: ['error', 'never'],
    "@typescript-eslint/semi": ['error', 'never'],
    'space-infix-ops': OFF,
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
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.jsx', '.tsx'] },
    ],
  },
}
