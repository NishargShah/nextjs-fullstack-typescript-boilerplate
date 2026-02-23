import axios from '@/api/axios';
import endpoints from '@/api/endpoints';

import type { AxiosOutput, AxiosPaginatedOutput } from '@/types/axios.type';

const nonPaginatedApis = {
  login: async (data) => axios({ ...endpoints.login, ...data }),

  getProfile: async (data) => axios({ ...endpoints.getProfile, ...data }),

  logout: async (data) => axios({ ...endpoints.logout, ...data }),

  getAllUsers: async (data) => axios({ ...endpoints.getAllUsers, ...data }),
} satisfies Record<string, AxiosOutput>;

const paginatedApis = {} satisfies Record<string, AxiosPaginatedOutput>;

const api = { ...nonPaginatedApis, paginatedApis } as const;

export default api;
