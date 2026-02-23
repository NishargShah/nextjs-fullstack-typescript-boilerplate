import { useMutation } from '@tanstack/react-query';

import type { QueryClient, UseMutationOptions, UseMutationResult } from '@tanstack/react-query';

import type { AppError } from '@/api/appError';

type UseAppMutation = <Input, Output, TOnMutateResult = unknown>(
  options: UseMutationOptions<Output | null, AppError, Input, TOnMutateResult>,
  queryClient?: QueryClient,
) => UseMutationResult<Output | null, AppError, Input, TOnMutateResult>;

export const useAppMutation: UseAppMutation = (...params) => useMutation(...params);
