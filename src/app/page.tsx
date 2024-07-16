import React, { FC } from 'react';
import { Box } from '@mui/material';

import PageLayout from '@/components/common/layout/page-layout/PageLayout';
import * as styles from '@/components/pages/main-page/MainPage.styles';

const Main: FC = () => {
  return (
    <>
      <PageLayout>
        <Box sx={styles.firstBlock}>
          <Box sx={styles.textContainer}>
            <Box
              component="img"
              src="/Apartmany.svg"
              width={280}
              height={50}
            ></Box>
            <Box
              component="img"
              src="/Pelhrimov.svg"
              width={490}
              height={80}
            ></Box>
          </Box>
        </Box>
      </PageLayout>
    </>
  );
};

export default Main;
