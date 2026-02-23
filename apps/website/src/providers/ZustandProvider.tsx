'use client';

import { createContext, useContext, useRef } from 'react';

import createStore from '@/store';

import type { Layout } from '@/@types/next.types';
import type { ZustandContextValue } from '@/@types/store.types';
import type { ZustandProviderProps } from '@/@types/zustandState.types';

const ZustandContext = createContext<ZustandContextValue | undefined>(undefined);

const ZustandProvider: Layout<ZustandProviderProps> = ({ children, ...state }) => {
  const storeRef = useRef<ZustandContextValue>(undefined);
  storeRef.current ??= createStore(state);

  return <ZustandContext value={storeRef.current}>{children}</ZustandContext>;
};

export const useZustand = (): ZustandContextValue => {
  const context = useContext(ZustandContext);
  if (!context) throw new Error('Missing ZustandProvider.Provider in the tree');

  return context;
};

export default ZustandProvider;
