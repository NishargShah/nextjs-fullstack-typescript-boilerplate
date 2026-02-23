import React, { Suspense } from 'react';

import App from '@/app/app';
import constants from '@/constants';
import { getProfileApi } from '@/features/profile/profile.api';
import cookieStore from '@/lib/cookieStore';
import Loader from '@/shared/loader/Loader';
import { getMode, getPreferredMode } from '@/store/slices/theme/theme.slice';
import { interFont } from '@/styles/font';
import '@/styles/globals.css';

import type { Metadata } from 'next';

import type { Layout } from '@/types';

export const metadata: Metadata = {
  title: constants.APP_NAME,
  description: `${constants.APP_NAME} Description`,
};

const RootLayout: Layout = async ({ children }) => {
  const { mode, preferredMode, theme } = await (async () => {
    const [modeString, preferredModeString] = await Promise.all([
      cookieStore.getAsync(constants.COOKIES.THEME_NAME),
      cookieStore.getAsync(constants.COOKIES.SYSTEM_THEME),
    ]);

    const themeMode = getMode(modeString);
    const preferredThemeMode = getPreferredMode(preferredModeString);
    const dataTheme = themeMode === constants.THEME.SYSTEM ? preferredThemeMode : themeMode;

    return { mode: themeMode, preferredMode: preferredThemeMode, theme: dataTheme };
  })();

  const user = await (async () => {
    const hasToken = !!(await cookieStore.getAsync(constants.COOKIES.TOKEN_NAME));
    if (!hasToken) return;

    return getProfileApi({}, { throwError: false });
  })();

  return (
    <html data-theme={theme} lang="en">
      <body className={interFont.className}>
        <Suspense fallback={<Loader />}>
          <App mode={mode} preferredMode={preferredMode} user={user}>
            {children}
          </App>
        </Suspense>
      </body>
    </html>
  );
};

export default RootLayout;
