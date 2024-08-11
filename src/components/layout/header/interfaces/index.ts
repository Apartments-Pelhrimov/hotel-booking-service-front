import React from 'react';

export interface Link {
  text: string;
  href: string;
  icon?: React.ReactNode;
}

export const MainHeaderLinks: Link[] = [
  {
    text: 'DOMOV',
    href: '/',
  },
  {
    text: 'POKOJE',
    href: '/test',
  },
  {
    text: 'O NÁS',
    href: '/test',
  },
  {
    text: 'KONTAKTY',
    href: '/test',
  },
];
