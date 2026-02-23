import type { NextRequest } from 'next/server';

const getBody = async <T>(request: NextRequest): Promise<T | null> => {
  try {
    return (await request.json()) as T;
  } catch {
    return null;
  }
};

export default getBody;
