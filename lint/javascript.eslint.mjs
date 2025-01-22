import js from '@eslint/js';
import ESLintPluginPromise from 'eslint-plugin-promise';
import ESLintPluginUnicorn from 'eslint-plugin-unicorn';

const customJSESLintConfig = [
  // ESLINT RECOMMENDED RULES
  js.configs.recommended,
  // PROMISE CONFIG
  ESLintPluginPromise.configs['flat/recommended'],
  // UNICORN CONFIG
  ESLintPluginUnicorn.configs['flat/recommended'],
  // UNICORN CONFIG RULES
  {
    rules: {
      'unicorn/filename-case': [
        'error',
        {
          cases: {
            kebabCase: true,
            camelCase: true,
            pascalCase: true,
          },
          multipleFileExtensions: false,
        },
      ],
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/no-null': 'off',
      'unicorn/no-array-reduce': 'off',
    },
  },
];

export default customJSESLintConfig;
