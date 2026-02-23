import { useStore as useZustandStore } from 'zustand';

import { useZustand } from '@/providers/ZustandProvider';

import type { UseStore } from '@/types/store.type';

export const useStore: UseStore = (selector) => {
  const store = useZustand();
  return useZustandStore(store, selector);
};
