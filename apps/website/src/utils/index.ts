import config from '@/config';

// eslint-disable-next-line unicorn/prefer-global-this
export const isServer = typeof window === 'undefined';

export const isProduction = config.NODE_ENV === 'production';

export const isLive = config.ENV_TYPE === 'production';

export const sleep = async (ms: number): Promise<void> =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
