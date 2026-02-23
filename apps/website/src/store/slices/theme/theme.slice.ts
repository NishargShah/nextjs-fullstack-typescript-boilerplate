import constants from '@/constants';
import cookieStore from '@/lib/cookieStore';

import type {
  CreateThemeSlice,
  ThemeSliceDetectMode,
  ThemeSliceGetMode,
  ThemeSliceGetPreferredMode,
  ThemeSliceInitialState,
  ThemeSliceSetDetectedMode,
  ThemeSliceSetModeClient,
} from '@/store/slices/theme/theme.type';

const { LIGHT, DARK, SYSTEM } = constants.THEME;

const initialState: ThemeSliceInitialState = {
  mode: LIGHT,
  preferredMode: LIGHT,
};

export const detectMode: ThemeSliceDetectMode = () => {
  const darkThemeMq = globalThis.matchMedia(`(prefers-color-scheme: ${DARK})`);
  return darkThemeMq.matches ? DARK : LIGHT;
};

export const getMode: ThemeSliceGetMode = (mode) => {
  if (mode === DARK) return DARK;
  if (mode === SYSTEM) return SYSTEM;
  return LIGHT;
};

export const getPreferredMode: ThemeSliceGetPreferredMode = (mode) =>
  mode === DARK ? DARK : LIGHT;

export const setModeClient: ThemeSliceSetModeClient = (mode) => {
  const isSystem = mode === SYSTEM;
  const actualMode = isSystem ? detectMode() : mode;

  document.documentElement.dataset.theme = actualMode;
  cookieStore.set(constants.COOKIES.THEME_NAME, mode);
  if (isSystem) cookieStore.set(constants.COOKIES.SYSTEM_THEME, actualMode);

  return actualMode;
};

export const setDetectedMode: ThemeSliceSetDetectedMode = (mode) => {
  document.documentElement.dataset.theme = mode;
  cookieStore.set(constants.COOKIES.THEME_NAME, SYSTEM);
  cookieStore.set(constants.COOKIES.SYSTEM_THEME, mode);
};

const createThemeSlice: CreateThemeSlice = (set, get) => ({
  ...initialState,
  setMode: (mode) => {
    const themeMode = (() => {
      if (get().mode === LIGHT) return DARK;
      if (get().mode === DARK) return SYSTEM;
      return LIGHT;
    })();

    const actualMode = mode ?? themeMode;
    const preferredMode = setModeClient(actualMode);

    set({ mode: actualMode, preferredMode }, false, 'theme/setMode');
  },
  setPreferredMode: (preferredMode) => {
    if (get().mode !== SYSTEM) return;

    setDetectedMode(preferredMode);

    set({ mode: SYSTEM, preferredMode }, false, 'theme/setDetectedMode');
  },
});

export default createThemeSlice;
