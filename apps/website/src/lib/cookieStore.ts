import { deleteCookie, getCookie, getCookies, hasCookie, setCookie } from 'cookies-next';

import { isServer } from '@/utils';

import type { Obj } from '@/types';
import type { CookieStoreType, DefaultSetOptions, GetOptions } from '@/types/cookieStore.type';

const cookies = async () => {
  const { cookies: serverCookies } = await import('next/headers');
  return serverCookies();
};

const getOptions: GetOptions = (options = {}) => {
  const defaultSetOptions: DefaultSetOptions = {
    secure: true,
    sameSite: 'lax',
    expires: new Date('9999-12-31'),
  };

  return { ...defaultSetOptions, ...options };
};

const cookieStore: CookieStoreType = {
  get(key) {
    const token = hasCookie(key) ? getCookie(key) : null;
    return (token as Awaited<typeof token>) ?? null;
  },
  async getAsync(key) {
    if (isServer) {
      const serverCookies = await cookies();

      const token = serverCookies.has(key) ? serverCookies.get(key) : null;
      return token ? token.value : null;
    }

    return this.get(key);
  },
  getAll() {
    return getCookies() as Obj<string>;
  },
  async getAllAsync() {
    if (isServer) {
      const serverCookies = await cookies();

      const allCookies = serverCookies.getAll();
      return allCookies.reduce<Obj<string>>((acc, val) => {
        const { name, value } = val;

        acc[name] = value;
        return acc;
      }, {});
    }

    return this.getAll();
  },
  async getAllSerialized() {
    if (isServer) {
      const serverCookies = await cookies();
      return serverCookies.toString();
    }

    return '';
  },
  set(key, value, options = {}) {
    setCookie(key, value, getOptions(options));
    return true;
  },
  async setAsync(key, value, options = {}) {
    if (isServer) {
      const serverCookies = await cookies();

      serverCookies.set(key, value, getOptions(options));
      return true;
    }

    return this.set(key, value);
  },
  delete(key) {
    const isExist = hasCookie(key);
    if (!isExist) return false;

    deleteCookie(key);
    return true;
  },
  async deleteAsync(key) {
    if (isServer) {
      const serverCookies = await cookies();
      const isExist = serverCookies.has(key);
      if (!isExist) return false;

      serverCookies.delete(key);
      return true;
    }

    return this.delete(key);
  },
};

export default cookieStore;
