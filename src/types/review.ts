import { User } from '@/types/user';

export interface Review {
  user: User;
  createdAt: string;
  rate: number;
  body: string;
}
