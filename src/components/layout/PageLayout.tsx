'use client';
import React, { FC, ReactElement } from 'react';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

interface PageLayoutProps {
  children?: ReactElement;
}

const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default PageLayout;
