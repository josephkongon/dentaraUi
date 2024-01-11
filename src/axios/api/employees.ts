import { apiClient } from '~/axios/axios.ts';

export const getAllUsers = async () => {
  const res = await apiClient.get<{ data: ISystemUser[] }>('users');
  return res.data;
};

export const createUser = async (payload: any) => {
  const res = await apiClient.post('users/create', payload);
  return res.data;
};
