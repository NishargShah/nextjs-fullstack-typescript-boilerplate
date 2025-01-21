import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

import { AppError } from '@/utils/appError';

import type { ShowToast, ThrowAxiosError } from '@/types/axios.type';

export const throwAxiosError: ThrowAxiosError = error => {
  const STATUS_CODE = 400;

  const message = error instanceof AxiosError ? error.response?.data.message : error;
  const statusCode =
    error instanceof AxiosError ? (error.response?.status ?? STATUS_CODE) : STATUS_CODE;

  throw new AppError(message, statusCode, {
    error,
    ...(error instanceof AxiosError ? { res: error.response?.data ?? null } : null),
  });
};

export const showToast: ShowToast = res => {
  const { config } = res;
  const { manageToast } = config;

  const isError = res instanceof AxiosError;

  const responseData = (() => {
    if (isError) return res.response?.data;

    return 'data' in res ? res.data : null;
  })();

  const shouldShowToast =
    typeof manageToast === 'function' ? manageToast(responseData) : !!manageToast;

  if (!shouldShowToast) return;

  const toastMessage = responseData?.message ?? 'Something went wrong';
  const call = isError ? 'error' : 'success';
  toast[call](toastMessage);
};
