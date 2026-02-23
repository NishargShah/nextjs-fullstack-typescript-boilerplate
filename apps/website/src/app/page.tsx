import React from 'react';

import constants from '@/constants';

import type { Metadata } from 'next';

import type { Component } from '@/types';

export const metadata = {
  title: `Home | ${constants.APP_NAME}`,
} satisfies Metadata;

const HomePage: Component = () => <h1 className="text-center">Hello, Homepage</h1>;

export default HomePage;
