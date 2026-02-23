import constants from '@server/_/constants';
import getUserData from '@server/_/functions/getUserData';
import sendError from '@server/_/functions/sendError';
import sendRes from '@server/_/functions/sendRes';
import users, { transformUser } from '@server/_/mock/users';

import type { Route } from '@server/_/types';

export const GET: Route = async (request) => {
  const user = getUserData(request);

  const userData = users.find((cur) => cur.id === user.id);
  if (!userData) return sendError(constants.TECHNICAL_ERROR, constants.SERVER_ERROR);

  const data = transformUser(userData);
  return sendRes(data, constants.SUCCESS, {
    message: constants.PROFILE_RETRIEVED,
  });
};
