'use client';

import React from 'react';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastContainer } from 'react-toastify';

import ZustandProvider from '@/context/ZustandProvider';
import { useZustandState } from '@/hooks/useZustandState';
import queryClient from '@/lib/queryClient';
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
      <ToastContainer pauseOnFocusLoss={false} autoClose={5000} closeOnClick hideProgressBar />
    </QueryClientProvider>
  );
};

export default Providers;
