'use client';

import React from 'react';

import styles from '@/components/dashboard/Dashboard.module.css';
import { useStore } from '@/hooks/useStore';

import type { Component } from '@/types';

const Dashboard: Component = () => {
  const user = useStore((state) => state.user);

  if (!user) return null;

  return (
    <div className={styles.container}>
      <p>ID: {user.id}</p>
      <p>Full Name: {user.fullName}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Dashboard;
