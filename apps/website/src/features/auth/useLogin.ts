import { useMutation } from '@tanstack/react-query';

import { loginApi } from '@/features/auth/auth.api';

export const useLogin = () => useMutation({ mutationFn: loginApi });
