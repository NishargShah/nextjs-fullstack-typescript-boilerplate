import { Typography } from '@repo/ui/atoms';

import constants from '@/constants';

import type { Component } from '@repo/types';
import type { Metadata } from 'next';

export const metadata = {
  title: ['About', constants.APP_NAME].join(' | '),
} satisfies Metadata;

const AboutPage: Component = () => (
  <Typography as="h1" className="text-center" variant="title">
    Hello, Public route
  </Typography>
);

export default AboutPage;
