import { cva } from 'class-variance-authority';

import { cn } from '@ui/lib';

import type { Layout } from '@repo/types';
import type { VariantProps } from 'class-variance-authority';
import type { ButtonHTMLAttributes, ComponentPropsWithRef } from 'react';

const buttonVariants = cva('cursor-pointer', {
  variants: {
    variant: {
      primary: 'text-background bg-foreground rounded-3xl px-4 py-2',
    },
  },
});

type ButtonVariant = VariantProps<typeof buttonVariants>;

type ActualButtonVariant = Omit<ButtonVariant, 'variant'> &
  Required<Pick<ButtonVariant, 'variant'>>;

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ActualButtonVariant &
  ComponentPropsWithRef<'button'>;

export const Button: Layout<ButtonProps> = (props) => {
  const { children, className, variant, ...restProps } = props;

  return (
    <button type="button" {...restProps} className={cn(buttonVariants({ variant }), className)}>
      {children}
    </button>
  );
};
