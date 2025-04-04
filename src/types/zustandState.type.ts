import type { GetProfileOutput } from '@/features/profile/profile.type';
import type { ThemeSliceInitialState } from '@/store/slices/theme/theme.type';
import type { OverrideProperties } from 'type-fest';

export interface RootLayoutAppProps extends Pick<ThemeSliceInitialState, 'mode' | 'preferredMode'> {
  user: GetProfileOutput | undefined;
}

export type ZustandState = OverrideProperties<RootLayoutAppProps, { user?: GetProfileOutput }>;

export type ZustandProviderProps = ZustandState;
