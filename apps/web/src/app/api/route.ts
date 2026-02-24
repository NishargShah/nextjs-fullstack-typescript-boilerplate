import constants from '@server/_/constants';
import sendRes from '@server/_/functions/sendRes';

import type { Route } from '@server/_/types';

export const GET: Route = async () =>
  sendRes(undefined, constants.SUCCESS, { message: constants.API_HANDSHAKE });
