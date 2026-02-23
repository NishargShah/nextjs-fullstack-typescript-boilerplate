import type { Obj } from '@/@types';

// Check is object
export type IsObject = <T, U = undefined>(obj: U extends undefined ? Obj<T> : T) => boolean;

export const isObject: IsObject = (obj) => typeof obj === 'object' && obj !== null;

// Check object is empty or not
export type IsObjEmpty = <T, U = undefined>(obj: U extends undefined ? Obj<T> : T) => boolean;

export const isObjEmpty: IsObjEmpty = (obj) => Object.getOwnPropertyNames(obj).length === 0;
