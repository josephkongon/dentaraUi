interface Gender {
  id: number;
  definition: string;
  created_at: string;
  updated_at: string | null;
}

interface IPatients {
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
  gender: Gender;
}
