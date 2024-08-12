import React from 'react';
import { Box } from '@mui/material';

import * as styles from '@/lib/styles/MainPage.styles';

export function ImageBlock() {
  return (
    <Box sx={styles.firstBlock}>
      <Box sx={styles.textContainer}>
        <Box component="img" src="/Apartmany.svg" width={280} height={50}></Box>
        <Box component="img" src="/Pelhrimov.svg" width={490} height={80}></Box>
      </Box>
    </Box>
  );
}
