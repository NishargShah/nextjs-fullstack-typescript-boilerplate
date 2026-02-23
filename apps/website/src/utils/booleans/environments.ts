import { envs } from '@/config';
import { environments } from '@/constants/objects';

const { NODE_ENV, ENV_NAME } = envs;

// Check environment is development or not
export const isDevelopment = NODE_ENV === environments.DEVELOPMENT;

// Check environment name is production or not
export const isProduction = ENV_NAME === environments.PRODUCTION;
