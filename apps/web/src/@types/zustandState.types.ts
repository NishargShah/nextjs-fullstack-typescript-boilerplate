import type { OverrideProperties } from 'type-fest';

import type { GetProfileOutput } from '@/features/profile/useProfile';
import type { ThemeSliceInitialState } from '@/store/slices/theme/theme.types';

export interface RootLayoutAppProps extends Pick<ThemeSliceInitialState, 'mode' | 'preferredMode'> {
  user: GetProfileOutput | null | undefined;
}

export type ZustandState = OverrideProperties<RootLayoutAppProps, { user?: GetProfileOutput }>;

export type ZustandProviderProps = ZustandState;
