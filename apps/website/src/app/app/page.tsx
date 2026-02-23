import React, { Fragment } from 'react';

import Dashboard from '@/components/dashboard/Dashboard';
import constants from '@/constants';

import type { Metadata } from 'next';

import type { Component } from '@/types';

export const metadata = {
  title: `Dashboard | ${constants.APP_NAME}`,
} satisfies Metadata;

const AppPage: Component = () => (
  <Fragment>
    <h1 className="text-center">Hello, Protected Route</h1>
    <Dashboard />
  </Fragment>
);

export default AppPage;
