'use client';

import { useUsers } from '@/features/users/useUsers';

import type { Component } from '@/@types/next.types';

const Users: Component = () => {
  const { data: users } = useUsers();

  if (!users) return null;

  return (
    <div className="mt-4 flex items-center justify-center">
      <table className="border-collapse border">
        <thead>
          <tr className="*:border-collapse *:border *:p-4">
            <th>ID</th>
            <th>Full Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="text-center *:w-50 *:border-collapse *:border *:p-4">
              <td>{user.id}</td>
              <td>{user.fullName}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
