import React from 'react';
import { Metadata } from 'next';
import Error from '@/components/error';
import Wrapper from '@/layouts/Wrapper';


export const metadata: Metadata = {
  title: 'Error Car Repair & Auto Services Next js Template',
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};


const index = () => {
  return (
    <Wrapper>
      <Error />
    </Wrapper>
  );
};

export default index;