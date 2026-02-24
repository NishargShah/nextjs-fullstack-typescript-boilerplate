import { Fragment } from 'react';

import Typography from '@/components/atoms/Typography';
import Login from '@/components/organisms/Login';
import constants from '@/constants';

import type { Metadata } from 'next';

import type { Component } from '@/@types/next.types';

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
