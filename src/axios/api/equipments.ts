import { apiClient } from '~/axios/axios.ts';
import { IEquipment } from '~/lib/interfaces/equipment.ts';

export const getAllEquipments = async () => {
  const res = await apiClient.get<{ data: IEquipment[] }>('equipments');
  return res.data;
};

export const createEquipment = async (payload: any) => {
  const res = await apiClient.post('equipments/create', payload);
  return res.data;
};
export const deleteEquipment = async (id: string) => {
  const res = await apiClient.delete(`equipments/delete/${id}`);
  return res.data;
};
