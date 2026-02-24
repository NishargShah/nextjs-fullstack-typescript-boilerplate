import Input from '@/components/atoms/Input';
import Typography from '@/components/atoms/Typography';

import type { Component } from '@/@types/next.types';
import type { InputProps } from '@/components/atoms/Input';

interface FormInputProps extends InputProps {
  label: string;
  labelFor: string;
  error?: string;
}

const FormInput: Component<FormInputProps> = (props) => {
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

export default FormInput;
