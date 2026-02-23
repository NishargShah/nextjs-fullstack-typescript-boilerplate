'use client';

import React from 'react';

import { QueryClientProvider } from '@tanstack/react-query';
// eslint-disable-next-line import-x/no-extraneous-dependencies
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastContainer } from 'react-toastify';

import { useZustandState } from '@/hooks/useZustandState';
import queryClient from '@/lib/queryClient';
import ZustandProvider from '@/providers/ZustandProvider';
import ProgressBar from '@/shared/loader/ProgressBar';

import type { Layout } from '@/types';
import type { RootLayoutAppProps } from '@/types/zustandState.type';

type ProvidersProps = RootLayoutAppProps;

const Providers: Layout<ProvidersProps> = ({ children, ...props }) => {
  const zustandState = useZustandState(props);

  return (
    <QueryClientProvider client={queryClient}>
      <ZustandProvider {...zustandState}>
        {children}
        <ProgressBar />
      </ZustandProvider>
      <ReactQueryDevtools />
      <ToastContainer closeOnClick hideProgressBar autoClose={5000} pauseOnFocusLoss={false} />
    </QueryClientProvider>
  );
};

export default Providers;
