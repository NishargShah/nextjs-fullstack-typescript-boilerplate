import type { NextMiddleware } from 'next/server';
import { NextResponse } from 'next/server';
import cookieStore from '@/lib/cookieStore';
import constants from '@/constants';

export const middleware: NextMiddleware = async request => {
  const { headers, nextUrl } = request;
  const { pathname } = nextUrl;

  // API ONLY
  if (pathname.startsWith('/api')) {
    const isProtected = !pathname.startsWith('/api/auth');
    const token = await cookieStore.getAsync(constants.cookies.tokenName);

    if (isProtected) {
      if (!token) {
        return Response.json(
          { status: 401, message: 'You are not logged in! please log in to get access.' },
          { status: 401 }
        );
      }

      const requestHeaders = new Headers(headers);
      requestHeaders.set('user', token);

      return NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      });
    }
  }
};
