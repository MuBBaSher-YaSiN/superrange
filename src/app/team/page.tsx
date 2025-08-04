
import React from 'react';
import { Metadata } from 'next';
import Team from '@/components/team';
import Wrapper from '@/layouts/Wrapper';



export const metadata: Metadata = {
  title: 'Team Car Repair & Auto Services Next js Template',
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};


const index = () => {
  return (
    <Wrapper>
      <Team />
    </Wrapper>
  );
};

export default index;