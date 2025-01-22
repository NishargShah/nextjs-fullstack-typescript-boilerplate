import { useMutation } from '@tanstack/react-query';

import { logoutApi } from '@/features/profile/profile.api';
import { useStore } from '@/store';

export const useLogout = () => {
  const logout = useStore(state => state.logout);

  return useMutation({
    mutationFn: logoutApi,
    onSuccess: logout,
    onError: logout,
  });
};
