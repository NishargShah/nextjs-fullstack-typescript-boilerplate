import customGeneralESLintConfig from './lint/general.eslint.mjs';
import customImportESLintConfig from './lint/import.eslint.mjs';
import customJSESLintConfig from './lint/javascript.eslint.mjs';
import customPrettierESLintConfig from './lint/prettier.eslint.mjs';
import customReactESLintConfig from './lint/react.eslint.mjs';
import customTSESLintConfig from './lint/typescript.eslint.mjs';
import { gitIgnoreFile } from './lint/utils.eslint.mjs';

export default [
  gitIgnoreFile,
  ...customJSESLintConfig,
  ...customReactESLintConfig,
  ...customTSESLintConfig,
  ...customImportESLintConfig,
  ...customGeneralESLintConfig,
  ...customPrettierESLintConfig,
];
