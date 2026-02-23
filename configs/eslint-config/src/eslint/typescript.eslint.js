import { configs, plugins, rules } from 'eslint-config-airbnb-extended';

import { defineConfig } from '../eslint-utils.js';

export const tsConfig = defineConfig([
  // TypeScript ESLint plugin
  plugins.typescriptEslint,
  // Airbnb base TypeScript config
  ...configs.base.typescript,
  // Strict TypeScript rules
  rules.typescript.typescriptEslintStrict,
  // Disable Return Type for Features Hook
  {
    name: 'x/typescript-eslint/features-hook-only',
    files: ['src/features/**/use*.ts'],
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  },
]);
