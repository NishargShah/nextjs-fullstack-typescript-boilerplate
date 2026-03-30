'use client';

import { Button } from '@repo/ui/atoms';
import Link from 'next/link';

import paths from '@/constants/paths';
import { useRouter } from '@/hooks/useRouter';
import { useStore } from '@/hooks/useStore';

import type { Component } from '@repo/types';

const Navbar: Component = () => {
  const router = useRouter();

  const mode = useStore((state) => state.mode);
  const setMode = useStore((state) => state.setMode);
  const isAuthenticated = useStore((state) => state.isAuthenticated);

  return (
    <div className="relative mb-4 flex items-baseline justify-center border p-4">
      <div className="*:mr-2.5">
        <Link href={paths.INDEX}>Home</Link>
        <Link href={paths.ABOUT}>About</Link>
        {!isAuthenticated && <Link href={paths.LOGIN}>Login</Link>}
        {isAuthenticated ? <Link href={paths.APP.INDEX}>Dashboard</Link> : null}
        {isAuthenticated ? <Link href={paths.APP.USERS}>Users</Link> : null}
      </div>
      <div className="absolute top-1/2 right-4 -translate-y-1/2">
        <Button
          className="ml-4 text-sm"
          onClick={() => setMode(undefined)}
          type="button"
          variant="primary"
        >
          Mode: <span className="capitalize">{mode}</span>
        </Button>
        {isAuthenticated ? (
          <Button
            className="ml-4 text-sm"
            onClick={() => router.push(paths.APP.LOGOUT)}
            type="button"
            variant="primary"
          >
            Logout
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
