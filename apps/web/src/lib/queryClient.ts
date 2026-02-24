import { QueryClient } from '@tanstack/react-query';

import { isServer } from '@/utils';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: isServer ? 0 : 1,
      staleTime: 10_000,
      gcTime: isServer ? Infinity : 1000 * 60 * 5,
    },
  },
});

export default queryClient;
