interface User {
  id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

const users: User[] = [
  {
    id: 1,
    email: 'nishargshah3101@gmail.com',
    password: 'admin',
    firstName: 'Nisharg',
    lastName: 'Shah',
  },
  {
    id: 2,
    email: 'nisharg.shah@openxcell.com',
    password: 'admin@ox',
    firstName: 'Nisharg',
    lastName: 'OpenXcell',
  },
  {
    id: 3,
    email: 'nshah1@codal.com',
    password: 'admin@codal',
    firstName: 'Nisharg',
    lastName: 'Codal',
  },
  {
    id: 4,
    email: 'admin@example.com',
    password: 'admin',
    firstName: 'Admin',
    lastName: '',
  },
];

type TransformUser = (user: User) => Omit<User, 'password'> & {
  fullName: string;
};

export const transformUser: TransformUser = (user) => ({
  id: user.id,
  email: user.email,
  firstName: user.firstName,
  lastName: user.lastName,
  fullName: `${user.firstName} ${user.lastName}`,
});

export default users;
