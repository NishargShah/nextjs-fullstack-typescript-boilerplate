import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

import { AppError } from '@/api/appError';

import type {
  AxiosErrConfig,
  Endpoints,
  ShowToast,
  SuccessOutput,
  ThrowAxiosError,
} from '@/types/axios.type';

export class AxiosErr extends AxiosError {
  config?: AxiosErrConfig;
}

export const throwAxiosError: ThrowAxiosError = (error) => {
  const STATUS_CODE = 400;

  const message = error instanceof AxiosError ? error.response?.data.message : error;
  const statusCode =
    error instanceof AxiosError ? (error.response?.status ?? STATUS_CODE) : STATUS_CODE;

  throw new AppError(message, statusCode, {
    error,
    ...(error instanceof AxiosError ? { res: error.response?.data ?? null } : null),
  });
};

export const showToast: ShowToast = (res) => {
  const { config } = res;
  if (!config) return;

  const { manageToast } = config;

  const isError = res instanceof AxiosError;

  const responseData = (() => {
    if (isError) return res.response?.data ?? null;
    return 'data' in res ? res.data : null;
  })() as SuccessOutput | null;

  const shouldShowToast =
    typeof manageToast === 'function' && responseData ? manageToast(responseData) : !!manageToast;

  if (!shouldShowToast) return;

  const toastMessage = responseData?.message ?? 'Something went wrong';
  const call = isError ? 'error' : 'success';
  toast[call](toastMessage);
};

export function buildFullUrls(obj: Endpoints, parentPrefix = ''): Endpoints {
  const result: Endpoints = {};

  for (const key in obj) {
    if (Object.hasOwn(obj, key)) {
      const value = obj[key];

      if (typeof value === 'object' && !Array.isArray(value)) {
        const currentPrefix =
          parentPrefix + ('prefix' in value && value.prefix ? `/${value.prefix}` : '');

        result[key] =
          'method' in value && 'url' in value
            ? {
                ...value,
                url: `${currentPrefix}/${value.url}`,
              }
            : buildFullUrls(value as Endpoints, currentPrefix);
      } else {
        result[key] = value;
      }
    }
  }

  return result;
}
