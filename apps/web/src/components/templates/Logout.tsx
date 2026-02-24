'use client';

import { useEffect } from 'react';

import Typography from '@/components/atoms/Typography';
import { useLogout } from '@/features/profile/useLogout';
import { useRouter } from '@/hooks/useRouter';

import type { Component } from '@/@types/next.types';

const Logout: Component = () => {
  const router = useRouter();
  const { mutateAsync: logout } = useLogout();

  useEffect(() => {
    (async () => {
      try {
        await logout({});
      } catch {
        // empty
      }

      router.push('/');
    })();
  }, [logout, router]);

  return (
    <Typography as="h1" className="text-center" variant="title">
      Logging you out...
    </Typography>
  );
};

export default Logout;
