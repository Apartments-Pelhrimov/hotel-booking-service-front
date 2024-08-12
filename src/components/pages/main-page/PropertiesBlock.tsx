import React from 'react';
import {
  DirectionsCarOutlined,
  SpaOutlined,
  VolunteerActivismOutlined,
  WifiOutlined,
} from '@mui/icons-material';
import { Box } from '@mui/material';

import { PropertyContainer } from '@/components/pages/main-page/PropertyContainer';
import * as styles from '@/lib/styles/MainPage.styles';

export function PropertiesBlock() {
  return (
    <Box sx={styles.thirdBlock}>
      <PropertyContainer
        icon={<WifiOutlined />}
        iconTitle="Wi-Fi"
        paragraph="IV každém pokoji máme dostatečné pokrytí wifi signálem s kvalitním internetovým připojením."
      />
      <PropertyContainer
        icon={<SpaOutlined />}
        iconTitle="Koupelna"
        paragraph="Samostatná koupelna je samozřejmostí u našich menších pokojů i větších apartmánů."
      />
      <PropertyContainer
        icon={<DirectionsCarOutlined />}
        iconTitle="Parkování"
        paragraph="Parkovat lze pohodlně i s větším autem přímo před Apartmány. Parkování je bezplatné."
      />
      <PropertyContainer
        icon={<VolunteerActivismOutlined />}
        iconTitle="Základní vybavení"
        paragraph="V každém pokoji se nachází příslušenství pro přípravu kávy a čaje, lednice, TV, fén a povlečení."
      />
    </Box>
  );
}
