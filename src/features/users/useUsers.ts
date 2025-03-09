import { useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';

import { getAllUsersApi } from '@/features/users/users.api';
import { useStore } from '@/store';

export const useUsers = () => {
  const setLoading = useStore((state) => state.setLoading);

  const queryData = useQuery({ queryKey: ['users'], queryFn: getAllUsersApi });
  const { data } = queryData;

  useEffect(() => {
    setLoading(!data);
  }, [data]);

  return queryData;
};
