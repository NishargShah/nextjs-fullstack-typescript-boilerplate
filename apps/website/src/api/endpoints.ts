import type { Endpoints } from '@/types/axios.type';

const endpoints = {
  login: {
    method: 'POST',
    url: '/auth/login',
    manageToast: (res) => !!res.message,
  },
  getProfile: {
    method: 'GET',
    url: '/user/profile/me',
  },
  logout: {
    method: 'POST',
    url: '/user/profile/logout',
  },
  getAllUsers: {
    method: 'GET',
    url: '/users',
  },
} satisfies Endpoints;

export default endpoints;
