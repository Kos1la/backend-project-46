module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 2021, // изменено значение
    sourceType: 'module',
  },
  rules: {
    'implicit-arrow-linebreak': 'off', // отключает правило для переносов в стрелочных функциях
    'object-curly-newline': ['error', { multiline: true, consistent: true }], // настраивает переносы в объектах
  },
};
