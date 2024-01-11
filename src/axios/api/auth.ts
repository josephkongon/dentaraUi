import { apiClient } from '~/axios/axios.ts';

export const login = async (payload: { username_or_email: string; password: string }) => {
  const res = await apiClient.post<{
    success: boolean;
    data: { token: string };
    message: string;
  }>('auth/login', payload);
  return res.data;
};
