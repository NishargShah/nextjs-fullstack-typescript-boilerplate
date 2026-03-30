import type { Environment } from '@/constants/types/objects.types';

const envs = {
  NODE_ENV: process.env.NODE_ENV as Environment,
  ENV_NAME: process.env.NODE_ENV as Environment,
  NEXT_PUBLIC_API_PATH: process.env.NEXT_PUBLIC_API_PATH as string,
} as const;

export default envs;
