
import React from 'react';
import { Metadata } from 'next';
import Wrapper from '@/layouts/Wrapper';
import About from '@/components/about';

export const metadata: Metadata = {
  title: 'About Car Repair & Auto Services Next js Template',
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};



const index = () => {
  return (
    <Wrapper>
      <About />
    </Wrapper>
  );
};

export default index;