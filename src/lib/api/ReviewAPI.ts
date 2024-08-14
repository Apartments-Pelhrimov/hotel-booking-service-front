import { Review, ReviewBody } from '@/lib/constants/for-api/review';
import { getBearer } from '@/lib/constants/for-api/utils';

import { client } from '../constants/for-api/client';

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
