import { User } from '@/lib/constants/for-api/user';

export interface Review {
  user: User;
  createdAt: string;
  rate: number;
  body: string;
}

export interface ReviewBody {
  page: number;
  size: number;
  sort: string[];
}
