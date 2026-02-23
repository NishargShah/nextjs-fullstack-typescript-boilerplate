import type { ResponseCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import type { ValueOf } from 'type-fest';

import type constants from '@/constants';
import type { Obj } from '@/types/index';

export type DefaultSetOptions = Partial<ResponseCookie> & {
  expires?: Exclude<ResponseCookie['expires'], number>;
};

export type GetOptions = (options: DefaultSetOptions) => DefaultSetOptions;

type CookieKey = ValueOf<typeof constants.COOKIES>;

export type GetCookie<P extends boolean = false, T = string | null> = (
  key: CookieKey,
) => P extends true ? Promise<T> : T;

export type GetAllCookies<P extends boolean = false, T = Obj<string>> = () => P extends true
  ? Promise<T>
  : T;

export type GetAllSerialized = () => Promise<string>;

export type SetCookie<P extends boolean = false, T = true> = (
  key: CookieKey,
  value: string,
  options?: DefaultSetOptions,
) => P extends true ? Promise<T> : T;

export type DeleteCookie<P extends boolean = false, T = boolean> = (
  key: CookieKey,
) => P extends true ? Promise<T> : T;

export interface CookieStoreType {
  get: GetCookie;
  getAsync: GetCookie<true>;
  getAll: GetAllCookies;
  getAllAsync: GetAllCookies<true>;
  getAllSerialized: GetAllSerialized;
  set: SetCookie;
  setAsync: SetCookie<true>;
  delete: DeleteCookie;
  deleteAsync: DeleteCookie<true>;
}
