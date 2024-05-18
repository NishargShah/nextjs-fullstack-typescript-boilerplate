import type { GetProfileOutput } from '@/features/profile/profile.type';
import type { Mode } from '@/store/slices/theme/theme.type';

export interface ProvidersProps {
  user: GetProfileOutput | undefined;
  mode: Mode;
}

type InitialState = ProvidersProps;

export interface ZustandInitialState {
  initialState?: InitialState | undefined;
}
