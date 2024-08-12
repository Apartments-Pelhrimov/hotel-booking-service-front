import React, { FC } from 'react';
import { Box } from '@mui/material';

import PageLayout from '@/components/layout/PageLayout';

const About: FC = () => {
  return (
    <PageLayout>
      <Box width="100%" height="100px" mt="70px">
        ABOUT
      </Box>
    </PageLayout>
  );
};

export default About;
