'use client';

import React from 'react';

import Error from '@/components/defaults/error/Error';
import { interFont } from '@/styles/font';

import type { Component, NextErrorType } from '@/types';

const GlobalError: Component<NextErrorType> = (props) => (
  <html lang="en">
    <body className={interFont.className}>
      <Error {...props} />
    </body>
  </html>
);

export default GlobalError;
