'use client';
import React, { FC, ReactElement } from 'react';

import Footer from '@/components/common/layout/footer/Footer';
import Header from '@/components/common/layout/header';

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
