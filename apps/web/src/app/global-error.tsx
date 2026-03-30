'use client';

import { cn } from '@repo/ui/lib';

import Error from '@/components/templates/Error';
import { interFont } from '@/styles/font';

import type { Component, NextErrorType } from '@repo/types';

const GlobalError: Component<NextErrorType> = (props) => (
  <html lang="en">
    <body className={cn(interFont.className, 'bg-background text-foreground')}>
      <Error {...props} />
    </body>
  </html>
);

export default GlobalError;
