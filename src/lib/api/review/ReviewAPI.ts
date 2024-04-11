import { ReviewBody } from '@/lib/api/review/types';
import { getBearer } from '@/lib/api/utils';
import { Review } from '@/types/review';

import { client } from '../client';

class ReviewAPI {
  async getLatest({ page, size, sort }: ReviewBody) {
    const { data } = await client.get<Review[]>(
      `/reviews/latest?page=${page}&size=${size}&sort=${sort}`,
      getBearer(),
    );
    return data;
  }
}

export default new ReviewAPI();
