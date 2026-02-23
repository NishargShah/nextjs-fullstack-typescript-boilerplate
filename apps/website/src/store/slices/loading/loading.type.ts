import type { RemoveFnType } from '@/types';
import type { SliceCreator } from '@/types/store.type';

interface LoadingSlice {
  isLoading: boolean;
  setLoading: (payload: boolean) => void;
}

export type LoadingSliceInitialState = RemoveFnType<LoadingSlice>;

export type CreateLoadingSlice = SliceCreator<LoadingSlice>;
