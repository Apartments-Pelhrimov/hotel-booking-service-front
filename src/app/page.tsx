import React, { FC } from 'react';
import { Box } from '@mui/material';

import PageLayout from '@/components/common/layout/page-layout/PageLayout';
import * as styles from '@/components/pages/main-page/MainPage.styles';

const Main: FC = () => {
  return (
    <PageLayout>
      <>
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
        <Box sx={styles.secondBlock}>
          <Box sx={styles.secondContentWrapper}>
            <Box sx={styles.imageSection}>
              <Box component="img" src="/apartment-preview.png"></Box>
            </Box>
            <Box sx={styles.textSection}>
              <Box
                component="img"
                src="/Vitame-vas-v-Pelhrimove.svg"
                sx={styles.textSectionTitle}
              ></Box>
              <Box sx={styles.textSectionText}>
                <Box>
                  Apartmány Pelhřimov se nacházejí ve Starém Pelhřimově na
                  hlavním tahu mezi Táborem a Humpolcem, 15km od D1 (130 km od
                  letiště Praha PRG).
                </Box>
                <Box>
                  Hosté mají k dispozici parkování, Wi-Fi připojení, Netflix,
                  chladničku, v apartmánech čajovou kuchyňku a pro samostatné
                  pokoje je jedna společná čajová kuchyňka. Pohodlně se
                  domluvíte česky, anglicky, slovensky.
                </Box>
                <Box>
                  Zároveň mohou hosté zdarma využít komentovanou prohlídku v
                  Malém muzeu Bible (v areálu ubytování).
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </>
    </PageLayout>
  );
};

export default Main;
