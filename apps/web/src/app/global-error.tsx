'use client';

import Error from '@/components/core/Error';
import { interFont } from '@/styles/font';

import type { Component, NextErrorType } from '@/@types/next.types';

const GlobalError: Component<NextErrorType> = (props) => (
  <html lang="en">
    <body className={interFont.className}>
      <Error {...props} />
    </body>
  </html>
);

export default GlobalError;
