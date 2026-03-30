import type { RemoveFnType, SliceCreator } from '@/@types/store.types';

interface LoadingSlice {
  isLoading: boolean;
  setLoading: (payload: boolean) => void;
}

export type LoadingSliceInitialState = RemoveFnType<LoadingSlice>;

export type CreateLoadingSlice = SliceCreator<LoadingSlice>;
