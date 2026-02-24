import constants from '@/constants';

import type { Metadata } from 'next';

export const metadata = {
  title: `404 | ${constants.APP_NAME}`,
} satisfies Metadata;

// eslint-disable-next-line no-restricted-exports
export { default } from '@/components/defaults/notFound/NotFound';
