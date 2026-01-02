import { NextResponse } from 'next/server';

import constants from '@/constants';
import cookieStore from '@/lib/cookieStore';

import type { NextProxy } from 'next/server';

// eslint-disable-next-line import-x/prefer-default-export
export const proxy: NextProxy = async (request) => {
  const { headers, nextUrl } = request;
  const { pathname } = nextUrl;

  if (
    pathname.startsWith('/_next') ||
    ['/favicon.ico', 'robots.txt'].includes(pathname) ||
    pathname === '/api'
  ) {
    return;
  }

  // API ONLY
  if (pathname.startsWith('/api')) {
    const isProtected = !pathname.startsWith('/api/auth');
    const token = await cookieStore.getAsync(constants.COOKIES.TOKEN_NAME);

    if (isProtected) {
      if (!token) {
        return Response.json(
          { status: 401, message: 'You are not logged in! please log in to get access.' },
          { status: 401 },
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

  return null;
};
