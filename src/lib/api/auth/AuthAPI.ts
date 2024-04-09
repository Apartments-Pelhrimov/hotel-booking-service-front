import { LoginData, LoginResponse, RegisterData } from '@/lib/api/auth/types';
import StorageUtil from '@/lib/utils/StorageUtil';

import { client } from '../client';

class AuthAPI {
  async register(body: RegisterData) {
    const { data } = await client.post<string>('/auth/register', body);
    return data;
  }

  async activate(token: string) {
    const { data } = await client.post<string>('/auth/activate', { token });
    return data;
  }

  async login(body: LoginData) {
    const { data } = await client.post<LoginResponse>('/auth/login', body);
    StorageUtil.setToken(data.token);
    return data;
  }
}

export default new AuthAPI();
