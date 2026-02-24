import axiosInstance from 'axios';
import { toast } from 'react-hot-toast';

import { showToast } from '@/api/utils';
import { envs } from '@/config';
import paths from '@/constants/paths';
import cookieStore from '@/lib/cookieStore';
import { isServer } from '@/utils';

import type { AxiosError } from 'axios';

import type { InternalAxiosRequestConfigWithExtraProps } from '@/api/@types/api.types';
import type { AxiosErr } from '@/api/utils';

const axios = axiosInstance.create({ baseURL: envs.NEXT_PUBLIC_API_PATH, withCredentials: true });

axios.interceptors.request.use(
  async (conf: InternalAxiosRequestConfigWithExtraProps) => {
    const myConfig = { ...conf };

    const lang = myConfig.headers['Accept-Language'];
    if (!isServer && !lang) myConfig.headers['Accept-Language'] = 'en';

    myConfig.url = Object.entries(conf.urlParams ?? {}).reduce((acc, [k, v]) => {
      let temp = acc;
      temp = temp.replace(`:${k}`, v.toString());

      return temp;
    }, myConfig.url ?? '');

    if (myConfig.data instanceof FormData) {
      myConfig.headers['Content-Type'] = 'multipart/form-data';
    }

    if (isServer && myConfig.ssr !== false) {
      myConfig.headers.Cookie = await cookieStore.getAllSerialized();
    }

    return myConfig;
  },
  async (error: AxiosError) => {
    if (!isServer) console.debug('Request Error', error);
    throw error;
  },
);

axios.interceptors.response.use(
  (res) => {
    if (!isServer) showToast(res);
    return res;
  },
  async (error: AxiosErr) => {
    if (!isServer) {
      if (error.code === 'ERR_NETWORK') {
        toast.error(error.message);
        throw error;
      }

      if (
        error.response &&
        [401, 403].includes(error.response.status) &&
        globalThis.location.pathname !== paths.APP.LOGOUT
      ) {
        globalThis.location.assign(paths.APP.LOGOUT);
      }

      showToast(error);
      console.debug('Response Error', error);
    }

    throw error;
  },
);

export default axios;
