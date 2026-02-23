import React from 'react';

import constants from '@/constants';

import type { Metadata } from 'next';

import type { Component } from '@/types';

export const metadata = {
  title: `About | ${constants.APP_NAME}`,
} satisfies Metadata;

const AboutPage: Component = () => <h1 className="text-center">Hello, Public route</h1>;

export default AboutPage;
