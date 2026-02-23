import { envs } from '@/config';

// eslint-disable-next-line unicorn/prefer-global-this
export const isServer = typeof window === 'undefined';

export const isProduction = envs.NODE_ENV === 'production';

export const isLive = envs.ENV_TYPE === 'production';

export const sleep = async (ms: number): Promise<void> =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
