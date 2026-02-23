import type { ValueOf } from 'type-fest';

import type constants from '@/constants';
import type { RemoveFnType } from '@/types';
import type { SliceCreator } from '@/types/store.type';

type ThemeMode = ValueOf<typeof constants.THEME>;
type PreferredMode = Exclude<ThemeMode, typeof constants.THEME.SYSTEM>;

interface ThemeSlice {
  mode: ThemeMode;
  preferredMode: PreferredMode;
  setMode: (mode?: ThemeMode) => void;
  setPreferredMode: (preferredMode: PreferredMode) => void;
}

export type ThemeSliceInitialState = RemoveFnType<ThemeSlice>;

export type CreateThemeSlice = SliceCreator<ThemeSlice>;

// OUTER FUNCTIONS

export type ThemeSliceDetectMode = () => PreferredMode;

export type ThemeSliceGetMode = (modeString: string | null) => ThemeMode;

export type ThemeSliceGetPreferredMode = (modeString: string | null) => PreferredMode;

export type ThemeSliceSetModeClient = (mode: ThemeMode) => PreferredMode;

export type ThemeSliceSetDetectedMode = (preferredMode: PreferredMode) => void;
