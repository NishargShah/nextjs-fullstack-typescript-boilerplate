import { redirect } from 'next/navigation';

import isAuthenticated from '@/lib/isAuthenticated';

import type { Layout } from '@/types';

const AuthLayout: Layout = async ({ children }) => {
  const isLoggedIn = await isAuthenticated();

  return isLoggedIn ? redirect('/app') : children;
};

export default AuthLayout;
