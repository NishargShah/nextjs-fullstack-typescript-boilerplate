'use client';

import React, { useEffect } from 'react';

import { useLogout } from '@/features/profile/useLogout';
import { useRouter } from '@/hooks/useRouter';

import type { Component } from '@/types';

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

  return <h1 className="text-center">Logging you out...</h1>;
};

export default Logout;
