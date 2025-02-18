import { useStore as useZustandStore } from 'zustand';

import { useZustand } from '@/context/ZustandProvider';

import type { UseStore } from '@/types/store.type';

export const useStore: UseStore = (selector) => {
  const store = useZustand();
  return useZustandStore(store, selector);
};
