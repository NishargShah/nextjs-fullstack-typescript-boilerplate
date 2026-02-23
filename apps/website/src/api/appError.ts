import type { RecursiveType } from '@/types';

export interface AppErrorType {
  message: string | string[] | (() => string | string[]);
  messages: string[] | undefined;
  statusCode: number;
  extraFields: RecursiveType<unknown>;
  isOperational: boolean;
}

export class AppError extends Error {
  public messages: AppErrorType['messages'];

  public statusCode: AppErrorType['statusCode'];

  public status: AppErrorType['statusCode'];

  public extraFields: AppErrorType['extraFields'];

  public isOperational: AppErrorType['isOperational'];

  static getMessage = (message: AppErrorType['message']): string => {
    if (typeof message === 'function') return message() as string;
    return Array.isArray(message) ? message[0] : message;
  };

  constructor(
    message: AppErrorType['message'],
    statusCode: AppErrorType['statusCode'],
    extraFields: AppErrorType['extraFields'] = {},
  ) {
    super();
    this.message = AppError.getMessage(message);
    this.messages = Array.isArray(message) ? message : undefined;
    this.statusCode = statusCode || 400;
    this.status = statusCode;
    this.extraFields = extraFields;
    this.isOperational = true;
  }
}

export const isAppError = (AppErrorArg: unknown): AppErrorArg is AppError =>
  AppErrorArg instanceof AppError;
