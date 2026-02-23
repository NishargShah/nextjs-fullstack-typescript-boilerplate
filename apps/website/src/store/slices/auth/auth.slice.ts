import queryClient from '@/lib/queryClient';

import type {
  AuthSliceGetUser,
  AuthSliceInitialState,
  CreateAuthSlice,
} from '@/store/slices/auth/auth.type';

const initialState: AuthSliceInitialState = {
  isAuthenticated: false,
  user: null,
};

export const getUser: AuthSliceGetUser = (payload) => {
  queryClient.setQueryData(['user'], payload);

  return {
    isAuthenticated: true,
    user: payload,
  };
};

const createAuthSlice: CreateAuthSlice = (set) => ({
  ...initialState,
  setUser: (payload) => {
    set(getUser(payload), false, 'auth/setUser');
  },
  logout: () => {
    set(initialState, false, 'auth/logout');
    queryClient.removeQueries();
  },
});

export default createAuthSlice;
