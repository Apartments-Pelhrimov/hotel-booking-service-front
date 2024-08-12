import React from 'react';
import { Box } from '@mui/material';

import { PropertyContainer } from '@/components/pages/main-page/PropertyContainer';
import { thirdBlockProperties } from '@/lib/constants/for-components/third-block-properties';
import * as styles from '@/lib/styles/MainPage.styles';

export function PropertiesBlock() {
  return (
    <Box sx={styles.thirdBlock}>
      {thirdBlockProperties.map((property, index) => (
        <PropertyContainer
          key={index}
          icon={property.icon}
          iconTitle={property.title}
          paragraph={property.text}
        />
      ))}
    </Box>
  );
}
