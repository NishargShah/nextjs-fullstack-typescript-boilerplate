import { configs, plugins, rules } from 'eslint-config-airbnb-extended';

import { defineConfig } from '../eslint-utils.js';

export const reactRules = defineConfig([
  // JSX A11y config rules
  {
    name: 'x/jsx-a11y/rules',
    rules: {
      'jsx-a11y/label-has-associated-control': 'off',
    },
  },
]);

export const reactConfig = defineConfig([
  // React plugin
  plugins.react,
  // React hooks plugin
  plugins.reactHooks,
  // React JSX A11y plugin
  plugins.reactA11y,
  // Airbnb React recommended config
  ...configs.react.recommended,
  // Strict React rules
  rules.react.strict,
  // React rules
  ...reactRules,
]);
