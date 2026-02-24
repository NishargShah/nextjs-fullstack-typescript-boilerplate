import api from '@/api';
import catchAsync from '@/api/catchAsync';
import { useAppMutation } from '@/hooks/useAppMutation';
import { useStore } from '@/hooks/useStore';

// Types

export type LogoutInput = unknown;

export type LogoutOutput = unknown;

// API

const logoutApi = catchAsync<LogoutInput, LogoutOutput>(async (data) => {
  const res = await api.logout<LogoutOutput>(data);
  return res.data.data;
});

// Hook

export const useLogout = () => {
  const logout = useStore((state) => state.logout);

  return useAppMutation<LogoutInput, LogoutOutput>({
    mutationFn: async () => logoutApi({}),
    onSuccess: logout,
    onError: logout,
  });
};
