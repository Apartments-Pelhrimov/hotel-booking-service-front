import { Box } from '@mui/material';

import * as styles from '@/components/pages/main-page/MainPage.styles';

export function PropertiesBlock() {
  return (
    <Box sx={styles.thirdBlock}>
      <Box sx={styles.propertyContainer}>
        IV každém pokoji máme dostatečné pokrytí wifi signálem s kvalitním
        internetovým připojením.
      </Box>
    </Box>
  );
}
