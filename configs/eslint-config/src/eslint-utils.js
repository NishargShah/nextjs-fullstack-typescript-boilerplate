import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { includeIgnoreFile } from '@eslint/compat';
import { helpers } from 'eslint-config-airbnb-extended';

export const { getDevDepsList } = helpers;

const dirname = path.dirname(fileURLToPath(import.meta.url));

export const rootPath = path.resolve(dirname, '..', '..', '..');

export const gitIgnoreFile = includeIgnoreFile(path.resolve(rootPath, '.gitignore'));

export { defineConfig, globalIgnores } from 'eslint/config';

export const getNoExtraneousDependenciesRule = (whitelist = []) => [
  'error',
  {
    devDependencies: getDevDepsList('typescript'),
    optionalDependencies: false,
    whitelist: [
      'eslint',
      '@repo/eslint-config',
      '@repo/lint-staged-config',
      '@repo/prettier-config',
      ...whitelist,
    ],
  },
];
