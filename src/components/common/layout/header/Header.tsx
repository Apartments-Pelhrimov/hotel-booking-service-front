'use client';

import React from 'react';
import { AppBar, Box, Link, Toolbar } from '@mui/material';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { mainHeaderLinks } from '@/components/common/layout/header/interfaces';
import {
  ButtonSize,
  ButtonVariant,
} from '@/components/common/ui/buttons/interfaces';

import Button from '../../ui/buttons/button';

import * as styles from './Header.styles';

const Header = () => {
  const path = usePathname() as string;

  return (
    <AppBar sx={styles.header}>
      <Toolbar sx={styles.toolbar} disableGutters>
        <Link href="/">
          <Image
            src={'/logo.svg'}
            alt="Apartmány Pelhřimov"
            width={132}
            height={33}
          />
        </Link>
        <Toolbar sx={styles.linkList}>
          {mainHeaderLinks.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              underline="none"
              sx={styles.link(path, link.href)}
            >
              {link.text}
            </Link>
          ))}
        </Toolbar>
        <Box>
          <Button
            size={ButtonSize.SMALL}
            variant={ButtonVariant.OUTLINE}
            text="PŘIHLÁŠENÍ"
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
