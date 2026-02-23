import api from '@/api';
import catchAsync from '@/api/catchAsync';
import { useAppMutation } from '@/hooks/useAppMutation';
import { useStore } from '@/hooks/useStore';

// Types

export type GetProfileInput = unknown;

export interface GetProfileOutput {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  fullName: string;
}

// API

export const getProfileApi = catchAsync<GetProfileInput, GetProfileOutput>(async ({ signal }) => {
  const res = await api.getProfile<GetProfileOutput>({ signal });
  return res.data.data;
});

// Hook

export const useProfile = () => {
  const setUser = useStore((state) => state.setUser);

  return useAppMutation<GetProfileInput, GetProfileOutput>({
    mutationFn: async () => getProfileApi({}),
    onSuccess: (data) => {
      if (data) setUser(data);
    },
  });
};
