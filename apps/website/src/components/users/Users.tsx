'use client';

import React from 'react';

import styles from '@/components/users/Users.module.css';
import { useUsers } from '@/features/users/useUsers';

import type { Component } from '@/types';

const Users: Component = () => {
  const { data: users } = useUsers();

  if (!users) return null;

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tableRow}>
            <th className={styles.tableHead}>ID</th>
            <th className={styles.tableHead}>Full Name</th>
            <th className={styles.tableHead}>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.slice(0, 10).map((user) => (
            <tr key={user.id} className={styles.tableRow}>
              <td className={styles.tableData}>{user.id}</td>
              <td className={styles.tableData}>{user.fullName}</td>
              <td className={styles.tableData}>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
