import * as React from 'react';
import {FullPageWithColor} from '@/components/FullPageWithColor';
import {AppBar} from '@/components/AppBar';
import {ContactUsForm} from '@/components/ContactUsForm';

const Index: React.FC = () => {
  return (
    <FullPageWithColor>
      <AppBar />

      <ContactUsForm />
    </FullPageWithColor>
  );
};

export default Index;
