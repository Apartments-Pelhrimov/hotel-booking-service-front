import React, { FC } from 'react';
import { UserGroupIcon } from '@heroicons/react/24/outline';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';

import Button from '@/components/common/ui/buttons/button';
import { ButtonSize } from '@/components/common/ui/buttons/interfaces';
import getPeopleEnding from '@/components/common/ui/cards/apartment-card/utils/getPeopleEnding';

import * as styles from './ApartmentCard.styles';
interface ApartmentCardProps {
  image?: string;
  text: string;
  beds: number;
  price: number;
  onClick?: () => void;
}

const ApartmentCard: FC<ApartmentCardProps> = ({
  image,
  text,
  beds,
  price,
  onClick = () => {},
}) => {
  return (
    <Card sx={styles.card}>
      <CardMedia component="img" image={image} />
      <CardContent>
        <Box sx={styles.title}>
          <Typography variant="h7ElegantBold">{text}</Typography>
        </Box>
        <Box sx={styles.people}>
          <UserGroupIcon />
          <Typography variant="body2">{`${beds} ${getPeopleEnding(
            beds,
          )}`}</Typography>
        </Box>
        <Box sx={styles.reservation}>
          <Box sx={styles.price}>
            <Typography variant="h2Elegant" sx={styles.sum}>
              {price}
            </Typography>
            <Typography variant="body1">Kč /noc</Typography>
          </Box>
          <Button text="Rezervace" size={ButtonSize.SMALL} onClick={onClick} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default ApartmentCard;
