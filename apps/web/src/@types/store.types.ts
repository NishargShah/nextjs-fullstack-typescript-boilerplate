import type { StateCreator, StoreApi } from 'zustand';

import type { ZustandState } from '@/@types/zustandState.types';
import type { StoreState } from '@/store';

export type StateFromFunctions<T extends ((...args: never[]) => object)[]> = T extends [
  infer F,
  ...infer R,
]
  ? F extends (...args: never[]) => object
    ? StateFromFunctions<R extends ((...args: never[]) => object)[] ? R : []> & ReturnType<F>
    : unknown
  : unknown;

export type ZustandStore = StoreApi<StoreState>;

export type ZustandContextValue = ZustandStore;

export type CreateStore = (state: ZustandState) => ZustandStore;

export type UseStore = <T>(selector: (state: StoreState) => T) => T;

export type SliceCreator<T> = StateCreator<T, [['zustand/devtools', never]]>;
