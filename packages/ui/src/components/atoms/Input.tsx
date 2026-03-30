import { cva } from 'class-variance-authority';

import { cn } from '@ui/lib';

import type { Component } from '@repo/types';
import type { VariantProps } from 'class-variance-authority';
import type { ComponentProps } from 'react';

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

export const Input: Component<InputProps> = (props) => {
  const { variant, className, ...restProps } = props;

  return <input {...restProps} className={cn(inputVariants({ variant }), className)} />;
};
