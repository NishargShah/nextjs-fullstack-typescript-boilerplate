import { cva } from 'class-variance-authority';

import cn from '@/lib/cn';

import type { VariantProps } from 'class-variance-authority';
import type { ComponentPropsWithoutRef, ReactNode, RefObject } from 'react';

const defaultElement = 'p';

export const typographyVariants = cva('whitespace-pre-line', {
  variants: {
    variant: {
      title: 'text-3xl font-bold',
      content: 'text-base',
      help: 'text-sm',
      inherit: 'text-inherit',
    },
    weight: {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
    },
    color: {
      white: 'text-white',
      black: 'text-black',
      background: 'text-background',
      foreground: 'text-foreground',
      content: 'text-gray-300',
    },
  },
});

export type TypographyElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

type TypographyVariant = VariantProps<typeof typographyVariants>;

type ActualTypographyVariant = Omit<TypographyVariant, 'variant'> &
  Required<Pick<TypographyVariant, 'variant'>>;

export type TypographyProps<T extends TypographyElement = typeof defaultElement> =
  ActualTypographyVariant &
    ComponentPropsWithoutRef<T> & {
      as: T;
      children?: ReactNode;
      ref?: RefObject<HTMLHeadingElement | null>;
    };

type TypographyType = <T extends TypographyElement = typeof defaultElement>(
  props: TypographyProps<T>,
) => ReactNode;

const Typography: TypographyType = (props) => {
  const {
    children,
    className,
    as: Component = defaultElement,
    variant,
    weight,
    color,
    ...restProps
  } = props;

  const classNames = cn(typographyVariants({ variant, weight, color }));

  return (
    <Component {...restProps} className={cn(classNames, className)}>
      {children}
    </Component>
  );
};

export default Typography;
