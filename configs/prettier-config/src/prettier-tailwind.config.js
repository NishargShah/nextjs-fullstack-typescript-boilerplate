import config from './prettier-base.config.js';

export default {
  ...config,
  plugins: [...config.plugins, 'prettier-plugin-tailwindcss'],
  tailwindFunctions: ['clsx', 'cn', 'cva'],
};
