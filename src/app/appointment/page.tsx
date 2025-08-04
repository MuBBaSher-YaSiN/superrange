

import React from 'react';
import { Metadata } from 'next'; 
import Wrapper from '@/layouts/Wrapper';
import Appointment from '@/components/appointment';



export const metadata: Metadata = {
  title: 'Appointment Car Repair & Auto Services Next js Template',
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};


const index = () => {
  return (
    <Wrapper>
      <Appointment />
    </Wrapper>
  );
};

export default index;
