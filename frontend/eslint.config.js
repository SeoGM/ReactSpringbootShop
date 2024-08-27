import js from '@eslint/js';
import react from 'eslint-plugin-react';
import typescript from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';
import prettierConfig from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: typescript,
    },
    plugins: {
      '@typescript-eslint': typescript,
      react,
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],
      // 추가 규칙 필요 시 여기에 설정
    },
  },
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      parser: js,
    },
    rules: {
      // JavaScript 관련 규칙 추가
    },
  },
  prettierConfig, // Prettier와의 통합 설정
];
