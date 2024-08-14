import { User } from '@/lib/constants/for-api/user';
import { getBearer } from '@/lib/constants/for-api/utils';

import { client } from '../constants/for-api/client';

class UserAPI {
  async getUser() {
    const { data } = await client.get<User>('/users/me', getBearer());
    return data;
  }
}

export default new UserAPI();
