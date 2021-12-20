module.exports = {
  extends: ['airbnb', 'airbnb/hooks', 'prettier'],
  env: {
    browser: true,
  },
  rules: {
    'no-param-reassign': [
      'error',
      { props: true, ignorePropertyModificationsFor: ['state'] },
    ],
  },
};
