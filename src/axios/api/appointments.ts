import { apiClient } from '~/axios/axios.ts';
import { IAppointment } from '~/lib/interfaces/appointment.ts';

export const getAllAppointments = async () => {
  const res = await apiClient.get<{ data: IAppointment[] }>('appointments');
  return res.data;
};

export const createAppointments = async () => {
  const res = await apiClient.post('appointments');
  return res.data;
};
export const deleteAppointments = async (id: string) => {
  const res = await apiClient.delete(`/appointments/delete/${id}`);
  return res.data;
};
