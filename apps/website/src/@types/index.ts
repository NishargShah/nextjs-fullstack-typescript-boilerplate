import type { ConditionalExcept } from 'type-fest';

export type PrimitiveType = string | number | boolean;

export type Obj<T = unknown> = Record<string, T>;

export interface RecursiveType<T> {
  [key: string]: T | RecursiveType<T>;
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export type RemoveFnType<T> = ConditionalExcept<T, Function>;
