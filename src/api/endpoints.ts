import { buildFullUrls } from '@/api/utils';

import type { Endpoints, SuccessOutput } from '@/types/axios.type';

const endpoints = {
  // Auth endpoints
  auth: {
    prefix: 'auth',
    login: {
      method: 'POST',
      url: 'login',
      manageToast: (res: SuccessOutput) => !!res.message,
    },
  },

  // User endpoints
  user: {
    prefix: 'user',
    profile: {
      prefix: 'profile',
      me: {
        method: 'GET',
        url: 'me',
        manageToast: (res: SuccessOutput) => !!res.message,
      },
      logout: {
        method: 'POST',
        url: 'logout',
        manageToast: (res: SuccessOutput) => !!res.message,
      },
    },
  },

  // Users endpoints
  users: {
    method: 'GET',
    url: 'users',
    manageToast: (res: SuccessOutput) => !!res.message,
  },
} satisfies Endpoints;

const finalEndpoints = buildFullUrls(endpoints);

export default finalEndpoints;
