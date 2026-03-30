import { Input, Typography } from '@ui/components/atoms';

import type { Component } from '@repo/types';

import type { InputProps } from '@ui/components/atoms';

interface FormInputProps extends InputProps {
  label: string;
  labelFor: string;
  error?: string;
}

export const FormInput: Component<FormInputProps> = (props) => {
  const { label, labelFor, error, ...rest } = props;

  return (
    <div className="mb-4">
      <label className="mb-1 block" htmlFor={labelFor}>
        {label}
      </label>
      <Input {...rest} />
      {error ? (
        <Typography as="p" className="mb-2 text-red-700" variant="help">
          {error}
        </Typography>
      ) : null}
    </div>
  );
};
