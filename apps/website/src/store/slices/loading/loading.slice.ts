import type {
  CreateLoadingSlice,
  LoadingSliceInitialState,
} from '@/store/slices/loading/loading.type';

const initialState: LoadingSliceInitialState = {
  isLoading: true,
};

const createLoadingSlice: CreateLoadingSlice = (set) => ({
  ...initialState,
  setLoading: (payload) => {
    set({ isLoading: payload }, false, 'loading/setLoading');
  },
});

export default createLoadingSlice;
