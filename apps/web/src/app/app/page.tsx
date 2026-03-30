import { Fragment } from 'react';

import { Typography } from '@repo/ui/atoms';

import Dashboard from '@/components/organisms/Dashboard';
import constants from '@/constants';

import type { Component } from '@repo/types';
import type { Metadata } from 'next';

export const metadata = {
  title: ['Dashboard', constants.APP_NAME].join(' | '),
} satisfies Metadata;

const AppPage: Component = () => (
  <Fragment>
    <Typography as="h1" className="text-center" variant="title">
      Hello, Protected Route
    </Typography>
    <Dashboard />
  </Fragment>
);

export default AppPage;
