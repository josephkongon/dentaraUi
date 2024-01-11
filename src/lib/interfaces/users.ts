interface Gender {
  id: number;
  definition: string;
  created_at: string;
  updated_at: string | null;
}

interface Role {
  id: number;
  definition: string;
  created_at: string;
  updated_at: string | null;
}

interface UserType {
  id: number;
  definition: string;
  created_at: string;
  updated_at: string | null;
}

interface ISystemUser {
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
  created_by: number | null;
  updated_by: number | null;
  deleted_by: number | null;
  gender: Gender;
  role: Role;
  user_type: UserType;
}
