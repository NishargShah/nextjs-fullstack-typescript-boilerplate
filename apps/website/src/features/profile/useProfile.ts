import { useMutation } from '@tanstack/react-query';

import { getProfileApi } from '@/features/profile/profile.api';
import { useStore } from '@/hooks/useStore';

export const useProfile = () => {
  const setUser = useStore((state) => state.setUser);

  return useMutation({
    mutationFn: getProfileApi,
    onSuccess: (data) => {
      if (data) setUser(data);
    },
  });
};
