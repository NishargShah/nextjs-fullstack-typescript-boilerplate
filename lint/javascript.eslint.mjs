import js from '@eslint/js';
import { configs, plugins } from 'eslint-config-airbnb-extended';
import promisePlugin from 'eslint-plugin-promise';
import unicornPlugin from 'eslint-plugin-unicorn';

const customJSESLintConfig = [
  // ESLINT RECOMMENDED RULES
  {
    name: 'js/config',
    ...js.configs.recommended,
  },
  // IMPORT X PLUGIN
  plugins.importX,
  // AIRBNB BASE CONFIG
  ...configs.base.recommended,
  // PROMISE CONFIG
  promisePlugin.configs['flat/recommended'],
  // UNICORN CONFIG
  unicornPlugin.configs.recommended,
  // UNICORN CONFIG RULES
  {
    name: 'x/unicorn/rules',
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
      'unicorn/consistent-function-scoping': 'off',
    },
  },
];

export default customJSESLintConfig;
