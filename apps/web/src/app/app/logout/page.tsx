import Logout from '@/components/templates/Logout';
import constants from '@/constants';

import type { Component } from '@repo/types';
import type { Metadata } from 'next';

export const metadata = {
  title: ['Logout', constants.APP_NAME].join(' | '),
} satisfies Metadata;

const LogoutPage: Component = () => <Logout />;

export default LogoutPage;
