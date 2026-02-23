import { generalConfig } from './eslint/general.eslint.js';
import { importConfig } from './eslint/import.eslint.js';
import { jsConfig } from './eslint/javascript.eslint.js';
import { nextConfig } from './eslint/next.eslint.js';
import { nodeConfig } from './eslint/node.eslint.js';
import { prettierConfig } from './eslint/prettier.eslint.js';
import { nextTsConfig } from './eslint/typescript.eslint.js';
import { defineConfig, gitIgnoreFile } from './eslint-utils.js';

export default defineConfig([
  gitIgnoreFile,
  ...jsConfig,
  ...nextConfig,
  ...nextTsConfig,
  ...nodeConfig,
  ...importConfig,
  ...generalConfig,
  ...prettierConfig,
]);
