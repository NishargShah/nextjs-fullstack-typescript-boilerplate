import { getUser } from '@/store/slices/auth/auth.slice';

import type { RootLayoutAppProps, ZustandState } from '@/types/zustandState.type';

type ZustandStateHook = (props: RootLayoutAppProps) => ZustandState;

export const useZustandState: ZustandStateHook = (props) => {
  const { user, mode, preferredMode } = props;

  return {
    mode,
    preferredMode,
    ...(user ? getUser(user) : null),
  };
};
