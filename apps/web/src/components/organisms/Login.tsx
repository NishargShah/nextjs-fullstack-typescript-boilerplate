'use client';

import { Button } from '@repo/ui/atoms';
import { FormInput } from '@repo/ui/molecules';
import { useForm } from 'react-hook-form';

import paths from '@/constants/paths';
import { useLogin } from '@/features/auth/useLogin';
import { useProfile } from '@/features/profile/useProfile';
import { useRouter } from '@/hooks/useRouter';

import type { Component } from '@repo/types';
import type { SubmitHandler } from 'react-hook-form';

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
      router.push(paths.APP.INDEX);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="mx-auto my-4 max-w-1/2 p-4" onSubmit={onSubmit(handleSubmit)}>
      <FormInput
        {...register('email', { required: 'Email is required' })}
        className="w-full"
        error={errors.email?.message}
        id="temp_email"
        label="Email"
        labelFor="temp_email"
        type="email"
        variant="primary"
      />
      <FormInput
        {...register('password', { required: 'Password is required' })}
        className="w-full"
        error={errors.password?.message}
        id="temp_password"
        label="Password"
        labelFor="temp_password"
        type="password"
        variant="primary"
      />
      <div className="mt-4 text-center">
        <Button disabled={isLoading} type="submit" variant="primary">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default Login;
