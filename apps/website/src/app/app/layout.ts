import { redirect } from 'next/navigation';

import isAuthenticated from '@/lib/isAuthenticated';

import type { Layout } from '@/types';

const AppLayout: Layout = async ({ children }) => {
  const isLoggedIn = await isAuthenticated();

  return isLoggedIn ? children : redirect('/login');
};

export default AppLayout;
