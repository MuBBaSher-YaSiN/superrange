
import React from 'react';
import { Metadata } from 'next';
import Wrapper from '@/layouts/Wrapper';
import ServicesSingle from '@/components/services-single';

export const metadata: Metadata = {
  title: 'Blog Car Repair & Auto Services Next js Template',
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};


const index = () => {
  return (
    <Wrapper>
      <ServicesSingle />
    </Wrapper>
  );
};

export default index;