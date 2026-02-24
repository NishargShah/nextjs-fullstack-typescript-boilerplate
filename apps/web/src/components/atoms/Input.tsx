import { cva } from 'class-variance-authority';

import cn from '@/lib/cn';

import type { VariantProps } from 'class-variance-authority';
import type { ComponentProps } from 'react';

import type { Component } from '@/@types/next.types';

const inputVariants = cva('', {
  variants: {
    variant: {
      primary: 'border-foreground rounded-sm border px-2 py-1 focus-visible:outline-0',
    },
  },
});

type InputVariant = VariantProps<typeof inputVariants>;

type ActualInputVariant = Omit<InputVariant, 'variant'> & Required<Pick<InputVariant, 'variant'>>;

export type InputProps = ActualInputVariant & ComponentProps<'input'>;

const Input: Component<InputProps> = (props) => {
  const { variant, className, ...restProps } = props;

  return <input {...restProps} className={cn(inputVariants({ variant }), className)} />;
};

export default Input;
