const paths = {
  INDEX: '/',
  ABOUT: '/about',
  LOGIN: '/login',
  APP: {
    INDEX: '/app',
    LOGOUT: '/app/logout',
    USERS: '/app/users',
  },
} as const;

export default paths;
