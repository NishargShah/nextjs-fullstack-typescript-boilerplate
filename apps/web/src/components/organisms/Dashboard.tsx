'use client';

import { Typography } from '@repo/ui/atoms';

import { useStore } from '@/hooks/useStore';

import type { Component } from '@repo/types';

const Dashboard: Component = () => {
  const user = useStore((state) => state.user);
  if (!user) return null;

  return (
    <div className="mt-4 text-center">
      <Typography as="p" variant="content">
        ID: {user.id}
      </Typography>
      <Typography as="p" variant="content">
        Full Name: {user.fullName}
      </Typography>
      <Typography as="p" variant="content">
        Email: {user.email}
      </Typography>
    </div>
  );
};

export default Dashboard;
