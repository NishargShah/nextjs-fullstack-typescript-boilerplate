import { Fragment } from 'react';

import { Typography } from '@repo/ui/atoms';

import Login from '@/components/organisms/Login';
import constants from '@/constants';

import type { Component } from '@repo/types';
import type { Metadata } from 'next';

export const metadata = {
  title: ['Login', constants.APP_NAME].join(' | '),
} satisfies Metadata;

const LoginPage: Component = () => (
  <Fragment>
    <Typography as="h1" className="text-center" variant="title">
      Hello, Non Protected Route
    </Typography>
    <Login />
  </Fragment>
);

export default LoginPage;
