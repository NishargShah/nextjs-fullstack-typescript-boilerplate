import type { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

type UrlParams = Record<string, number | string>;

interface AxiosExtraProps {
  urlParams?: UrlParams;
  serverToken?: string | null;
}

export type AxiosRequestConfigWithExtraProps = AxiosRequestConfig & AxiosExtraProps;

export type Endpoints = Record<string, AxiosRequestConfigWithExtraProps>;

export type InternalAxiosRequestConfigWithExtraProps = InternalAxiosRequestConfig & AxiosExtraProps;

export interface SuccessOutput<T = unknown> {
  status: number;
  message: string;
  results: T extends unknown[] ? number : number | undefined;
  data?: T;
}

interface DocsOutput<T = unknown[]> {
  docs: T;
  limit: number;
  page: number;
  totalDocs: number;
  totalPages: number;
}

export type SuccessDocsOutput<T> = SuccessOutput<DocsOutput<T>>;

export interface ErrorResponse {
  status: number;
  message: string;
  messages?: string[];
}

export type AxiosOutput<T = unknown, E = unknown> = <M = T, O extends boolean = false>(
  data: AxiosRequestConfigWithExtraProps
) => Promise<AxiosResponse<O extends false ? SuccessOutput<M> & E : M>>;

export type AxiosDocsOutput<T = unknown[], E = unknown> = <M = T, O extends boolean = false>(
  data: AxiosRequestConfigWithExtraProps
) => Promise<AxiosResponse<O extends false ? SuccessDocsOutput<M> & E : M>>;
