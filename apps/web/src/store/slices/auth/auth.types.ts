import type { RemoveFnType, SliceCreator } from '@/@types/store.types';
import type { GetProfileOutput } from '@/features/profile/useProfile';

interface AuthSlice {
  isAuthenticated: boolean;
  user?: GetProfileOutput | null;
  setUser: (payload: GetProfileOutput) => void;
  logout: () => void;
}

export type AuthSliceInitialState = RemoveFnType<AuthSlice>;

export type CreateAuthSlice = SliceCreator<AuthSlice>;

// OUTER FUNCTIONS

interface AuthSliceGetUserOutput {
  isAuthenticated: true;
  user: GetProfileOutput;
}

export type AuthSliceGetUser = (payload: GetProfileOutput) => AuthSliceGetUserOutput;
