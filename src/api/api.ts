import axios from '@/api/axios';
import endpoints from '@/api/endpoints';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { AxiosOutput as Axios, AxiosDocsOutput as AxiosDocs } from '@/types/axios.type';

export const login: Axios = async (data) => axios({ ...endpoints.login, ...data });

export const getProfile: Axios = async (data) => axios({ ...endpoints.getProfile, ...data });

export const logout: Axios = async (data) => axios({ ...endpoints.logout, ...data });

export const getAllUsers: Axios = async (data) => axios({ ...endpoints.getAllUsers, ...data });
