import { Proposition } from '@/lib/constants/for-api/apartments';
import { getBearer } from '@/lib/constants/for-api/utils';

import { client } from '../constants/for-api/client';

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
