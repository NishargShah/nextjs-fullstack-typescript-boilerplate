import { generalConfig } from './eslint/general.eslint.js';
import { importConfig } from './eslint/import.eslint.js';
import { jsConfig } from './eslint/javascript.eslint.js';
import { nodeConfig } from './eslint/node.eslint.js';
import { prettierConfig } from './eslint/prettier.eslint.js';
import { reactConfig } from './eslint/react.eslint.js';
import { reactTsConfig } from './eslint/typescript.eslint.js';
import { defineConfig, gitIgnoreFile } from './eslint-utils.js';

export default defineConfig([
  gitIgnoreFile,
  ...jsConfig,
  ...reactConfig,
  ...reactTsConfig,
  ...nodeConfig,
  ...importConfig,
  ...generalConfig,
  ...prettierConfig,
]);
