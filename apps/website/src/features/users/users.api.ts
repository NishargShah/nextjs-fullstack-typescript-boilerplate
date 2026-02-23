import api from '@/api';
import catchAsync from '@/api/catchAsync';

import type { GetAllUsersInput, GetAllUsersOutput } from '@/features/users/users.type';

export const getAllUsersApi = catchAsync<GetAllUsersInput, GetAllUsersOutput>(
  async ({ signal }) => {
    const res = await api.getAllUsers<GetAllUsersOutput>({ signal });
    return res.data.data;
  },
);
