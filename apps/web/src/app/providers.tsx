'use client';

import { QueryClientProvider } from '@tanstack/react-query';
// eslint-disable-next-line import-x/no-extraneous-dependencies
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

import ProgressBar from '@/components/templates/ProgressBar';
import { useZustandState } from '@/hooks/useZustandState';
import queryClient from '@/lib/queryClient';
import ZustandProvider from '@/providers/ZustandProvider';

import type { Layout } from '@/@types/next.types';
import type { RootLayoutAppProps } from '@/@types/zustandState.types';

type ProvidersProps = RootLayoutAppProps;

const Providers: Layout<ProvidersProps> = ({ children, ...props }) => {
  const zustandState = useZustandState(props);

  return (
    <QueryClientProvider client={queryClient}>
      <ZustandProvider {...zustandState}>
        <ProgressBar>{children}</ProgressBar>
      </ZustandProvider>
      <ReactQueryDevtools />
      <Toaster position="top-right" toastOptions={{ duration: 5000 }} />
    </QueryClientProvider>
  );
};

export default Providers;
