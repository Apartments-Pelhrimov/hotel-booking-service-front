import React, { FC } from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

import Avatar from '@/components/common/ui/avatar';
import { User } from '@/types/user';

import * as styles from './ReviewCard.styles';

interface ReviewCardProps {
  text: string;
  rating: number;
  date: string;
  user: User;
}
const ReviewCard: FC<ReviewCardProps> = ({ text, rating, date, user }) => {
  return (
    <Card sx={styles.reviewCard}>
      <CardContent>
        <Box sx={styles.reviewHead}>
          <Box sx={styles.userInfo}>
            <Avatar user={user} />
            <Typography variant="h7ElegantBold" sx={styles.username}>
              {user.firstName} {user.lastName}
            </Typography>
          </Box>
          <Box sx={styles.reviewInfo}>
            <Typography variant="body2" sx={styles.date}>
              {date}
            </Typography>
            <Box sx={styles.rating}>{rating.toString().replace('.', ',')}</Box>
          </Box>
        </Box>
        <Box sx={styles.comment}>
          <Typography variant="body2">{text}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
