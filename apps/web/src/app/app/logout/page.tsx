import Logout from '@/components/logout/Logout';
import constants from '@/constants';

import type { Metadata } from 'next';

import type { Component } from '@/@types/next.types';

export const metadata = {
  title: ['Logout', constants.APP_NAME].join(' | '),
} satisfies Metadata;

const LogoutPage: Component = () => <Logout />;

export default LogoutPage;
