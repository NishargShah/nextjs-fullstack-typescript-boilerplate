import api from '@/api';
import catchAsync from '@/api/catchAsync';

import type { LoginInput, LoginOutput } from '@/features/auth/auth.type';

export const loginApi = catchAsync<LoginInput, LoginOutput>(async (data) => {
  const res = await api.login<LoginOutput>({ data });
  return res.data.data;
});
