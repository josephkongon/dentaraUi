import { apiClient } from '~/axios/axios.ts';

export const getAllPatient = async () => {
  const res = await apiClient.get<{ data: IPatients[] }>('patients');
  return res.data;
};

export const createPatient = async (payload: any) => {
  const res = await apiClient.post('patients/create', payload);
  return res.data;
};
