export interface RegisterData {
  firstName: string | undefined;
  lastName: string | undefined;
  phone: string | undefined;
  email: string | undefined;
  password: string | undefined;
}

export interface LoginData {
  username: string | undefined;
  password: string | undefined;
}

export interface LoginResponse {
  token: string;
}
