/**
 * @type {import('lint-staged').Configuration}
 */
export default {
  '*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}': 'pnpm lint',
};
