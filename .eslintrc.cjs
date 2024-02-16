module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'google',
    'plugin:react/recommended',
  ],
  'overrides': [
    {
      'env': {
        'node': true,
      },
      'files': [
        '.eslintrc.{js,cjs}',
      ],
      'parserOptions': {
        'sourceType': 'script',
      },
    },
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'react/react-in-jsx-scope': [0],
    'require-jsdoc': [0],
    'react/jsx-no-target-blank': [0],
    'react/prop-types': [0],
    'object-curly-spacing': [0],
    'linebreak-style': [0],
    'indent': ['error', 2],
    'max-len': ['error', 120],
  },
};
