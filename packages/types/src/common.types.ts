export type PrimitiveType = string | number | boolean;

export type Obj<T = unknown> = Record<string, T>;

export interface RecursiveType<T> {
  [key: string]: T | RecursiveType<T>;
}
