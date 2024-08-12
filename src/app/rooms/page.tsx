import React, { FC } from 'react';
import { Box } from '@mui/material';

import PageLayout from '@/components/layout/PageLayout';

const Rooms: FC = () => {
  return (
    <PageLayout>
      <Box width="100%" height="100px" mt="70px">
        POKOJE
      </Box>
    </PageLayout>
  );
};

export default Rooms;
