import cookieStore from '@/lib/cookieStore';
import constants from '@server/_/constants';
import sendRes from '@server/_/functions/sendRes';

import type { Route } from '@server/_/types';

export const POST: Route = async () => {
  await cookieStore.deleteAsync(constants.COOKIES.TOKEN_NAME);

  return sendRes(undefined, constants.SUCCESS, {
    message: constants.LOGOUT_MESSAGE,
  });
};
