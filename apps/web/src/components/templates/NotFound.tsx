'use client';

import { Button, Typography } from '@repo/ui/atoms';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import paths from '@/constants/paths';

import type { Component } from '@repo/types';

const NotFound: Component = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col items-center">
      <Typography as="h2" className="p-4" variant="content">
        Not Found
      </Typography>
      <Typography as="p" variant="content">
        Could not find requested resource &quot;{pathname}&quot;
      </Typography>
      <Link className="mt-4" href={paths.INDEX}>
        <Button type="button" variant="primary">
          Try Again
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
