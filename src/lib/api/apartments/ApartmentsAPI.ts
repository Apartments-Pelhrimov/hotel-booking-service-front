import { Proposition } from '@/lib/api/apartments/types';
import { getBearer } from '@/lib/api/utils';

import { client } from '../client';

class ApartmentsAPI {
  async getPropositions() {
    const { data } = await client.get<Proposition[]>(
      '/apartments/propositions',
      getBearer(),
    );
    return data;
  }
}

export default new ApartmentsAPI();
