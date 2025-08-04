
import React from 'react';
import { Metadata } from 'next';
import Wrapper from '@/layouts/Wrapper';
import Service from '@/components/service';

export const metadata: Metadata = {
  title: 'Service Car Repair & Auto Services Next js Template',
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};


const index = () => {
  return (
    <Wrapper>
      <Service />
    </Wrapper>
  );
};

export default index;