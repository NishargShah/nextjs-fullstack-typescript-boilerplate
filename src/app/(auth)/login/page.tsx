import React, { Fragment } from 'react';

import Login from '@/components/login/Login';
import constants from '@/constants';

import type { Component } from '@/types';
import type { Metadata } from 'next';

export const metadata = {
  title: `Login | ${constants.APP_NAME}`,
} satisfies Metadata;

const LoginPage: Component = () => (
  <Fragment>
    <h1 className="text-center">Hello, Non Protected Route</h1>
    <Login />
  </Fragment>
);

export default LoginPage;
