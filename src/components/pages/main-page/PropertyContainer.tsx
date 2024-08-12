import React, { ReactElement } from 'react';
import { Box } from '@mui/material';

import * as styles from '@/lib/styles/MainPage.styles';

interface PropertyContainerProps {
  icon: ReactElement;
  iconTitle: string;
  paragraph: string;
}

export function PropertyContainer({
  icon,
  iconTitle,
  paragraph,
}: PropertyContainerProps) {
  const styledIcon = React.cloneElement(icon, {
    sx: { width: '40px', height: '40px', color: 'grey' },
  });
  return (
    <Box sx={styles.propertyContainer}>
      <Box sx={styles.iconContainer}>{styledIcon}</Box>
      <Box sx={styles.iconTitle}>{iconTitle}</Box>
      <Box sx={styles.propertyText}>{paragraph}</Box>
    </Box>
  );
}
