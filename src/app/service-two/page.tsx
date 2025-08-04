
import React from 'react';
import { Metadata } from 'next';
import Wrapper from '@/layouts/Wrapper';
import ServiceTwo from '@/components/service-two';

export const metadata: Metadata = {
  title: 'Service Two Car Repair & Auto Services Next js Template',
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};



const index = () => {
  return (
    <Wrapper>
      <ServiceTwo />
    </Wrapper>
  );
};

export default index;