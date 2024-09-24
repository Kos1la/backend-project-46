import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.node, // Это добавляет все глобальные переменные для Node.js
        ...globals.jest, // Это добавляет глобальные переменные для Jest
      },
    },
  },
  pluginJs.configs.recommended,
];
