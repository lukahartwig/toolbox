module.exports = {
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  overrides: {
    files: ['*.config.js'],
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
      'global-require': 'off',
    },
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['*.config.js', '**/*.test.{js,jsx,ts,tsx}'] }],
    'prefer-destructuring': 'off',
    'react/destructuring-assignment': 'never',
    'react/jsx-filename-extension': ['warn', { extensions: ['jsx', 'tsx'] }],
    'react/prop-types': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
