import { configs, plugins, rules } from 'eslint-config-airbnb-extended';

import { defineConfig } from '../eslint-utils.js';
import { reactRules } from './react.eslint.js';

export const nextConfig = defineConfig([
  // React plugin
  plugins.react,
  // React hooks plugin
  plugins.reactHooks,
  // React JSX A11y plugin
  plugins.reactA11y,
  // Next.js plugin
  plugins.next,
  // Airbnb Next.js recommended config
  ...configs.next.recommended,
  // Strict React rules
  rules.react.strict,
  // React rules
  ...reactRules,
]);
