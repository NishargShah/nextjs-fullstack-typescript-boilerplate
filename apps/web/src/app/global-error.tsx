'use client';

import Error from '@/components/templates/Error';
import cn from '@/lib/cn';
import { interFont } from '@/styles/font';

import type { Component, NextErrorType } from '@/@types/next.types';

const GlobalError: Component<NextErrorType> = (props) => (
  <html lang="en">
    <body className={cn(interFont.className, 'bg-background text-foreground')}>
      <Error {...props} />
    </body>
  </html>
);

export default GlobalError;
