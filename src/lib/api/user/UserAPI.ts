import { getBearer } from '@/lib/api/utils';
import { User } from '@/types/user';

import { client } from '../client';

class UserAPI {
  async getUser() {
    const { data } = await client.get<User>('/users/me', getBearer());
    return data;
  }
}

export default new UserAPI();
