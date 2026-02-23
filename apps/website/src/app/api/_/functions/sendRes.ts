import { NextResponse } from 'next/server';

import type { ValueOf } from 'type-fest';

import type { RecursiveType } from '@/types';
import type { HTTP_STATUSES } from '@server/_/constants';

export interface ResOptions {
  message?: string;
  extraFields?: RecursiveType<unknown>;
}

export type SendRes = <T>(
  data: T,
  statusCode: ValueOf<typeof HTTP_STATUSES>,
  options: ResOptions,
) => NextResponse;

const sendRes: SendRes = (data, statusCode, options) => {
  const { message, extraFields = {} } = options;

  return NextResponse.json(
    {
      status: statusCode,
      message,
      data,
      ...extraFields,
    },
    { status: statusCode },
  );
};

export default sendRes;
