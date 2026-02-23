'use client';

import React from 'react';

import { useForm } from 'react-hook-form';

import styles from '@/components/login/Login.module.css';
import { useLogin } from '@/features/auth/useLogin';
import { useProfile } from '@/features/profile/useProfile';
import { useRouter } from '@/hooks/useRouter';

import type { SubmitHandler } from 'react-hook-form';

import type { Component, Layout } from '@/types';

interface FormControlProps {
  label: string;
  labelFor: string;
  error?: string;
}

const FormControl: Layout<FormControlProps> = ({ children, label, labelFor, error }) => (
  <div className={styles.wrapper}>
    <label className={styles.label} htmlFor={labelFor}>
      {label}
    </label>
    {children}
    {error ? <p className={styles.error}>{error}</p> : null}
  </div>
);

interface FormData {
  email: string;
  password: string;
}

const Login: Component = () => {
  const router = useRouter();

  const { mutateAsync, isPending: isLoginPending } = useLogin();
  const { mutateAsync: fetchProfile, isPending: isProfilePending } = useProfile();
  const isLoading = isLoginPending || isProfilePending;

  const { formState, register, handleSubmit: onSubmit } = useForm<FormData>();
  const { errors } = formState;

  const handleSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await mutateAsync(data);
      await fetchProfile({});
      router.push('/app');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className={styles.container} onSubmit={onSubmit(handleSubmit)}>
      <FormControl error={errors.email?.message} label="Email" labelFor="temp_email">
        <input
          {...register('email', { required: 'Email is required' })}
          className={styles.input}
          id="temp_email"
          type="text"
        />
      </FormControl>
      <FormControl error={errors.password?.message} label="Password" labelFor="temp_password">
        <input
          {...register('password', { required: 'Password is required' })}
          className={styles.input}
          id="temp_password"
          type="password"
        />
      </FormControl>
      <div>
        <button className={styles.btn} disabled={isLoading} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Login;
