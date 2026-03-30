import { redirect } from 'next/navigation';

import paths from '@/constants/paths';
import isAuthenticated from '@/helpers/isAuthenticated';

import type { Layout } from '@repo/types';

const AppLayout: Layout = async ({ children }) => {
  const isLoggedIn = await isAuthenticated();

  return isLoggedIn ? children : redirect(paths.LOGIN);
};

export default AppLayout;
