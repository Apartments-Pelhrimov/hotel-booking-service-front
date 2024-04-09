export interface User {
  firstName: string;
  lastName: string;
  photo?: string;
  role: UserRole;
}

export enum UserRole {
  USER = 'user',
  MANAGER = 'manager',
}
