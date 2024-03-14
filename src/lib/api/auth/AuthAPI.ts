import { client } from '../client';

export interface RegisterData {
  firstName: string | undefined;
  lastName: string | undefined;
  phone: string | undefined;
  email: string | undefined;
  password: string | undefined;
}

const createBasicAuthHeader = (email: string, password: string) => {
  return {
    headers: {
      Authorization: 'Basic ' + btoa(email + ':' + password),
    },
  };
};

class AuthAPI {
  async register(body: RegisterData) {
    const { data } = await client.post<string>('/auth/register', body);
    return data;
  }

  async activate(code: string) {
    const { data } = await client.post<string>(
      `/auth/activate?code=${code}`,
      {},
    );
    return data;
  }

  async login(email: string, password: string) {
    const authHeader = createBasicAuthHeader(email, password);
    const { data } = await client.post<string>('/auth/register', authHeader);
    return data;
  }
}

export default new AuthAPI();
