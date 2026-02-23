import { useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';

import api from '@/api';
import catchAsync from '@/api/catchAsync';
import { useStore } from '@/hooks/useStore';

import type { GetProfileOutput } from '@/features/profile/useProfile';

// Types

export type GetAllUsersInput = unknown;

export type GetAllUsersOutput = GetProfileOutput[];

// API

export const getAllUsersApi = catchAsync<GetAllUsersInput, GetAllUsersOutput>(
  async ({ signal }) => {
    const res = await api.getAllUsers<GetAllUsersOutput>({ signal });
    return res.data.data;
  },
);

// Hooks

export const useUsers = () => {
  const setLoading = useStore((state) => state.setLoading);

  const queryData = useQuery({ queryKey: ['users'], queryFn: getAllUsersApi });
  const { data } = queryData;

  useEffect(() => {
    setLoading(!data);
  }, [data, setLoading]);

  return queryData;
};
