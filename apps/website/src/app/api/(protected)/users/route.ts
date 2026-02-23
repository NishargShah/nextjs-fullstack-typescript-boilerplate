import constants from '@server/_/constants';
import sendRes from '@server/_/functions/sendRes';
import users, { transformUser } from '@server/_/mock/users';

import type { Route } from '@server/_/types';

export const GET: Route = async () =>
  sendRes(
    users.map((cur) => transformUser(cur)),
    constants.SUCCESS,
    {
      message: constants.USERS_RETRIEVED,
    },
  );
