import React, { FC } from 'react';

import PageLayout from '@/components/layout/PageLayout';
import { ImageBlock } from '@/components/pages/main-page/ImageBlock';
import { PropertiesBlock } from '@/components/pages/main-page/PropertiesBlock';
import { VitameBlock } from '@/components/pages/main-page/VitameBlock';

const Main: FC = () => {
  return (
    <PageLayout>
      <>
        <ImageBlock />
        <VitameBlock />
        <PropertiesBlock />
      </>
    </PageLayout>
  );
};

export default Main;
