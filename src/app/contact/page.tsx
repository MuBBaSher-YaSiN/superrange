import React from 'react';
import { Metadata } from 'next';
import Wrapper from '@/layouts/Wrapper';
import Contact from '@/components/contact';

export const metadata: Metadata = {
  title: 'Contact Car Repair & Auto Services Next js Template',
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};


const index = () => {
  return (
    <Wrapper>
      <Contact />
    </Wrapper>
  );
};

export default index;