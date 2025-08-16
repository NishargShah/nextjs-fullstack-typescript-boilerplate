/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from '@/api/axios';
import finalEndpoints from '@/api/endpoints';

import type { AxiosOutput, AxiosPaginatedOutput } from '@/types/axios.type';

const nonPaginatedApis = {
  login: async (data) => axios({ ...(finalEndpoints.auth as any).login, ...data }),

  getProfile: async (data) => axios({ ...(finalEndpoints.user as any).profile.me, ...data }),

  logout: async (data) => axios({ ...(finalEndpoints.user as any).profile.logout, ...data }),

  getAllUsers: async (data) => axios({ ...finalEndpoints.users, ...data }),
} satisfies Record<string, AxiosOutput>;

const paginatedApis = {} satisfies Record<string, AxiosPaginatedOutput>;

const api = { ...nonPaginatedApis, paginatedApis } as const;

export default api;
