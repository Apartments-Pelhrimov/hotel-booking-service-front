import { User } from '@/lib/constants/types/user';

export interface Review {
  user: User;
  createdAt: string;
  rate: number;
  body: string;
}
