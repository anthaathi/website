import * as React from 'react';
import {Section1} from '../containers/Section1';
import {Section2} from '../containers/Section2';
import {Section3} from '../containers/Section3';
import {Section4} from '../containers/Section4';
import {Footer} from '../containers/Footer';

const Index: React.FC = () => {
  return (
    <>
      <Section1 />

      <Section2 />

      <Section3 />

      <Section4 />

      <Footer />
    </>
  );
};

export default Index;
