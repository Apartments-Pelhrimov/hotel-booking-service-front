import React from 'react';
import { Box, Grid, Link, Stack, Typography } from '@mui/material';
import Image from 'next/image';

import {
  FooterAddress,
  FooterContacts,
  FooterMainLinks,
} from '@/components/common/layout/footer/interfaces';

import * as styles from './Footer.styles';

const Footer = () => {
  return (
    <Box sx={styles.footer}>
      <Box>
        <Image
          src={'/footer-logo.svg'}
          alt="Apartmány Pelhřimov"
          width={174}
          height={43}
        />
      </Box>
      <Box sx={styles.textSection}>
        <Box sx={styles.gridSection}>
          <Typography
            variant="body1Medium"
            color="green.600"
            paddingLeft="12px"
          >
            HLAVNÍ ODKAZY
          </Typography>
          <Grid container direction="column" rowSpacing={0} columnSpacing={1}>
            {FooterMainLinks.map((link, index) => (
              <Grid item xs={4} key={index}>
                <Link sx={styles.link} href={link.href} underline="none">
                  {link.text}
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box sx={styles.section}>
          <Typography
            variant="body1Medium"
            color="green.600"
            paddingLeft="12px"
          >
            PODPORA
          </Typography>
          <Link href="/" underline="none" sx={styles.link}>
            Důvěrnost
          </Link>
        </Box>
        <Box sx={styles.section}>
          <Typography variant="body1Medium" color="green.600">
            KONTAKTY
          </Typography>
          {FooterContacts.map((contact, index) => (
            <Stack flexDirection="row" key={index} sx={styles.iconText}>
              {contact.icon}
              {contact.link && (
                <Link href={contact.link} sx={styles.underlineLink}>
                  {contact.text}
                </Link>
              )}
              {!contact.link && (
                <Typography variant="body1" color="white.main">
                  {contact.text}
                </Typography>
              )}
            </Stack>
          ))}
        </Box>
        <Box sx={styles.section}>
          <Typography variant="body1Medium" color="green.600">
            ADRESA
          </Typography>
          {FooterAddress.map((address, index) =>
            address.link ? (
              <Link key={index} href={address.link} sx={styles.underlineLink}>
                {address.text}
              </Link>
            ) : (
              <Typography key={index} variant="body1" color="white.main">
                {address.text}
              </Typography>
            ),
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
