import type { OverrideProperties } from 'type-fest';

import type { GetProfileOutput } from '@/features/profile/profile.type';
import type { ThemeSliceInitialState } from '@/store/slices/theme/theme.type';

export interface RootLayoutAppProps extends Pick<ThemeSliceInitialState, 'mode' | 'preferredMode'> {
  user: GetProfileOutput | null | undefined;
}

export type ZustandState = OverrideProperties<RootLayoutAppProps, { user?: GetProfileOutput }>;

export type ZustandProviderProps = ZustandState;
