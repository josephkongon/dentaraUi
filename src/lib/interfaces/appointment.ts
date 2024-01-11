export interface User {
  id: number;
  user_type_id: number;
  role_id: number;
  gender_id: number;
  firstname: string;
  lastname: string;
  email: string;
  username: string;
  phone_no: string;
  date_of_birth: string;
  email_verified_at: string | null;
  created_at: string;
  updated_at: string | null;
  deleted_at: string | null;
}

export interface Patient {
  id: number;
  firstname: string;
  lastname: string;
  phone_no: string;
  date_of_birth: string;
  address: string;
  gender_id: number;
  created_by: number;
  updated_by: number | null;
  deleted_by: number | null;
  created_at: string;
  updated_at: string | null;
  deleted_at: string | null;
}

export interface AppointmentType {
  id: number;
  title: string;
  description: string;
  price: number;
  created_at: string;
  updated_at: string | null;
}

export interface AppointmentStatus {
  id: number;
  definition: string;
  created_at: string;
  updated_at: string | null;
}

export interface IAppointment {
  id: number;
  appointment_date: string;
  patient_id: number;
  assigned_user_id: number;
  appointment_status_id: number;
  payment_method_id: number | null;
  payment_status_id: number;
  appointment_type_id: number;
  discount_id: number | null;
  comment: string;
  price: number;
  real_price: number;
  created_by: User;
  updated_by: User | null;
  deleted_by: User | null;
  created_at: string;
  updated_at: string | null;
  deleted_at: string | null;
  assigned_user: User;
  patient: Patient;
  appointment_type: AppointmentType;
  treatments: any[]; // You might want to specify a more detailed type for treatments
  appointment_status: AppointmentStatus;
}
