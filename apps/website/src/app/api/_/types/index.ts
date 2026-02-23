import type { NextRequest, NextResponse } from 'next/server';

import type { Obj } from '@/types';

interface RouteContext {
  params: Promise<Obj<string>>;
}

export type Route = (request: NextRequest, context: RouteContext) => Promise<NextResponse>;
