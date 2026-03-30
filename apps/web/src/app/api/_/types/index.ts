import type { Obj } from '@repo/types';
import type { NextRequest, NextResponse } from 'next/server';

interface RouteContext {
  params: Promise<Obj<string>>;
}

export type Route = (request: NextRequest, context: RouteContext) => Promise<NextResponse>;
