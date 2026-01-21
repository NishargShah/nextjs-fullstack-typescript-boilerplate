import type { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

import type { AxiosErr } from '@/api/utils';

export interface AxiosSSR {
  ssr?: boolean;
}

type UrlParams = Record<string, number | string>;

interface AxiosExtraProps extends AxiosSSR {
  urlParams?: UrlParams;
  noAuth?: boolean;
}

interface ManageToast {
  manageToast?: ((res: SuccessOutput) => boolean) | boolean;
}

export type AxiosRequestConfigWithExtraProps = AxiosRequestConfig & AxiosExtraProps;

type AxiosRequestInput = Pick<AxiosRequestConfigWithExtraProps, 'method' | 'url'> & ManageToast;

interface NestedEndpoint {
  prefix?: string;
  [key: string]: NestedEndpoint | AxiosRequestInput | string | undefined;
}

export type Endpoints = Record<string, AxiosRequestInput | NestedEndpoint>;

export type InternalAxiosRequestConfigWithExtraProps = InternalAxiosRequestConfig & AxiosExtraProps;

export type AxiosRes<T = unknown> = Omit<AxiosResponse<T>, 'config'> & {
  config: InternalAxiosRequestConfig & ManageToast;
};

export type AxiosErrConfig = InternalAxiosRequestConfig & ManageToast;

export interface SuccessOutput<T = unknown> {
  status: number;
  message: string;
  results: T extends unknown[] ? number : number | undefined;
  data: T;
}

export interface PaginatedInputParamsDefaults {
  page?: number;
  limit?: number;
}

export interface PaginatedInputDataDefaults {
  search?: string;
  fields?: string;
  sort?: number;
  sortBy?: string;
  dateField?: string;
  startDate?: string;
  endDate?: string;
  pagination?: boolean;
}

export type PaginatedInputDefaults = PaginatedInputParamsDefaults & PaginatedInputDataDefaults;

export interface PaginatedOutput<T = unknown[]> {
  docs: T[];
  limit: number;
  page: number;
  totalDocs: number;
  totalPages: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number;
  nextPage: number;
}

export type SuccessPaginatedOutput<T> = SuccessOutput<PaginatedOutput<T>>;

export interface ErrorResponse {
  status: number;
  message: string;
  messages?: string[];
}

export type AxiosOutput<T = unknown, E = unknown> = <M = T, O extends boolean = false>(
  data: AxiosRequestConfigWithExtraProps,
) => Promise<AxiosRes<O extends false ? SuccessOutput<M> & E : M>>;

export type AxiosPaginatedOutput<T = unknown[], E = unknown> = <M = T, O extends boolean = false>(
  data: AxiosRequestConfigWithExtraProps,
) => Promise<AxiosRes<O extends false ? SuccessPaginatedOutput<M> & E : M>>;

export interface AxiosSignal {
  signal?: AbortSignal;
}

export type ThrowAxiosError = (error: unknown) => void;

export type ShowToast = (res: AxiosRes | AxiosErr) => void;
