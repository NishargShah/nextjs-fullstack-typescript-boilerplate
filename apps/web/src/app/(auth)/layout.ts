import { redirect } from 'next/navigation';

import paths from '@/constants/paths';
import isAuthenticated from '@/helpers/isAuthenticated';

import type { Layout } from '@/@types/next.types';

const AuthLayout: Layout = async ({ children }) => {
  const isLoggedIn = await isAuthenticated();

  return isLoggedIn ? redirect(paths.APP.INDEX) : children;
};

export default AuthLayout;
