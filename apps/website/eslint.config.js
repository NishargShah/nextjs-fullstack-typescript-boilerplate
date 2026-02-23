import config from '@repo/eslint-config/next';
import { defineConfig } from '@repo/eslint-config/utils';
import tanstackQueryPlugin from '@tanstack/eslint-plugin-query';

export default defineConfig([
  ...config,
  // Tanstack Query config
  ...tanstackQueryPlugin.configs['flat/recommended'],
]);
