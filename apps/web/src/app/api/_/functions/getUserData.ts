interface GetUserDataOutput {
  id: number;
}

type GetUserData = (request: Request) => GetUserDataOutput;

const getUserData: GetUserData = (request) => {
  const userId = request.headers.get('user') as string;

  return { id: +userId };
};

export default getUserData;
