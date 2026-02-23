'use client';

import React, { useCallback, useEffect } from 'react';

import constants from '@/constants';
import { useStore } from '@/hooks/useStore';
import WebsiteLoader from '@/shared/loader/WebsiteLoader';
import { sleep } from '@/utils';

import type { Component } from '@/types';

const AppClient: Component = () => {
  const isLoading = useStore((state) => state.isLoading);
  const setLoading = useStore((state) => state.setLoading);
  const setPreferredMode = useStore((state) => state.setPreferredMode);

  const handleColorSchema = useCallback(
    (event: MediaQueryListEvent) => {
      const { LIGHT, DARK } = constants.THEME;
      const newTheme = event.matches ? DARK : LIGHT;
      setPreferredMode(newTheme);
    },
    [setPreferredMode],
  );

  useEffect(() => {
    (async () => {
      await sleep(constants.STARTUP_PROGRESS_BAR_TIMEOUT);
      setLoading(false);
    })();
  }, [setLoading]);

  useEffect(() => {
    const matchMedia = globalThis.matchMedia('(prefers-color-scheme: dark)');

    matchMedia.addEventListener('change', handleColorSchema);
    return () => matchMedia.removeEventListener('change', handleColorSchema);
  }, [handleColorSchema]);

  return isLoading ? <WebsiteLoader /> : null;
};

export default AppClient;
