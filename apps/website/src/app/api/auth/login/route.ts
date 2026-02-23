import cookieStore from '@/lib/cookieStore';
import constants from '@server/_/constants';
import getBody from '@server/_/functions/getBody';
import sendError from '@server/_/functions/sendError';
import sendRes from '@server/_/functions/sendRes';
import users from '@server/_/mock/users';

import type { Route } from '@server/_/types';

interface LoginRequestDTO {
  email: string;
  password: string;
}

export const POST: Route = async (request) => {
  const body = await getBody<LoginRequestDTO>(request);
  if (!body) return sendError(constants.INVALID_DATA, constants.BAD_REQUEST);

  const user = users.find(
    (cur) => cur.email === body.email.toLowerCase() && cur.password === body.password,
  );

  if (!user) return sendError(constants.INCORRECT_LOGIN, constants.BAD_REQUEST);

  await cookieStore.setAsync(constants.COOKIES.TOKEN_NAME, user.id.toString(), {
    httpOnly: true,
    sameSite: 'strict',
  });

  return sendRes(undefined, constants.SUCCESS, {
    message: constants.LOGIN_MESSAGE,
  });
};
