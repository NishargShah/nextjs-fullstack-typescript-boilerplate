import { createStore as createZustandStore } from 'zustand';
import { devtools } from 'zustand/middleware';

import createAuthSlice from '@/store/slices/auth/auth.slice';
import createLoadingSlice from '@/store/slices/loading/loading.slice';
import createThemeSlice from '@/store/slices/theme/theme.slice';

import type { CreateStore, StateFromFunctions } from '@/types/store.type';

export type StoreState = StateFromFunctions<
  [typeof createAuthSlice, typeof createLoadingSlice, typeof createThemeSlice]
>;

const createStore: CreateStore = (state) =>
  createZustandStore<StoreState>()(
    devtools((...a) => ({
      ...createAuthSlice(...a),
      ...createLoadingSlice(...a),
      ...createThemeSlice(...a),
      ...state,
    })),
  );

export default createStore;
