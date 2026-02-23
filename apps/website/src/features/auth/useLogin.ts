import api from '@/api';
import catchAsync from '@/api/catchAsync';
import { useAppMutation } from '@/hooks/useAppMutation';

// Types

export interface LoginInput {
  email: string;
  password: string;
}

export type LoginOutput = unknown;

// API

export const loginApi = catchAsync<LoginInput, LoginOutput>(async ({ signal, ...data }) => {
  const res = await api.login<LoginOutput>({ signal, data });

  return res.data.data;
});

// Hook

export const useLogin = () =>
  useAppMutation<LoginInput, LoginOutput>({
    mutationFn: async (data) => loginApi(data),
  });
