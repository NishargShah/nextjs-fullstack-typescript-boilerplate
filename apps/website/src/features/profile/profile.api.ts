import api from '@/api';
import catchAsync from '@/api/catchAsync';

import type {
  GetProfileInput,
  GetProfileOutput,
  LogoutInput,
  LogoutOutput,
} from '@/features/profile/profile.type';

export const getProfileApi = catchAsync<GetProfileInput, GetProfileOutput>(async ({ signal }) => {
  const res = await api.getProfile<GetProfileOutput>({ signal });
  return res.data.data;
});

export const logoutApi = catchAsync<LogoutInput, LogoutOutput>(async (data) => {
  const res = await api.logout<LogoutOutput>(data);
  return res.data.data;
});
