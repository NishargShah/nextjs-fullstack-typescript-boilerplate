import customImportESLintConfig from './lint/import.eslint.mjs';
import customJSESLintConfig from './lint/javascript.eslint.mjs';
import customReactESLintConfig from './lint/react.eslint.mjs';
import customTSESLintConfig from './lint/typescript.eslint.mjs';
import { gitIgnoreFile } from './lint/utils.mjs';
import customGeneralESLintConfig from './lint/general.eslint.mjs';
import customPrettierESLintConfig from './lint/prettier.eslint.mjs';

export default [
  gitIgnoreFile,
  ...customJSESLintConfig,
  ...customReactESLintConfig,
  ...customTSESLintConfig,
  ...customImportESLintConfig,
  ...customPrettierESLintConfig,
  ...customGeneralESLintConfig,
];
