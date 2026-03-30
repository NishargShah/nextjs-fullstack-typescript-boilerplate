import { Fragment } from 'react';

import { Typography } from '@repo/ui/atoms';

import Users from '@/components/organisms/Users';
import constants from '@/constants';

import type { Component } from '@repo/types';
import type { Metadata } from 'next';

export const metadata = {
  title: ['Users', constants.APP_NAME].join(' | '),
} satisfies Metadata;

const UsersPage: Component = () => (
  <Fragment>
    <Typography as="h1" className="text-center" variant="title">
      Hello, Protected Route
    </Typography>
    <Users />
  </Fragment>
);

export default UsersPage;
